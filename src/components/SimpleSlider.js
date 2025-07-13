import React from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
};

const SimpleSlider = class extends React.Component {
    constructor(props) {
        super(props);
        this.slides = props.slides;
        console.log(this.slides);
    }

    render() {
        return (
            <Slider {...settings} className="simple-slider">
                {this.slides.map(slide => (
                    <div>
                        {(slide.image !== 'none') ? (<img src={"/img/" + slide.image} alt={slide.text}/>) : null}
                        {(slide.title !== 'none') ? (<h3>{slide.title}</h3>) : null}
                        <p>{slide.text}</p>
                    </div>
                ))}
            </Slider>
        );
    }
};

export default SimpleSlider;
