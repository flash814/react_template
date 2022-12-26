import React, { Children, children, cloneElement, useEffect, useState, useContext } from "react";
import left from '../img/left.png'
import right from '../img/right.png'
import $ from 'jquery';  
import Slider from "react-slick";
import Feat__item_1 from "./slideArrows";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NextButton from "./NextButton";

const Register_slider  = function({children, infinite}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,  
        
        prevArrow: <Feat__item_1/>,
        nextArrow: <NextButton/>
      };
    
    return (
    <><div className="reg">
        <div className="container">
            <div className="window">
                <Slider {...settings}>
                    <div className="slider__item">
                        <div className="reg__title">Intellectual Property has the Shelf Life
                            <span> of a Banana.</span>
                        </div>
                        <div className="reg__pos">
                            <button className="reg__btn btn">Become a member</button>
                        </div>                       
                    </div>  
                    <div className=" slider__item">
                        <div className="reg__title">Intellectual Property has the Shelf Life
                            <span> of a Banana.</span>
                        </div>  
                        <div className="reg__pos">
                            <button className="reg__btn btn">Become a member</button>
                        </div>                        
                    </div>
                    <div className=" slider__item">
                        <div className="reg__title">Intellectual Property has the Shelf Life
                            <span> of a Banana.</span>
                        </div>
                        <div className="reg__pos">
                            <button className="reg__btn btn">Become a member</button>
                        </div>                        
                    </div>                  
            </Slider>
                <div className="slider__arrows">
                    <Feat__item_1/>
                    <NextButton/>
                </div>
            </div>
        </div>  
    </div></>

     )
    };
    
    export default Register_slider