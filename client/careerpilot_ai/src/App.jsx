import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import AIResume from "./pages/AIResume";
import CareerRoadmap from "./pages/CareerRoadmap";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route 
          path="/register" 
          element={<Register />} 
        />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/resume" 
          element={<ResumeBuilder />} 
        />

         <Route 
            path="/ai-resume" 
            element={<AIResume />} /> 

<Route path="/career-roadmap" element={<CareerRoadmap />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;