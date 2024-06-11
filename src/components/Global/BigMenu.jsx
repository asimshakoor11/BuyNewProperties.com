import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faChevronDown, faChevronUp, faEnvelope, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const BigMenu = () => {
    const [isDropdownOpenBigLang, setIsDropdownOpenBigLang] = useState(false);
    const [contentIndex, setContentIndex] = useState(0);
    const [showContent, setShowContent] = useState(true);

    const contentList = [
        {
            location: "Call us free from UK",
            number: "+44 0765 987654"
        },
        {
            location: "Portugal Office",
            number: "+351 919 931 440"
        },
        {
            location: " Call us free from USA",
            number: "+1 (484) 521 9665"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setShowContent(false); // Start fade-out animation
            setTimeout(() => {
                setContentIndex(prevIndex => (prevIndex + 1) % contentList.length);
                setShowContent(true); // Start fade-in animation
            }, 500); // Adjust the delay based on your CSS transition duration
        }, 7000);

        return () => clearInterval(interval);
    }, [contentList.length]);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpenBigLang(false);
        }
    };


    useEffect(() => {
        if (isDropdownOpenBigLang) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpenBigLang]);

    return (
        <>
            <div className="bg-black lg:h-screen bg-opacity-90 overflow-y-scroll"
            >
                <div className="h-full p-4 overflow-hidden">
                    <div className="bg-white h-fit py-4 flex flex-col gap-6 shadow-md rounded-lg relative">
                        <div className="flex items-center justify-between p-4 ">
                            <div className="w-full flex flex-col items-start xl-[800px]:flex-row xl:items-center xl:justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                                <img src="/images/global/logodark.png" alt="Logo" className="w-[250px] md:w-[300px] " />
                                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">

                                    <div className='flex flex-col sm:flex-row gap-3 sm:gap-6'>
                                        <div className='flex w-[190px] items-center gap-2'>
                                            <div>
                                                <FontAwesomeIcon icon={faPhone} size='lg' />
                                            </div>
                                            <div className={`content-container ${showContent ? 'show' : ''}`}>
                                                <p className='text-sm'>{contentList[contentIndex].location}:</p>
                                                <p className='text-md'>{contentList[contentIndex].number}</p>
                                            </div>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FontAwesomeIcon icon={faEnvelope} size='lg' />
                                            </div>
                                            <div >
                                                <p className='text-sm'>Email us at:</p>
                                                <p className='text-md'>info@buy.re</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-col sm:flex-row  gap-3 sm:gap-6 w-full'>
                                        <button className="rounded-lg bg-primarycolor border border-primarycolor text-white py-2 px-3 lg:py-3 md:px-4 md:space-x-2 ">
                                            <FontAwesomeIcon icon={faUser} size='md' /> <span className=''> My Profile</span>
                                        </button>
                                        <div className="relative" ref={dropdownRef}>
                                            <button href="#" className="w-full bg-transparent text-primarycolor  px-3 py-2 lg:py-3 md:px-4 rounded-lg border border-zinc-300 flex flex-row justify-between items-center gap-2"
                                                onMouseEnter={() => {
                                                    setIsDropdownOpen(true);
                                                    setIsHovered(true);
                                                }}
                                                onClick={() => { setIsDropdownOpenBigLang(!isDropdownOpenBigLang); setIsHovered(!isDropdownOpenBigLang); }}
                                            >
                                                <div className='flex gap-2 items-center'>
                                                    <img src="/images/global/flag.png" alt="Flag" className="block h-4 w-6" />
                                                    <span>English</span>
                                                </div>

                                                <motion.span
                                                    animate={{ rotate: isDropdownOpenBigLang ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="ml-2"
                                                >
                                                    <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                                </motion.span>
                                            </button>
                                            {isDropdownOpenBigLang && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: isDropdownOpenBigLang ? 1 : 0, y: isDropdownOpenBigLang ? 0 : 10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`absolute right-0  w-full bg-white shadow-lg rounded-md py-2 z-50`}

                                                >
                                                    <a href="#" className="flex flex-row justify-center gap-2  py-4 font-semibold text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                                        onClick={() => setIsDropdownOpenBigLang(!isDropdownOpenBigLang)}>
                                                        <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 " /> <span>English</span>
                                                    </a>
                                                    <a href="#" className="flex flex-row justify-center gap-2   py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                                        onClick={() => setIsDropdownOpenBigLang(!isDropdownOpenBigLang)}>
                                                        <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 " /> <span>English</span>
                                                    </a>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>

                                    <Link to={'/'}
                                        className="absolute sm:top-3 -top-1 right-3 xl:static bg-transparent text-black border border-zinc-300 rounded-full pt-2 pb-1 px-3"
                                    >
                                        <FontAwesomeIcon icon={faXmark} size='lg' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="absolute bottom-0 z-10 w-[28%]">
                                <img src="/images/global/bigmenuiamge.png" alt="Property Image" className="hidden ml-1 mb-1 lg:block rounded-lg w-full max-h-[436px]" />
                            </div>

                            <div className='w-full flex flex-col lg:flex-row justify-start lg:justify-end relative z-20'>
                                <div className="p-4 w-full lg:w-[40%] xl:w-1/3  border-r-2 ">
                                    <div className="flex flex-col space-y-4 text-primarycolor text-2xl lg:text-3xl">
                                        <Link to={"/"} className='font-bold' >
                                            <span className='hover-underline-animationbm'>Home</span>
                                        </Link>
                                        <Link to={"/developmentssearch"} className='font-bold' >
                                            <span className='hover-underline-animationbm '>New Developments</span>
                                        </Link>
                                        <Link to={"/ouragents"} className='font-bold' >
                                            <span className='hover-underline-animationbm '>Agents</span>
                                        </Link>
                                        <Link to={"/"} className='font-bold' >
                                            <span className='hover-underline-animationbm '>Services</span>
                                        </Link>
                                        <Link to={"/"} className='font-bold' >
                                            <span className='hover-underline-animationbm '>Guides</span>
                                        </Link>
                                        <Link to={"/"} className='font-bold' >
                                            <span className='hover-underline-animationbm '>Contact</span>
                                        </Link>

                                        <a href="#" className="font-bold flex items-center ">
                                            <span className='hover-underline-animationbm '>
                                                Henderson Realty
                                            </span>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' size='sm' />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 w-full lg:w-[40%] xl:w-1/3 lg:ml-5">
                                    <div className="space-y-10">
                                        <div>
                                            <h3 className="text-md text-fontdark font-semibold">Company</h3>
                                            <nav className="space-y-1 text-md text-primarycolor">
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>About</span>
                                                </a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Referrals</span>
                                                </a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Partnerships</span>
                                                </a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Blog</span>
                                                </a>
                                            </nav>
                                        </div>
                                        <div>
                                            <h3 className="text-md  text-fontdark font-semibold">Services</h3>
                                            <div className="flex flex-row space-x-20 text-md  text-primarycolor">
                                                <div className='space-y-1'>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Aftercare</span>
                                                    </a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Mortgage</span>
                                                    </a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Legal</span>
                                                    </a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Rental</span>
                                                    </a>
                                                </div>
                                                <div className='space-y-1'>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Currency Exchange</span>
                                                    </a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Investment</span>
                                                    </a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                        <span className='hover-underline-animationbm '>Golden Visa</span>
                                                    </a>
                                                </div>


                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-md  text-fontdark font-semibold">Guides</h3>
                                            <nav className="space-y-1 text-md  text-primarycolor">
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Buyers Guide</span>
                                                </a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Investment Guide</span>
                                                </a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">
                                                    <span className='hover-underline-animationbm '>Relocation Guide</span>
                                                </a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigMenu