import React from "react";
import { FORMS_DATA } from "../../constants";
import { Calendar, ExternalLink, AlertCircle } from "lucide-react";
import { getFormStatus, isFormExpired } from "@/utils/formutils";

export const FormsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FORMS_DATA.map((form, i) => {
          // Check if form is expired and update status accordingly
          const isExpired = isFormExpired(form.endDate);
          const currentStatus = getFormStatus(form.endDate, form.status);
          const isFormOpen = currentStatus === "Open" && !isExpired;

          return (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
            >
              {isFormOpen && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-6">{form.name}</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <Calendar className="w-4 h-4" /> Exam Accepted
                  </span>
                  <span className="text-slate-200 font-bold">
                    {form.examName}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4" /> Last Date
                  </span>
                  <span className={`font-bold ${isExpired ? 'text-slate-500 line-through' : 'text-red-400'}`}>
                    {form.endDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <span
                  className={`text-xs font-black uppercase tracking-tighter px-3 py-1 rounded-full ${
                    isFormOpen
                      ? "bg-green-500/10 text-green-400"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {isExpired && form.status === "Open" ? "Closed" : currentStatus}
                </span>
                <button
                  disabled={!isFormOpen}
                  onClick={() => window.open(form.link, "_blank")}
                  className="flex items-center gap-2 text-sm font-bold text-[#f9a01b] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Official Website <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl border border-orange-500/20 text-center">
        <p className="text-[#f9a01b] text-sm font-medium">
          Want personalized deadline alerts?{" "}
          <button className="underline font-bold ml-1">
            Connect your calendar
          </button>
        </p>
      </div>
    </div>
  );
};