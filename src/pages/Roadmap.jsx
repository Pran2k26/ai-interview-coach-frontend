import { useState } from "react";
import axios from "../api/axios";

function Roadmap() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("Fresher");
  const [duration, setDuration] = useState("3 Months");
  const [roadmap, setRoadmap] = useState(null);

  const generateRoadmap = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "/roadmap/generate",
        {
          role,
          level,
          duration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Roadmap Response:", res.data);
      setRoadmap(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to generate roadmap");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black p-8">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

          <div className="text-center">

            <div className="text-6xl mb-3">
              🗺️
            </div>

            <h1 className="text-4xl font-bold text-white">
              AI Career Roadmap
            </h1>

            <p className="text-gray-300 mt-3">
              Generate your personalized learning roadmap
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-10">

            <input
              type="text"
              placeholder="MERN Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
            />

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
            >
              <option>Fresher</option>
              <option>Intermediate</option>
              <option>Experienced</option>
            </select>

            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
            />

          </div>

          <button
            onClick={generateRoadmap}
            className="w-full mt-6 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            🚀 Generate Roadmap
          </button>

        </div>

        {roadmap && (

          <div className="mt-10">

            <h2 className="text-4xl text-white font-bold text-center mb-8">
              {roadmap.title}
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">

              {roadmap.weeks.map((week, index) => (

                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6"
                >

                  <h2 className="text-2xl font-bold text-cyan-400">
                    {week.week}
                  </h2>

                  <h3 className="text-xl text-white mt-2">
                    {week.title}
                  </h3>

                  <ul className="mt-5 space-y-2">

                    {week.topics.map((topic, i) => (

                      <li
                        key={i}
                        className="text-gray-300"
                      >
                        ✅ {topic}
                      </li>

                    ))}

                  </ul>

                  <div className="mt-6 bg-indigo-600/30 rounded-xl p-4">

                    <h4 className="font-bold text-white">
                      💻 Mini Project
                    </h4>

                    <p className="text-gray-300 mt-2">
                      {week.project}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-green-400 mb-4">
                  🚀 Projects
                </h2>

                {/* {roadmap.projects.map((project, index) => (

                  <p
                    key={index}
                    className="text-gray-300 mb-2"
                  >
                    📌 {project}
                  </p>

                ))} */}
                {roadmap.finalProjects.map((project, index) => (
  <p key={index} className="text-gray-300 mb-2">
    📌 {project}
  </p>
))}

              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-purple-400 mb-4">
                  📚 Resources
                </h2>

                {roadmap.resources.map((resource, index) => (

                  <p
                    key={index}
                    className="text-gray-300 mb-2"
                  >
                    🔗 {resource}
                  </p>

                ))}

              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6">

                <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                  🎯 Tips
                </h2>

                {roadmap.interviewTips.map((tip, index) => (

                  <p
                    key={index}
                    className="text-gray-300 mb-2"
                  >
                    ✔ {tip}
                  </p>

                ))}

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Roadmap;

