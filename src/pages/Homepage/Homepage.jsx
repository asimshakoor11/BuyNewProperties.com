import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import LatestDevelopmentCard from '../../components/LatestDevlopmentsCard';
import LatestUpdatesCarousel from '../../components/LatestUpdatesCarousel';
import { motion } from 'framer-motion';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import DevlopmentLocations from '../../components/DevlopmentLocations';
import DreamHomeContact from '../../components/DreamHomeContact';
import WhyWorkWithUsCarousel from '../../components/WhyWorkWithUsCarousel';
import LuxuryDevelopments from '../../components/LuxuryDevelopments';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {

    const data = [
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 1' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 2' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 3' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 4' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 5' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 6' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 7' },
    ];

    const overlayRef = useRef(null);
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
                    heroContent.style.transform = `translateY(${scrolled * 0.4}px)`; // Adjusts slower scrolling for hero content
                }
            }

        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 180, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            // mirror: false, // whether elements should animate out while scrolling past them
            // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            <section className="h-screen relative parallax-bg p-[7%] lg:bg-fixed lg:bg-cover lg:bg-center"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)"}}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={overlayRef} className='absolute hidden inset-0 bg-black opacity-0 transition-opacity duration-300 z-20'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-start justify-center md:justify-end  lg:[pt-0] h-full text-white text-center ">
                    <h1 className="text-[6vw] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold font-BebasNeueSemiExpBold -mb-4">The #1 Source For</h1>
                    <h1 className="text-[9vw] sm:text-[50px] md:text-[65px] lg:text-[78px] font-bold font-Playfair -mb-2">New Developments</h1>
                    <h1 className="text-[6vw] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold font-BebasNeueSemiExpBold mb-3 sm:mb-4">Best New Homes In Portugal, <span className='bg-[#B69D74]'>Find Yours.</span> </h1>
                    <h1 className="text-[2vw] sm:text-[11px] md:text-[14px] lg:text-[16px] font-medium">Voted the best way to buy new developments 2023-2024 according to Simple Expat  </h1>
                </div>
            </section>

            <div className='relative z-30'>
                <section>
                    <DevlopmentLocations />
                </section>

                <section className='section bg-white'>
                    <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">Latest Developments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                        {data.map((item, index) => (
                            <LatestDevelopmentCard key={index} index={index} item={item} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-5">
                        <button className="buttonLong bg-primarycolor text-white text-center">See All Developments</button>
                    </div>
                </section>

                <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                    <WhyWorkWithUsCarousel />
                </section>

                <section className='section bg-white'>

                    <div className="w-full mx-auto">
                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left">Become An Agent</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-8">
                            <div className="px-0 lg:pr-12">
                                <img src="/images/homepage/becomeanagent.png" alt="Team collaboration" className="w-full rounded-lg" />
                            </div>
                            <div>
                                <div data-aos="fade-up" data-aos-delay="50" >
                                    <div className='w-full h-[33px] flex items-center mb-4'>
                                        <img src="/images/icons/users-alt.png" alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                                    </div>

                                    <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Generate more clients</h2>
                                    <p className="text-fontlight mb-6">
                                        Unlock unparalleled success in real estate with our dynamic approach, leveraging advanced digital marketing strategies, personalized brand investment, international partnerships, and cutting-edge software solutions to supercharge your lead generation and propel your business to new heights.
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="50">
                                    <div className='w-full h-[37px] flex items-center mb-4'>
                                        <img src="/images/icons/global.png" alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                                    </div>

                                    <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Global Network</h2>
                                    <p className="text-fontlight mb-6">
                                        Our global network of partners consistently sends us high-quality clients. When you build connections with these partners, they can send you exclusive leads through our proprietary software. The possibilities are endless.
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="50">
                                    <div className='w-full h-[33px] flex items-center mb-4'>
                                        <img src="/images/icons/heartt.png" alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                                    </div>

                                    <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Build a World-Class Brand & Amplify Your Real Estate Following
                                    </h2>
                                    <p className="text-fontlight mb-6">
                                        Boost your brand and business with our full-service creative workshop and award-winning content studio. Leverage proven strategies and modern techniques that built the world's most followed real estate brand. Enhance your reach, tap into social media trends, and establish yourself as a leading voice in your market and globally.
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="50">
                                    <div className='w-full h-[30px] flex items-center mb-4'>
                                        <img src="/images/icons/growth.png" alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h2 className="font-semibold text-xl md:text-2xl mb-2  text-primarycolor">Professional & Personal Growth</h2>
                                    <p className="text-fontlight  mb-6">
                                        We foster your growth both as a real estate agent and as an individual. Our passionate team supports and motivates each other daily to become the best versions of ourselves. More than just a business, we are a family.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="bg-primarycolor text-white text-center buttonLong">Join Us</button>
                        </div>
                    </div>
                </section >

                <section className=''>
                    <DreamHomeContact />
                </section>

                <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Luxury Developments</h2>

                    <LuxuryDevelopments />
                </section>


                <section className='section bg-white ' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left pl-[7%]">Latest Updates in Real Estate</h2>
                    <LatestUpdatesCarousel />
                </section>
            </div>
        </>
    )
}

export default Homepage