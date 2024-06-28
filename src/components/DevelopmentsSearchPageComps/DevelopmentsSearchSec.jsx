

import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import DevSrchMapComp from './DevSrchMapComp';
import DevSrchListComp from './DevSrchListComp';
import './Styles/DevSearchSec.css'
import { Link, useLocation  } from 'react-router-dom';
import SearchPageFilter from './SearchPageFilter';



const DevelopmentsSearchSec = () => {

    const [isDropdownOpenFilter, setIsDropdownOpenFilter] = useState(false);

    const closeDropdown = () => {
        setIsDropdownOpenFilter(false);
    };

    useEffect(() => {
        if (isDropdownOpenFilter) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isDropdownOpenFilter]);

    const [isDropdownOpenSort, setIsDropdownOpenSort] = useState(false);
    const dropdownRefSort = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRefSort.current && !dropdownRefSort.current.contains(event.target)) {
            setIsDropdownOpenSort(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpenSort) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpenSort]);

    const [isAnimating, setIsAnimating] = useState(true);

    // Function to toggle animation state
    const toggleAnimation = () => {
        setIsAnimating(!isAnimating);
    };

    return (
        <>
            <section className='section bg-white'>

                <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mt-10`}>
                    <div className={``}>
                        <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">New Developments In Lisbon Area</h2>
                        <p className="text-fontdark text-lg mt-2">160 available units found in 15 new developments.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-medium gap-4">
                        <div className="flex border border-black rounded-lg overflow-hidden">
                            <button
                                className={`custommax540:w-1/2 px-7 py-2 md:py-3 bg-primarycolor text-white`}
                            >
                                List
                            </button>
                            <Link to={'/developmentssearchmap'} className='custommax540:w-1/2 ' >
                                <button
                                    className={`px-6 py-2 md:py-3 bg-white text-black`}
                                    >
                                    Map
                                </button>
                            </Link>
                        </div>

                        <div className="relative">
                            <button
                                className={`w-full sm:w-32 bg-transparent text-black border border-black px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center `}
                                onClick={() => setIsDropdownOpenFilter(true)}
                            >
                                <span>Filter</span>
                                <img src="/images/icons/settings-sliders.png" alt="" className='h-6' />
                            </button>

                            <div className={`hidden lg:flex ${isAnimating ? 'animate-slide' : ''} absolute bottom-14 w-full flex-col gap-1 items-center justify-center`}>
                                <p className='text-sm text-center italic font-medium w-max'>Refine your search criteria</p>
                                <img src="/images/icons/rounded arrow.svg" alt="" className={`h-14 `} />
                            </div>
                        </div>

                        <div className={`relative`} ref={dropdownRefSort}>
                            <button href="#" className="w-full sm:w-32 bg-transparent font-medium text-black  px-3 py-2 md:py-3 md:px-4 rounded-lg border border-black flex flex-row justify-between items-center gap-2"

                                onClick={() => { setIsDropdownOpenSort(!isDropdownOpenSort); }}
                            >
                                <div className='flex gap-2 items-center'>
                                    <span>Sort</span>
                                </div>

                                <motion.span
                                    animate={{ rotate: isDropdownOpenSort ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-2"
                                >
                                    <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                </motion.span>
                            </button>

                            {isDropdownOpenSort && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: isDropdownOpenSort ? 1 : 0, y: isDropdownOpenSort ? 0 : 10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute right-0 text-primarycolor w-full sm:w-[180px] max-h-[220px] overflow-y-scroll scrollbar-custom border mt-1 bg-white rounded-md py-2 z-50`}
                                >
                                    <a className="flex flex-row px-3  gap-2 cursor-pointer py-4 font-semibold text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"

                                        onClick={() => setIsDropdownOpenSort(!isDropdownOpenSort)}>
                                        Latest
                                    </a>
                                    <a className="flex flex-row px-3  gap-2 cursor-pointer  py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                        onClick={() => setIsDropdownOpenSort(!isDropdownOpenSort)}>
                                        Highest Price
                                    </a>
                                    <a className="flex flex-row px-3  gap-2 cursor-pointer py-4 font-semibold text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"

                                        onClick={() => setIsDropdownOpenSort(!isDropdownOpenSort)}>
                                        Lowest Price
                                    </a>
                                    <a className="flex flex-row px-3  gap-2 cursor-pointer  py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                        onClick={() => setIsDropdownOpenSort(!isDropdownOpenSort)}>
                                        Highest No. Units
                                    </a>
                                    <a className="flex flex-row px-3  gap-2 cursor-pointer  py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                        onClick={() => setIsDropdownOpenSort(!isDropdownOpenSort)}>
                                        Lowest No. Units
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

                <DevSrchListComp />

                {
                    isDropdownOpenFilter && (
                        <SearchPageFilter closeDropdown={closeDropdown} />
                    )
                }
            </section >


        </>

    )
}

export default DevelopmentsSearchSec