import { useState } from "react";
import { Calendar, Tag, CheckCircle, XCircle, Search } from "lucide-react";

const primaryColor = "#FB923C";
const accentPurple = "#823588";

export default function IPMATChecker() {
  const [formData, setFormData] = useState({
    dob: "",
    category: "",
    tenthYear: "",
    tenthMarks: "",
    twelfthYear: "",
    twelfthMarks: "",
    mathStats: "",
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const next = { ...prev, [name]: value };

      return next;
    });
  };

  const checkEligibility = (e) => {
    e.preventDefault();

    const birthDate = new Date(formData.dob);
    const tenthYear = parseInt(formData.tenthYear, 10);
    const tenthMarks = parseFloat(formData.tenthMarks);
    const twelfthYear = parseInt(formData.twelfthYear, 10);
    const twelfthMarks = parseFloat(formData.twelfthMarks);
    const mathStats = formData.mathStats; // "yes" | "no"

    const isValidDate = (d) => d instanceof Date && !Number.isNaN(d.getTime());

    const dobOnOrAfter = (cutoffISO) => {
      const cutoff = new Date(cutoffISO);
      if (!isValidDate(birthDate) || !isValidDate(cutoff)) return false;
      return birthDate.getTime() >= cutoff.getTime();
    };

    const colleges = [
      {
        name: "IIM Indore (IPM)",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: null,
        minTwelfthMarks: null,
        tenthYearMin: null,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Ranchi (IPM)",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: null,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Rohtak (IPM)",
        dobOnOrAfterISO: "2006-06-30", // ✅ June 30, 2006 (not Aug 1)
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: null,
        twelfthYearMin: null, // ✅ No 12th year requirement in SS
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Jammu (IPM)",
        dobOnOrAfterISO: null, // ✅ No DOB shown in SS
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: 2021, // ✅ 2021 (not 2022)
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Bodh Gaya (IPM)",
        dobOnOrAfterISO: null, // ✅ No DOB shown in SS
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: 2023,
        twelfthYearMin: 2025,
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Amritsar (IPM)",
        dobOnOrAfterISO: "2006-08-01", // ✅ Aug 1 (not July 1)
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: null,
        twelfthYearMin: null,
        twelfthYearAllowed: [2025, 2026],
        requireMathStats: true, // ✅ Stats/Math in 11/12th
      },
      {
        name: "IIFT Kakinada (IPM)",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: 2022,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: true, // ✅ Stats/Math in 11/12th
      },
      {
        name: "IIM Sirmaur (IPM)",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: 60, // ✅ 10th: 60%+ shown in SS
        minTwelfthMarks: 60, // ✅ 12th: 60%+ shown in SS
        tenthYearMin: null,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: false,
      },
      {
        name: "IIM Shillong (IPM)",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: 60,
        minTwelfthMarks: 60,
        tenthYearMin: null,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: true, // ✅ Stats/Math in 11/12th
      },
      {
        name: "IIM Bangalore UG",
        dobOnOrAfterISO: "2006-08-01",
        minTenthMarks: 60, // ✅ 10th Math: 60%+
        minTwelfthMarks: null,
        tenthYearMin: null,
        twelfthYearMin: 2024,
        twelfthYearAllowed: null,
        requireMathStats: true, // ✅ Math in 12th (mandatory)
      },
    ];

    const eligibilityResults = colleges.map((college) => {
      let eligible = true;
      const reasons = [];

      // DOB rule (Born on or after...)
      if (college.dobOnOrAfterISO) {
        if (!dobOnOrAfter(college.dobOnOrAfterISO)) {
          eligible = false;
          reasons.push(
            `DOB must be on/after ${new Date(
              college.dobOnOrAfterISO,
            ).toLocaleDateString("en-IN")}`,
          );
        }
      }

      // 10th passing year rule (where applicable)
      if (college.tenthYearMin != null) {
        if (Number.isNaN(tenthYear) || tenthYear < college.tenthYearMin) {
          eligible = false;
          reasons.push(
            `10th passing year must be ${college.tenthYearMin} or later`,
          );
        }
      }

      // 12th passing year rule (where applicable)
      if (college.twelfthYearMin != null) {
        if (Number.isNaN(twelfthYear) || twelfthYear < college.twelfthYearMin) {
          eligible = false;
          reasons.push(
            `12th passing year must be ${college.twelfthYearMin} or later`,
          );
        }
      }
      if (college.twelfthYearAllowed) {
        if (!college.twelfthYearAllowed.includes(twelfthYear)) {
          eligible = false;
          reasons.push(
            `12th passing year must be ${college.twelfthYearAllowed.join(
              " or ",
            )}`,
          );
        }
      }

      // 10th % rule (where applicable)
      if (college.minTenthMarks != null) {
        if (Number.isNaN(tenthMarks) || tenthMarks < college.minTenthMarks) {
          eligible = false;
          reasons.push(`Minimum 10th marks: ${college.minTenthMarks}%`);
        }
      }

      // 12th % rule (where applicable; if appearing in 2026, we can't validate marks now)
      if (college.minTwelfthMarks != null) {
        if (twelfthYear === 2026) {
          reasons.push(
            "12th: Appearing in 2026 (eligibility subject to meeting % criteria)",
          );
        } else if (
          Number.isNaN(twelfthMarks) ||
          twelfthMarks < college.minTwelfthMarks
        ) {
          eligible = false;
          reasons.push(`Minimum 12th marks: ${college.minTwelfthMarks}%`);
        }
      } else if (twelfthYear === 2026) {
        reasons.push("12th: Appearing in 2026");
      }

      // Math/Stats requirement in 11th/12th
      if (college.requireMathStats) {
        if (mathStats !== "yes") {
          eligible = false;
          reasons.push("Mathematics/Statistics required in 11th/12th");
        }
      }

      if (eligible) {
        reasons.push("Congratulations! You meet all eligibility criteria");
      }

      return { name: college.name, eligible, reasons };
    });

    setResults(eligibilityResults);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <div className="text-white py-4 px-4 relative overflow-hidden">
        <div className="mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-6">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              IPMAT 2026 Eligibility Checker
            </span>
          </h1>
          <p className="text-sm opacity-90">
            Check your eligibility for IPM programs at various IIMs
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-800">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: primaryColor }}
          >
            Eligibility for IPMAT 2026
          </h2>
          <p className="text-slate-400 mb-8">
            Fill in your details to check eligibility as per the latest criteria
            table (IIM Indore, Ranchi, Rohtak, Jammu, Bodh Gaya, Amritsar, IIFT
            Kakinada, Sirmaur, Shillong & IIM Bangalore).
          </p>

          <form onSubmit={checkEligibility} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 flex items-center gap-2 text-slate-200">
                  <Calendar
                    className="w-5 h-5"
                    style={{ color: primaryColor }}
                  />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors"
                  style={{
                    focusBorderColor: primaryColor,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 flex items-center gap-2 text-slate-200">
                  <Tag className="w-5 h-5" style={{ color: primaryColor }} />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="obc">OBC-NCL</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                  <option value="ews">EWS</option>
                  <option value="pwd">PwD</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-200">
                  10th Passing Year
                </label>
                <select
                  name="tenthYear"
                  value={formData.tenthYear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                >
                  <option value="">Select Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-200">
                  10th Board Marks (%)
                </label>
                <input
                  type="number"
                  name="tenthMarks"
                  value={formData.tenthMarks}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-200">
                  12th Passing Year
                </label>
                <select
                  name="twelfthYear"
                  value={formData.twelfthYear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors"
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026 (Appearing)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-slate-200">
                  12th Board Marks (%)
                </label>
                <input
                  type="number"
                  name="twelfthMarks"
                  value={formData.twelfthMarks}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="0.01"
                  required={formData.twelfthYear !== "2026"}
                  disabled={formData.twelfthYear === "2026"}
                  className={`w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg text-white focus:outline-none transition-colors ${
                    formData.twelfthYear === "2026"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onFocus={(e) => (e.target.style.borderColor = primaryColor)}
                  onBlur={(e) => (e.target.style.borderColor = "#334155")}
                />
              </div>
            </div>

            <div
              className="p-6 rounded-xl border-l-4"
              style={{
                backgroundColor: "rgba(130, 53, 136, 0.1)",
                borderLeftColor: primaryColor,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: primaryColor }}
              >
                Did you have Mathematics/Statistics in 11th/12th?
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                  <input
                    type="radio"
                    name="mathStats"
                    value="yes"
                    checked={formData.mathStats === "yes"}
                    onChange={handleChange}
                    required
                    className="w-5 h-5"
                    style={{ accentColor: primaryColor }}
                  />
                  <span className="font-semibold">Yes, I had Math/Stats</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-200">
                  <input
                    type="radio"
                    name="mathStats"
                    value="no"
                    checked={formData.mathStats === "no"}
                    onChange={handleChange}
                    required
                    className="w-5 h-5"
                    style={{ accentColor: primaryColor }}
                  />
                  <span className="font-semibold">
                    No, I didn't have Math/Stats
                  </span>
                </label>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3 mx-auto"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, #f97316 100%)`,
                }}
              >
                <Search className="w-6 h-6" />
                Check Eligibility
              </button>
            </div>
          </form>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-slate-900 rounded-2xl shadow-2xl p-8 border-2 border-slate-800 mt-8">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: primaryColor }}
            >
              Your Eligibility Results
            </h2>
            <div className="space-y-4">
              {results.map((college, idx) => (
                <div
                  key={idx}
                  className={`border-2 rounded-xl p-6 transition-all hover:shadow-xl ${
                    college.eligible
                      ? "border-green-500/50 bg-green-950/20"
                      : "border-red-500/50 bg-red-950/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: primaryColor }}
                    >
                      {college.name}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 ${
                        college.eligible
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {college.eligible ? (
                        <>
                          <CheckCircle className="w-5 h-5" /> Eligible
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5" /> Not Eligible
                        </>
                      )}
                    </span>
                  </div>
                  {college.reasons.length > 0 && (
                    <div className="text-slate-300 text-sm">
                      <strong className="text-slate-200">Details:</strong>{" "}
                      {college.reasons.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
