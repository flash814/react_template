import React from "react"; 
import feat_1 from '../img/feat_1.png'
function Feat__item_1 () {
    return (
        <div className="feat__item">
            <div className="feat__item-img"><img src={feat_1} alt="" srcSet="" /><button>From GBP  3600</button></div>
            <div className="feat__item-description">
                <div className="feat__description-title">Ontario Tower , LONDON</div>
                <div className="feat__description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="feat__description-complete">
                    <div className="feat__complete"><progress value="10" max="100"></progress></div>
                    <div className="feat__remaining">
                        <div className="feat__complete-percent">10% Funded</div>
                        <div className="feat__remaining-time">8 Days Left</div>
                    </div>
                </div>
                <div className="feat__details">See Project Details</div>
            </div>
        </div>
    );
}

export default Feat__item_1