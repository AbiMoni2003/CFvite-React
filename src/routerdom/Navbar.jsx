import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav>
       
       <h1> <Link to="/">Home</Link></h1>
        <h1><Link to="/about">About</Link></h1>
        <h1><Link to="/contact">Contact</Link></h1>
       <h1><Link to="/product">Product</Link></h1> 
        
    </nav>
  )
}

export default Navbar