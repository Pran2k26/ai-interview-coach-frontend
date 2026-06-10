// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../api/axios";

// function HistoryDetail() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const res = await axios.get(`/interview/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setData(res.data);
//       } catch (err) {
//         // console.log(err);
//         //  setError("Failed to load interview");
//         console.log("ERROR STATUS:", err.response?.status);
//   console.log("ERROR DATA:", err.response?.data);
//   console.log("ERROR MESSAGE:", err.message);

//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!data) return <p className="text-white">Loading...</p>;

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-2xl font-bold mb-4">
//         {data.role} - {data.level}
//       </h1>

//       <p className="mb-6 text-green-400">
//         Total Score:{" "}
//         {data.answers?.reduce((acc, a) => acc + (a.score || 0), 0)}
//       </p>

//       <div className="space-y-4">
//         {data.answers?.map((item, index) => (
//           <div key={index} className="bg-slate-800 p-4 rounded-xl">
            
//             <p className="text-yellow-300 font-semibold">
//               Q{index + 1}: {item.question}
//             </p>

//             <p className="mt-2 text-gray-300">
//               <b>Your Answer:</b> {item.answer}
//             </p>

//             <p className="mt-2 text-green-400">
//               <b>Feedback:</b>{" "}
//               {typeof item.feedback === "object"
//                 ? item.feedback.feedback || JSON.stringify(item.feedback)
//                 : item.feedback}
//             </p>

//             <p className="mt-2 text-blue-400">
//               Score: {item.score}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HistoryDetail;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

function HistoryDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`/interview/history/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(res.data);
      } catch (err) {
        console.log("ERROR STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
        console.log("ERROR MESSAGE:", err.message);

        setError("Failed to load interview");
      }
    };

    fetchData();
  }, [id]);

  if (error) return <p className="text-red-400">{error}</p>;
  if (!data) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">
        {data.role} - {data.level}
      </h1>

      {/* FIX: use totalScore directly */}
      <p className="mb-6 text-green-400">
        Total Score: {data.totalScore}
      </p>

      <div className="space-y-4">
        {/* FIX: questions NOT answers */}
        {data.questions?.map((item, index) => (
          <div key={index} className="bg-slate-800 p-4 rounded-xl">

            <p className="text-yellow-300 font-semibold">
              Q{index + 1}: {item.question}
            </p>

            <p className="mt-2 text-gray-300">
              <b>Your Answer:</b> {item.userAnswer}
            </p>

            <p className="mt-2 text-green-400">
              <b>Feedback:</b> {item.aiFeedback}
            </p>

            <p className="mt-2 text-blue-400">
              Score: {item.score}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryDetail;