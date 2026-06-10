

import {
  UserPlus,
  MessageSquareText,
  Sparkles,
  FileText,
  Map,
} from "lucide-react";
import { motion } from "framer-motion";

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={45} />,
      title: "Create AI Interview",
      desc: "Select your desired job role and experience level to generate personalized AI interview questions.",
    },
    {
      icon: <MessageSquareText size={45} />,
      title: "Practice Interviews",
      desc: "Answer technical and HR interview questions in a realistic interview environment to build confidence.",
    },
    {
      icon: <Sparkles size={45} />,
      title: "Get AI Feedback",
      desc: "Receive instant AI-powered evaluation with scores, strengths, weaknesses, and improvement suggestions.",
    },
    {
      icon: <FileText size={45} />,
      title: "Analyze Resume",
      desc: "Upload your resume to get ATS compatibility score, missing skills, strengths, and AI recommendations.",
    },

    {
    icon: <MessageSquareText size={45} />,
    title: "RAG Interview",
    desc: "Upload your resume and practice personalized interview questions generated from your own experience and skills.",
  },
    {
      icon: <Map size={45} />,
      title: "Generate AI Roadmap",
      desc: "Create a personalized learning roadmap with weekly goals, projects, resources, and interview preparation tips.",
    },
     {
    icon: <Sparkles size={45} />,
    title: "Interview History",
    desc: "Review all your previous AI and Resume-based interviews, scores, answers, and feedback to track your progress over time.",
  },
  ];

  return (
    <section
      id="how"
      className="py-24 bg-linear-to-b from-[#030712] to-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          How It Works
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 mb-16 text-lg">
          Everything you need to become interview-ready in five simple steps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center hover:border-indigo-500 transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-7 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;

