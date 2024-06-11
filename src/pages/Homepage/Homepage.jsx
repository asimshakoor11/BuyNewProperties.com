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

    const titles = ['All Types of Property', 'Number of Bedrooms', 'All Regions'];
    const dropdownItems = [
        ['House', 'Townhouse', 'Apartment', 'Commercial'],
        [],
        ['Region 1', 'Region 2', 'Region 3'],
    ];

    const [numBedrooms, setNumBedrooms] = useState(0);

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const incrementBedrooms = () => {
        setNumBedrooms((prevNum) => prevNum + 1);
    };

    const decrementBedrooms = () => {
        setNumBedrooms((prevNum) => (prevNum > 1 ? prevNum - 1 : 1));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current[openDropdown] && !dropdownRefs.current[openDropdown].contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);
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
            const overlay = overlayRef.current;
            if (parallax) {
                parallax.style.backgroundPositionY = `-${scrolled * 0.1}px`; // Adjusts slower parallax scrolling
            }
            if (overlay) {
                const maxOpacity = 0.8;
                const overlayOpacity = Math.min(scrolled / window.innerHeight, maxOpacity);
                overlay.style.opacity = overlayOpacity;
                if (scrolled > 0) {
                    overlay.classList.remove('hidden'); // Remove the hidden class when scrolling starts
                } else {
                    overlay.classList.add('hidden'); // Add the hidden class when back to top
                }
            }
            // if (heroContent) {
            //     heroContent.style.transform = `translateY(${scrolled * 10}px)`; // Adjusts slower scrolling for hero content
            // }

        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 0, // offset (in px) from the original trigger point
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
            <section className=" h-screen bg-cover bg-center relative parallax-bg"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)", backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={overlayRef} className='absolute hidden inset-0 bg-black opacity-0 transition-opacity duration-300 z-20'></div>
                <div  className="fixed w-full z-10 flex flex-col items-center justify-center h-full text-white text-center py-[170px] ">
                    <h1 className="text-5xl lg:text-6xl font-bold font-BebasNeueSemiExpBold">A New Standard In <br /> Real Estate</h1>
                    <div className="mt-8 bg-bggray p-4 rounded-lg shadow-md flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-4 text-black">
                        {titles.map((title, index) => (
                            <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                                <button
                                    className="w-[240px] bg-transparent border-black py-2 lg:py-3 px-4  font-semibold rounded-lg border-2 flex flex-row justify-between items-center gap-2"
                                    onClick={() => {
                                        toggleDropdown(index)
                                    }}
                                >
                                    <span>{title}</span>
                                    <motion.span
                                        animate={{ rotate: openDropdown === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-2"
                                    >
                                        <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                    </motion.span>
                                </button>
                                {openDropdown === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute right-0 z-30 w-full bg-bggray shadow-lg rounded-md py-2 lg:py-3 font-semibold`}
                                    >
                                        {index === 1 ? (
                                            <div className="flex flex-row justify-between items-center px-4 py-2 lg:py-3">
                                                <span className="">{numBedrooms} Bedrooms</span>
                                                <div className="flex items-center mt-2">
                                                    <button onClick={decrementBedrooms} className="px-2 py-0 border mr-2 border-black rounded-md">-</button>
                                                    <button onClick={incrementBedrooms} className="px-2 py-0 border border-black rounded-md">+</button>
                                                </div>
                                            </div>
                                        ) : dropdownItems[index].map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="flex flex-row px-4 py-2 lg:py-3 cursor-pointer border-black transition-colors hover:bg-gray-300 duration-150"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <input type="checkbox" id={`checkbox${itemIndex}`} className='mr-2 border' />
                                                <label htmlFor={`checkbox${itemIndex}`} className='w-full cursor-pointer text-start'>{item}</label>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <button className="w-full bg-primarycolor text-white p-2 rounded-lg py-2 lg:py-3 px-10">Search</button>
                    </div>
                </div>
            </section>

            <section>
                <DevlopmentLocations />
            </section>

            <section className='section bg-white relative z-30'>
                <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">Latest Developments</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                    {data.map((item, index) => (
                        <LatestDevelopmentCard key={index} index={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <button className="buttonLong bg-primarycolor text-white text-center">See the Development</button>
                </div>
            </section>

            <section className='section' style={{ padding: "80px 0% 80px 7%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel />
            </section>

            <section className='section bg-white'>

                <div className="w-full mx-auto">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left">Become An Agent</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-8">
                        <div className="" data-aos="zoom-in" duration="1000">
                            <img src="/images/homepage/becomeanagent.png" alt="Team collaboration" className="w-full rounded-lg" />
                        </div>
                        <div>
                            <div data-aos="fade-up" >
                                <h2 className="font-bold  text-xl md:text-2xl mb-2 text-primarycolor">Generate more clients</h2>
                                <p className="text-fontlight mb-6">
                                    Unlock unparalleled success in real estate with our dynamic approach, leveraging advanced digital marketing strategies, personalized brand investment, international partnerships, and cutting-edge software solutions to supercharge your lead generation and propel your business to new heights.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="100">

                                <h2 className="font-bold  text-xl md:text-2xl mb-2  text-primarycolor">Global Network</h2>
                                <p className="text-fontlight mb-6">
                                    Our global network of partners consistently sends us high-quality clients. When you build connections with these partners, they can send you exclusive leads through our proprietary software. The possibilities are endless.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="200">

                                <h2 className="font-bold  text-xl md:text-2xl mb-2 text-primarycolor">Generate more clients</h2>
                                <p className="text-fontlight mb-6">
                                    Unlock unparalleled success in real estate with our dynamic approach, leveraging advanced digital marketing strategies, personalized brand investment, international partnerships, and cutting-edge software solutions to supercharge your lead generation and propel your business to new heights.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="100">

                                <h2 className="font-bold  text-xl md:text-2xl mb-2  text-primarycolor">Global Network</h2>
                                <p className="text-fontlight  mb-6">
                                    Our global network of partners consistently sends us high-quality clients. When you build connections with these partners, they can send you exclusive leads through our proprietary software. The possibilities are endless.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-primarycolor text-white text-center buttonLong">Join Us</button>
                    </div>
                </div>
            </section >

            <section>
                <DreamHomeContact />
            </section>

            {/* <section className='section bg-black relative  w-full' style={{ padding: "140px 0%" }}>
                <h1 className='text-4xl md:text-5xl font-semibold  text-white text-center lg:absolute xl:left-[6rem]'>Buy New <br /> Properties</h1>

                <OwlCarousell />
            </section> */}

            <section className='section' style={{ padding: "80px 0% 80px 7%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Luxury Developments</h2>

                <LuxuryDevelopments />
            </section>


            <section className='section bg-white' style={{ padding: "80px 0% 80px 7%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left">Latest Updates in Real Estate</h2>
                <LatestUpdatesCarousel />
            </section>

        </>
    )
}

export default Homepage