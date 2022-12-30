import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";
import left from '../img/left.png';
import right from '../img/right.png'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick} 
    ><img src={right} alt="" srcSet="" /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    ><img src={left} alt="" srcSet="" /></div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow/>,
      appendArrows: $('.slide__arrows')
    };

   
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div className="slide__arrows">
        <button type="button" class="slick-next">Next</button>
        </div>
      </div>
    );
  }
}
