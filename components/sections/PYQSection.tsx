import React, { useState } from "react";
import { Download, ChevronRight, FileText, BookOpen, Star } from "lucide-react";

export default function Component() {
  // PYQ Topic Wise
  const topicWiseMaterials = [
    {
      id: "1",
      title: "PYQ Quantitative Ability",
      driveLink:
        "https://drive.google.com/file/d/15yQXr-LgjmIVukMUvvbqk1RRAo4sJKnL/view",
      description:
        "Topic-wise previous year questions for structured practice.",
      featured: true,
    },
    {
      id: "2",
      title: "PYQ Verbal Ability",
      driveLink:
        "https://drive.google.com/file/d/1aQY6qKMzllw8G1CPn2XtMOyRYBzN3d1S/view",
      description:
        "Topic-wise previous year questions for structured practice.",
      featured: true,
    },
  ];

  // PYQ Year Wise
const yearWiseMaterials = [
    {
      id: "9",
      title: "IPMAT Indore 2025 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1JCQbS8q3e0p2JJsW8LffHL2suVreEKHx/view?usp=drive_link",
      description:
        "Official IPMAT 2025 question paper with complete solutions.",
      year: 2025,
    },
    {
      id: "8",
      title: "IPMAT Indore 2024 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1H5Ko838ZCz9G-r67d49DIFXY-LBsNMII/view?usp=drive_link",
      description:
        "Official IPMAT 2024 question paper with complete solutions.",
      year: 2024,
    },
    {
      id: "7",
      title: "IPMAT Indore 2023 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1dUzy2leDhE2o78tuEzo8tMklXsf_carM/view?usp=drive_link",
      description:
        "Official IPMAT 2023 question paper with complete solutions.",
      year: 2023,
    },
    {
      id: "6",
      title: "IPMAT Indore 2022 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1p_SqawBzffvKQms3WM6_AwfLnviyR3aP/view?usp=drive_link",
      description:
        "Official IPMAT 2022 question paper with complete solutions.",
      year: 2022,
    },
    {
      id: "5",
      title: "IPMAT 2021 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1MdpQ4jtVXw7z17YZ8ud7lBFi3nv5nWkm/view?usp=drive_link",
      description:
        "Official IPMAT 2021 question paper with complete solutions.",
      year: 2021,
    },
    {
      id: "4",
      title: "IPMAT 2020 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1M6F7Rv6uSxbKHOvi1C7iUk4gOMzuVJ83/view?usp=drive_link",
      description:
        "Official IPMAT 2020 question paper with complete solutions.",
      year: 2020,
    },
    {
      id: "3",
      title: "IPMAT 2019 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1Kisfz-ySlL_sI5srNxWfYjtV8oSg8MLp/view?usp=drive_link",
      description:
        "Official IPMAT 2019 question paper with complete solutions.",
      year: 2019,
    },
  ];

  // JIPMAT Materials
  const JIPMATMaterials = [
    {
      id: "10",
      title: "JIPMAT 2025 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1mMpgpYqMAeb0ajZxE-I99WoB-2KA60U0/view?usp=drive_link",
      description:
        "Official JIPMAT 2025 question paper with complete solutions.",
      year: 2025,
    },
    {
      id: "12",
      title: "JIPMAT 2024 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1yMGMfYps3pndvwZDnDEhHJKdwgXGD43V/view?usp=drive_link",
      description:
        "Official JIPMAT 2024 question paper with complete solutions.",
      year: 2024,
    },
    {
      id: "13",
      title: "JIPMAT 2023 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1zPNAOQ9SbbPjxE5rXKDPjmatDujqL9Uh/view?usp=drive_link",
      description:
        "Official JIPMAT 2023 question paper with complete solutions.",
      year: 2023,
    },
    {
      id: "14",
      title: "JIPMAT 2022 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1yntZNVajUGzVX9brc115cZ0UY2ZQ2fF5/view?usp=drive_link",
      description:
        "Official JIPMAT 2022 question paper with complete solutions.",
      year: 2022,
    },
    {
      id: "15",
      title: "JIPMAT 2021 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1b3FCh5UMgToZuu5KwqvSU75lglWWcNSg/view?usp=drive_link",
      description:
        "Official JIPMAT 2021 question paper with complete solutions.",
      year: 2021,
    },
  ];

  // IIM B UG Materials
  const iimBUGMaterials = [
    {
      id: "16",
      title: "IIM Bangalore",
      driveLink:
        "https://drive.google.com/file/d/1mMpgpYqMAeb0ajZxE-I99WoB-2KA60U0/view?usp=drive_link",
      description:
        "Official IIM Bangalore 2025 question paper with complete solutions.",
      year: 2025,
    },
  ];
  // IIM Rohtak Materials
  const iimRohtakMaterials = [
    {
      id: "17",
      title: "IPMAT Rohtak 2023 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1ICB--ojki_dwpZp5NNQ4mld7l-nzf_wT/view?usp=drive_link",
      description:
        "Official IIM Rohtak 2023 question paper with complete solutions.",
      year: 2023,
    },
    {
      id: "18",
      title: "IPMAT Rohtak 2022 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1ICB--ojki_dwpZp5NNQ4mld7l-nzf_wT/view?usp=drive_link",
      description:
        "Official IIM Rohtak 2022 question paper with complete solutions.",
      year: 2022,
    },
    {
      id: "19",
      title: "IPMAT Rohtak 2021 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1565zacUMeowmGqIT9YRyVI7yjIAjRM3J/view?usp=drive_link",
      description:
        "Official IIM Rohtak 2021 question paper with complete solutions.",
      year: 2021,
    },
    {
      id: "20",
      title: "IPMAT Rohtak 2020 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/172E4DH1NFwUbPYCA_ThLe2XAdwvsiSRr/view?usp=drive_link",
      description:
        "Official IIM Rohtak 2020 question paper with complete solutions.",
      year: 2020,
    },
    {
      id: "21",
      title: "IPMAT Rohtak 2019 Question Paper",
      driveLink:
        "https://drive.google.com/file/d/1zxQ6_74e588TdWlpPFy1YUb1S0xvChR6/view?usp=drive_link",
      description:
        "Official IIM Rohtak 2019 question paper with complete solutions.",
      year: 2019,
    },
  ];
    const iimkBMSMaterials = [
    {
      id: "16",
      title: "IIM Kozhikode",
      driveLink:
        "https://drive.google.com/file/d/1bXCtsJWA5-DAHj_0cDV8EorNYJI706XT/view?usp=drive_link",
      description:
        "Official IIM Kozhikode 2025 question paper with complete solutions.",
      year: 2025,
    },
  ];

  // Exam tabs
  const examTabs = [
    { id: "ipmat_indore", label: "IPMAT Indore" },
    { id: "ipmat_rohtak", label: "IPMAT Rohtak" },
    { id: "jipmat", label: "JIPMAT" },
    { id: "iim_b_ug", label: "IIM B UG" },
    { id: "iim_k_bms", label: "IIM K BMS" }
  ];

  const [activeExamTab, setActiveExamTab] = useState("ipmat_indore");

  const openDriveLink = (driveLink) => {
    window.open(driveLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Exam Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4">
          {examTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveExamTab(tab.id)}
              className={`relative text-sm font-semibold transition-colors whitespace-nowrap ${
                activeExamTab === tab.id
                  ? "text-[#f9a01b] border-b-2 border-[#f9a01b]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeExamTab === "ipmat_indore" ? (
          <>
            {/* PYQ Topic Wise Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#823588]" />
                PYQ – Topic Wise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicWiseMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                        <FileText className="w-6 h-6" />
                      </div>
                      {material.featured && (
                        <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-2 py-1 rounded flex items-center gap-1">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {material.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      {material.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download
                      </button>
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PYQ Year Wise Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#823588]" />
                PYQ – Year Wise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearWiseMaterials.map((material) => (
                  <div
                    key={material.id}
                    className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        UG Exam
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {material.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6">
                      {material.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download
                      </button>
                      <button
                        onClick={() => openDriveLink(material.driveLink)}
                        className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : activeExamTab === "iim_b_ug" ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#823588]" />
              IIM B UG Question Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {iimBUGMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      UG Exam
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {material.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {material.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeExamTab === "jipmat" ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#823588]" />
              JIPMAT Question Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {JIPMATMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      UG Exam
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {material.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {material.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ): activeExamTab === "ipmat_rohtak" ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#823588]" />
              IPMAT Rohtak Question Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {iimRohtakMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      UG Exam
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {material.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {material.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ):  activeExamTab === "iim_k_bms" ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#823588]" />
              IIM Kozhikode Question Papers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {iimkBMSMaterials.map((material) => (
                <div
                  key={material.id}
                  className="group p-6 rounded-3xl bg-slate-900/50 border border-slate-800/50 hover:border-[#823588] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#823588]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      UG Exam
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {material.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {material.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f9a01b] hover:bg-[#e08e15] text-slate-900 text-sm font-bold py-3 rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" /> Download
                    </button>
                    <button
                      onClick={() => openDriveLink(material.driveLink)}
                      className="w-12 h-12 flex items-center justify-center border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-slate-400">
              PYQ materials for this exam will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
