import React from "react";


const Header = function() {
    
    return (
      
      <header>
      <div className="logo"><a href="#">Crowdme</a></div>
      <nav className="navbar">   
          <ul className="navbar-menu">
              <li><a href="#">home</a></li>
              <li><a href="#">how it works</a></li>
              <li><a href="#">discover a project</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">find out more</a></li>
          </ul>      
      </nav>
      <div className="header-btn">
          <button className="btn">login</button>
      </div>   
  
  </header>
    )
};

export default Header;