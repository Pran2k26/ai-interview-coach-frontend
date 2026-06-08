import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Interviews Completed",
    },
    {
      value: "95%",
      label: "Success Rate",
    },
    {
      value: "500+",
      label: "Students Helped",
    },
    {
      value: "24/7",
      label: "AI Available",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-[#030712]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-xl"
            >

              <h1 className="text-6xl font-extrabold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">

                {item.value}

              </h1>

              <p className="text-gray-400 mt-4 text-lg">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;