import {
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  User,
  Bot,
  Briefcase,
  FileText,
  Route,
  BookOpen,
  Code2
} from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-black py-20 px-6">

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Photo */}

          <img
            src="/photo.jpeg"
            alt="Profile"
            className="w-60 h-60 rounded-full border-4 border-indigo-500 object-cover"
          />

          <div>

            <h1 className="text-5xl font-bold text-white">
              Pranjul 
            </h1>

            <p className="text-indigo-400 text-xl mt-2">
              MERN Stack & AI Developer
            </p>

            <p className="text-gray-300 mt-5 leading-8">
              Passionate software developer with strong knowledge of
              MERN Stack, Data Structures & Algorithms, and Artificial
              Intelligence. I enjoy building scalable web applications
              and solving real-world problems through technology.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-indigo-400 mb-5">
              Personal Details
            </h2>

            <p className="text-white flex items-center gap-3 mb-4">
              <User /> Pranjul 
            </p>

            <p className="text-white flex items-center gap-3 mb-4">
              <Phone /> +91 8115814730
            </p>

            <p className="text-white flex items-center gap-3 mb-4">
              <Mail /> pranjulcg@gmail.com
            </p>

            <p className="text-white flex items-center gap-3 mb-4">
              <Mail /> pranjul.20225061@mnnit.ac.in
            </p>

            <p className="text-white flex items-center gap-3 mb-4">
      
      GitHub: https://github.com/Pran2k26
    </p>


   <p className="text-white flex items-center gap-3 mb-4">
      
      Linkdin: https://www.linkedin.com/in/pran-2k22-world
    </p>

            <p className="text-white flex items-center gap-3">
              <MapPin /> Chhattisgarh, India
            </p>

          </div> */}
          <div className="bg-slate-900 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-indigo-400 mb-5">
    Personal Details
  </h2>

  <p className="text-white flex items-center gap-3 mb-4">
    <User size={20} />
    Pranjul Dhruv
  </p>

  <p className="text-white flex items-center gap-3 mb-4">
    <Phone size={20} />
    +91 8115814730
  </p>

  <p className="text-white flex items-center gap-3 mb-4">
    <Mail size={20} />
    pranjulcg@gmail.com
  </p>

  <p className="text-white flex items-center gap-3 mb-4">
    <Mail size={20} />
    pranjul.20225061@mnnit.ac.in
  </p>

  <p className="text-white flex items-center gap-3 mb-4">
    <Code2 size={20} />
      <a
    href="https://github.com/Pran2k26"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition-colors"
  >

    github.com/Pran2k26
  </a>
  </p>

  <p className="text-white flex items-center gap-3 mb-4">
    <Briefcase size={20} />
     <a
    href="https://www.linkedin.com/in/pran-2k22-world"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-indigo-400 transition-colors"
  >
    linkedin.com/in/pran-2k22-world
  </a>
    
  </p>

  <p className="text-white flex items-center gap-3">
    <MapPin size={20} />
    Chhattisgarh, India
  </p>

</div>

          {/* <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-bold text-indigo-400 mb-5">
              Education
            </h2>

            <p className="text-white flex gap-3">
              <GraduationCap />
              Bachelor of Technology
              <br />
              Motilal Nehru National Institute of Technology
              <br />
              Prayagraj
            </p>

          </div> */}
          <div className="bg-slate-900 rounded-2xl p-6">

  <h2 className="text-2xl font-bold text-indigo-400 mb-5">
    Education
  </h2>

  {/* B.Tech */}
  <div className="flex gap-3 mb-6">
    <GraduationCap className="text-indigo-400 mt-1" size={22} />
    <div>
      <h3 className="text-white font-semibold text-lg">
        Bachelor of Technology (B.Tech)
      </h3>
      <p className="text-gray-300">
        Motilal Nehru National Institute of Technology (MNNIT), Prayagraj
      </p>
      <p className="text-gray-400 text-sm">
        Electrical Engineering
      </p>
    </div>
  </div>

  {/* Class XII */}
  <div className="flex gap-3 mb-6">
    <GraduationCap className="text-indigo-400 mt-1" size={22} />
    <div>
      <h3 className="text-white font-semibold text-lg">
        Higher Secondary (Class XII)
      </h3>
      <p className="text-gray-300">
        Vinyaas Public School (CBSE)
      </p>
      <p className="text-gray-400 text-sm">
        Science Stream
      </p>
    </div>
  </div>

  {/* Class X */}
  <div className="flex gap-3">
    <GraduationCap className="text-indigo-400 mt-1" size={22} />
    <div>
      <h3 className="text-white font-semibold text-lg">
        Secondary (Class X)
      </h3>
      <p className="text-gray-300">
        Vinyaas Public School (CBSE)
      </p>
    </div>
  </div>

</div>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-bold text-indigo-400 mb-5">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JavaScript",
              "C++",
              "Tailwind CSS",
              "JWT",
              "REST API",
              "AI",
              "Git",
              "DSA",
              "LLM",
              "Python",
              "system Design"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-indigo-600 px-4 py-2 rounded-full text-white"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 mt-8">

  <h2 className="text-2xl font-bold text-indigo-400 mb-5">
    Languages
  </h2>

  <div className="flex flex-wrap gap-3">

    <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">
      🇮🇳 Hindi (Native)
    </span>

    <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">
      🇬🇧 English (Professional)
    </span>

  </div>

</div>

        {/* <div className="bg-slate-900 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-bold text-indigo-400 mb-5">
            Major Projects
          </h2>

          <ul className="text-white space-y-3">

            <li>
              🤖 AI Interview Coach
            </li>

            <li>
              💼 MERN Job Portal
            </li>

            <li>
              📄 AI Resume Analyzer
            </li>

            <li>
              🗺️ AI Roadmap Generator
            </li>

            <li>
                
                Learning Management System
            </li>

          </ul>

        </div> */}
        <div className="bg-slate-900 rounded-2xl p-6 mt-8">

  <h2 className="text-2xl font-bold text-indigo-400 mb-5">
    Major Projects
  </h2>

  <ul className="space-y-4">

    <li className="flex items-center gap-3 text-white">
      <Bot className="text-indigo-400" size={22} />
      AI Interview Coach
    </li>

    <li className="flex items-center gap-3 text-white">
      <Briefcase className="text-indigo-400" size={22} />
      MERN Job Portal
    </li>

    <li className="flex items-center gap-3 text-white">
      <FileText className="text-indigo-400" size={22} />
      AI Resume Analyzer
    </li>

    <li className="flex items-center gap-3 text-white">
      <Route className="text-indigo-400" size={22} />
      AI Roadmap Generator
    </li>

    <li className="flex items-center gap-3 text-white">
      <BookOpen className="text-indigo-400" size={22} />
      Learning Management System
    </li>

  </ul>

</div>

        <div className="flex justify-center gap-8 mt-10">

          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-xl text-white hover:bg-indigo-600"
          >
            <Github />
            GitHub
          </a> */}

          {/* <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-700 px-6 py-3 rounded-xl text-white hover:bg-blue-500"
          >
            <LinkedinIcon />
            LinkedIn
          </a> */}

        </div>

      </div>

    </div>
  );
}

export default Contact;
// function Contact() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-black text-white text-5xl">
//       Contact Page Working ✅
//     </div>
//   );
// }

// export default Contact;