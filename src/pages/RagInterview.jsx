
// import { useState } from "react";
// import axios from "../api/axios";

// function RagInterview() {

//   const [file, setFile] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const generateInterview = async () => {

//     if (!file) {
//       alert("Please upload your resume");
//       return;
//     }

//     try {

//       setLoading(true);

//       const formData = new FormData();

//       formData.append("resume", file);

//       const res = await axios.post(
//         "/rag",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setQuestions(res.data.questions);

//     } catch (err) {

//       console.log(err);

//       alert("Failed to generate interview");

//     }

//     setLoading(false);

//   };

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black p-8">

//       <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

//         <h1 className="text-4xl text-center text-white font-bold">

//           🧠 RAG Interview Generator

//         </h1>

//         <p className="text-center text-gray-400 mt-3">

//           Upload your resume and generate personalized interview questions.

//         </p>

//         <input
//           type="file"
//           accept=".pdf"
//           className="mt-8 text-white"
//           onChange={(e) => setFile(e.target.files[0])}
//         />

//         <button
//           onClick={generateInterview}
//           className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold"
//         >

//           {loading
//             ? "Generating..."
//             : "Generate RAG Interview"}

//         </button>

//         {questions.length > 0 && (

//           <div className="mt-10">

//             <h2 className="text-3xl text-white font-bold mb-6">

//               Interview Questions

//             </h2>

//             {questions.map((q, index) => (

//               <div
//                 key={index}
//                 className="bg-slate-800 rounded-xl p-5 mb-4"
//               >

//                 <h3 className="text-indigo-400 font-bold">

//                   Question {index + 1}

//                 </h3>

//                 <p className="text-white mt-2">

//                   {q}

//                 </p>

//               </div>

//             ))}

//           </div>

//         )}

//       </div>

//     </div>

//   );
// }

// export default RagInterview;
import { useState } from "react";
import axios from "../api/axios";

function RagInterview() {

  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [allScores, setAllScores] = useState([]);

  const startInterview = async () => {

    if (!file) {
      alert("Please upload your resume");
      return;
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      const res = await axios.post(
        "/rag",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setQuestions(res.data.questions);

      setStarted(true);

    } catch (err) {

      console.log(err);

      alert("Failed to generate questions");

    }

    setLoading(false);
  };

  const submitAnswer = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        "/rag/evaluate",
        {
          question: questions[current],
          answer: answer,
        }
      );

      const result = res.data.result;

      const scoreMatch = result.match(/Score:\s*(.*)/);

      const feedbackMatch = result.match(/Feedback:\s*([\s\S]*)/);

      const extractedScore =
        scoreMatch ? scoreMatch[1] : "";

      const extractedFeedback =
        feedbackMatch ? feedbackMatch[1] : "";

      setScore(extractedScore);

      setFeedback(extractedFeedback);

      setAllScores([
        ...allScores,
        extractedScore,
      ]);

    } catch (err) {

      console.log(err);

      alert("Evaluation Failed");

    }

    setLoading(false);

  };

  const nextQuestion = () => {

    setAnswer("");
    setFeedback("");
    setScore("");

    if (current === questions.length - 1) {

      setCompleted(true);

    } else {

      setCurrent(current + 1);

    }

  };

  if (completed) {

    return (

      <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black flex justify-center items-center">

        <div className="bg-white/10 p-10 rounded-3xl text-center border border-white/20">

          <h1 className="text-5xl text-green-400 font-bold">

            🎉 Interview Completed

          </h1>

          <p className="text-gray-300 mt-5">

            You have completed all resume-based AI interview questions.

          </p>

          <p className="text-white text-2xl mt-6">

            Questions Attempted: {questions.length}

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black p-8">

      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

        <h1 className="text-4xl text-center text-white font-bold">

          🧠 Resume Based AI Interview

        </h1>

        {!started && (

          <>

            <input
              type="file"
              accept=".pdf"
              className="mt-10 text-white"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            <button
              onClick={startInterview}
              className="w-full mt-6 py-4 rounded-xl bg-purple-600 text-white font-bold"
            >

              {loading
                ? "Generating..."
                : "Generate Questions"}

            </button>

          </>

        )}

        {started && (

          <>

            <div className="mt-10">

              <h2 className="text-indigo-400 text-xl">

                Question {current + 1} of {questions.length}

              </h2>

              <p className="text-white text-2xl mt-3">

                {questions[current]}

              </p>

            </div>

            <textarea

              value={answer}

              onChange={(e) =>
                setAnswer(e.target.value)
              }

              rows={8}

              className="w-full mt-8 rounded-xl p-4 bg-slate-800 text-white"

              placeholder="Write your answer here..."

            />

            {!feedback && (

              <button

                onClick={submitAnswer}

                className="w-full mt-6 py-4 rounded-xl bg-indigo-600 text-white font-bold"

              >

                {loading
                  ? "Evaluating..."
                  : "Submit Answer"}

              </button>

            )}

            {feedback && (

              <div className="mt-8 bg-slate-800 rounded-xl p-6">

                <h2 className="text-green-400 text-2xl font-bold">

                  Score

                </h2>

                <p className="text-white text-3xl mt-2">

                  {score}

                </p>

                <h2 className="text-yellow-400 text-2xl mt-6 font-bold">

                  Feedback

                </h2>

                <p className="text-white mt-3">

                  {feedback}

                </p>

                <button

                  onClick={nextQuestion}

                  className="w-full mt-8 py-4 rounded-xl bg-green-600 text-white font-bold"

                >

                  Next Question

                </button>

              </div>

            )}

          </>

        )}

      </div>

    </div>

  );

}

export default RagInterview;

