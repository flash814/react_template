import React from 'react'
import {} from '../popup__items/feat__popup.scss'

const Feat__popup = ({active, setActive}) => {

    return(
        <div className={active ? "feat__popup active" : "feat__popup"} onClick={ () => setActive(false)}>
            <div className="feat__content" onClick={e => e.stopPropagation()}>
                
            </div>
        </div>

    )

}

export default Feat__popup;