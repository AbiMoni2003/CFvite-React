import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Test from "./pages/Test";
import Details from "./propsConcep/Details";
import User from "./propsConcep/User";
import Cart from "./responsive/Cart";
import Home1 from './routerdom/Home';
import About1 from "./routerdom/About";
import Contact1 from "./routerdom/Contact";
import Product from "./routerdom/Product";
import Error from "./routerdom/Error";


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
   // <Cart/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home1/>}/>
    <Route path="/home" element={<Home1/>}/>
    <Route path="/about" element={<About1/>}/>
    <Route path="/contact" element={<Contact1/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;