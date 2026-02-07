import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const primaryColor = "#FB923C";
const accentPurple = "#823588";

type Data2025 = {
  category: string;
  qaSa: number;
  qaMcq: number;
  verbal: number;
  female: number;
  male: number;
  total: number;
};

type DataOtherYears = {
  category: string;
  qaSa: number;
  qaMcq: number;
  verbal: number;
  overallCutoff: number;
};

const yearlyData = {
  2025: [
    {
      category: "EWS",
      qaSa: 16,
      qaMcq: 18,
      verbal: 87,
      female: 13,
      male: 62,
      total: 75,
    },
    {
      category: "General",
      qaSa: 24,
      qaMcq: 28,
      verbal: 112,
      female: 78,
      male: 223,
      total: 301,
    },
    {
      category: "NC-OBC",
      qaSa: 12,
      qaMcq: 15,
      verbal: 78,
      female: 77,
      male: 168,
      total: 245,
    },
    {
      category: "PwD",
      qaSa: 8,
      qaMcq: 5,
      verbal: 47,
      female: 13,
      male: 20,
      total: 33,
    },
    {
      category: "SC",
      qaSa: 12,
      qaMcq: 10,
      verbal: 65,
      female: 47,
      male: 66,
      total: 113,
    },
    {
      category: "ST",
      qaSa: 8,
      qaMcq: 6,
      verbal: 48,
      female: 12,
      male: 39,
      total: 51,
    },
  ] as Data2025[],
  2024: [
    {
      category: "General",
      qaSa: 24,
      qaMcq: 35,
      verbal: 113,
      overallCutoff: 172,
    },
    { category: "EWS", qaSa: 16, qaMcq: 26, verbal: 89, overallCutoff: 131 },
    { category: "NC-OBC", qaSa: 12, qaMcq: 23, verbal: 78, overallCutoff: 113 },
    { category: "SC", qaSa: 12, qaMcq: 18, verbal: 60, overallCutoff: 90 },
    { category: "ST", qaSa: 8, qaMcq: 13, verbal: 40, overallCutoff: 61 },
    { category: "PwD", qaSa: 8, qaMcq: 13, verbal: 40, overallCutoff: 61 },
  ] as DataOtherYears[],
  2023: [
    {
      category: "General",
      qaSa: 12,
      qaMcq: 39,
      verbal: 125,
      overallCutoff: 176,
    },
    { category: "EWS", qaSa: 4, qaMcq: 26, verbal: 98, overallCutoff: 128 },
    { category: "NC-OBC", qaSa: 4, qaMcq: 23, verbal: 91, overallCutoff: 118 },
    { category: "SC", qaSa: 4, qaMcq: 15, verbal: 69, overallCutoff: 88 },
    { category: "ST", qaSa: 4, qaMcq: 5, verbal: 43, overallCutoff: 52 },
    { category: "PwD", qaSa: 4, qaMcq: 5, verbal: 43, overallCutoff: 52 },
  ] as DataOtherYears[],
  2022: [
    {
      category: "General",
      qaSa: 20,
      qaMcq: 43,
      verbal: 112,
      overallCutoff: 175,
    },
    { category: "EWS", qaSa: 8, qaMcq: 29, verbal: 86, overallCutoff: 123 },
    { category: "NC-OBC", qaSa: 8, qaMcq: 21, verbal: 70, overallCutoff: 99 },
    { category: "SC", qaSa: 4, qaMcq: 14, verbal: 50, overallCutoff: 80 },
    { category: "ST", qaSa: 4, qaMcq: 8, verbal: 34, overallCutoff: 50 },
    { category: "PwD", qaSa: 4, qaMcq: 8, verbal: 34, overallCutoff: 46 },
  ] as DataOtherYears[],
  2021: [
    {
      category: "General",
      qaSa: 16,
      qaMcq: 21,
      verbal: 70,
      overallCutoff: 150,
    },
    { category: "EWS", qaSa: 8, qaMcq: 11, verbal: 51, overallCutoff: 100 },
    { category: "NC-OBC", qaSa: 8, qaMcq: 9, verbal: 44, overallCutoff: 90 },
    { category: "SC", qaSa: 4, qaMcq: 4, verbal: 31, overallCutoff: 70 },
    { category: "ST", qaSa: 4, qaMcq: 1, verbal: 25, overallCutoff: 50 },
    { category: "PwD", qaSa: 4, qaMcq: 2, verbal: 25, overallCutoff: 46 },
  ] as DataOtherYears[],
  2020: [
    {
      category: "General",
      qaSa: 20,
      qaMcq: 26,
      verbal: 68,
      overallCutoff: 125,
    },
    { category: "EWS", qaSa: 12, qaMcq: 13, verbal: 43, overallCutoff: 70 },
    { category: "NC-OBC", qaSa: 12, qaMcq: 13, verbal: 43, overallCutoff: 70 },
    { category: "SC", qaSa: 8, qaMcq: 7, verbal: 28, overallCutoff: 51 },
    { category: "ST", qaSa: 4, qaMcq: 4, verbal: 20, overallCutoff: 25 },
    { category: "PwD", qaSa: 4, qaMcq: 1, verbal: 15, overallCutoff: 24 },
  ] as DataOtherYears[],
  2019: [
    {
      category: "General",
      qaSa: 20,
      qaMcq: 31,
      verbal: 71,
      overallCutoff: 125,
    },
    { category: "EWS", qaSa: 8, qaMcq: 18, verbal: 40, overallCutoff: 66 },
    { category: "NC-OBC", qaSa: 8, qaMcq: 18, verbal: 40, overallCutoff: 66 },
    { category: "SC", qaSa: 4, qaMcq: 10, verbal: 32, overallCutoff: 46 },
    { category: "ST", qaSa: 4, qaMcq: 6, verbal: 14, overallCutoff: 24 },
    { category: "PwD", qaSa: 4, qaMcq: 6, verbal: 14, overallCutoff: 24 },
  ] as DataOtherYears[],
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    payload: { category: string };
  }>;
}

interface IIMIndoreCutoffProps {
  selectedYear?: number;
}

const IIMIndoreCutoff = ({
  selectedYear: propYear,
}: IIMIndoreCutoffProps = {}) => {
  const selectedYear = propYear ?? 2025;
  const currentData = yearlyData[selectedYear as keyof typeof yearlyData];

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 p-3 rounded-lg shadow-lg border-2 border-orange-500">
          <p className="font-semibold mb-1 text-[#f9a01b]">
            {payload[0].payload.category}
          </p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-3 md:p-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#f9a01b] px-2">
            IIM Indore IPM Cutoff Data
          </h1>
          <p className="text-slate-400 text-sm md:text-lg">
            Historical Cutoff Analysis & Trends
          </p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-slate-900/40 rounded-xl md:rounded-2xl shadow-xl p-3 md:p-6 mb-6 md:mb-8 border-t-4 border-orange-500">
          <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-[#f9a01b]">
            Sectional Cutoff Distribution - {selectedYear}
          </h2>
          <ResponsiveContainer width="100%" height={300} className="md:hidden">
            <BarChart
              data={currentData}
              margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="category"
                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 600 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 10 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: "10px", fontSize: "10px" }}
                iconType="circle"
                iconSize={8}
              />
              <Bar
                dataKey="qaSa"
                name="QA (SA)"
                fill={accentPurple}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="qaMcq"
                name="QA (MCQ)"
                fill="#48C9B0"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="verbal"
                name="Verbal"
                fill={primaryColor}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer
            width="100%"
            height={400}
            className="hidden md:block"
          >
            <BarChart
              data={currentData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="category"
                tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
              />
              <YAxis
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                label={{
                  value: "Marks",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: primaryColor },
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
              <Bar
                dataKey="qaSa"
                name="QA (SA)"
                fill={accentPurple}
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="qaMcq"
                name="QA (MCQ)"
                fill="#48C9B0"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="verbal"
                name="Verbal Ability"
                fill={primaryColor}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          {/* <div className="mt-4 flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 md:justify-center text-xs md:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: accentPurple }}></div>
              <span>QA (SA): Quantitative Ability - Short Answer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#48C9B0' }}></div>
              <span>QA (MCQ): Quantitative Ability - Multiple Choice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: primaryColor }}></div>
              <span>VA: Verbal Ability</span>
            </div>
          </div> */}
        </div>

        {/* Cutoff Table */}
        <div className="bg-slate-900/40 rounded-xl md:rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
          <div className="p-4 md:p-6 border-b border-slate-800 bg-slate-900/60">
            <h2 className="text-lg md:text-2xl font-bold text-[#f9a01b]">
              IIM Indore IPM {selectedYear} Cutoff Details
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-white font-semibold">
                    Category
                  </th>
                  <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                    QA (SA)
                  </th>
                  <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                    QA (MCQ)
                  </th>
                  <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                    Verbal
                  </th>
                  {selectedYear === 2025 ? (
                    <>
                      <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                        Female
                      </th>
                      <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                        Male
                      </th>
                      <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                        Total
                      </th>
                    </>
                  ) : (
                    <th className="px-2 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                      Overall
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`border-b border-slate-800 transition-colors ${
                      index % 2 === 0 ? "bg-slate-900/20" : "bg-slate-900/40"
                    } hover:bg-slate-800/50`}
                  >
                    <td className="px-3 md:px-6 py-3 md:py-4 font-semibold text-slate-200">
                      {row.category}
                    </td>
                    <td className="px-2 md:px-6 py-3 md:py-4 text-center text-slate-300">
                      {row.qaSa}
                    </td>
                    <td className="px-2 md:px-6 py-3 md:py-4 text-center text-slate-300">
                      {row.qaMcq}
                    </td>
                    <td className="px-2 md:px-6 py-3 md:py-4 text-center text-slate-300">
                      {row.verbal}
                    </td>
                    {selectedYear === 2025 ? (
                      <>
                        <td className="px-2 md:px-6 py-3 md:py-4 text-center text-slate-300">
                          {(row as Data2025).female}
                        </td>
                        <td className="px-2 md:px-6 py-3 md:py-4 text-center text-slate-300">
                          {(row as Data2025).male}
                        </td>
                        <td className="px-2 md:px-6 py-3 md:py-4 text-center">
                          <span className="font-bold text-base md:text-lg text-[#f9a01b]">
                            {(row as Data2025).total}
                          </span>
                        </td>
                      </>
                    ) : (
                      <td className="px-2 md:px-6 py-3 md:py-4 text-center">
                        <span className="inline-block px-2 md:px-3 py-1 rounded-full font-bold text-black text-xs md:text-sm bg-orange-400">
                          {(row as DataOtherYears).overallCutoff}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-slate-900/40 rounded-xl border-l-4 border-orange-500">
          <p className="text-xs md:text-sm text-slate-300">
            <span className="font-semibold text-[#f9a01b]">Note:</span> All
            cutoff marks are based on official IIM Indore data.
            {selectedYear >= 2020 &&
              selectedYear <= 2022 &&
              ' Overall cutoff values marked with "~" are approximate.'}
            {selectedYear === 2019 &&
              " The 2019 data shows General category cutoff range of approximately 125-130."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IIMIndoreCutoff;
