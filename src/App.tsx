// import { useState } from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./styles/global.scss"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  console.log("App component rendered");
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
