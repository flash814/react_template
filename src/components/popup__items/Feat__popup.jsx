import { event} from 'jquery';
import React, { useState } from "react";
import {} from '../popup__items/feat__popup.scss'

function Feat__popup(props) {
    const popup = document.querySelectorAll("feat__popup");
    const Feat__popups= (event) => {
        
        console.log(event.target)
        if(event.target == popup) {
            props.setTrigger(false)
       
        }  
        }
        
        
        const closePopup = (event) => {
            props.setTrigger(false)
        };
    return (props.trigger) ? (
        <div className="feat__popup" onClick={Feat__popups}>
            <div className="feat__btn" >        
                <button className="close__btn" onClick={closePopup} >x</button>                
                {props.children}
            </div> 
        </div>

    ) : "";

}

export default Feat__popup;