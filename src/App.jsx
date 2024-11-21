import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Test from "./pages/Test";
import Details from "./propsConcep/Details";
import User from "./propsConcep/User";


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/home" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/Test" element={<Test />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <User/>
  );
}

export default App;