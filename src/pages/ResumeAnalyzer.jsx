// import { useState } from "react";
// import axios from "../api/axios";

// function ResumeAnalyzer() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const analyzeResume = async () => {
//     if (!file) {
//       alert("Please select a resume");
//       return;
//     }

//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");

//       const formData = new FormData();

//       formData.append("resume", file);

//       const res = await axios.post(
//         "/resume/analyze",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setResult(res.data);

//     } catch (error) {
//       console.log(error);
//       alert("Resume Analysis Failed");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black p-8">

//       <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">

//         <h1 className="text-4xl font-bold text-white text-center">
//           📄 AI Resume Analyzer
//         </h1>

//         <p className="text-center text-gray-300 mt-3">
//           Upload your resume and get AI-powered ATS feedback.
//         </p>

//         <div className="mt-8">

//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => setFile(e.target.files[0])}
//             className="text-white"
//           />

//         </div>

//         <button
//           onClick={analyzeResume}
//           className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold hover:scale-105 transition"
//         >
//           {loading ? "Analyzing..." : "Analyze Resume"}
//         </button>

//         {result && (

//           <div className="mt-10">

//             <div className="bg-slate-800 rounded-xl p-6 text-center">

//               <h2 className="text-3xl text-green-400 font-bold">
//                 ATS Score
//               </h2>

//               <p className="text-6xl text-white mt-3">
//                 {result.atsScore}%
//               </p>

//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mt-8">

//               <div className="bg-slate-800 rounded-xl p-5">

//                 <h2 className="text-green-400 text-xl font-bold mb-3">
//                   ✅ Strengths
//                 </h2>

//                 {result.strengths.map((item, index) => (
//                   <p key={index} className="text-white mb-2">
//                     • {item}
//                   </p>
//                 ))}

//               </div>

//               <div className="bg-slate-800 rounded-xl p-5">

//                 <h2 className="text-red-400 text-xl font-bold mb-3">
//                   ❌ Missing Skills
//                 </h2>

//                 {result.missingSkills.map((item, index) => (
//                   <p key={index} className="text-white mb-2">
//                     • {item}
//                   </p>
//                 ))}

//               </div>

//               <div className="bg-slate-800 rounded-xl p-5">

//                 <h2 className="text-yellow-400 text-xl font-bold mb-3">
//                   💡 Suggestions
//                 </h2>

//                 {result.suggestions.map((item, index) => (
//                   <p key={index} className="text-white mb-2">
//                     • {item}
//                   </p>
//                 ))}

//               </div>

//             </div>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }

// export default ResumeAnalyzer;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const analyzeResume = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("resume", file);

      const res = await axios.post(
        "/resume/analyze",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(res.data);
    } catch (error) {
      console.log(error);
      alert("Resume Analysis Failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black p-8">

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold text-white text-center mt-6">
          📄 AI Resume Analyzer
        </h1>

        <p className="text-center text-gray-300 mt-3">
          Upload your resume and get AI-powered ATS feedback.
        </p>

        <div className="mt-8 flex justify-center">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-white"
          />

        </div>

        {file && (
          <p className="text-center text-green-400 mt-3">
            ✅ {file.name}
          </p>
        )}

        {loading ? (

          <div className="flex justify-center mt-8">

            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>

          </div>

        ) : (

          <button
            onClick={analyzeResume}
            className="mt-8 w-full py-4 rounded-xl bg-linear-to-r from-pink-600 to-red-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
          >
            🚀 Analyze Resume
          </button>

        )}

        {result && (

          <div className="mt-12">

            <div className="flex justify-center">

              <div className="w-44 h-44 rounded-full border-8 border-green-500 flex items-center justify-center shadow-lg">

                <div className="text-center">

                  <h2 className="text-white text-xl">
                    ATS Score
                  </h2>

                  <p className="text-5xl font-bold text-green-400 mt-2">
                    {result.atsScore}%
                  </p>

                </div>

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

              <div className="bg-slate-800 rounded-2xl p-6">

                <h2 className="text-green-400 text-2xl font-bold mb-4">
                  ✅ Strengths
                </h2>

                {result.strengths.map((item, index) => (
                  <p key={index} className="text-white mb-3">
                    • {item}
                  </p>
                ))}

              </div>

              <div className="bg-slate-800 rounded-2xl p-6">

                <h2 className="text-red-400 text-2xl font-bold mb-4">
                  ❌ Missing Skills
                </h2>

                {result.missingSkills.map((item, index) => (
                  <p key={index} className="text-white mb-3">
                    • {item}
                  </p>
                ))}

              </div>

              <div className="bg-slate-800 rounded-2xl p-6">

                <h2 className="text-yellow-400 text-2xl font-bold mb-4">
                  💡 Suggestions
                </h2>

                {result.suggestions.map((item, index) => (
                  <p key={index} className="text-white mb-3">
                    • {item}
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

export default ResumeAnalyzer;

