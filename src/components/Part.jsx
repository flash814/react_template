import React from "react";
import profile_1 from '../img/profile_1.png'
import profile_2 from '../img/profile_2.png'
const Part = function() {
    
    return (

<div className="part">
            <div className="container">
                <div className="part__inner-title">Be Part of a Growing International Community</div>
                <div className="part__inner-text">One of the challenges in networking is everybody thinks it's making cold calls to strangers. Actually, it's the people who already have strong trust relationships with you</div>
                <div className="part__inner-items">
                    <div className="part__inner-item">
                        <div className="part__item-border">
                            <div className="part__item-title">One of the Best </div>
                            <div className="part__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="part__item-border-buttom"></div>
                        <div className="part__item-name">
                            <div className="part__item-img"><img src={profile_1} alt=""/></div>
                            <div className="part__name">David Beckham</div>
                        </div>
                    </div>
                    <div className="part__inner-item">
                        <div className="part__item-border">
                            <div className="part__item-title">Exellent Service </div>
                            <div className="part__item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod taempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="part__item-border-buttom"></div>
                        <div className="part__item-name">
                            <div className="part__item-img"><img src={profile_2} alt=""/></div>
                            <div className="part__name">David Beckham</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Part