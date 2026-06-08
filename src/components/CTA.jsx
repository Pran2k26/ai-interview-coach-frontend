import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-28">

      <div className="max-w-5xl mx-auto text-center bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-16">

        <h2 className="text-5xl font-bold">

          Ready to Crack Your Dream Job?

        </h2>

        <p className="mt-6 text-xl text-gray-200">

          Start practicing with AI today and boost your interview confidence.

        </p>

        <Link
          to="/register"
          className="inline-block mt-10 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:scale-105 transition"
        >
          Get Started
        </Link>

      </div>

    </section>
  );
}

export default CTA;