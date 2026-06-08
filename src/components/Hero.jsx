import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[180px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600 rounded-full blur-[180px] opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500 rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <div className="inline-block bg-indigo-500/20 text-indigo-300 px-5 py-2 rounded-full mb-8 border border-indigo-500/30">

            🚀 AI Powered Interview Preparation

          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">

            Ace Your

            <br />

            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">

              Next Interview

            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-8">

            {/* Practice realistic interviews with AI-generated
            questions, receive instant feedback, improve your
            communication skills and land your dream job. */}
            Prepare smarter with AI-generated interview questions, detailed answer evaluation, ATS resume analysis, personalized learning roadmaps, and performance tracking designed to accelerate your career growth.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              to="/login"
              className="bg-lin-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/30"
            >
              Start Free →
            </Link>

            <button className="border border-white/20 px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition">

              Watch Demo

            </button>

          </div>

          <div className="mt-12 text-gray-400">

            ⭐ Trusted by 10,000+ Students

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;