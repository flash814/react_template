import React from "react";


const Header = function() {
    
    return (
      
      <header>
      <div className="header__logo"><a href="#">Crowdme</a></div>
      <nav className="navbar">   
          <ul className="navbar__menu">
              <li><a href="#">home</a></li>
              <li><a href="#">how it works</a></li>
              <li><a href="#">discover a project</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">find out more</a></li>
          </ul>   
          <div className="navbar__btn">
          <button className="btn">login</button>
      </div>   
      </nav>
         
  
  </header>
    )
};

export default Header;