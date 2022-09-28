import React, { Component } from 'react';
import ProductCard from '../productCard/ProductCard';
import './OurProducts.scss';
import Slider from 'react-slick';

const OurProducts = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
        ]
    };

    return (
        <div className='ourproducts-container'>
            <h1>Our Products</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        [1, 2, 4, 5, 5, 6, 7].map((productCard, index) => {
                            return <div key={index}>
                                <ProductCard />
                            </div>
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default OurProducts;