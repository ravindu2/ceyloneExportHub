import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SL1 from '../assets/slider/gemstone.jpeg';
import SL2 from '../assets/slider/spices.jpeg';
import SL3 from '../assets/slider/Traditional-masks-of-Sri-Lanka-5.jpg';
import SL4 from '../assets/slider/Image-10.jpg';
const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div key={index} className="bg-white h-[250px] text-black">
                            <div>
                                <img src={d.image} alt={d.name} className="h-50 " />
                            </div>
                            <div>
                                <h1>{d.name}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const data = [
    {
        name: 'Spices',
        image: SL2
    },
    {
        name: 'Cary Products',
        image: SL4
    },
    {
        name: 'Traditional Marks',
        image: SL3
    },
    {
        name: 'Gemstone',
        image: SL1
    }
];

export default SliderComponent;
