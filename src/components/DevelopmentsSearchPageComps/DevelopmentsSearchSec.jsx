import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';
import DevSrchListComp from './DevSrchListComp';
import DevSrchMapComp from './DevSrchMapComp';

const DevelopmentsSearchSec = () => {

    // sliders 
    const [bedrooms, setBedrooms] = useState({ minValue: 0, maxValue: 8 });
    const [area, setArea] = useState({ minValue: 0, maxValue: 500 });
    const [budget, setBudget] = useState({ minValue: 0, maxValue: 2000000 });

    const handleBedroomsChange = (e) => {
        setBedrooms({ minValue: e.minValue, maxValue: e.maxValue });
    };

    const handleAreaChange = (e) => {
        setArea({ minValue: e.minValue, maxValue: e.maxValue });
    };

    const handleBudgetChange = (e) => {
        setBudget({ minValue: e.minValue, maxValue: e.maxValue });
    };
    // sliders 

    // dropdowns 
    const titles = ['Location', 'Type', 'Stage', 'Reference ID'];
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
        ['House', 'Townhouse', 'Apartment', 'Commercial'],
        ['Stage 1', 'Stage 2', 'Stage 3'],
        ['Reference 1', 'Reference 2', 'Reference 3']
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

    // dropdowns 

    // list / map 

    const [view, setView] = useState('list');

    return (
        <section className='section bg-white'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {titles.map((title, index) => (
                    <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                        <button
                            className="bg-transparent w-full font-FuturaHeavy border-black px-4 py-2 rounded-lg border-2 flex flex-row justify-between items-center gap-2"
                            onClick={() => toggleDropdown(index)}
                        >
                            <span>{title}</span>
                            {openDropdown === index ? (
                                <FontAwesomeIcon icon={faChevronUp} size='xs' />
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} size='xs' />
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4 mt-10">
                <div>
                    <label htmlFor="bedrooms" className="block mt-2 text-center font-FuturaMedium text-xl">Bedrooms</label>
                    <MultiRangeSlider
                        min={0}
                        max={8}
                        step={1}
                        ruler={false}
                        label={false}
                        minValue={bedrooms.minValue}
                        maxValue={bedrooms.maxValue}
                        onInput={handleBedroomsChange}
                        className="w-full"
                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                        barLeftColor='transparent'
                        barInnerColor='black'
                        barRightColor='transparent'
                        thumbLeftColor='white'
                        thumbRightColor='white'
                    />
                    <div className="flex justify-between px-2">
                        <span>{bedrooms.minValue}</span>
                        <span>{bedrooms.maxValue}</span>
                    </div>
                </div>
                <div>
                    <label htmlFor="area" className="block mt-2 text-center font-FuturaMedium text-xl">Area</label>
                    <MultiRangeSlider
                        min={0}
                        max={500}
                        step={10}
                        ruler={false}
                        label={false}
                        minValue={area.minValue}
                        maxValue={area.maxValue}
                        onInput={handleAreaChange}
                        className="w-full"
                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                        barLeftColor='transparent'
                        barInnerColor='black'
                        barRightColor='transparent'
                        thumbLeftColor='white'
                        thumbRightColor='white'

                    />
                    <div className="flex justify-between px-2">
                        <span>{area.minValue} m<sup>2</sup> </span>
                        <span>{area.maxValue} m<sup>2</sup> </span>
                    </div>
                </div>
                <div>
                    <label htmlFor="budget" className="block mt-2 text-center font-FuturaMedium text-xl">Budget</label>
                    <MultiRangeSlider
                        min={0}
                        max={2000000}
                        step={500}
                        ruler={false}
                        label={false}
                        minValue={budget.minValue}
                        maxValue={budget.maxValue}
                        onInput={handleBudgetChange}
                        className="w-full"

                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                        barLeftColor='transparent'
                        barInnerColor='black'
                        barRightColor='transparent'
                        thumbLeftColor='white'
                        thumbRightColor='white'

                    />
                    <div className="flex justify-between  px-2">
                        <span>€{budget.minValue}</span>
                        <span>€{budget.maxValue}</span>
                    </div>
                </div>
            </div>

            <div className="w-full text-fontdark flex flex-row flex-wrap justify-center gap-6 items-cente mt-10">
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Parking / Garage</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked />
                        <span className="ml-2">Terrace / Balcony</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Garden</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Pool</span>
                    </label>
                </div>
                <div>
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">Sea / Ocean view</span>
                    </label>
                </div>
            </div>

            <div className="flex justify-between mt-10">
                <button className="bg-white border-2 border-black py-2 px-4 rounded-lg flex items-center">
                    <span>Advance Search</span>

                    <FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-10' />

                </button>
                <button className="bg-primarycolor text-white py-2 px-14 rounded-lg">Search</button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
                <div>
                    <h1 className="text-2xl md:text-3xl font-FuturaBold text-primarycolor text-start">New Developments In Lisbon Area</h1>
                    <p className="text-fontdark text-xl lg:text-2xl">160 available units found in 15 new developments.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex border-2 border-black rounded-lg overflow-hidden">
                        <button
                            className={`px-7 py-2 ${view === 'list' ? 'bg-primarycolor text-white' : 'bg-white text-black'} rounded-tr-lg rounded-br-lg`}
                            onClick={() => setView('list')}
                        >
                            List
                        </button>
                        <button
                            className={`px-6 py-2 ${view === 'map' ? 'bg-primarycolor text-white' : 'bg-white text-black'} rounded-tl-lg rounded-bl-lg`}
                            onClick={() => setView('map')}
                        >
                            Map
                        </button>
                    </div>
                    <div className="relative">
                        <button className="flex items-center px-4 py-2 border-2 border-black rounded-lg bg-white text-black">
                            <span> Sort</span>
                            <FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-6' />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden">
                            <a href="#" className="block px-4 py-2 hover:bg-zinc-100">Option 1</a>
                            <a href="#" className="block px-4 py-2 hover:bg-zinc-100">Option 2</a>
                            <a href="#" className="block px-4 py-2 hover:bg-zinc-100">Option 3</a>
                        </div>
                    </div>
                </div>
            </div>

            {view === 'map' ? <DevSrchMapComp /> : <DevSrchListComp />}
        </section>
    )
}

export default DevelopmentsSearchSec