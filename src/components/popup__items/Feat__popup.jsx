
import React from "react";
import {} from '../popup__items/FEAT__POPUP.scss'



function FEAT__POPUP(props) {

        const closePopup = (_event) => {
            props.setTrigger(false)
        };
    return (props.trigger) ? (
        <div className="feat__popup" >
            <div className="feat__btn" >        
                <button className="close__btn" onClick={closePopup} >x</button>                
                {props.children}
            </div> 
        </div>

    ) : "";

}

export default FEAT__POPUP;