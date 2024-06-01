

import React, { useEffect, useRef, useState } from 'react'

import { faUser, faPhone, faBars, faChevronDown, faChevronUp, faEnvelope, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurAgentsPagination from '../../components/OurAgentsPageComps/OurAgentsPagination';
import DreamHomeContact from '../../components/DreamHomeContact';

const OurAgentpage = () => {
    const titles = ['Location', 'Language'];
    const dropdownItems = [
        [
            {
                label: 'Country 1',
                subitems: ['City 1', 'City 2']
            },
            {
                label: 'Country 2',
                subitems: ['City 1', 'City 2']
            }
        ],
        ['Langauge 1', 'Langauge 2', 'Langauge 3']
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
            <section className="section h-full bg-cover bg-center relative"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="text-4xl md:text-6xl font-bold font-FuturaHeavy">Global Talent <br /> Local Knowledge</h1>

                    <button
                        className="flex items-center justify-between font-FuturaHeavy mx-auto mt-8 bg-primarycolor text-white px-4 py-3 rounded-xl shadow">
                        <span> Check out our agents</span>
                        <FontAwesomeIcon icon={faChevronDown} size='sm' className='ml-6' />
                    </button>
                </div>
            </section>

            <section className='section relative bg-bggray rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-20 flex flex-col md:flex-row justify-between items-center'>

                <div class="mb-6 md:mb-0 w-full lg:w-3/5">
                    <h2 class="text-2xl md:text-4xl font-FuturaBold text-primarycolor">Why Choose Us?</h2>
                    <p class="text-fontdark text-xl md:text-2xl mt-2">
                        Receive previsit advice, tailored recommendations and guidance during your inspection tours
                        from an agent of your choice.
                    </p>
                </div>
                <div class="flex flex-col items-center justify-center border-4 border-primarycolor rounded-lg py-6 px-12">
                    <h3 class="text-2xl font-FuturaBold text-primarycolor mb-4">Become an agent</h3>
                    <button class="w-full bg-primarycolor text-white py-2 px-4 rounded-xl">
                        Join us today
                    </button>
                </div>
            </section>

            <section className='section bg-white'>

                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl lg:text-4xl text-black font-FuturaHeavy">Found 23 agents</h2>
                    <div className="flex space-x-4">

                        {titles.map((title, index) => (
                            <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                                <button
                                    className="bg-transparent w-full font-FuturaHeavy border-black px-4 py-3 rounded-lg border-2 flex flex-row justify-between items-center gap-2"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <span>{title}</span>
                                    {openDropdown === index ? (
                                        <FontAwesomeIcon icon={faChevronUp} size='xs' className='ml-6' />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-6'/>
                                    )}
                                </button>
                                {openDropdown === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 w-full bg-white shadow-lg rounded-md py-2 z-50"
                                    >
                                        {dropdownItems[index].map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                {typeof item === 'string' ? (
                                                    <div
                                                        className="flex flex-row px-4 py-2 font-FuturaHeavy cursor-pointer border-black transition-colors hover:bg-gray-300 duration-150"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <input type="checkbox" id={`checkbox${index}-${itemIndex}`} className='mr-2 border' />
                                                        <label htmlFor={`checkbox${index}-${itemIndex}`} className='w-full cursor-pointer text-start'>{item}</label>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div
                                                            className="flex flex-row px-4 py-2 font-FuturaHeavy cursor-pointer border-black transition-colors hover:bg-gray-300 duration-150"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <input type="checkbox" id={`checkbox${index}-${itemIndex}`} className='mr-2 border' />
                                                            <label htmlFor={`checkbox${index}-${itemIndex}`} className='w-full cursor-pointer text-start'>{item.label}</label>
                                                        </div>
                                                        {item.subitems.map((subitem, subindex) => (
                                                            <div
                                                                key={subindex}
                                                                className="flex flex-row ml-4 px-4 py-2 font-FuturaHeavy cursor-pointer border-black transition-colors hover:bg-gray-300 duration-150"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <input type="checkbox" id={`checkbox${index}-${itemIndex}-${subindex}`} className='mr-2 border' />
                                                                <label htmlFor={`checkbox${index}-${itemIndex}-${subindex}`} className='w-full cursor-pointer text-start'>{subitem}</label>
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

                <OurAgentsPagination/>

            </section>

            <section>
                <DreamHomeContact/>
            </section>
        </>
    )
}

export default OurAgentpage