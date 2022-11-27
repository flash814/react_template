import React from "react";
import companies from '../img/companies.png'

const Footer = function() {
    
    return (
        <footer>
            <div className="footer__companies">
                <div className="companies"><img src={companies} alt="" srcset=""/></div>
            </div>
            <div className="copyright">Copyright © 2001 - 2014  Cssauthor.com</div>
        </footer>
    );
   }
    export default Footer