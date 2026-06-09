import { useState } from "react";
import axios from "../api/axios";

function ResumeMatcher() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const matchResume = async () => {
    if (!file || !jobDescription) {
      alert("Please upload resume and enter job description");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("resume", file);
      formData.append("jobDescription", jobDescription);

      const res = await axios.post(
        "/match",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Resume Matching Failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black p-8">

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          🎯 Resume vs Job Description Matcher
        </h1>

        <p className="text-center text-gray-300 mt-3">
          Upload your resume and compare it with any job description using AI.
        </p>

        <div className="mt-8">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-white"
          />

        </div>

        <textarea
          rows="10"
          placeholder="Paste Job Description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full mt-6 p-4 rounded-xl bg-slate-800 text-white border border-slate-700"
        />

        <button
          onClick={matchResume}
          className="mt-6 w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:scale-105 transition"
        >
          {loading ? "Matching..." : "🎯 Match Resume"}
        </button>

        {result && (

          <div className="mt-10">

            <div className="bg-slate-800 rounded-xl p-6 text-center">

              <h2 className="text-3xl text-green-400 font-bold">
                Match Score
              </h2>

              <p className="text-6xl text-white mt-3">
                {result.matchScore}%
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-slate-800 rounded-xl p-5">

                <h2 className="text-green-400 text-xl font-bold mb-4">
                  ✅ Matching Skills
                </h2>

                {result.matchingSkills.map((skill, index) => (
                  <p key={index} className="text-white mb-2">
                    • {skill}
                  </p>
                ))}

              </div>

              <div className="bg-slate-800 rounded-xl p-5">

                <h2 className="text-red-400 text-xl font-bold mb-4">
                  ❌ Missing Skills
                </h2>

                {result.missingSkills.map((skill, index) => (
                  <p key={index} className="text-white mb-2">
                    • {skill}
                  </p>
                ))}

              </div>

            </div>

            <div className="bg-slate-800 rounded-xl p-6 mt-6">

              <h2 className="text-yellow-400 text-xl font-bold mb-4">
                💡 Suggestions
              </h2>

              {result.suggestions.map((item, index) => (
                <p key={index} className="text-white mb-2">
                  • {item}
                </p>
              ))}

            </div>

            <div className="bg-slate-800 rounded-xl p-6 mt-6">

              <h2 className="text-cyan-400 text-xl font-bold mb-4">
                📄 Summary
              </h2>

              <p className="text-white leading-7">
                {result.summary}
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default ResumeMatcher;

