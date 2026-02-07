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
  cutoff: number;
  SA?: number;
  MCQ?: number;
  VA?: number;
};

type DataOtherYears = {
  category: string;
  cutoff: number;
};

const yearlyData = {
  2025: [
    { category: "General", cutoff: 381 },
    { category: "EWS", cutoff: 331 },
    { category: "NC-OBC", cutoff: 297 },
    { category: "SC", cutoff: 230 },
    { category: "ST", cutoff: 138 },
  ] as DataOtherYears[],
  2024: [
    { category: "General", cutoff: 301 },
    { category: "EWS", cutoff: 264 },
    { category: "NC-OBC", cutoff: 225 },
    { category: "SC", cutoff: 167 },
    { category: "ST", cutoff: 118 },
  ] as DataOtherYears[],
  2023: [
    { category: "General", cutoff: 409 },
    { category: "EWS", cutoff: 376 },
    { category: "NC-OBC", cutoff: 349 },
    { category: "SC", cutoff: 274 },
    { category: "ST", cutoff: 201 },
  ] as DataOtherYears[],
  2022: [
    { category: "General", cutoff: 306 },
    { category: "EWS", cutoff: 261 },
    { category: "NC-OBC", cutoff: 219 },
    { category: "SC", cutoff: 154 },
    { category: "ST", cutoff: 66 },
  ] as DataOtherYears[],
  2021: [
    { category: "General", cutoff: 256 },
    { category: "EWS", cutoff: 205 },
    { category: "NC-OBC", cutoff: 195 },
    { category: "SC", cutoff: 157 },
    { category: "ST", cutoff: 141 },
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

interface IIMRohtakCutoffProps {
  selectedYear?: number;
}

const IIMRohtakCutoff = ({
  selectedYear: propYear,
}: IIMRohtakCutoffProps = {}) => {
  const selectedYear = propYear ?? 2025;
  const currentData = yearlyData[selectedYear as keyof typeof yearlyData];

  const CustomTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 p-3 rounded-lg shadow-lg border-2 border-orange-500">
          <p className="font-semibold mb-1 text-orange-400">
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-orange-400 px-2">
            IIM Rohtak IPM Cutoff Data
          </h1>
          <p className="text-slate-400 text-sm md:text-lg">
            Comprehensive Analysis of Admission Statistics
          </p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-slate-900/40 rounded-xl md:rounded-2xl shadow-xl p-3 md:p-6 mb-6 md:mb-8 border-t-4 border-orange-500">
          <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
            Cutoff Trends - {selectedYear}
          </h2>
            <ResponsiveContainer
              width="100%"
              height={300}
              className="md:hidden"
            >
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
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: `2px solid ${primaryColor}`,
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: primaryColor, fontWeight: "bold" }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "10px", fontSize: "10px" }}
                  iconType="circle"
                  iconSize={8}
                />
                <Bar
                  dataKey="cutoff"
                  name="Cutoff"
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
                    value: "Cutoff Marks",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: primaryColor },
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: `2px solid ${primaryColor}`,
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: primaryColor, fontWeight: "bold" }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="circle"
                />
                <Bar
                  dataKey="cutoff"
                  name="Minimum Cutoff"
                  fill={primaryColor}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          <div className="mt-4 flex justify-center text-xs md:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <span>Overall Cutoff Marks by Category</span>
            </div>
          </div>
        </div>

        {/* Cutoff Table */}
        <div className="bg-slate-900/40 rounded-xl md:rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500">
          <div className="p-4 md:p-6 border-b border-slate-800 bg-slate-900/60">
            <h2 className="text-lg md:text-2xl font-bold text-orange-400">
              IIM Rohtak IPM {selectedYear} Cutoff Details
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="px-3 md:px-6 py-3 md:py-4 text-left text-white font-semibold">
                    Category
                  </th>
                  <th className="px-3 md:px-6 py-3 md:py-4 text-center text-white font-semibold">
                    Min. Cutoff
                  </th>
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
                    <td className="px-3 md:px-6 py-3 md:py-4 text-center">
                      <span className="inline-block px-2 md:px-3 py-1 rounded-full font-bold text-black text-xs md:text-sm bg-orange-400">
                        {row.cutoff}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-slate-900/40 rounded-xl border-l-4 border-orange-500">
          <p className="text-xs md:text-sm text-slate-300">
            <span className="font-semibold text-orange-400">Note:</span> The
            cutoff marks are subject to final verification. All figures are
            based on official IIM Rohtak data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IIMRohtakCutoff;