import React from "react";
import glasses from '/OpenServer/domains/react_template/src/img/glasses.png'

const Slider = function() {
    
   

        return(
            <div className="slider">
                <div className="slider__item  active" id="slider__1">
                    <div className="slider__item-left">
                        <div className="slider__img"><img src={glasses} alt="" srcSet=""/></div>
                 </div>
                    <div className="slider__item-right">                   
                        <div className="slider__title">Browse projects, like booking a hotel online !</div>
                        <div className="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div className="slider__item" id="slider__2">
                    <div className="slider__item-left">
                        <div className="slider__img"><img src={glasses} alt="" srcSet=""/></div>
                 </div>
                    <div className="slider__item-right">                   
                        <div className="slider__title">Browse projects, like booking a hotel online !</div>
                        <div className="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div className="slider__item" id="slider__3">
                    <div className="slider__item-left">
                        <div className="slider__img"><img src={glasses} alt="" srcSet=""/></div>
                 </div>
                    <div className="slider__item-right">                   
                        <div className="slider__title">Browse projects, like booking a hotel online !</div>
                        <div className="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>                                
            </div>
            )
        };
        
export default Slider