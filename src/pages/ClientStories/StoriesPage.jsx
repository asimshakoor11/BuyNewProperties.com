import React, { useEffect, useRef } from 'react'
import StoriesPagination from '../../components/ClientStoriesPageComps/StoriesPagination';
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StoriesPage = () => {

    const heroContentRef = useRef(null);

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
            <section className="section parallax-bg lg:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold">Client Stories</h1>
                </div>
            </section>

            <section className='px-[7%] pb-[80px] pt-[40px] bg-white relative z-30 -mt-10 rounded-tl-[40px] rounded-tr-[40px]'>
                <StoriesPagination />
            </section>

            <section className="section text-center bg-bggray">
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-center">
                    Would you like to become one <br /> of our success stories?
                </h2>
                <p className="text-[#2A2A2A] my-8 max-w-md mx-auto">
                    Contact us today to speak with one of our experienced experts. They will guide you seamlessly through the entire process, ensuring a stress-free move. Click the button below to get started!
                </p>
                <button
                    className="flex items-center mx-auto bg-primarycolor hover:bg-primarycolorhover font-medium  text-white px-6 py-3 rounded-lg shadow cursor-pointer transition-colors duration-300 ease-in-out">
                    <span> Contact Us Today</span>
                    <FontAwesomeIcon icon={'chevron-right'} size='lg' className='ml-5' /> 
                </button>
            </section >

            <section className=''>
                <DreamHomeContact />
            </section>

        </>
    )
}

export default StoriesPage