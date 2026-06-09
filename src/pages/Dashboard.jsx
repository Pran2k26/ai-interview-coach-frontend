

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// function Dashboard() {
//   const [role, setRole] = useState("");
//   const [level, setLevel] = useState("Fresher");

//   const navigate = useNavigate();

//   const createInterview = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.post(
//         "/interview/create",
//         {
//           role,
//           level,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       navigate(`/interview/${res.data._id}`);
//     } catch (error) {
//       console.log(error);
//       alert("Failed to create interview");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black flex justify-center items-center px-4">

//       <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

//         <div className="text-center">

//           <div className="text-6xl mb-4">
//             🤖
//           </div>

//           <h1 className="text-4xl font-bold text-white">
//             AI Interview Coach
//           </h1>

//           <p className="text-gray-300 mt-3">
//             Generate AI-powered interview questions
//           </p>

//         </div>

//         <div className="mt-10 space-y-6">

//           <div>

//             <label className="block text-gray-300 mb-2">
//               Job Role
//             </label>

//             <input
//               type="text"
//               placeholder="e.g. MERN Stack Developer"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />

//           </div>

//           <div>

//             <label className="block text-gray-300 mb-2">
//               Experience Level
//             </label>

//             <select
//               value={level}
//               onChange={(e) => setLevel(e.target.value)}
//               className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               <option>Fresher</option>
//               <option>Intermediate</option>
//               <option>Experienced</option>
//             </select>

//           </div>

//           <button
//             onClick={createInterview}
//             className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
//           >
//             🚀 Generate Interview
//           </button>

//           <button
//   onClick={() => navigate("/roadmap")}
//   className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
// >
//   🗺️ Generate AI Roadmap
// </button>

//         <button
//   onClick={() => navigate("/resume")}
//   className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold text-lg hover:scale-105 transition-all duration-300"
// >
//   📄 Analyze Resume
// </button>

//         </div>

//         <div className="grid grid-cols-3 gap-4 mt-10">

//           <div className="bg-slate-800 rounded-2xl p-4 text-center">

//             <h2 className="text-2xl">
//               🤖
//             </h2>

//             <p className="text-gray-300 mt-2">
//               AI Questions
//             </p>

//           </div>

//           <div className="bg-slate-800 rounded-2xl p-4 text-center">

//             <h2 className="text-2xl">
//               ⚡
//             </h2>

//             <p className="text-gray-300 mt-2">
//               Instant Feedback
//             </p>

//           </div>

//           <div className="bg-slate-800 rounded-2xl p-4 text-center">

//             <h2 className="text-2xl">
//               📊
//             </h2>

//             <p className="text-gray-300 mt-2">
//               Performance
//             </p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Dashboard() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("Fresher");

  const navigate = useNavigate();

  const createInterview = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "/interview/create",
        {
          role,
          level,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate(`/interview/${res.data._id}`);
    } catch (error) {
      console.log(error);
      alert("Failed to create interview");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black flex justify-center items-center px-4">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

        <div className="text-center">

          <div className="text-6xl mb-4">
            🤖
          </div>

          <h1 className="text-4xl font-bold text-white">
            AI Interview Coach
          </h1>

          <p className="text-gray-300 mt-3">
            Practice interviews, analyze resumes and generate AI roadmaps
          </p>

        </div>

        <div className="mt-10 space-y-6">

          <div>
            <label className="block text-gray-300 mb-2">
              Job Role
            </label>

            <input
              type="text"
              placeholder="e.g. MERN Stack Developer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Experience Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Fresher</option>
              <option>Intermediate</option>
              <option>Experienced</option>
            </select>
          </div>

          <button
            onClick={createInterview}
            className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
          >
            🚀 Generate AI Interview
          </button>

          <button
            onClick={() => navigate("/roadmap")}
            className="w-full py-4 rounded-xl bg-linear-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
          >
            🗺️ Generate AI Roadmap
          </button>

          <button
            onClick={() => navigate("/resume")}
            className="w-full py-4 rounded-xl bg-linear-to-r from-pink-600 to-red-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
          >
            📄 Analyze Resume
          </button>
          <button
  onClick={() => navigate("/resume-match")}
  className="w-full mt-4 py-4 rounded-xl bg-linear-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:scale-105 transition"
>
  🎯 Resume vs Job Description
</button>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          <div className="bg-slate-800 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">

            <div className="text-4xl">
              🤖
            </div>

            <h3 className="text-white font-semibold mt-3">
              AI Interview
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Generate interview questions instantly
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">

            <div className="text-4xl">
              ⚡
            </div>

            <h3 className="text-white font-semibold mt-3">
              AI Feedback
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Get detailed AI evaluation
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">

  <div className="text-4xl">
    🎯
  </div>

  <h3 className="text-white font-semibold mt-3">
    Resume Matcher
  </h3>

  <p className="text-gray-400 text-sm mt-2">
    Compare your resume with any job description using AI
  </p>

</div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">

            <div className="text-4xl">
              🗺️
            </div>

            <h3 className="text-white font-semibold mt-3">
              AI Roadmap
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Personalized learning plan
            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5 text-center hover:scale-105 transition duration-300">

            <div className="text-4xl">
              📄
            </div>

            <h3 className="text-white font-semibold mt-3">
              Resume Analyzer
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              ATS score and AI suggestions
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;


