import React from "react";
import left from '../img/left.png'
import right from '../img/right.png'
const Register = function() {
    

    return (

<div className="register">
        <div className="container">
            <div className="reg__title">Intellectual Property has the Shelf Life 
                <span> of a Banana</span>.
            </div>
            <div className="reg__pos">
                <button className="reg__btn btn">Become a member</button>
                <div className="reg__slide_btn">
                    <a className="left__btn"><img src={left} alt="" srcSet="" /></a>
                    <a className="right__btn"><img src={right} alt="" /></a>
                </div>
            </div>         
        </div>    
    </div>
     )
    };
    
    export default Register;