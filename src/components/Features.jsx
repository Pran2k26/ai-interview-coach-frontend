// import { Brain, Sparkles, BarChart3, History } from "lucide-react";

// function Features() {
//   const features = [
//     {
//       icon: <Brain size={45} />,
//       title: "AI Generated Questions",
//       desc: "Generate role-specific interview questions instantly using AI.",
//     },
//     {
//       icon: <Sparkles size={45} />,
//       title: "Instant AI Feedback",
//       desc: "Receive personalized feedback and suggestions after every answer.",
//     },
//     {
//       icon: <BarChart3 size={45} />,
//       title: "Performance Analytics",
//       desc: "Track your strengths, weaknesses and overall interview progress.",
//     },
//     {
//       icon: <History size={45} />,
//       title: "Interview History",
//       desc: "Access previous interviews anytime and monitor improvement.",
//     },
//   ];

//   return (
//     <section
//       id="features"
//       className="py-24 bg-[#030712]"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <h2 className="text-5xl font-bold text-center mb-5">

//           Why Choose AI Interview Coach?

//         </h2>

//         <p className="text-gray-400 text-center mb-16 text-lg">

//           Everything you need to prepare for technical and HR interviews.

//         </p>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {features.map((item, index) => (

//             <div
//               key={index}
//               className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-indigo-500 hover:-translate-y-3 transition duration-500"
//             >

//               <div className="text-indigo-400 mb-6 group-hover:scale-110 transition">

//                 {item.icon}

//               </div>

//               <h3 className="text-2xl font-semibold mb-4">

//                 {item.title}

//               </h3>

//               <p className="text-gray-400 leading-7">

//                 {item.desc}

//               </p>

//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Features;
import {
  Brain,
  Sparkles,
  BarChart3,
  History,
  FileText,
  Map,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Brain size={45} />,
      title: "AI Generated Questions",
      desc: "Generate role-specific interview questions instantly using AI.",
    },
    {
      icon: <Sparkles size={45} />,
      title: "Instant AI Feedback",
      desc: "Receive personalized feedback and suggestions after every answer.",
    },
    {
      icon: <BarChart3 size={45} />,
      title: "Performance Analytics",
      desc: "Track your strengths, weaknesses and overall interview progress.",
    },
    {
      icon: <History size={45} />,
      title: "Interview History",
      desc: "Access previous interviews anytime and monitor your improvement.",
    },
    {
      icon: <FileText size={45} />,
      title: "AI Resume Analyzer",
      desc: "Upload your resume and receive ATS score, missing skills, strengths, and improvement suggestions powered by AI.",
    },
    {
      icon: <Map size={45} />,
      title: "AI Roadmap Generator",
      desc: "Generate a personalized learning roadmap with weekly plans, projects, resources, and interview tips.",
    },

    { icon: <FileText size={45} />, title: "Resume vs Job Matcher", desc: "Compare your resume with any job description and get an AI-powered match score, missing skills, and personalized improvement suggestions.", },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Why Choose AI Interview Coach?
        </h2>

        <p className="text-gray-400 text-center mb-16 text-lg">
          Everything you need to crack your dream job with AI assistance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-indigo-500 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              <div className="text-indigo-400 mb-6 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;