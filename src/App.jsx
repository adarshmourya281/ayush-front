import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#fdfdfd] overflow-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/benefits"
          element={<Benefits />}
        />

        <Route
          path="/pricing"
          element={<Pricing />}
        />

        <Route
          path="/testimonials"
          element={<Testimonials />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;