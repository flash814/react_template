import React from "react";
import Slider from "./Slider";
import $ from 'jquery';
import icon__up from "../img/icon__up.png"
const Presentation = function() {
      
    $(document).ready(function(){
        $('#pres__title-1').on('click', function(){
        $('#pres__title-1').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-1').addClass('active__button');
        });
      
        $('#pres__title-2').on('click', function(){
        $('#pres__title-2').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-2').addClass('active__button');
        });
      
        $('#pres__title-3').on('click', function(){
        $('#pres__title-3').toggleClass('active__button');
        $('.pres__name_title').removeClass('active__button');
        $('pres__title-3').addClass('active__button');
        });
      }
      );
      
      $(document).ready(function(){
        $('#pres__title-1').on('click', function(){
        $('#pres__title-1').toggleClass('active__button');
        $('.slider__item').removeClass('active');
        $('#slider__1').addClass('active');
        });
      
        $('#pres__title-2').on('click', function(){
        $('#pres__title-2').toggleClass('active__button');
        $('.slider__item').removeClass('active');
        $('#slider__2').addClass('active');
        });
      
        $('#pres__title-3').on('click', function(){
        $('#pres__title-3').toggleClass('active__button');
        $('.slider__item').removeClass('active');
        $('#slider__3').addClass('active');
        });
      }
      );
     

    return (
      
<div className="pres">
     <div className="container">
            <div className="pres__icon"><img src={icon__up} alt="" srcSet=""/></div>
                <div className="pres__title">Our work is the presentation 
            of our capabilities.
            </div>
        <div className="pres__text regular"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>

        <p className="semi">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></div>
        <div className="pres__slider">
            <div className="pres__name">
            <ol>
                <li className="pres__name_title active__button" id="pres__title-1">Simple </li>
                <li className="pres__name_title" id="pres__title-2">Transparent</li>
                <li className="pres__name_title" id="pres__title-3">Collaborative</li>
            </ol>
            </div>
            <Slider/>
        </div>
     </div>
    </div>
    );
}

export default Presentation;