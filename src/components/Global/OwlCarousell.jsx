

import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../styles/OwlCarousel.css';

import OwlCarousel from 'react-owl-carousel';
import CardCarousel from './CardCarousel';


const OwlCarousell = () => {

    const options = {
        loop: true,
        margin: 10,
        nav: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        center: true,

        // 
        navText: [
            "<",
            ">"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="slider" className="pt-5">
            <div className="container">
                <div className="slider">
                    <OwlCarousel className="owl-theme" {...options}>
                        <CardCarousel />
                        <CardCarousel />
                        <CardCarousel />
                        <CardCarousel />
                        <CardCarousel />
                        <CardCarousel />
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default OwlCarousell