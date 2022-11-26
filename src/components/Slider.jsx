import React from "react";

import glasses from '/OpenServer/domains/react_template/src/img/glasses.png'

const Slider = function() {
    
        return(
            <div class="slider">
                <div class="slide__item  active" id="slide__1">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src={glasses} alt="" srcset=""/></div>
                 </div>
                    <div class="slider__item-right">                   
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div class="slide__item" id="slide__2">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src={glasses} alt="" srcset=""/></div>
                 </div>
                    <div class="slider__item-right">                   
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div class="slide__item" id="slide__3">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src={glasses} alt="" srcset=""/></div>
                 </div>
                    <div class="slider__item-right">                   
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>                                
            </div>
            )
        };
        
export default Slider