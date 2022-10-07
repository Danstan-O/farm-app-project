import { NavLink } from "react-router-dom";

function NavBar() {
  return ( 
  <div className="navbar">
    <ul>
     <li><NavLink to="/" exact>home</NavLink></li>
      <li><NavLink to="/about" exact>about</NavLink></li>
      <li><NavLink to="/products" exact>products</NavLink></li>
     <li><NavLink to="/services" exact>services</NavLink></li>
     <li><NavLink to="/review" exact>review</NavLink></li>
     <li><NavLink to="/contact" exact>contact</NavLink></li>
     <li><NavLink to="/blogs" exact>blogs</NavLink></li>
    </ul>
  </div>
  );
}

export default NavBar;