import React, { useState } from "react"; 
import feat_1 from '../img/feat_1.png'
import FEAT__POPUP from "./popup__items/FEAT__POPUP";
function Feat__item_1 (props) {
     const [buttonPopup, setButtonPopup] = useState(false);
     const Popup = () => setButtonPopup(true);
    return (
        <><div className="feat__item" onClick={Popup}>
            <div className="feat__item-img"><div className="new"><p>NEW</p></div><img src={feat_1} alt="" srcSet="" /></div>
            <button>From GBP  3600</button> 
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
                <div className="feat__details">
                    <div className="feat__details_name">See Project Details</div>
                    <div className="arrow"></div>
                </div>
            </div>
            </div>
            <FEAT__POPUP trigger={buttonPopup} setTrigger=
            {setButtonPopup}>
                <div className="feat__popup">
                    <div className="feat__content" onClick={Popup}>
                        
                        <div className="feat__item-img  popup__img">
                            <img src={feat_1} alt="" srcSet="" />
                        </div>
                        <div className="feat__item-description">
                            <div className="feat__description-title popup__title">Ontario Tower , LONDON</div>
                            <div className="feat__description-text popup__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            
                            <div className="feat__description-complete popup__complete">
                                <div className="feat__complete">
                                    <progress value="10" max="100"></progress>
                                </div>
                                <div className="feat__remaining">
                                    <div className="feat__complete-percent  popup__percent">10% Funded</div>
                                    <div className="feat__remaining-time popup__time">8 Days Left</div>
                                </div>
                                <button className="btn__price  popup__price">From GBP  3600</button>
                            </div>
                        </div>
                    </div>
                </div>
            </FEAT__POPUP>                
        </>
    );
}
 export default Feat__item_1