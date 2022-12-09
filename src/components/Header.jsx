import React from "react";


const Header = function() {
    
    return (
      
    <header className="header">
        <div className="container">
            <div className="header__logo"><a href="#">Crowdme</a></div>
            <div className="navbar__burger">
                <span></span>
            </div>
            <nav className="navbar">   
                <ul className="navbar__menu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">how it works</a></li>
                    <li><a href="#">discover a project</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">find out more</a></li>
                    <li><button className="navbar__btn btn">login</button></li>
                </ul>      
            </nav>
        </div>
    </header>
    )
};

export default Header;