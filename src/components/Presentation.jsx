import React from "react";
import Slider from "./Slider";


const Presentation = function() {
    

      
    return (
      
<div class="pres">
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
            <Slider/>
        </div>
     </div>
    </div>

        )
};

export default Presentation;