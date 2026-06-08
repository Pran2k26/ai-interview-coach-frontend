// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <span className="text-4xl">🤖</span>
//           <h1 className="text-3xl font-bold text-white">
//             AI Interview Coach
//           </h1>
        

//         {/* Right Menu */}
//         <div className="flex items-center gap-8">
//           <a href="#features" className="text-white hover:text-indigo-400">
//             Features
//           </a>

//           <a href="#how" className="text-white hover:text-indigo-400">
//             How it Works
//           </a>

//           <a href="#stats" className="text-white hover:text-indigo-400">
//             Stats
//           </a>

//           <Link
//             to="/"
//             className="text-white hover:text-indigo-400"
//           >
//             Login
//           </Link>

//           <Link
//             to="/register"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl"
//           >
//             Get Started
//           </Link>
//         </div>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";
import Register from "../pages/Register";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">🤖</span>
          <h1 className="text-3xl font-bold text-white">
            AI Interview Coach
          </h1>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-8">
          <a href="#features" className="text-white hover:text-indigo-400">
            Features
          </a>

          <a href="#how" className="text-white hover:text-indigo-400">
            How it Works
          </a>

          <a href="#stats" className="text-white hover:text-indigo-400">
            Stats
          </a>

          <Link
            to="/login"
            className="text-white hover:text-indigo-400"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;