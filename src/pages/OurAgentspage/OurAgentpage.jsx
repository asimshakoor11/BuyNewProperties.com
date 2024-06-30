

import React, { useEffect, useRef, useState } from 'react'

import { faUser, faPhone, faBars, faChevronDown, faChevronUp, faEnvelope, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurAgentsPagination from '../../components/OurAgentsPageComps/OurAgentsPagination';
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import DevelopmentLocations from '../../components/Global/DevlopmentLocations';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';


const OurAgentpage = () => {
    const titles = ['Location', 'Language'];
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

    const dropdownItems = [
        [
            {
                label: 'Lisbon',
                subitems: ['Cascais', 'Lapa', 'Estrella', 'Sintra', 'Amadora']
            },
            {
                label: 'Algarve',
                subitems: ['Loule', 'Tavira', 'Lagos']
            },
            {
                label: 'Manchester',
                subitems: ['Northern Quarter', 'Didsbury', 'Chorlton']
            },
            {
                label: 'Birmingham',
                subitems: ['Jewellery Quarter', 'Digbeth']
            }
        ],
        ['English', 'Russain', 'Chinese']
    ];

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <>
            <section className="section parallax-bg lg:bg-fixed bg-cover bg-center relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold">Global Talent <br /> Local Knowledge</h1>
                </div>
            </section>

            <section >
                <DevelopmentLocations title={"Agents Location"} />
            </section>

            <section className='section bg-white'>

                <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Found 23 agents</h2>

                    <div className="flex justify-between space-x-4">
                        {titles.map((title, index) => (
                            <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                                <button
                                    className="bg-transparent w-full font-medium border-black  px-3 py-1 md:px-4 md:py-3 rounded-lg border-2 flex flex-row justify-between items-center gap-2"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <span>{title}</span>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        size="xs"
                                        className={`ml-6 ${openDropdown === index ? 'rotate-180' : ''}`}
                                    />

                                </button>
                                {openDropdown === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 w-full max-h-[200px] overflow-y-scroll scrollbar-custom bg-white shadow-lg rounded-md py-2 z-50"
                                    >
                                        {dropdownItems[index].map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                {typeof item === 'string' ? (
                                                    <div
                                                        className="flex flex-row px-4 cursor-pointer border-black transition-colors hover:underline hover:bg-bggray  duration-150"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <a className="flex flex-row justify-center gap-2  py-4 font-semibold text-sm text-black  transition-colors duration-150">
                                                            <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-[22px] w-[34px] rounded-[0.25rem] " /> <span>{item}</span>
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div
                                                            className="flex flex-row px-4 py-2 font-medium cursor-pointer border-black transition-colors hover:underline hover:bg-bggray  duration-150"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <label className='w-full cursor-pointer text-start'>{item.label}</label>
                                                        </div>
                                                        {item.subitems.map((subitem, subindex) => (
                                                            <div
                                                                key={subindex}
                                                                className="flex flex-row ml-4 px-4 py-2 font-medium cursor-pointer border-black transition-colors hover:underline hover:bg-bggray  duration-150"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <label className='w-full cursor-pointer text-start'>{subitem}</label>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <OurAgentsPagination />

            </section>

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel />
            </section>

            <section>
                <DreamHomeContact />
            </section>
        </>
    )
}

export default OurAgentpage