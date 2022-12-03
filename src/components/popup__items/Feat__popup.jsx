import React from 'react'
import {} from '../popup__items/feat__popup.scss'

function Feat__popup(props) {
    return (props.trigger) ? (
        <div className="feat__popup">
            <div className="feat__content">
                <button className="close__btn" onClick={()=> props.setTrigger(false) } >x</button>                
                { props.children}
            </div>
        </div>

    ) : "";

}

export default Feat__popup;