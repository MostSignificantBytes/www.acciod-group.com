import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>Slider page 1</h3>
            </div>
            <div>
                <h3>Slider page 2</h3>
            </div>
            <div>
                <h3>Slider page 3</h3>
            </div>
            <div>
                <h3>Slider page 4</h3>
            </div>
            <div>
                <h3>Slider page 5</h3>
            </div>
            <div>
                <h3>Slider page 6</h3>
            </div>
        </Slider>
    );
}