import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faBars, faChevronDown, faChevronUp, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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

    useEffect(() => {
        if (isDropdownOpenContact) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isDropdownOpenContact]);

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
        setIsDropdownOpenContact(!isDropdownOpenContact)
    }


    return (
        <nav className={`fixed w-full top-0 transition-all duration-300 z-50 ${navbarVisible ? '' : '-translate-y-full'} ${isDropdownOpenContact ? 'bg-white' : 'bg-transparent'}`}>
            <div className={`mx-2 px-2 md:px-3 my-4  rounded-full ${(scrollPosition > scrollThreshold) || isDropdownOpenContact ? 'bg-white  text-primarycolor border' : 'bg-transparent text-white'} `}>
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
                                    className="absolute right-0 w-max bg-white shadow-lg rounded-md py-2 z-50"
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

                        <button className="sm:block rounded-md bg-primarycolor border border-primarycolor text-white py-1 px-3 lg:py-2 md:px-4 lg:space-x-2 ">
                            <FontAwesomeIcon icon={faUser} size='md' /> <span className='hidden lg:inline-block'> My Profile</span>
                        </button>
                        <Link to={'/menu'} className="bg-transparent border border-fontdark py-2 px-3 lg:py-2 lg:px-4 rounded-md flex items-center lg:space-x-2">
                            <span className='hidden lg:inline-block'>Menu</span>
                            <FontAwesomeIcon icon={faBars} size='md' />
                        </Link>

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
                                    className={`absolute right-0 w-[150px] bg-white shadow-lg rounded-md py-2 z-50`}
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
                            className="absolute top-2 right-2 md:top-5 md:right-5 xl:static bg-transparent text-black border border-zinc-700 rounded-full py-2 px-3"
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

            {/* {isPopupOpen && (
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
                                    <img src="/images/global/logodark.png" alt="Logo" className="w-[320px] lg:w-[30%]" />
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
                                                <img src="/images/global/flag.png" alt="Flag" className="block h-4 w-6" />
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
                                                        <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
                                                    </a>
                                                    <a href="#" className="flex flex-row px-4 py-2 text-sm text-primarycolor transition-colors hover:underline duration-150">
                                                        <img src="/images/global/flag.png" alt="Flag" className="hidden sm:block h-4 w-6 mr-2" /> <span>English</span>
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
                                    <Link to={"/"}>
                                        <img src="/images/global/bigmenuiamge.png" alt="Property Image" className=" hidden lg:block rounded-lg w-full" />
                                    </Link>
                                </div>
                                <div className="p-4 w-full md:w-[46%] lg:w-1/3  border-r-2 ">
                                    <div className="flex flex-col space-y-3 text-black font-FuturaHeavy text-2xl">
                                        <Link to={"/"} className='font-bold' onClick={() => setIsPopupOpen(false)}>Home</Link>
                                        <Link to={"/developmentssearch"} className='font-bold' onClick={() => setIsPopupOpen(false)}>New Developments</Link>
                                        <Link to={"/ouragents"} className='font-bold' onClick={() => setIsPopupOpen(false)}>Agents</Link>
                                        <Link to={"/"} className='font-bold' onClick={() => setIsPopupOpen(false)}>Services</Link>
                                        <Link to={"/"} className='font-bold' onClick={() => setIsPopupOpen(false)}>Guides</Link>
                                        <Link to={"/"} className='font-bold' onClick={() => setIsPopupOpen(false)}>Contact</Link>

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
            )} */}
        </nav>
    );
};

export default Navbar