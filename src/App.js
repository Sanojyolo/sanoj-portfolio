import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
// import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/project/:id" element={<ProjectDisplay />} /> */}
          <Route path="/contact" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;