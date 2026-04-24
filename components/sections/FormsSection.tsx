import React, { useState } from "react";
import { FORMS_DATA } from "../../constants";
import { Calendar, ExternalLink, AlertCircle, Bell, X, Mail } from "lucide-react";
import { getFormStatus, isFormExpired } from "@/utils/formutils";

// ── Notification Modal (Email only) ────────────────────────────────────────
interface NotifyModalProps {
  examName: string;
  lastDate: string;
  onClose: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ examName, lastDate, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const handleSave = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg({ text: "Please enter a valid email address.", ok: false });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/exam-notify-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, examName, lastDate }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg({ text: "✓ Subscribed! You'll get reminders before the deadline.", ok: true });
        setTimeout(onClose, 2200);
      } else {
        setMsg({ text: data.error || "Something went wrong.", ok: false });
      }
    } catch {
      setMsg({ text: "Network error. Please try again.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(5px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-6"
        style={{
          background: "#0d1117",
          border: "1px solid #1e2533",
          animation: "slideUp 0.22s ease",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white transition-colors"
          style={{ background: "#1e2533" }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Bell icon accent */}
        <div
          className="w-11 h-11 flex items-center justify-center rounded-2xl mb-4"
          style={{ background: "rgba(249,160,27,0.12)", border: "1px solid rgba(249,160,27,0.25)" }}
        >
          <Bell className="w-5 h-5 text-[#f9a01b]" />
        </div>

        {/* Header */}
        <h2 className="text-lg font-bold text-slate-100 mb-1 pr-8">
          Get Deadline Reminders
        </h2>
        <p className="text-[#f9a01b] font-semibold text-sm mb-1">{examName}</p>
        <p className="text-slate-500 text-sm mb-5">
          We'll email you at 7 days, 3 days, 1 day, and on the deadline day.
        </p>

        {/* Reminder chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["7 days before", "3 days before", "1 day before", "On deadline"].map((chip) => (
            <span
              key={chip}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(249,160,27,0.08)",
                border: "1px solid rgba(249,160,27,0.2)",
                color: "#f9a01b",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Email field */}
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
          Your Email Address
        </label>
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setMsg(null); }}
            onKeyDown={(e) => { if (e.key === "Enter") handleSave(); }}
            placeholder="yourname@gmail.com"
            autoComplete="email"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors"
            style={{
              background: "#070a10",
              border: "1px solid #1e2533",
              fontFamily: "inherit",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#f9a01b")}
            onBlur={(e) => (e.target.style.borderColor = "#1e2533")}
          />
        </div>

        {/* Note */}
        <div
          className="flex items-start gap-2 px-3 py-2 rounded-xl mb-4 text-sm"
          style={{ background: "rgba(249,160,27,0.06)", border: "1px solid rgba(249,160,27,0.15)" }}
        >
          <AlertCircle className="w-4 h-4 text-[#f9a01b] flex-shrink-0 mt-0.5" />
          <p className="text-slate-400 text-xs">
            <span className="text-[#f9a01b] font-semibold">Last date:</span>{" "}
            <span className="text-slate-200 font-semibold">{lastDate}</span>.{" "}
            You'll receive email reminders well in advance.
          </p>
        </div>

        {/* Feedback */}
        {msg && (
          <p className={`text-sm text-center mb-3 ${msg.ok ? "text-green-400" : "text-red-400"}`}>
            {msg.text}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-200 transition-colors"
            style={{ border: "1px solid #1e2533" }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-[2] py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: "#f9a01b", color: "#0a0c14" }}
          >
            {loading ? "Saving…" : "Notify Me ✓"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// ── FormsSection ────────────────────────────────────────────────────────────
export const FormsSection: React.FC = () => {
  const [modal, setModal] = useState<{ examName: string; lastDate: string } | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FORMS_DATA.map((form, i) => {
          const isExpired = isFormExpired(form.endDate);
          const currentStatus = getFormStatus(form.endDate, form.status);
          const isFormOpen = currentStatus === "Open" && !isExpired;
          const isFormPreApply = currentStatus === "Pre-Apply" && !isExpired;

          return (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Green dot — top-left */}
              {isFormOpen && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </div>
              )}

              {/* Yellow dot — top-left */}
              {isFormPreApply && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
                  </span>
                </div>
              )}

              {/* Bell — top-right, only for non-expired */}
              {!isExpired && (
                <button
                  onClick={() => setModal({ examName: form.name, lastDate: form.endDate })}
                  title="Get deadline reminders"
                  className="absolute top-5 right-7 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95"
                  style={{
                    background: "rgba(249,160,27,0.10)",
                    border: "1px solid rgba(249,160,27,0.28)",
                  }}
                >
                  <Bell className="w-4 h-4 text-[#f9a01b]" />
                </button>
              )}

              <h3 className="text-2xl font-bold mb-6">{form.name}</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4" /> Exam Accepted
                  </span>
                  <span className="text-slate-200 font-bold">{form.examName}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4" /> Last Date
                  </span>
                  <span className={`font-bold ${isExpired ? "text-slate-500 line-through" : "text-red-400"}`}>
                    {form.endDate}
                  </span>
                </div>
              </div>

              {/* Bottom section */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-black uppercase tracking-tighter px-3 py-1 rounded-full ${
                      isFormOpen
                        ? "bg-green-500/10 text-green-400"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {isExpired && form.status === "Open" ? "Closed" : currentStatus}
                  </span>

                  {!form.links && form.link && (
                    <button
                      disabled={!isFormOpen && !isFormPreApply}
                      onClick={() => window.open(form.link, "_blank")}
                      className="flex items-center gap-2 text-sm font-bold text-[#f9a01b] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Official Website <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {form.links && (
                  <div className="grid grid-cols-2 gap-2">
                    {form.links.map((courseLink, idx) => (
                      <button
                        key={idx}
                        disabled={!isFormOpen && !isFormPreApply}
                        onClick={() => window.open(courseLink.url, "_blank")}
                        className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#f9a01b] border border-[#f9a01b]/30 hover:bg-[#f9a01b]/10 rounded-xl px-3 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {courseLink.label} <ExternalLink className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {modal && (
        <NotifyModal
          examName={modal.examName}
          lastDate={modal.lastDate}
          onClose={() => setModal(null)}
        />
      )}

      <div className="p-6 rounded-2xl border border-orange-500/20 text-center">
        <p className="text-[#f9a01b] text-sm font-medium">
          Want personalized deadline alerts?{" "}
          <button className="underline font-bold ml-1">Connect your calendar</button>
        </p>
      </div>
    </div>
  );
};