import React, { Children, children, cloneElement, useEffect, useState } from "react";
import left from '../img/left.png'
import right from '../img/right.png'
import $ from 'jquery';  



const Register_slider  = function({children, infinite}) {
    
    const [pages, setPages] = useState ([])
    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(10)

    
    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                    height:'100%',
                    minWidth: `${width}px`,
                    maxWidth: `${width}px`
                    }
                })
            })
        )
    }, []);
    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + width
            
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightClick = () => {
        

        setOffset((currentOffset) => {
            const newOffset = currentOffset - width

            const maxOffset = -2048
            
            console.log(newOffset)
            return Math.max(newOffset, maxOffset)
        })
    }
    
   
    

    return (
    <><div className="reg">
        <div className="container">
        <div className="window">
        <div className="reg__slider"
            style={{
                transform: `translateX(${offset}px)`
            }}
        >
            <div className="slider__item_1 ">
            
                <div className="reg__title">Intellectual Property has the Shelf Life
                    <span> of a Banana.</span>
                </div>
                <div className="reg__pos">
                    <button className="reg__btn btn">Become a member</button>
                    
                </div>
            
            </div>
            
       <div className=" slider__item_2"> 
            
                <div className="reg__title">Intellectual Property has the Shelf Life
                    <span> of a Banana.</span>
                </div>  
                <div className="reg__pos">
                    <button className="reg__btn btn">Become a member</button>
                    
                </div>
            
        </div>
            <div className=" slider__item_3">
                <div className="reg__title">Intellectual Property has the Shelf Life
                    <span> of a Banana.</span>
                </div>
                <div className="reg__pos">
                    <button className="reg__btn btn">Become a member</button>
                    
                </div>
                </div>
                </div>
        </div><div className="reg__slider_btn">
                        <a className="left__arrow" onClick={handleLeftClick}><img src={left} alt="" srcSet="" /></a>
                        <a className="right__arrow" onClick={handleRightClick} ><img src={right} alt="" /></a>
                    </div>
    </div>
    {pages}</div></>

     )
    };
    
    export default Register_slider