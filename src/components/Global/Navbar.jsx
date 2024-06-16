import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faPhone, faBars, faChevronDown, faChevronUp, faXmark, faArrowUpRightFromSquare
    , faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const scrollThreshold = 100;

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenLang, setIsDropdownOpenLang] = useState(false);
    const [isDropdownOpenContact, setIsDropdownOpenContact] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredLang, setIsHoveredLang] = useState(false);
    const [isPopupOpenBM, setIsPopupOpenBM] = useState(false)
    const [isDropdownOpenBigLang, setIsDropdownOpenBigLang] = useState(false);

    const scrollThreshold = 200;

    useEffect(() => {
        if (isDropdownOpenContact || isPopupOpenBM) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isDropdownOpenContact, isPopupOpenBM]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;
            if (currentScrollTop <= scrollThreshold) {
                setNavbarVisible(true);
            } else if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setNavbarVisible(false);
            }else {
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

    const handleContactDropdown = () => {
        // window.scrollBy(0, -20);
        setIsDropdownOpenContact(!isDropdownOpenContact)

    }

    // bigmenu 

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
            <nav className={`fixed w-full top-0 transition-all duration-300 z-50 ${navbarVisible ? '' : '-translate-y-[120px]'} ${isDropdownOpenContact ? 'bg-white' : 'bg-transparent'}`}>
                <div className={`mx-2 px-2 md:px-3 my-4 rounded-full ${(scrollPosition > scrollThreshold) || isDropdownOpenContact ? 'bg-white  text-primarycolor border' : 'bg-transparent text-white'} `}>
                    {/* Your navbar content goes here */}
                    <div className="w-full px-2 md:px-4 flex justify-between items-center">
                        <div className="flex">
                            {scrollPosition > scrollThreshold ? (
                                <Link to="/"><img src="/images/global/logodark.png" className='w-[250px]' alt="Logo Light" /></Link>
                            ) : (
                                isDropdownOpenContact ? (
                                    <Link to="/"><img src="/images/global/logodark.png" className='w-[250px]' alt="Logo Dark" /></Link>
                                ) : (
                                    <Link to="/"><img src="/images/global/logo.png" className='w-[250px]' alt="Logo Dark" /></Link>
                                )
                            )}
                        </div>
                        <div className="hidden 2xl:flex xl:space-x-6 font-semibold">
                            <Link to="/developmentssearch" className="py-6">
                                <span className={`hover-underline-animation ${scrollPosition > scrollThreshold ? ' after:bg-primarycolor' : ' after:bg-white'}`}> New Developments</span>
                            </Link>
                            <div
                                className="relative"
                                onMouseEnter={() => {
                                    setIsDropdownOpen(true);
                                    setIsHovered(true);
                                }}
                                onMouseLeave={() => {
                                    setIsDropdownOpen(false);
                                    setIsHovered(false);
                                }}
                            >
                                <Link to="/ouragents" className="flex items-center py-6">
                                    <span className={`hover-underline-animation  ${scrollPosition > scrollThreshold ? ' after:bg-primarycolor' : ' after:bg-white'}    ${isDropdownOpen || isHovered ? 'active-underline' : ''} `}>
                                        Agents
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isHovered ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-4"
                                    >
                                        <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                    </motion.span>
                                </Link>

                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 w-max bg-white  rounded-md py-2 z-30"
                                    >
                                        <a href="#" className="block w-full px-6 py-3 font-semibold text-sm text-black hover:bg-bggray">
                                            <span className='hover-underline-animation after:bg-primarycolor'> Find an agent </span>
                                        </a>
                                        <a href="#" className="block px-6 py-4 font-semibold text-sm text-black  hover:bg-bggray">
                                            <span className='hover-underline-animation after:bg-primarycolor'> Become an agent </span>
                                        </a>
                                    </motion.div>
                                )}
                            </div>
                            <a href="#" className="py-6"> <span className={`hover-underline-animation ${scrollPosition > scrollThreshold ? ' after:bg-primarycolor' : ' after:bg-white'}`}>Services</span></a>
                            {/* <a href="#" className="py-6"> <span className={`hover-underline-animation ${scrollPosition > scrollThreshold ? ' after:bg-primarycolor' : ' after:bg-white'}`}>Guides</span></a> */}
                            <a href="#" className="py-6"> <span className={`hover-underline-animation ${scrollPosition > scrollThreshold ? ' after:bg-primarycolor' : ' after:bg-white'}`}>Contact</span></a>
                        </div>

                        <div className="flex items-center space-x-2 lg:space-x-3 py-4">

                            <div className='hidden w-[185px] 2xl:flex  items-center gap-2'>
                                <div>
                                    <FontAwesomeIcon icon={faPhone} size='lg' />
                                </div>
                                <div className={`content-container ${showContent ? 'show' : ''}`}>
                                    <p className='text-sm'>{contentList[contentIndex].location}:</p>
                                    <p className='text-sm'>{contentList[contentIndex].number}</p>
                                </div>
                            </div>

                            <div className={`flex items-center w-fit gap-2 2xl:hidden bg-transparent border border-fontdark py-2 px-3 lg:py-2 lg:px-4 rounded-md hover:cursor-pointer `} onClick={handleContactDropdown}>
                                <FontAwesomeIcon icon={faPhone} size='md' />
                                <p className='hidden lg:inline-block'>Call Us</p>
                            </div>

                            <button className="sm:block font-medium rounded-md bg-primarycolor border border-primarycolor text-white py-1 px-3 lg:py-2 md:px-4 lg:space-x-2 ">
                                <FontAwesomeIcon icon={faUser} size='md' /> <span className='hidden lg:inline-block'> My Profile</span>
                            </button>
                            <button className="bg-transparent font-medium border border-fontdark py-2 px-3 lg:py-2 lg:px-4 rounded-md flex items-center lg:space-x-2" onClick={() => { setIsPopupOpenBM(true) }}>
                                <span className='hidden lg:inline-block'>Menu</span>
                                <FontAwesomeIcon icon={faBars} size='md' />
                            </button>

                            <div className="relative hidden lg:block" >
                                <a href="#" className="hover:underline flex items-center py-4"
                                    onMouseEnter={() => {
                                        setIsDropdownOpenLang(true);
                                        setIsHoveredLang(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsDropdownOpenLang(false);
                                        setIsHoveredLang(false);
                                    }}>
                                    <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6" />

                                    <motion.span
                                        animate={{ rotate: isHoveredLang ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-2"
                                    >
                                        <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                    </motion.span>
                                </a>
                                {isDropdownOpenLang && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: isDropdownOpenLang ? 1 : 0, y: isDropdownOpenLang ? 0 : 10 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute right-0 w-[150px] bg-white  rounded-md py-2 z-30`}
                                        onMouseEnter={() => setIsDropdownOpenLang(true)}
                                        onMouseLeave={() => setIsDropdownOpenLang(false)}
                                    >
                                        <a href="#" className="flex flex-row justify-center gap-2  py-4 font-semibold text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150">
                                            <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 " /> <span>English</span>
                                        </a>
                                        <a href="#" className="flex flex-row justify-center gap-2   py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150">
                                            <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 " /> <span>English</span>
                                        </a>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isDropdownOpenContact && (

                        <motion.div
                            initial={{ opacity: 0, y: 300 }}
                            animate={{ opacity: isDropdownOpenContact ? 1 : 0, y: isDropdownOpenContact ? 0 : 300 }}
                            transition={{ duration: 0.3 }}
                            className="bg-bggray h-[90vh] w-screen flex flex-col gap-6 justify-center items-center text-black relative ">
                            <button
                                className="absolute top-2 right-2 md:top-5 md:right-5  bg-transparent text-black border border-zinc-700 rounded-full py-2 px-3"
                                onClick={() => setIsDropdownOpenContact(false)}
                            >
                                <FontAwesomeIcon icon={faXmark} size='lg' />
                            </button>
                            <div className='flex flex-col gap-1 justify-center font-semibold text-black hover:text-primarycolor'>
                                <FontAwesomeIcon icon={faPhone} size='xl' />
                                <p className='text-center'> Call us free on</p>
                                <p className='text-center  text-xl text-primarycolor font-bold'>+44 0765 987654</p>
                                <p className='text-center'>If you are in UK</p>
                            </div>

                            <div className='flex flex-col gap-1 justify-center font-semibold text-black hover:text-primarycolor'>
                                <FontAwesomeIcon icon={faPhone} size='xl' />
                                <p className='text-center'>Call us free on</p>
                                <p className='text-center  text-xl text-primarycolor font-bold'>+351 919 931 440</p>
                                <p className='text-center'>Portugal Office</p>
                            </div>

                            <div className='flex flex-col gap-1 justify-center  font-semibold text-black hover:text-primarycolor'>
                                <FontAwesomeIcon icon={faPhone} size='xl' />
                                <p className='text-center'>Call us free on</p>
                                <p className='text-center  text-xl text-primarycolor  font-bold'>+1 (484) 521 9665</p>
                                <p className='text-center'>If you are in USA</p>
                            </div>
                        </motion.div>
                    )
                }
            </nav>

            {isPopupOpenBM && (
                <div
                    // fixed inset-0 z-50  p-4 md:p-0   flex justify-center items-center 
                    className="fixed h-screen w-full inset-0  bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 overflow-y-scroll  z-[1000]"
                >
                    <div className="min-h-screen bg-zinc-100 p-6  z-[1001]">
                        <div className="bg-white h-full pb-5  rounded-lg overflow-hidden relative">
                            <div className="flex items-center justify-between p-6 ">
                                <div className="w-full flex flex-col items-start xl-[800px]:flex-row xl:items-center xl:justify-between space-y-4 xl:space-y-0 xl:space-x-4">
                                    <img src="/images/global/logodark.png" alt="Logo" className="w-[250px] md:w-[300px] mt-6 md:mt-0" />
                                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                                        <div className='flex flex-col sm:flex-row  gap-3 sm:gap-6 w-full'>
                                            <button className="rounded-lg bg-primarycolor font-medium border border-primarycolor text-white py-2 px-5 lg:py-3 md:px-8 md:space-x-2 ">
                                                <FontAwesomeIcon icon={faUser} size='md' /> <span className=''> My Profile</span>
                                            </button>
                                            <div className="relative" ref={dropdownRef}>
                                                <button href="#" className="w-full bg-transparent font-medium text-primarycolor  px-3 py-2 lg:py-3 md:px-4 rounded-lg border border-zinc-300 flex flex-row justify-between items-center gap-2"

                                                    onClick={() => { setIsDropdownOpenBigLang(!isDropdownOpenBigLang); }}
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
                                                        className={`absolute right-0  w-full border mt-1 bg-white rounded-md py-2 z-50`}
                                                    >
                                                        <a href="#" className="flex flex-row justify-center gap-2  py-4 font-semibold text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                                            onClick={() => setIsDropdownOpenBigLang(!isDropdownOpenBigLang)}>
                                                            <img src="/images/global/flag.png" alt="Flag" className="h-4 w-6 " /> <span>English</span>
                                                        </a>
                                                        <a href="#" className="flex flex-row justify-center gap-2   py-4 font-semibold  text-sm text-primarycolor transition-colors hover:underline hover:bg-bggray duration-150"
                                                            onClick={() => setIsDropdownOpenBigLang(!isDropdownOpenBigLang)}>
                                                            <img src="/images/global/flag.png" alt="Flag" className="h-4 w-6 " /> <span>English</span>
                                                        </a>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            className="absolute -top-1 md:top-3 right-3 xl:static bg-transparent text-black  px-3 py-2 lg:py-3 md:px-4 rounded-lg border border-zinc-300 "
                                            onClick={() => { setIsPopupOpenBM(false) }}
                                        >
                                            <FontAwesomeIcon icon={faXmark} size='lg' />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <section className="w-full flex flex-col 2xl:flex-row 2xl:justify-between gap-6 px-[5%] py-[40px] bg-white">
                                <div className="flex flex-col space-y-4">

                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                                        </div>
                                        <div className='' >
                                            <p className='text-sm font-semibold'>Call us Free from the UK:</p>
                                            <p className='text-md font-semibold'>+44 0765 987654</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                                        </div>
                                        <div >
                                            <p className='text-sm font-semibold'>Portugal Offices:</p>
                                            <p className='text-md font-semibold'>+351 919 931 440</p>
                                        </div>
                                    </div>
                                    <div className='flex  items-center gap-2'>
                                        <div>
                                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                                        </div>
                                        <div >
                                            <p className='text-sm font-semibold '>Call us Free from the USA:</p>
                                            <p className='text-md font-semibold'>+1 (484) 521 9665</p>
                                        </div>
                                    </div>
                                    <div className='flex  items-center gap-2'>
                                        <div>
                                            <img src="/images/icons/mail.png" alt="" className='h-6' />

                                        </div>
                                        <div >
                                            <p className='text-sm font-semibold'>Email us at:</p>
                                            <p className='text-md font-semibold'>info@buy.re</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row flex-wrap gap-10 xl:gap-20 mt-5 lg:mt-0">
                                    <div className="flex flex-col space-y-4 text-primarycolor text-xl lg:text-2xl">
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
                                    <div className="flex flex-col space-y-1  text-primarycolor text-sm">
                                        <span className="text-fontdark text-sm font-semibold mb-2">Company</span>

                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>About</span>

                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Referrals</span>

                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Partnerships</span>

                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Blog</span>

                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Become an agent</span>
                                        </a>
                                    </div>

                                    <div className="flex flex-col space-y-1  text-primarycolor text-sm">
                                        <span className="text-fontdark text-sm font-semibold mb-2">Services</span>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Aftercare</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Mortgage</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Legal</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Rental</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Currency Exchange</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Investment</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Golden Visa</span>
                                        </a>
                                    </div>

                                    <div className="flex flex-col space-y-1  text-primarycolor text-sm">
                                        <span className="text-fontdark text-sm font-semibold mb-2">Guides</span>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Buyers Guide</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Investment Guide</span>
                                        </a>
                                        <a href="#" className="font-medium">
                                            <span className='hover-underline-animationbm '>Relocation Guide</span>
                                        </a>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar