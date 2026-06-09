import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Roadmap from "./pages/Roadmap";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Contact from "./pages/Contact";
import ResumeMatcher from "./pages/ResumeMatcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/interview/:id" element={<Interview />} />

        <Route path="/roadmap"element={<Roadmap />}/>
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume-match" element={<ResumeMatcher />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;