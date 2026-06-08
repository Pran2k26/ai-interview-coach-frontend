import { motion } from "framer-motion";

function Testimonials() {

  const reviews = [
    {
      name: "Mahesh Kumar Pandey",
      role: "AI Engineer",
      review:
        "This platform helped me improve my confidence and crack my placement interviews.",
    },
    {
      name: "Ravi Kishan",
      role: "Chartered Accountant",
      review:
        "The AI feedback was detailed and helped me identify my weak areas.",
    },
    {
      name: "Amit Verma",
      role: "MERN Developer",
      review:
        "The best interview preparation platform I've used. The UI is amazing and the feedback is useful.",
    },
    
  ];

  return (
    <section className="py-24 bg-linear-to-b from-[#030712] to-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">

          What Our Users Say

        </h2>

        <p className="text-center text-gray-400 mb-16">

          Thousands of students trust AI Interview Coach.

        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
            >

              <div className="text-yellow-400 text-2xl mb-4">

                ⭐⭐⭐⭐⭐

              </div>

              <p className="text-gray-300 leading-7">

                "{item.review}"

              </p>

              <hr className="my-6 border-gray-700" />

              <h3 className="font-bold">

                {item.name}

              </h3>

              <p className="text-gray-400">

                {item.role}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;