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
                        <div key={index} className="bg-white h-[400px] text-black rounded-lg shadow-lg flex flex-col justify-between">
                            <div className="h-[250px] relative overflow-hidden">
                                <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h1 className="text-lg font-semibold">{d.name}</h1>
                                <p className="text-sm text-gray-500 mt-2">{d.description}</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">View Details</button>
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
        image: SL2,
        description: 'Explore the vibrant world of spices'
    },
    {
        name: 'Cary Products',
        image: SL4,
        description: 'Discover high-quality cary products'
    },
    {
        name: 'Traditional Marks',
        image: SL3,
        description: 'Discover the rich heritage of Sri Lankan traditional masks'
    },
    {
        name: 'Gemstone',
        image: SL1,
        description: 'Explore the beauty of gemstones'
    }
];

export default SliderComponent;
