import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-indigo-950 to-black px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <div className="text-6xl mb-3">🤖</div>

          <h1 className="text-3xl font-bold text-white">
            AI Interview Coach
          </h1>

          <p className="text-gray-300 mt-2">
            Create your account
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-6 text-gray-300">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-indigo-400 hover:text-indigo-300"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;