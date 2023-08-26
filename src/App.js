import React from "react";
import Navbar from "./components/Navbar";
import SocialFollow from "./components/shared/SocialFollow";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Year1 from "./pages/year1";
import Year2 from "./pages/year2";
import Year34 from "./pages/year34";
import Year56 from "./pages/year56";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <div id="page">
        <div id="nav">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/year1" element={<Year1 />} />
            <Route path="/year2" element={<Year2 />} />
            <Route path="/year34" element={<Year34 />} />
            <Route path="/year56" element={<Year56 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="footer">
          <footer>
            <SocialFollow />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
