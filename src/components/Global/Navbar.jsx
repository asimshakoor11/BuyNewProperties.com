import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faPhone, faBars, faChevronDown, faChevronUp, faEnvelope, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const scrollThreshold = 100;


const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenLang, setIsDropdownOpenLang] = useState(false);
    const [isDropdownOpenBigLang, setIsDropdownOpenBigLang] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setNavbarVisible(false);
            } else {
                // Scrolling up
                setNavbarVisible(true);
            }
            setLastScrollTop(currentScrollTop);
            setScrollPosition(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <nav className={`fixed w-full top-0 transition-all duration-300 z-30 ${navbarVisible ? '' : '-translate-y-full'} `}>
            <div className={`mx-4 px-3 mt-4 rounded-full ${scrollPosition > scrollThreshold ? 'bg-white  text-primarycolor border' : 'bg-transparent text-white '}`}>
                {/* Your navbar content goes here */}
                <div className="w-full p-4 flex justify-between items-center">
                    <div className="flex items-center">
                        {scrollPosition > scrollThreshold ?                        
                            (<Link to="/"><img src="../../assets/images/global/logodark.png" className='w-[220px] xl:w-[250px]'  alt="" /></Link>)
                            : (<Link to="/"><img src="../../assets/images/global/logo.png"  className='w-[220px] xl:w-[250px]' alt="" /></Link>)}
                    </div>
                    <div className="hidden lg:flex space-x-2 lg:space-x-4 xl:space-x-8 font-FuturaHeavy">
                        <Link to="/developmentssearch" className="hover:underline">New Developments</Link>
                        {/* <a href="#" className="hover:underline">New Developments</a> */}
                        <div className="relative" >
                            <Link to="/ouragents" className="hover:underline flex items-center"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}>
                                <span >Agents</span>
                                {isDropdownOpen ? (<FontAwesomeIcon icon={faChevronUp} size='xs' className='ml-1' />) : (<FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-1' />)}
                            </Link>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute -left-8 w-max bg-white shadow-lg rounded-md py-2 z-50`}
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <a href="#" className="block px-4 py-2 font-semibold text-sm text-primarycolor transition-colors hover:underline duration-150">
                                        Find an agent
                                    </a>
                                    <a href="#" className="block px-4 py-2 font-semibold  text-sm text-primarycolor transition-colors hover:underline duration-150">
                                        Become an agent
                                    </a>
                                </motion.div>
                            )}
                        </div>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Guides</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                    <div className="flex items-center space-x-2 lg:space-x-4">
                        <button className="hidden sm:block rounded-md bg-primarycolor border border-primarycolor text-white py-2 px-4 space-x-2 ">
                            <FontAwesomeIcon icon={faUser} size='sm' /> <span> Profile</span>
                        </button>
                        <button className="bg-transparent border border-fontdark py-2 px-4 rounded-md flex items-center space-x-2" onClick={() => setIsPopupOpen(true)}>
                            <span>Menu</span>
                            <FontAwesomeIcon icon={faBars} />
                        </button>

                        <div className="relative hidden xl:block" >
                            <a href="#" className="hover:underline flex items-center py-4"
                                onMouseEnter={() => setIsDropdownOpenLang(true)}
                                onMouseLeave={() => setIsDropdownOpenLang(false)}>
                                <img src="../../assets/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6" />

                                {isDropdownOpenLang ? (<FontAwesomeIcon icon={faChevronUp} size='xs' className='ml-1' />) : (<FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-1' />)}
                            </a>
                            {isDropdownOpenLang && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: isDropdownOpenLang ? 1 : 0, y: isDropdownOpenLang ? 0 : 10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute right-0  w-[120px] bg-white shadow-lg rounded-md py-2 z-50`}
                                    onMouseEnter={() => setIsDropdownOpenLang(true)}
                                    onMouseLeave={() => setIsDropdownOpenLang(false)}
                                >
                                    <a href="#" className="flex flex-row px-4 py-2 font-semibold text-sm text-primarycolor transition-colors hover:underline duration-150">
                                        <img src="../../assets/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
                                    </a>
                                    <a href="#" className="flex flex-row px-4 py-2 font-semibold  text-sm text-primarycolor transition-colors hover:underline duration-150">
                                        <img src="../../assets/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <motion.div
                    initial={{ scale: 0, borderRadius: "50%", transformOrigin: 'top right' }}
                    animate={{ scale: 1, borderRadius: "0%" }}
                    exit={{ scale: 0, borderRadius: "50%", transformOrigin: 'top right' }}
                    transition={{ duration: 0.1 }}
                    className="fixed top-0 inset-0 bg-black bg-opacity-90 overflow-y-scroll z-50"
                >
                    <div className="min-h-screen bg-zinc-100 p-6">
                        <div className="bg-white h-full pb-5 shadow-md rounded-lg overflow-hidden relative">
                            <div className="flex items-center justify-between p-4 ">
                                <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                                    <img src="../../assets/images/global/logodark.png" alt="Logo" className="w-[320px] lg:w-[30%]" />
                                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                                        <button className="flex items-center bg-[#005334] text-white p-2 px-4 rounded-lg">
                                            <FontAwesomeIcon icon={faUser} className='mr-2' size='sm' />
                                            Login/Register
                                        </button>
                                        <button className="flex items-center bg-primarycolor text-white p-2  px-4 rounded-lg">
                                            <FontAwesomeIcon icon={faPhone} className='mr-2' size='sm' />
                                            +351 919 931 440
                                        </button>
                                        <button className="flex items-center bg-transparent border-2 border-primarycolor text-black py-2  px-4 rounded-lg">
                                            <FontAwesomeIcon icon={faEnvelope} className='mr-2' size='sm' />
                                            info@buy.re
                                        </button>
                                        <div className="relative" >
                                            <button href="#" className="bg-transparent text-primarycolor px-4 py-2 rounded-lg border border-zinc-300 flex flex-row items-center gap-2"
                                                onClick={() => setIsDropdownOpenBigLang(!isDropdownOpenBigLang)}
                                            >
                                                <img src="../../assets/images/global/flag.png" alt="Flag" className="block h-4 w-6" />
                                                <span>English</span>

                                                {isDropdownOpenBigLang ? (<FontAwesomeIcon icon={faChevronUp} size='xs' className='ml-1' />) : (<FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-1' />)}
                                            </button>
                                            {isDropdownOpenBigLang && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: isDropdownOpenBigLang ? 1 : 0, y: isDropdownOpenBigLang ? 0 : 10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`absolute right-0  w-full bg-white shadow-lg rounded-md py-2 z-50`}
                                                    onMouseEnter={() => setIsDropdownOpenBigLang(true)}
                                                    onMouseLeave={() => setIsDropdownOpenBigLang(false)}
                                                >
                                                    <a href="#" className="flex flex-row px-4 py-2d text-sm text-primarycolor transition-colors hover:underline duration-150">
                                                        <img src="../../assets/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
                                                    </a>
                                                    <a href="#" className="flex flex-row px-4 py-2 text-sm text-primarycolor transition-colors hover:underline duration-150">
                                                        <img src="../../assets/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
                                                    </a>
                                                </motion.div>
                                            )}
                                        </div>
                                        <button
                                            className="absolute top-0 right-2 md:top-5 md:right-5 xl:static bg-transparent text-black border border-zinc-300 rounded-full py-2 px-3"
                                            onClick={() => setIsPopupOpen(false)}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size='lg' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="p-4 lg:w-1/3">
                                    <img src="../../assets/images/global/bigmenuiamge.png" alt="Property Image" className=" hidden lg:block rounded-lg w-full" />
                                </div>
                                <div className="p-4 w-full md:w-[46%] lg:w-1/3  border-r-2 ">
                                    <div className="flex flex-col space-y-3 text-black font-FuturaHeavy text-2xl">
                                        <a href="#" className="font-bold">
                                            Home
                                        </a>
                                        <a href="#" className="font-bold">
                                            New Developments
                                        </a>
                                        <a href="#" className="font-bold">
                                            Agents
                                        </a>
                                        <a href="#" className="font-bold">
                                            Services
                                        </a>
                                        <a href="#" className="font-bold">
                                            Guides
                                        </a>
                                        <a href="#" className="font-bold">
                                            Contact
                                        </a>
                                        <a href="#" className="font-bold flex items-center">
                                            Henderson Realty
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' size='sm' />
                                        </a>
                                    </div>
                                </div>
                                <div className="p-4 w-full md:w-[46%] md:ml-5">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-md font-FuturaMedium text-fontdark">Company</h3>
                                            <nav className="space-y-2text-md font-FuturaHeavy text-primarycolor">
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">About</a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Referrals</a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Partnerships</a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Blog</a>
                                            </nav>
                                        </div>
                                        <div>
                                            <h3 className="text-md font-FuturaMedium text-fontdark">Services</h3>
                                            <div className="flex flex-row space-x-20 text-md font-FuturaHeavy text-primarycolor">
                                                <div>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Aftercare</a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Mortgage</a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Legal</a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Rental</a>
                                                </div>
                                                <div>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Currency Exchange</a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Investment</a>
                                                    <a href="#" className="block text-zinc-600 dark:text-zinc-400">Golden Visa</a>
                                                </div>


                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-md font-FuturaMedium text-fontdark">Guides</h3>
                                            <nav className="space-y-2 text-md font-FuturaHeavy text-primarycolor">
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Buyers Guide</a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Investment Guide</a>
                                                <a href="#" className="block text-zinc-600 dark:text-zinc-400">Relocation Guide</a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar