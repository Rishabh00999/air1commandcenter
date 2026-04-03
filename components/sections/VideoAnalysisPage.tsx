import { useState, useRef, useEffect } from "react";
import { Play, X, ChevronDown, Ratio } from "lucide-react";

const CONTENT = {
  "Quantitative Aptitude": {
    subcategories: {
      Strategy: [
        {
          id: "eyf981KeOA8", // YouTube video ID extracted from URL
          title: "Quantitative Ability Strategy - Part 1",
          url: "https://youtu.be/eyf981KeOA8",
          description: "Strategic approach to mastering Quantitative Ability",
        },
        {
          id: "Q7lS5zdaOKM",
          title: "Quantitative Ability Strategy - Part 2",
          url: "https://youtu.be/Q7lS5zdaOKM",
          description: "Advanced strategies for Quantitative Ability",
        },
      ],
      "Quadratic Equation": [
        {
          id: "3dvDC38kukA",
          title: "Quadratic Equations Masterclass",
          url: "https://youtu.be/3dvDC38kukA",
          description:
            "Deep dive into quadratic equations concepts and problems",
        },
      ],
      "Profit and Loss": [
        {
          id: "L5wwxLYwQSM",
          title: "Profit and Loss - Part 1",
          url: "https://youtu.be/L5wwxLYwQSM",
          description:
            "Learn the core logic of CP and SP to master Profit and Loss basics instantly.",
        },
        {
          id: "QXd5fFZ9mSA",
          title: "Profit and Loss - Part 2",
          url: "https://youtu.be/QXd5fFZ9mSA",
          description:
            "Crush complex Profit and Loss problems using these advanced discount and markup shortcuts.",
        },
      ],
      Percentages: [
        {
          id: "rDtbng57be8",
          title: "Percentages - Part 1",
          url: "https://youtu.be/rDtbng57be8",
          description: "Additional practice for QA",
        },
        {
          id: "2-BGoksUymk",
          title: "Percentages - Part 2",
          url: "https://youtu.be/2-BGoksUymk",
          description: "Supplementary QA problems",
        },
      ],
      Progressions: [
        {
          id: "c1VKEiSGLcU",
          title: "Progression - Part 1",
          url: "https://youtu.be/c1VKEiSGLcU",
          description: "Progressions — Basics.",
        },
        {
          id: "qWqGVkiNG60",
          title: "Progression - Part 2",
          url: "https://youtu.be/qWqGVkiNG60",
          description: "Progressions — AP",
        },
        {
          id: "4aywiBJqxZs",
          title: "Progression - Part 3",
          url: "https://youtu.be/4aywiBJqxZs",
          description: "Progressions — GP",
        },
        {
          id: "SCtG6ALDjuI",
          title: "Progression - Part 4",
          url: "https://youtu.be/SCtG6ALDjuI",
          description: "Progressions — HP",
        },
        {
          id: "2HDvjo5E9gM",
          title: "Progression - Part 5",
          url: "https://youtu.be/2HDvjo5E9gM",
          description: "Progressions — Sum",
        },
        {
          id: "sU4VBKg4glM",
          title: "Progression - Part 6",
          url: "https://youtu.be/sU4VBKg4glM",
          description: "Progressions — AGP",
        },
        {
          id: "Qs0JMVky7lQ",
          title: "Progression - Part 7",
          url: "https://youtu.be/Qs0JMVky7lQ",
          description: "Progressions — Special Series",
        },
      ],
      "Time & Work": [
        {
          id: "jSUgGY07RQA",
          title: "Time & Work - Part 1",
          url: "https://youtu.be/jSUgGY07RQA",
          description:
            "Time & Work Basics: The LCM method secret that replaces long calculations",
        },
        {
          id: "73V09UuGQtw",
          title: "Time & Work - Part 2",
          url: "https://youtu.be/73V09UuGQtw",
          description:
            "Work and Wages: How to divide money fairly based on individual efficiency",
        },
        {
          id: "_tHLu9uSRmw",
          title: "Time & Work - Part 3",
          url: "https://youtu.be/_tHLu9uSRmw",
          description:
            "The MDH Formula Explained: Solving 'Men, Days, and Hours' problems in seconds",
        },
        {
          id: "u7T-NwfOR5Y",
          title: "Time & Work - Part 4",
          url: "https://youtu.be/u7T-NwfOR5Y",
          description:
            "Advanced Time & Work: Mastering negative work and complex group dynamics",
        },
      ],
      Logarithm: [
        {
          id: "vaPRVii_w-g",
          title: "Logarithm - Part 1",
          url: "https://youtu.be/vaPRVii_w-g",
          description:
            "Decoding Logarithms: How to easily switch between exponential and log forms.",
        },
        {
          id: "EZW76uwJvLc",
          title: "Logarithm - Part 2",
          url: "https://youtu.be/EZW76uwJvLc",
          description:
            "Mastering the Golden Rules: Product, Quotient, and Power laws explained.",
        },
        {
          id: "j9OrMR556-s",
          title: "Logarithm - Part 3",
          url: "https://youtu.be/j9OrMR556-s",
          description:
            "Advanced Log Hacks: Solving complex equations and the Change of Base formula.",
        },
      ],
      Inequality: [
        {
          id: "yE7kiQhcLAk",
          title: "Inequality - Part 1",
          url: "https://youtu.be/yE7kiQhcLAk",
          description:
            "Mastering the Signs: How to solve basic linear inequalities without making the 'negative' mistake.",
        },
        {
          id: "ixq-Ydo8Zg8",
          title: "Inequality - Part 2",
          url: "https://youtu.be/ixq-Ydo8Zg8",
          description:
            "Double Trouble: Solving Compound and Absolute Value inequalities like a pro.",
        },
        {
          id: "HIsrMDdffk4",
          title: "Inequality - Part 3",
          url: "https://youtu.be/HIsrMDdffk4",
          description:
            "Visualizing Math: A complete guide to graphing inequalities on number lines.",
        },
        {
          id: "Ire-nyn_mXg",
          title: "Inequality - Part 4",
          url: "https://youtu.be/Ire-nyn_mXg",
          description: "Modulus",
        },
        {
          id: "5z3ejhCIEG0",
          title: "Inequality - Part 5",
          url: "https://youtu.be/5z3ejhCIEG0",
          description: "Maxima and Minima",
        },
      ],
      Averages: [
        {
          id: "fIQ5vUiplMI",
          title: "Averages, Mixtures and Alligations - Part 1",
          url: "https://youtu.be/fIQ5vUiplMI",
          description:
            "Average Essentials: Shortcuts for consecutive numbers and 'entry/exit' word problems.",
        },
        {
          id: "UYOcqA4K5Xw",
          title: "Averages, Mixtures and Alligations - Part 2",
          url: "https://youtu.be/UYOcqA4K5Xw",
          description:
            "Replacement and Removal: How to calculate new concentrations when liquids are swapped.",
        },
        {
          id: "E6lsINXnfhU",
          title: "Averages, Mixtures and Alligations - Part 3",
          url: "https://youtu.be/E6lsINXnfhU",
          description:
            "Alligation Mastery: Applying the cross-method to Profit & Loss, Interest, and Speed.",
        },
      ],
      Ratio: [
        {
          id: "Ov_v0cu9Fmc",
          title: "Ratio, Proportion and Variation - Part 1",
          url: "https://youtu.be/Ov_v0cu9Fmc",
          description: "Ratio - Concepts",
        },
        {
          id: "EO5sj8x6o4Q",
          title: "Ratio, Proportion and Variation - Part 2",
          url: "https://youtu.be/EO5sj8x6o4Q",
          description: "Ratio - Practice",
        },
        {
          id: "-XXvRe6Rhwc",
          title: "Ratio, Proportion and Variation - Part 3",
          url: "https://youtu.be/-XXvRe6Rhwc",
          description: "Proportion - Concepts",
        },
      ],
    },
  },

  "Verbal Ability": {
    videos: [
      {
        id: "wXakzp9DQYo",
        title: "Verbal Ability Strategy",
        url: "https://www.youtube.com/watch?v=wXakzp9DQYo",
        description: "Strategic approach to mastering Verbal Ability",
      },
      {
        id: "CDEWTaMInUA",
        title: "Verbal Ability Practice",
        url: "https://www.youtube.com/watch?v=CDEWTaMInUA",
        description: "In-depth practice session for Verbal Ability",
      },
    ],
  },

  "Logical Reasoning": {
    videos: [
      {
        id: "OHoZwH4XD28",
        title: "Logical Reasoning Strategy",
        url: "https://youtu.be/OHoZwH4XD28",
        description: "Strategic approach to mastering Logical Reasoning",
      },
      {
        id: "AmKrUqMT5Y4",
        title: "Logical Reasoning Practice - Part 1",
        url: "https://youtu.be/AmKrUqMT5Y4",
        description: "In-depth practice session for Logical Reasoning",
      },
      {
        id: "-ncFrTLpDdI",
        title: "Logical Reasoning Practice - Part 2",
        url: "https://youtu.be/-ncFrTLpDdI",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "1HErDrnDcDg",
        title: "Logical Reasoning Practice - Part 3",
        url: "https://youtu.be/1HErDrnDcDg",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "TXlAEJeOw_M",
        title: "Logical Reasoning Practice - Part 4",
        url: "https://youtu.be/TXlAEJeOw_M",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "YbfJdS15R2k",
        title: "Logical Reasoning Practice - Part 5",
        url: "https://youtu.be/YbfJdS15R2k",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "KdgWjMNuOb8",
        title: "Logical Reasoning Practice - Part 6",
        url: "https://youtu.be/KdgWjMNuOb8",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "0y6FExnmmSo",
        title: "Logical Reasoning Practice - Part 7",
        url: "https://youtu.be/0y6FExnmmSo",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "0RH1Rca8GlM",
        title: "Logical Reasoning Practice - Part 8",
        url: "https://youtu.be/0RH1Rca8GlM",
        description: "Logical Reasoning concepts and practice",
      },
      {
        id: "J66BMKToX0c",
        title: "Logical Reasoning Practice - Part 9",
        url: "https://youtu.be/J66BMKToX0c",
        description: "Logical Reasoning concepts and practice",
      },
    ],
  },
};
// ============================================================

const extractVideoId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const FALLBACK_THUMB =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23823588" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="white"%3EVideo%3C/text%3E%3C/svg%3E';

export default function Component() {
  const categories = Object.keys(CONTENT);

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [activeSubTab, setActiveSubTab] = useState(() => {
    const first = CONTENT[categories[0]];
    return first.subcategories ? Object.keys(first.subcategories)[0] : null;
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentCategoryData = CONTENT[activeTab];
  const hasSubcategories = !!currentCategoryData.subcategories;
  const subcategoryNames = hasSubcategories
    ? Object.keys(currentCategoryData.subcategories)
    : [];

  const filteredVideos = hasSubcategories
    ? (currentCategoryData.subcategories[activeSubTab] ?? [])
    : (currentCategoryData.videos ?? []);

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setDropdownOpen(false);
    const data = CONTENT[cat];
    setActiveSubTab(
      data.subcategories ? Object.keys(data.subcategories)[0] : null,
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-2">
            Master Your <span className="text-purple-400">Preparation</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Access comprehensive video analysis sessions to boost your
            preparation
          </p>
        </div>

        {/* Category tabs — auto-generated from CONTENT keys */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategory dropdown — only shown when category has subcategories */}
        {hasSubcategories && (
          <div className="flex justify-center mb-8 ">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800 border border-gray-600 text-white text-sm font-semibold hover:border-yellow-500 hover:bg-gray-700 transition-all duration-200 shadow-md min-w-[220px] justify-between"
              >
                <span>{activeSubTab}</span>
                <ChevronDown
                  className={`w-4 h-4 text-yellow-400 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-2xl shadow-black/40 z-20 overflow-hidden overflow-y-auto max-h-60">
                  {subcategoryNames.map((sub, idx) => (
                    <button
                      key={sub}
                      onClick={() => {
                        setActiveSubTab(sub);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-2.5 text-sm font-medium transition-all duration-150
                        ${idx !== subcategoryNames.length - 1 ? "border-b border-gray-700" : ""}
                        ${
                          activeSubTab === sub
                            ? "bg-yellow-500 text-gray-900"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => {
            const videoId = extractVideoId(video.url);
            const thumbnailUrl = videoId
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : FALLBACK_THUMB;

            return (
              <div
                key={video.id}
                className="relative group rounded-xl border-2 border-gray-700 bg-gray-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 overflow-hidden"
                style={{
                  animationDelay: `${index * 40}ms`,
                  animation: "fadeIn 0.5s ease-out forwards",
                }}
              >
                <div
                  className="relative aspect-video overflow-hidden bg-gray-900 cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_THUMB;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play
                        className="w-8 h-8 text-purple-900 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-gray-800 mb-4">
              <Play className="w-16 h-16 text-purple-400" />
            </div>
            <p className="text-xl font-semibold text-white mb-2">
              No videos available
            </p>
            <p className="text-gray-400">Check back soon for new sessions</p>
          </div>
        )}
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-gray-900/90 hover:bg-gray-700 text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">
                {selectedVideo.title}
              </h2>
              {selectedVideo.description && (
                <p className="text-sm text-gray-400 mt-1">
                  {selectedVideo.description}
                </p>
              )}
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${extractVideoId(selectedVideo.url)}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
