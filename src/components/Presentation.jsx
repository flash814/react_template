import React from "react";


const Presentation = function() {
    
    return (
      
<div class="presentation">
     <div class="container">
            <div class="pres__icon"><img src="/img/icon__up.png" alt="" srcset=""/></div>
                <div class="pres__title"><h1>Our work is the presentation 
            of our capabilities.
            </h1></div>
        <div class="pres__text regular"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>

        <p class="semi">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
        <div class="pres__slider">
            <div class="pres__name">
                <ol>
                <li class="pres__name-title active__button" id="pres__title-1" ><button>Simple</button></li>
                <li class="pres__name-title" id="pres__title-2"><button>Transparent</button></li>
                <li class="pres__name-title" id="pres__title-3"><button>Collaborative</button></li>
            </ol>
            </div>
            <div class="slider">
                <div class="slide__item  active" id="slide__1">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src="/img/glasses.png" alt="" srcset=""/></div>
                    </div>
                    <div class="slider__item-right">                   
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div class="slide__item" id="slide__2">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src="/img/glasses.png" alt="" srcset=""/></div>
                    </div>
                    <div class="slider__item-right">                    
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
                <div class="slide__item" id="slide__3">
                    <div class="slider__item-left">
                        <div class="slider__img"><img src="/img/glasses.png" alt="" srcset=""/></div>
                    </div>
                    <div class="slider__item-right">
                        <div class="slider__title">Browse projects, like booking a hotel online !</div>
                        <div class="slider__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>

        )
};

export default Presentation;