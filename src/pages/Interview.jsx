import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

function Interview() {
  const { id } = useParams();

  const [interview, setInterview] = useState(null);
  const [answers, setAnswers] = useState({});
  const [evaluating, setEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState([]);

  useEffect(() => {
    fetchInterview();
  }, []);

  const fetchInterview = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`/interview/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInterview(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const saveAnswers = async () => {
    try {
      const token = localStorage.getItem("token");

      const answerArray = interview.questions.map(
        (_, index) => answers[index] || ""
      );

      await axios.post(
        `/interview/${id}/answers`,
        { answers: answerArray },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Answers Saved Successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to Save Answers");
    }
  };

  const evaluateInterview = async () => {
    try {
      setEvaluating(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        `/interview/${id}/evaluate`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEvaluation(res.data);

      alert("Evaluation Completed");
    } catch (error) {
      console.log(error);
      alert("Evaluation Failed");
    } finally {
      setEvaluating(false);
    }
  };

  if (!interview) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white">
            🤖 AI Interview Coach
          </h1>

          <p className="text-gray-300 mt-3">
            Role: {interview.role} | Level: {interview.level}
          </p>

        </div>

        {interview.questions.map((question, index) => (

          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8 shadow-xl"
          >

            <h2 className="text-xl font-bold text-indigo-300 mb-4">
              Question {index + 1}
            </h2>

            <p className="text-white mb-5">
              {question}
            </p>

            <textarea
              rows="6"
              value={answers[index] || ""}
              onChange={(e) =>
                handleAnswerChange(index, e.target.value)
              }
              placeholder="Write your answer here..."
              className="w-full rounded-2xl p-4 bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>

        ))}

        <div className="flex justify-center gap-6 mb-10">

          <button
            onClick={saveAnswers}
            className="px-8 py-4 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold hover:scale-105 transition"
          >
            Save Answers
          </button>

          <button
            onClick={evaluateInterview}
            disabled={evaluating}
            className="px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold hover:scale-105 transition"
          >
            {evaluating
              ? "Evaluating..."
              : "Evaluate Interview"}
          </button>

        </div>

        {evaluation.length > 0 && (

          <div>

            <h2 className="text-4xl font-bold text-center text-white mb-8">
              📊 Evaluation Report
            </h2>

            {evaluation.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-green-500/30 rounded-3xl p-6 mb-6 shadow-lg"
              >

                <h3 className="text-green-400 text-xl font-bold mb-3">
                  Question {index + 1}
                </h3>

                <p className="text-white mb-3">
                  <strong>Question:</strong> {item.question}
                </p>

                <p className="text-gray-300 mb-3">
                  <strong>Your Answer:</strong> {item.answer}
                </p>

                <div className="bg-slate-900 rounded-xl p-4">

                  <h4 className="text-indigo-400 font-bold mb-2">
                    AI Feedback
                  </h4>

                  <p className= "whitespace-pre-line text-gray-300">
                    {item.feedback}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default Interview;

