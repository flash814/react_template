import React from "react";


const Header = function() {
    
    return (
      
      <header>
      <div class="logo"><a href="#">Crowdme</a></div>
      <nav class="navbar">   
          <ul class="navbar-menu">
              <li><a href="#">home</a></li>
              <li><a href="#">how it works</a></li>
              <li><a href="#">discover a project</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">find out more</a></li>
          </ul>      
      </nav>
      <div class="header-btn">
          <button class="btn">login</button>
      </div>   
  
  </header>
    )
};

export default Header;