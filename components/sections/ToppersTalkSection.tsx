import { useState, useEffect, useCallback } from "react";
import {
  Star,
  Quote,
  FileText,
  AlertTriangle,
  Table,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Target,
  Clock,
  ExternalLink,
  Download,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

export default function Component() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStorySlide, setActiveStorySlide] = useState(0);

  // Add more students here - just copy this pattern and change the details
  const successStories = [
    {
      name: "Akshat Attri",
      title: "Less Stress, More Success",
      quote:
        "Consistency is better than intensity. One hour every day beats 12 hours once a week.",
      stats: [
        { icon: Clock, label: "100% Focus" },
        { icon: Target, label: "Zero Burnout" },
      ],
      image: "/air1commandcenter/atri.jpeg", // Add student photo here
      badge: "AIR 7",
      // college: "IIM Indore '30",
    },
    {
      name: "Nikhilesh Sanka",
      title: "Work Smarter, Not Harder",
      quote:
        "Forget the 18-hour study grind. We're all about working smarter, staying consistent, and actually having a life while you prep.",
      stats: [
        { icon: Clock, label: "292/360" },
        { icon: Target, label: "Consistency" },
      ],
      image: "/air1commandcenter/air1.png", // Change this to the student's photo path
      badge: "AIR 1",
      // college: "IIM Indore '30",
    },

    {
      name: "Saketh Rimmalapuddi",
      title: "Level Up Your Game.",
      quote:
        "The journey isn't just about the result; it's about the growth. Get whatever you need to own your future without the gatekeeping.",
      stats: [
        { icon: Clock, label: " Expert Mentorship" },
        { icon: Target, label: "Strategic Practice" },
      ],
      image: "/air1commandcenter/Saketh.png", // Add student photo here
      badge: "Indore '30",
      // college: "IIM Indore '30",
    },
    {
      name: "Sadhana S",
      title: "Build Your Future.",
      quote:
        "Ditch the boring lectures. Join a community that actually gets the hustle and helps you cross the finish line on your own terms.",
      stats: [
        { icon: Clock, label: "Goal Oriented" },
        { icon: Target, label: "Worth the Hustle" },
      ],
      image: "/air1commandcenter/sadhana.png", // Add student photo here
      badge: "Indore '30 ",
      // college: "IIM Indore '30",
    },
  ];

  const mockScores = [
    {
      name: "Hash IPMAT 14",
      score: "211/360",
      date: "19th February 2026",
      rank: "Rank 7",
      img: "/air1commandcenter/dsb.jpeg",
    },
  ];

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % mockScores.length);
  const prevSlide = () =>
    setActiveSlide(
      (prev) => (prev - 1 + mockScores.length) % mockScores.length,
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextStorySlide = useCallback(() => {
    setActiveStorySlide((prev) => (prev + 1) % successStories.length);
  }, [successStories.length]);

  const prevStorySlide = useCallback(() => {
    setActiveStorySlide(
      (prev) => (prev - 1 + successStories.length) % successStories.length,
    );
  }, [successStories.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStorySlide((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-16 pb-20">
        {/* SUCCESS STORIES CAROUSEL */}
        <section className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-16">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Trophy className="w-64 h-64 text-[#f9a01b]" />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-8 right-8 flex gap-2">
            <button
              onClick={prevStorySlide}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextStorySlide}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="relative">
            {successStories.map((story, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === activeStorySlide
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-[#f9a01b]">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-[#f9a01b] text-white font-black px-4 py-2 rounded-xl text-xl">
                      {story.badge}
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f9a01b] text-[#f9a01b] text-xs font-bold mb-6">
                      <Star className="w-3 h-3 fill-current" /> Straight from
                      the winners
                    </div>
                    <h2 className="text-4xl md:text-4xl font-black mb-2 text-white">
                      {story.title}
                    </h2>
                    <p className="text-[#f9a01b] text-xl md:text-2xl font-bold mb-4">
                      {story.name}
                    </p>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
                      "{story.quote}"
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                      {story.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700"
                        >
                          <stat.icon className="w-4 h-4 text-[#f9a01b]" />{" "}
                          {stat.label}
                        </div>
                      ))}
                    </div>
                    {/* <p className="text-slate-500 text-sm font-semibold">
                      {story.college}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8 relative z-20">
            {successStories.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStorySlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeStorySlide
                    ? "w-6 bg-[#f9a01b]"
                    : "w-1.5 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Hardest Nut to Crack
              </h3>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-500/30 transition-all">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">01.</span> Data Interpretation
              </h4>
              <img
                src="/air1commandcenter/try-yourself.png"
                alt="Try Yourself"
                className="w-full h-auto rounded-lg blur-sm mb-6 cursor-pointer"
                onClick={() =>
                  window.open("/air1commandcenter/try-yourself.png", "_blank")
                }
              />
              <button
                onClick={() =>
                  window.open("/air1commandcenter/try-yourself.png", "_blank")
                }
                className="text-[#f9a01b] text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Try Yourself <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                DSB DAILY CHALLENGE.
              </h3>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-800">
              {/* Glowing Green Live Indicator - Top Right */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                <span className="text-green-400 text-xs font-bold uppercase tracking-wider drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                  LIVE
                </span>
              </div>

              <img
                src="/air1commandcenter/dsb.jpeg"
                alt="Hash IPMAT 14"
                className="w-full h-full object-contain brightness-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-6">
                    {" "}
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-xs text-green-400 font-bold uppercase">
                         245 Students earned the 'Accuracy King' Batch today. Will you be next?
                        </p>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        "https://register.ipmcareer.com/dsbchallenge",
                        "_blank",
                      )
                    }
                    className="text-[#f9a01b] text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
                  >
                    START CHALLENGE <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-slate-900/30 rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-800 p-6 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">
            Download My Study Assets
          </h3>
          <p className="text-slate-500 mb-6 md:mb-10 text-sm md:text-base">
            "Level up your prep with these essential files and track your
            progress."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1rL71mkObdpfzU4Xwoej6qXrNs04Ih61v/view?usp=sharing",
                  "_blank",
                )
              }
              className="bg-slate-900 p-4 md:p-8 rounded-xl md:rounded-2xl border border-slate-800 hover:border-orange-500 transition-all text-left flex items-center gap-4 md:gap-6 cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-xl md:rounded-2xl bg-slate-800/50 flex items-center justify-center text-[#f9a01b] group-hover:bg-[#f9a01b] group-hover:text-black transition-all">
                <FileText className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-base md:text-lg text-white mb-1">
                  300+ Solved MCQs
                </h4>
                <p className="text-slate-500 text-xs md:text-sm">
                  Every question I solved in one PDF.
                </p>
              </div>
              <Download className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-slate-700 group-hover:text-orange-500 transition-colors" />
            </div>

            <div
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/10RMRmi6gtHT5xQIiTvRPadeVTS2tedcI1BRALMKFztQ/edit?gid=684469844#gid=684469844",
                  "_blank",
                )
              }
              className="bg-slate-900 p-4 md:p-8 rounded-xl md:rounded-2xl border border-slate-800 hover:border-green-500 transition-all text-left flex items-center gap-4 md:gap-6 cursor-pointer group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-xl md:rounded-2xl bg-slate-800/50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <Table className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-base md:text-lg text-white mb-1">
                  Akshat Attri's Daily Timetable
                </h4>
                <p className="text-slate-500 text-xs md:text-sm">
                  Live Excel sheet with hour-by-hour logs.
                </p>
              </div>
              <ExternalLink className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-slate-700 group-hover:text-green-500 transition-colors" />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center text-center py-10">
          <Quote className="w-12 h-12 text-[#f9a01b] mb-6" />
          <h2 className="text-3xl font-medium italic text-slate-300 max-w-4xl leading-relaxed">
            "The distance between AIR 1000 and AIR 1 is not knowledge, it is the
            quality of your analysis of what you don't know."
          </h2>
          <div className="mt-8">
            <p className="text-white font-black text-lg">Akshat Attri</p>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
              IIM Indore '30
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
