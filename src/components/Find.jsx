import React from "react";
import sofa from '../img/sofa.png'
import wallet from '../img/wallet.png'

const Find = function() {
    
    return (
        <div className="find">
        <div className="find__bg-left">
            
        <div className="properties">
            <div className="find__item-left">
                <div className="find__img">
                    <img src={sofa} alt="" srcset=""/>
                </div>
            </div>
            <div className="find__item-right">
                <div className="find__title">
                    Find Properties
                </div>
                <div className="find__text">
                    Sign up to browse the portfolio.
Your journey to becoming a real estate baron starts here.
                </div>
                <div className="find__item-btn">
                    <button className="find__btn" id="find__btn">Become A Member</button>
                </div>
            
            </div>
        </div>
    </div>
    <div className="find__bg-right">
        <div className="buyers">
            <div className="find__item-left">
                <div className="find__img">
                    <img src={wallet} alt="" srcset=""/>
                </div>
            </div>
            <div className="find__item-right">
                <div className="find__title">
                    Find Buyers
                </div>
                <div className="find__text">
                    Sign up to browse the portfolio.
Your journey to becoming a real estate baron starts here.
                </div>
                <div className="find__item-btn">
                    <button className="find__btn">Submit Your Project</button>
                </div>
            </div>
        </div>
        </div>
</div>
        )
    };
    
    export default Find;