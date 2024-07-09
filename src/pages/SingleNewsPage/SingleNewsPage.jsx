import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import LatestUpdatesCarousel from '../../components/HomePageComps/LatestUpdatesCarousel';
import AticlesSection from '../../components/SingleNewsPageComp/AticlesSection'

const SingleNewsPage = () => {
    const heroContentRef = useRef(null);
    const { title } = useParams();

    useEffect(() => {
        const parallaxEffect = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector('.parallax-bg');
            const heroContent = heroContentRef.current;
            if (window.innerWidth > 1000) {

                if (parallax) {
                    parallax.style.backgroundPositionY = `-${scrolled * 0.3}px`; // Adjusts slower parallax scrolling
                }
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`; // Adjusts slower scrolling for hero content
                }
            }
        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);



    return (
        <>
            <section className="section parallax-bg md:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative flex justify-start items-end h-full  text-white pt-80 mb-10">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold ">{decodeURIComponent(title)}</h1>
                </div>
            </section>

            <section className='section relative z-50 bg-white -mt-10 rounded-tr-[40px] rounded-tl-[40px]'>
                <AticlesSection title={decodeURIComponent(title)} />

            </section>

            <section className='section bg-bggray relative z-20' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left pl-[7%]">You May Also Like</h2>
                <LatestUpdatesCarousel />
            </section>
        </>
    )
}

export default SingleNewsPage