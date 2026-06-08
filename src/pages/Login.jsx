

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-slate-900 to-indigo-950 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <div className="text-6xl mb-3">
            🤖
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-300 mt-2">
            Login to AI Interview Coach
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6 text-gray-300">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;

