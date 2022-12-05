import React from "react";
import {} from './popup__items/feat__popup.scss'
function Feat__items({active, setActive}) {

    return (
        <div className={active ? "feat__popup active" : "feat__popup"} onClick={() => setActive(false)}>
            <div className="feat__content">
            
            </div>
        </div>

    );
}

export default Feat__items