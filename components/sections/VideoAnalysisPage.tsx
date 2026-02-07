import { useState } from "react";
import { Play, X } from "lucide-react";

export default function Component() {
  const videos = [
    {
      id: 7,
      title: "Quantitative Ability Strategy - Part 1",
      url: "https://youtu.be/eyf981KeOA8",
      description: "Strategic approach to mastering Quantitative Ability",
      category: "Quantitative Aptitude",
      subcategory: "Strategy",
    },
    {
      id: 8,
      title: "Quantitative Ability Strategy - Part 2",
      url: "https://youtu.be/Q7lS5zdaOKM",
      description: "Advanced strategies for Quantitative Ability",
      category: "Quantitative Aptitude",
      subcategory: "Strategy",
    },
    {
      id: 9,
      title: "Quadratic Equations Masterclass",
      url: "https://youtu.be/3dvDC38kukA",
      description: "Deep dive into quadratic equations concepts and problems",
      category: "Quantitative Aptitude",
      subcategory: "Quadratic Equation",
    },
    {
      id: 10,
      title: "Profit and Loss - Part 1",
      url: "https://youtu.be/bqVyQ3HBrOg",
      description: "Fundamental concepts of Profit and Loss",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 11,
      title: "Profit and Loss - Part 2",
      url: "https://youtu.be/YZMDCFTKFfM",
      description: "Advanced problems in Profit and Loss",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 12,
      title: "Profit and Loss - Part 3",
      url: "https://youtu.be/7PS5XjmvCUE",
      description: "Profit and Loss practice session",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 13,
      title: "Profit and Loss - Part 4",
      url: "https://youtu.be/QlLp-9OC4cM",
      description: "Solving complex Profit and Loss questions",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 14,
      title: "Profit and Loss - Part 5",
      url: "https://youtu.be/k65D2Hds_NA",
      description: "Key strategies for Profit and Loss",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 15,
      title: "Profit and Loss - Part 6",
      url: "https://youtu.be/GXD7Oy0Om-A",
      description: "Expert tips on Profit and Loss",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 16,
      title: "Profit and Loss - Part 7",
      url: "https://youtu.be/LALOnfFNZw0",
      description: "Profit and Loss detailed analysis",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 17,
      title: "Profit and Loss - Part 8",
      url: "https://youtu.be/HFRitg-WP5w",
      description: "Mastering Profit and Loss techniques",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 18,
      title: "Profit and Loss - Part 9",
      url: "https://youtu.be/kyHih58qXiE",
      description: "Profit and Loss exam-style questions",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 19,
      title: "Profit and Loss - Part 10",
      url: "https://youtu.be/80qyYOvl3Rk",
      description: "Important Profit and Loss concepts",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 20,
      title: "Profit and Loss - Part 11",
      url: "https://youtu.be/s4eh5zCbhHU",
      description: "Profit and Loss revision",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 21,
      title: "Profit and Loss - Part 12",
      url: "https://youtu.be/avUC8JUYe98",
      description: "Profit and Loss walkthrough",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 22,
      title: "Profit and Loss - Part 13",
      url: "https://youtu.be/IdIBDdx0Q84",
      description: "Profit and Loss solution strategies",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 23,
      title: "Profit and Loss - Part 14",
      url: "https://youtu.be/ps5o47GlS_c",
      description: "Profit and Loss deep dive",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 24,
      title: "Profit and Loss - Part 15",
      url: "https://youtu.be/h9A16WIMDDc",
      description: "Profit and Loss comprehensive guide",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 25,
      title: "Profit and Loss - Part 16",
      url: "https://youtu.be/g4VIisjj8z4",
      description: "Profit and Loss problem solving",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 26,
      title: "Profit and Loss - Part 17",
      url: "https://youtu.be/t73Mq-tfHlI",
      description: "Profit and Loss advanced techniques",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 27,
      title: "Profit and Loss - Part 18",
      url: "https://youtu.be/HIRuCORxBec",
      description: "Profit and Loss final review",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 28,
      title: "Profit and Loss - Part 19",
      url: "https://youtu.be/ZIaKnDqZ3cg",
      description: "Profit and Loss exam prep",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 29,
      title: "Profit and Loss - Part 20",
      url: "https://youtu.be/a8c0QrA6GlU",
      description: "Profit and Loss essential tips",
      category: "Quantitative Aptitude",
      subcategory: "Profit and Loss",
    },
    {
      id: 30,
      title: "Quantitative Aptitude - Extra 1",
      url: "https://youtu.be/jpTFv9jjrw8",
      description: "Additional practice for QA",
      category: "Quantitative Aptitude",
      subcategory: "Additional",
    },
    {
      id: 31,
      title: "Quantitative Aptitude - Extra 2",
      url: "https://youtu.be/dWZ7Il9ulug",
      description: "Supplementary QA problems",
      category: "Quantitative Aptitude",
      subcategory: "Additional",
    },
    {
      id: 32,
      title: "Quantitative Aptitude - Extra 3",
      url: "https://youtu.be/OC18v4JIAtU",
      description: "More QA concepts explained",
      category: "Quantitative Aptitude",
      subcategory: "Additional",
    },
    {
      id: 33,
      title: "Quantitative Aptitude - Extra 4",
      url: "https://youtu.be/A7YdgwCT8to",
      description: "Final set of QA questions",
      category: "Quantitative Aptitude",
      subcategory: "Additional",
    },
    {
      id: 34,
      title: "Verbal Ability Strategy",
      url: "https://www.youtube.com/watch?v=wXakzp9DQYo",
      description: "Strategic approach to mastering Verbal Ability",
      category: "Verbal Ability",
    },
    {
      id: 35,
      title: "Verbal Ability Practice",
      url: "https://www.youtube.com/watch?v=CDEWTaMInUA",
      description: "In-depth practice session for Verbal Ability",
      category: "Verbal Ability",
    },
    {
      id: 36,
      title: "Logical Reasoning Strategy",
      url: "https://youtu.be/OHoZwH4XD28",
      description: "Strategic approach to mastering Logical Reasoning",
      category: "Logical Reasoning",
    },
    {
      id: 37,
      title: "Logical Reasoning Practice - Part 1",
      url: "https://youtu.be/AmKrUqMT5Y4",
      description: "In-depth practice session for Logical Reasoning",
      category: "Logical Reasoning",
    },
    {
      id: 38,
      title: "Logical Reasoning Practice - Part 2",
      url: "https://youtu.be/-ncFrTLpDdI",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 39,
      title: "Logical Reasoning Practice - Part 3",
      url: "https://youtu.be/1HErDrnDcDg",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 40,
      title: "Logical Reasoning Practice - Part 4",
      url: "https://youtu.be/TXlAEJeOw_M",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 41,
      title: "Logical Reasoning Practice - Part 5",
      url: "https://youtu.be/YbfJdS15R2k",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 42,
      title: "Logical Reasoning Practice - Part 6",
      url: "https://youtu.be/KdgWjMNuOb8",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 43,
      title: "Logical Reasoning Practice - Part 7",
      url: "https://youtu.be/0y6FExnmmSo",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 44,
      title: "Logical Reasoning Practice - Part 8",
      url: "https://youtu.be/0RH1Rca8GlM",
      description: "LogiAmKrUqMT5Y7cal Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 45,
      title: "Logical Reasoning Practice - Part 9",
      url: "https://youtu.be/J66BMKToX0c",
      description: "Logical Reasoning concepts and practice",
      category: "Logical Reasoning",
    },
    {
      id: 46,
      title: "Progression - Part 1",
      url: "https://youtu.be/c1VKEiSGLcU",
      description: "Progressions — Basics.",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
    {
      id: 47,
      title: "Progression - Part 2",
      url: "https://youtu.be/qWqGVkiNG60",
      description: "Progressions — AP",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
    {
      id: 48,
      title: "Progression - Part 3",
      url: "https://youtu.be/4aywiBJqxZs",
      description: "Progressions — GP",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
    {
      id: 49,
      title: "Progression - Part 4",
      url: "https://youtu.be/SCtG6ALDjuI",
      description: "Progressions — HP",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
    {
      id: 50,
      title: "Progression - Part 5",
      url: "https://youtu.be/2HDvjo5E9gM",
      description: "Progressions — Sum",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
    {
      id: 51,
      title: "Progression - Part 6",
      url: "https://youtu.be/sU4VBKg4glM",
      description: "Progressions — AGP",
      category: "Quantitative Aptitude",
      subcategory: "Progressions",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState("Quantitative Aptitude");
  const [activeSubTab, setActiveSubTab] = useState("Strategy");

  const categories = [
    "Quantitative Aptitude",
    "Verbal Ability",
    "Logical Reasoning",
  ];

  const quantSubcategories = [
    "Strategy",
    "Quadratic Equation",
    // "Profit and Loss",
    // "Additional",
    "Progressions",
  ];

  const filteredVideos =
    activeTab === "Quantitative Aptitude"
      ? videos.filter(
          (video) =>
            video.category === activeTab && video.subcategory === activeSubTab
        )
      : videos.filter((video) => video.category === activeTab);

  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-2">
            Master Your <span className="text-purple-400">Preparation</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Access comprehensive video analysis sessions to boost your
            preparation
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                if (category === "Quantitative Aptitude") {
                  setActiveSubTab("Strategy");
                }
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeTab === "Quantitative Aptitude" && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {quantSubcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setActiveSubTab(subcategory)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSubTab === subcategory
                    ? "bg-yellow-500 text-gray-900 shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => {
            const videoId = extractVideoId(video.url);
            const thumbnailUrl = videoId
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23823588" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="white"%3EVideo%3C/text%3E%3C/svg%3E';

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
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23823588" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="8" text-anchor="middle" dy=".3em" fill="white"%3EVideo%3C/text%3E%3C/svg%3E';
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

        {(activeTab === "Verbal Ability" ||
          activeTab === "Logical Reasoning") &&
          filteredVideos.length > 0 && (
            <div className="text-center mt-12 mb-8">
              <p className="text-lg font-medium text-gray-400">
                More videos coming soon...
              </p>
            </div>
          )}

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 rounded-full bg-gray-800 mb-4">
              <Play className="w-16 h-16 text-purple-400" />
            </div>
            <p className="text-xl font-semibold text-white mb-2">
              No videos available
            </p>
            <p className="text-gray-400">
              Check back soon for new analysis sessions
            </p>
          </div>
        )}
      </div>

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
                src={`https://www.youtube.com/embed/${extractVideoId(
                  selectedVideo.url
                )}?autoplay=1`}
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
