// function Footer() {
//   return (
//     <footer className="border-t border-white/10 py-10 bg-[#030712]">

//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

//         <div>

//           <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">

//             AI Interview Coach

//           </h2>

//           <p className="text-gray-500 mt-2">

//             Practice • Improve • Succeed

//           </p>

//         </div>

//         <div className="flex gap-8 mt-6 md:mt-0">

//           <a href="https://github.com/Pran2k26"  target="_blank" className="hover:text-indigo-400">
//             GitHub
//           </a>

//           <a href="https://www.linkedin.com/in/pran-2k22-world/" target="_blank" className="hover:text-indigo-400">
//             LinkedIn
//           </a>

//           {/* <a href="#" className="hover:text-indigo-400">
//             Contact
//           </a> */}
//           <button onClick={() => navigate("/contact")}>
//   Contact
// </button>

//         </div>

//       </div>

//     </footer>
//   );
// }

// export default Footer;
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/10 py-10 bg-[#030712]">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            AI Interview Coach
          </h2>

          <p className="text-gray-500 mt-2">
            Practice • Improve • Succeed
          </p>

        </div>

        <div className="flex gap-8 mt-6 md:mt-0">

          <a
            href="https://github.com/Pran2k26"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pran-2k22-world/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400"
          >
            LinkedIn
          </a>

          <button
            onClick={() => navigate("/contact")}
            className="hover:text-indigo-400"
          >
            Contact
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;