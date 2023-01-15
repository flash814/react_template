/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Feat__item_1 from "./Feat__item_1";
import Feat__item_2 from "./Feat__item_2";
import Feat__item_3 from "./Feat__item_3";

const Feat = function() {
    
    return (
        <div className="feat">
            <div className="container">
                <div className="feat__inner">
                 <div className="feat__inner-box">
                    <div className="feat__inner-title">Featured Projects</div>
                    <div className="feat__inner-text">Brief details of new and popular projects. To view full listings, you will be required to
                        sign up and become a member.</div>
                    </div>
                <div className="feat__inner-box">
                    <div className="feat__inner-btn">
                        <button>Become a Member</button>
                    </div>
                </div>
            </div>
            <div className="feat__items">
                <Feat__item_1/>
                <Feat__item_2/>
                <Feat__item_3/>
            </div>
            </div>
        </div>
        )
    };
    
    export default Feat;