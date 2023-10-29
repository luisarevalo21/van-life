import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Vans from "./components/Vans";
import Home from "./components/Home";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </div>
  );
}

export default App;
