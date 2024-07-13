import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import { faPlus, faChevronLeft, faChevronRight, faXmark, faCaretRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import OurAgentPagCard from '../OurAgentsPageComps/OurAgentPagCard';
import { Link } from 'react-router-dom';
import './styles/WhyWorkWithUs.css'
import DreamHomeContact from './DreamHomeContact';


const WhyWorkWithUsCarousel = ({ themegray }) => {
    const carouselRef = useRef(null);
    const divRefM = useRef(null);
    const additionalPixels = 20;
    const [divWidth, setDivWidth] = useState(0);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [trackPopup, setTrackPopup] = useState('Save €3,000 on legal fees')

    const scrollLeft = () => {
        if (carouselRef.current) {
            setDivWidth(divRefM.current.offsetWidth);
            carouselRef.current.scrollBy({ left: -(divWidth + additionalPixels), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setDivWidth(divRefM.current.offsetWidth);
            const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth + 300;
            const scrollAmount = divWidth + additionalPixels;

            if (carouselRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
                carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (divRefM.current) {
            setDivWidth(divRefM.current.offsetWidth);
        }
    }, []);

    const items = [
        {
            imgSrc: "/images/icons/assessment-alt.svg",
            title: "Save €3,000 on legal fees",
            description: "Our legal team will review every contract clause, ensure all documents are in order, inform you of all responsibilities, and handle the administrative tasks for the CPCV and Deed."
        },
        {
            imgSrc: "/images/icons/computer.svg",
            title: "The ultimate client area",
            description: "The Client Area streamlines your property search by allowing you to collaborate directly with your dedicated buyer's agent."
        },
        {
            imgSrc: "/images/icons/user-headset.svg",
            title: "Expert agents with local knowledge",
            description: "All our agents have years of experience working in the real estate. Along with in-depth local knowledge so you get the right property."
        },
        {
            imgSrc: "/images/icons/glass-cheers.svg",
            title: "Easy Process from start to finish",
            description: "Here's to smooth transactions and bubbly celebrations – cheers!"
        },
        {
            imgSrc: "/images/icons/glass-cheers.svg",
            title: "Free Mortgage Support",
            description: "Here's to smooth transactions and bubbly celebrations – cheers!"
        },
        {
            imgSrc: "/images/icons/glass-cheers.svg",
            title: "Bespoke Development Viewings",
            description: "Here's to smooth transactions and bubbly celebrations – cheers!"
        },
        {
            imgSrc: "/images/icons/free.svg",
            title: "Our services are 100% free",
            description: "Our services are completely free from start to finish."
        },
    ];

    const handlePlusClick = (item) => {
        setPopupVisible(true);
        setTrackPopup(item.title)
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup-container') {
            setPopupVisible(false);
        }
    };


    useEffect(() => {
        if (isPopupVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupVisible]);

    useEffect(() => {
        // Fix for Firefox: Ensure scroll position starts at the beginning
        const handleFirefoxFix = () => {
            if (carouselRef.current && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                carouselRef.current.scrollTo({ left: 0 });
            }
        };
        // Call the fix when the component mounts or when items change
        handleFirefoxFix();
    }, []);

    const agentsdata = [
        {
            id: 1,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 2,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png", "/images/global/flag2.png"]
        },

        {
            id: 3,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
    ];

    const [progressHeight, setProgressHeight] = useState(0);
    const popupRef = useRef(null);

    const handleScroll = () => {
        if (popupRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = popupRef.current;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgressHeight(scrolled);
        }
    };

    useEffect(() => {
        const popupElement = popupRef.current;
        if (isPopupVisible && popupElement) {
            popupElement.addEventListener('scroll', handleScroll);

            // Clean up the event listener on unmount or when isOpen changes
            return () => {
                popupElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isPopupVisible, popupRef.current]);

    useEffect(() => {
        if (isPopupVisible) {
            // Reset the scroll progress when the popup is opened
            setProgressHeight(0);
        }
    }, [isPopupVisible]);

    return (
        <>
            <div ref={carouselRef} className="w-full flex flex-nowrap py-2 overflow-x-scroll overflow-y-hidden gap-6 scrollbar-hide mt-10 pr-[7%] pl-[7%]">
                {items.map((item, index) => (
                    <div data-aos="fade-up"
                        data-aos-delay={index * 100} className='trnasformscale cursor-pointer' onClick={() => { handlePlusClick(item); }}>
                        <div
                            key={index}
                            ref={divRefM}
                            className={`  ${themegray ? 'bg-bggray' : 'bg-white'}  dark:bg-zinc-800 rounded-3xl overflow-hidden
                       min-w-[320px] max-w-[320px] md:min-w-[390px] md:max-w-[390px] h-full`}
                        >
                            <div className='flex flex-col justify-between gap-4 p-6 h-full'>
                                <div className='flex flex-col gap-4'>
                                    <div className='w-full h-[40px] flex items-center'>
                                        <img src={item.imgSrc} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-primarycolor pr-6">{item.title}</h3>
                                    <p className="text-black text-md pr-6">{item.description}</p>
                                </div>
                                <div className='text-right'>
                                    <button className='py-2 px-3 pt-2.5 rounded-full bg-primarycolor hover:bg-primarycolorhover cursor-pointer transition-colors duration-300 ease-in-out' >
                                        <FontAwesomeIcon icon={faPlus} size='lg' color='white' className='font-semibold' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-between items-start mt-6 pl-[7%] pr-[7%]">
                <div className="flex justify-between items-center mb-4 w-full">
                    <button className="bg-primarycolor hover:bg-primarycolorhover font-medium text-white py-2 lg:py-3 px-8 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out">Sign Up For Free</button>
                    <div>
                        <button onClick={scrollLeft} className={`py-2 lg:py-3 px-3  rounded-lg mr-2 ${themegray ? 'bg-bggray' : 'bg-white'} `}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={scrollRight} className={`py-2 lg:py-3 px-3  rounded-lg ${themegray ? 'bg-bggray' : 'bg-white'} `}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>

            {isPopupVisible && (

                <div
                    id="popup-container"
                    ref={popupRef}
                    className="fixed z-50 h-screen w-full inset-0 px-[2%] pt-[5%] bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 overflow-y-scroll "
                    onClick={handleOutsideClick}>
                    <AnimatePresence>
                        <motion.div
                            initial={{ y: "110vh" }} // Start from the very bottom of the screen
                            animate={{ y: 0 }} // Slide to the original position
                            exit={{ y: "110vh" }} // Slide back to the very bottom of the screen when exiting
                            transition={{ y: { duration: 0.5, ease: "easeInOut" } }}

                            className="bg-white max-w-[1420px] mx-auto relative rounded-tr-lg rounded-tl-lg z-30">
                            <div className='sticky z-50 top-5 pr-5 w-full flex justify-end'>
                                <button
                                    className=" bg-transparent text-black"
                                    onClick={handleClosePopup} >
                                    <FontAwesomeIcon icon={faXmark} size='xl' />
                                </button>
                            </div>

                            {
                                trackPopup === 'Save €3,000 on legal fees' ? (
                                    <div className='flex flex-col gap-6 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Free Legal Fees When Buying A New Home</h2>

                                        <div className='w-full flex flex-col-reverse lg:flex-row gap-10 mt-10 relative'>

                                            <div className=' w-full lg:w-[40%] flex justify-center lg:justify-start'>

                                                <div className='sticky top-0 max-w-sm'>
                                                    <img
                                                        src="/images/pages/workwithussection/img1.png"
                                                        className="about-section__image portrait"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>

                                            <div className='w-full lg:w-[60%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Buy Developments Package</h2>
                                                        <p className="text-fontlight mb-6">
                                                            When purchasing a property in Portugal, legal services are typically an essential part of the budget. However, with our Buy Developments package, Portuguese legal fees are included at no extra cost. We partner with the highest quality lawyers, ensuring you receive exceptional legal representation throughout the process. This comprehensive approach not only simplifies the process but also saves you thousands of Euros. By bundling these essential services, you can invest more into your dream property in Portugal, ensuring a smooth and cost-effective buying experience.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Expert Legal Support</h2>
                                                        <p className="text-fontlight mb-6">
                                                            Once we’ve found your perfect property, we will introduce you to our English-speaking Portuguese lawyers. These friendly, highly experienced professionals are among the highest quality in the field, ensuring a seamless and stress-free process. With the right legal representation by your side, you will be fully protected throughout the entire purchase and beyond. Our commitment to providing top-tier legal support guarantees peace of mind as you invest in your dream property in Portugal.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Saving You Time & Stress
                                                        </h2>
                                                        <p className="text-fontlight mb-6">
                                                            You also have the option to grant our lawyers power of attorney, enabling them to manage your financial and property-related affairs on your behalf. This arrangement can save you significant time and effort, as it eliminates the need for you to travel back and forth to sign documents and contracts.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-primarycolor text-white p-[5%] lg:mx-20  mt-10  flex items-center justify-center rounded-3xl border-4 border-[#B69D74]">
                                            <div className='flex flex-col items-center justify-center max-w-2xl '>
                                                <h2 className="text-center text-2xl lg:text-4xl font-bold mb-4">Throughout the process of purchasing your property our legal team will oversee:</h2>
                                                <ul className=" space-y-2 font-medium mt-4">
                                                    <div className='flex items-center gap-4'>
                                                        <FontAwesomeIcon icon={faCaretRight} size='lg' />
                                                        <li>Checking purchase contracts, managing deposits, and all stage payments</li>
                                                    </div>
                                                    <div className='flex items-center gap-4'>
                                                        <FontAwesomeIcon icon={faCaretRight} size='lg' />
                                                        <li> Completing on the property and managing all completion payments</li>
                                                    </div>
                                                    <div className='flex items-center gap-4'>
                                                        <FontAwesomeIcon icon={faCaretRight} size='lg' />

                                                        <li>Organization and installation of water and electricity meters</li>
                                                    </div>
                                                    <div className='flex items-center gap-4'>
                                                        <FontAwesomeIcon icon={faCaretRight} size='lg' />

                                                        <li>Setting up of direct debits for water and electricity</li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='lg:mx-24  mt-10  flex flex-col justify-center gap-5 text-center'>
                                            <p>
                                                All of this is included in our exclusive <b>Buy Developments package</b>. We will also assist you in opening a Portuguese bank account, obtaining a NIF number, and provide guidance throughout the entire process.
                                            </p>
                                            <p>
                                                While you’re at home, our legal team manages all necessary payments to the builder and keeps you informed about your property’s progress with regular updates, ensuring you’re always in the loop.
                                            </p>
                                            <p>We are always just a phone call away for any questions or concerns, no matter how big or small. If you have any questions now, or want to learn more about our legal services, please complete the form below to contact us. We’re here to help.</p>
                                        </div>

                                    </div>

                                ) : trackPopup === 'The ultimate client area' ? (
                                    <div className='flex flex-col gap-4 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Our Client Area</h2>

                                        <div className='w-full flex flex-col lg:flex-row gap-10 mt-10 relative'>

                                            <div className=' w-full lg:w-[40%]'>

                                                <div className='sticky top-0 '>
                                                    <img
                                                        src="/images/pages/workwithussection/img2.png"
                                                        className="about-section__image portrait"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>

                                            <div className='w-full lg:w-[60%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Save Money Buying With Us</h2>
                                                        <p className="text-fontlight mb-6">
                                                            WhWhen purchasing a property in Portugal, it's common to account for legal services in your budget. However, with our Buy Developments package, the cost of Portuguese legal fees is included. This saves you thousands of Euros, allowing you to invest more into your dream property in Portugal.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Simple Legal Assistance</h2>
                                                        <p className="text-fontlight mb-6">
                                                            Once we’ve found your perfect property, we will introduce you to our English-speaking Portuguese lawyers. These friendly, highly experienced professionals ensure a seamless process. With the right legal representation by your side, you will be fully protected throughout the entire purchase and beyond.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : trackPopup === 'Expert agents with local knowledge' ? (
                                    <div className='flex flex-col gap-4 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Expert Multilingual Agents With Local Knowledge</h2>

                                        <div className='w-full flex flex-col-reverse lg:flex-row gap-10 mt-10 relative'>

                                            <div className=' w-full lg:w-[40%]  flex justify-center lg:justify-start'>

                                                <div className='sticky top-0 max-w-sm'>
                                                    <img
                                                        src="/images/pages/workwithussection/img3.png"
                                                        className="about-section__image portrait"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>

                                            <div className='w-full lg:w-[60%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Years Of Expertise</h2>
                                                        <p className="text-fontlight mb-6">
                                                            Our agents bring years of expertise in real estate and extensive experience in the Portuguese market. With countless successful deals under their belts, they possess the knowledge and skills to guide you through every step of the process. They are dedicated to ensuring you find the best possible property tailored to your needs and preferences. By working with us, you benefit from our deep local knowledge, professional expertise, and commitment to your satisfaction, guaranteeing you end up with the ideal property.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Multilingual Agents at Your Service</h2>
                                                        <p className="text-fontlight mb-6">
                                                            We are proud to offer a team of agents who speak a variety of languages, ensuring you receive the best possible service in your preferred language. With a diverse group of professionals, you have many agents to choose from who can communicate with you comfortably and effectively. You can easily identify which languages our agents speak by the flags displayed on their agent cards on the Agents page.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Personalized Service and Local Expertise</h2>
                                                        <p className="text-fontlight mb-6">
                                                            Our agents are not just experts in real estate; they are also deeply knowledgeable about the local market and communities. They take the time to understand your unique needs and preferences, providing personalized service tailored to your individual situation. Whether you’re looking for a bustling city center apartment or a tranquil countryside retreat, our agents use their local expertise to find properties that perfectly match your lifestyle and aspirations. Their commitment to personalized service ensures that your experience with us is smooth, enjoyable, and ultimately successful.
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div id="devcards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                            {agentsdata.map(agentdata => (
                                                <OurAgentPagCard key={agentdata.id} agentdata={agentdata} />
                                            ))}
                                        </div>

                                        <div className="flex justify-center mt-5">
                                            <Link to={'/ouragents'}>
                                                <button className="buttonLong bg-primarycolor hover:bg-primarycolorhover text-white text-center cursor-pointer transition-colors duration-300 ease-in-out">See All Agents</button>
                                            </Link>
                                        </div>
                                    </div>
                                ) : trackPopup === 'Easy Process from start to finish' ? (
                                    <div className='flex flex-col gap-4 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Simple Process From Start To Finish</h2>

                                        <div className="p-6">
                                            <div className="relative ">

                                                <div className="absolute left-4 top-0 z-10 h-[100%] border-l-4 border-[#E5E5E5]">
                                                    <div
                                                        className="absolute -left-1 z-20 border-l-4 border-primarycolor"
                                                        style={{ height: `${progressHeight}%`, }}
                                                    />
                                                </div>

                                                <div className='relative z-30'>

                                                    <div className="relative mb-8 pl-12">
                                                        <div className="absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-primarycolor text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out">1</div>

                                                        <div className="md:px-6">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor">Save Money Buying With Us</h2>
                                                            </div>
                                                            <p className="mb-4">
                                                                Explore the finest selection of new developments in Portugal with Buy Developments. Our advanced search engine allows you to specify the exact property you're looking for, offering a variety
                                                                of filters to conduct multiple personalized searches to match your unique needs. This comprehensive approach ensures you find the perfect new property in Portugal that meets all your
                                                                preferences.
                                                            </p>
                                                            <ul className="list-disc list-inside mb-4">
                                                                <li>Property Type: Choose from new apartments, houses, or villas.</li>
                                                                <li>Bedrooms: Select the number of bedrooms.</li>
                                                                <li>Location: Search by region or city.</li>
                                                                <li>Budget</li>
                                                                <li>Property Size</li>
                                                            </ul>
                                                            <p>Your search will generate a results page with all available properties that meet your criteria.</p>
                                                        </div>
                                                    </div>

                                                    <div className="relative mb-8 pl-12">
                                                        <div className={`absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight > (window.innerWidth < 350 ? 14.6 : 15) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>2</div>

                                                        <div className="md:px-6">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor mb-2">Speak With Our Team</h2>

                                                            </div>
                                                            <p className="text-muted-foreground mb-6">
                                                                Once you've explored our website, it's time to take the next exciting step. Get in touch with us or create a free account, and one of our expert real estate agents will reach out to guide you
                                                                through the entire process. We also have exclusive access to new developments that are not yet listed online, giving you the opportunity to secure an incredible deal before anyone else. Don't
                                                                miss out—contact us today and let's begin your journey to finding the perfect property in Portugal!
                                                            </p>
                                                            <h3 className="text-xl font-semibold text-black mb-4">Contact Information:</h3>
                                                            <div className="flex flex-wrap gap-10">

                                                                <div className='flex items-center gap-2'>
                                                                    <div>
                                                                        <img src="/images/icons/navbar/phoneblack.svg" alt="" className='h-6' />
                                                                    </div>
                                                                    <div className='' >
                                                                        <p className='text-sm font-semibold'>Call us Free from the UK:</p>
                                                                        <p className='text-md font-semibold'>+44 0765 987654</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex items-center gap-2'>
                                                                    <div>
                                                                        <img src="/images/icons/navbar/phoneblack.svg" alt="" className='h-6' />
                                                                    </div>
                                                                    <div >
                                                                        <p className='text-sm font-semibold'>Portugal Offices:</p>
                                                                        <p className='text-md font-semibold'>+351 919 931 440</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex  items-center gap-2'>
                                                                    <div>
                                                                        <img src="/images/icons/navbar/phoneblack.svg" alt="" className='h-6' />
                                                                    </div>
                                                                    <div >
                                                                        <p className='text-sm font-semibold '>Call us Free from the USA:</p>
                                                                        <p className='text-md font-semibold'>+1 (484) 521 9665</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex  items-center gap-2'>
                                                                    <div>
                                                                        <img src="/images/icons/navbar/emailblack.svg" alt="" className='h-6' />
                                                                    </div>
                                                                    <div >
                                                                        <p className='text-sm font-semibold'>Email us at:</p>
                                                                        <p className='text-md font-semibold'>info@buy.re</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col lg:flex-row gap-4 mt-6">
                                                                <button className="flex flex-row items-center rounded-lg font-medium bg-primarycolor hover:bg-primarycolorhover border border-primarycolor hover:border-primarycolorhover text-white px-5 lg:min-w-[200px] py-2 lg:py-3 space-x-2 cursor-pointer transition-colors duration-300 ease-in-out">
                                                                    <FontAwesomeIcon icon={faUser} size='md' />
                                                                    <span className='w-full text-center'>Create An Account</span>
                                                                </button>
                                                                <button className="flex flex-row items-center rounded-lg font-medium bg-transparent border border-primarycolor  text-black px-5  lg:min-w-[200px] py-2 lg:py-3 space-x-2 cursor-pointer transition-colors duration-300 ease-in-out">
                                                                    <span className='w-full text-center'>Contact Form</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="relative mb-8 pl-12">
                                                        <div className={`absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight > (window.innerWidth < 350 ? 33 : 32) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>3</div>

                                                        <div className="md:px-6">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor mb-2">Boutique Property Viewings</h2>

                                                            </div>
                                                            <p className="text-muted-foreground mb-4">
                                                                Your journey begins the moment you arrive in Portugal. We’ll be happy to collect you from either Faro or Lisbon Airport and take you to your chosen hotel, where you can unwind and enjoy the
                                                                Mediterranean lifestyle.
                                                            </p>
                                                            <p className="text-muted-foreground mb-4">
                                                                During your stay, we'll guide you through tours of your selected properties and introduce you to the vibrant local area. You'll have the opportunity to explore the surroundings and experience
                                                                the unique charm of Portugal.
                                                            </p>
                                                            <p className="text-muted-foreground">
                                                                We’re here to make your trip smooth and enjoyable. If there’s anything specific you need, please let us know—your comfort and satisfaction are our top priorities!
                                                            </p>
                                                        </div>
                                                    </div>


                                                    <div className="relative mb-8 pl-12">
                                                        <div className={`absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight > (window.innerWidth < 350 ? 45 : 44) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>4</div>
                                                        <div className="md:px-6">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor mb-2">Reserving Your Property</h2>

                                                            </div>
                                                            <p className="text-muted-foreground mb-4">
                                                                To secure your chosen property, a reservation fee or deposit is required at this stage. This fee is part of the overall cost and can be paid by card or bank transfer. You'll also need to sign
                                                                a reservation document confirming your intention to purchase the property, which the builder will sign to agree to the sale.
                                                            </p>
                                                            <p className="text-muted-foreground mb-4">
                                                                Once the reservation fee is paid and the contract is signed, the next step is to meet with one of our professional and friendly English-speaking Portuguese lawyers. Our legal team will
                                                                oversee:
                                                            </p>
                                                            <ul className="list-disc list-inside text-muted-foreground mb-4">
                                                                <li>Portuguese power of attorney</li>
                                                                <li>Checking purchase contracts and managing deposits and all stage payments</li>
                                                                <li>Completing the property purchase and managing all completion payments</li>
                                                                <li>Organizing and installing water and electricity meters</li>
                                                                <li>Setting up direct debits for water and electricity</li>
                                                            </ul>
                                                            <p className="text-muted-foreground mb-4">
                                                                Additionally, we will assist you in obtaining a NIF and opening a Portuguese bank account, providing you with personalized guidance and attention throughout the entire process.
                                                            </p>
                                                            <p className="text-muted-foreground">Secure your dream property with confidence and ease, knowing our expert team is here to support you every step of the way.</p>
                                                        </div>
                                                    </div>


                                                    <div className="relative mb-8 pl-12">
                                                        <div className={`absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight > (window.innerWidth < 350 ? 68.5 : 65) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>5</div>
                                                        <div className="md:px-6 ">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor mb-2">We'll Handle It</h2>

                                                            </div>
                                                            <p className="text-muted-foreground mb-4">
                                                                While you're at home, our legal team will manage all of the required payments to the builder, ensuring you never miss a deadline. By granting them power of attorney, you can relax as they manage the entire process on your behalf. We will keep you updated with regular progress reports on your property purchase.
                                                            </p>
                                                            <p className="text-muted-foreground">
                                                                Additionally, we can advise you on getting the best exchange rates when converting your money to Euros. Don't hesitate to reach out with any questions or concerns during your buying journey. We're always here to help!
                                                            </p>
                                                        </div>
                                                    </div>


                                                    <div className="relative mb-8 pl-12">
                                                        <div className={`absolute -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight > (window.innerWidth < 350 ? 79.5 : 76) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>6</div>
                                                        <div className="md:px-6 ">
                                                            <div className="flex flex-col justify-center mb-4">
                                                                <img
                                                                    src="/images/icons/free.svg"
                                                                    alt=""
                                                                    width="32"
                                                                    height="32"
                                                                    className='mb-2'
                                                                />
                                                                <h2 className="text-2xl font-bold text-primarycolor mb-2">Final Check</h2>

                                                            </div>
                                                            <p className="text-muted-foreground mb-2">
                                                                Before completion we will visit your property and ensure everything is in order. Once confirmed, our legal team will sign for the property on your behalf and connect the utilities for you.
                                                            </p>
                                                            <p className="text-muted-foreground">
                                                                We don't want you to have anything to worry about, so we will ensure everything is as it should be before completion. We will make sure we visit the property in person and keep you updated.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="relative mb-8 pl-12">
                                                        <div className="absolute left-3.5  top-0 z-20 h-[106%] border-l-[7px] border-[#ffffff]"> </div>


                                                        <div className={`absolute z-30 -left-1 md:-left-3 top-0 w-10 h-10 md:w-14 md:h-14 rounded-lg ${progressHeight >(window.innerWidth < 350 ? 88.5 : 85) ? 'bg-primarycolor' : 'bg-[#E5E5E5]'}  text-white flex items-center justify-center text-xl font-bold cursor-pointer transition-colors duration-300 ease-in-out`}>7</div>
                                                        <div className="flex flex-col lg:flex-row gap-10 md:px-6">
                                                            <div className="flex-1">
                                                                <div className="flex flex-col justify-center mb-4">
                                                                    <img
                                                                        src="/images/icons/free.svg"
                                                                        alt=""
                                                                        width="32"
                                                                        height="32"
                                                                        className='mb-2'
                                                                    />
                                                                    <h2 className="text-2xl font-bold text-primarycolor mb-2">Congrats</h2>

                                                                </div>
                                                                <p className="mb-4">
                                                                    Congrats! You now own your dream home in the sun, and once you're back in Portugal we will meet you with the keys and help you settle in. It's time to celebrate your new purchase.
                                                                </p>
                                                                <p className="mb-4">
                                                                    Again, please double check with us before booking your flights to make sure we are available to meet you.
                                                                </p>
                                                                <p className="mb-4">
                                                                    We want you to feel at home straight away so please let us know if there is anything we can do to help make this happen.
                                                                </p>
                                                                <div className="flex flex-col lg:flex-row gap-4 mt-6">
                                                                    <button className="flex flex-row items-center rounded-lg font-medium bg-primarycolor hover:bg-primarycolorhover border border-primarycolor hover:border-primarycolorhover text-white px-5 lg:min-w-[200px] py-2 lg:py-3 space-x-2 cursor-pointer transition-colors duration-300 ease-in-out">
                                                                        <FontAwesomeIcon icon={faUser} size='md' />
                                                                        <span className='w-full text-center'>Create An Account</span>
                                                                    </button>
                                                                    <button className="flex flex-row items-center rounded-lg font-medium bg-transparent border border-primarycolor  text-black px-5  lg:min-w-[200px] py-2 lg:py-3 space-x-2 cursor-pointer transition-colors duration-300 ease-in-out">
                                                                        <span className='w-full text-center'>Contact Form</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex-1 flex items-center justify-center">
                                                                <div className='relative overflow-hidden max-w-xs'>
                                                                    <img src="images/pages/workwithussection/img8.png" alt="Illustration of a new home with champagne glasses" className="rounded-lg" />

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div >
                                ) : trackPopup === 'Free Mortgage Support' ? (
                                    <div className='flex flex-col gap-4 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Free Mortgage Support</h2>

                                        <div className='w-full flex flex-col lg:flex-row gap-10 mt-10 relative'>
                                            <div className='w-full lg:w-[50%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Expert Mortgage Broker</h2>
                                                        <p className="text-fontlight mb-6">
                                                            At Buy Developments, we understand that securing the right mortgage is a crucial step in purchasing your dream property. That’s why we offer free mortgage support services to ensure you get the best deal possible. Our team of experienced mortgage brokers is dedicated to helping you navigate the complexities of the mortgage process with ease and confidence.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Free Mortgage Broker Services</h2>
                                                        <div className="text-fontlight mb-6">
                                                            <p> <b> Best Market Rates: </b> Our mortgage brokers have access to a wide range of lenders and mortgage products, allowing them to secure the best rates available on the market. They will work tirelessly to find a mortgage solution that fits your financial situation and goals, ensuring you save money over the life of your loan.</p>

                                                            <p className='mt-4'><b> Expert Guidance: </b> Navigating the mortgage process can be daunting, but our brokers are here to guide you every step of the way. From comparing different mortgage options to handling the paperwork, our experts will provide you with the information and support you need to make informed decisions.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className=' w-full lg:w-[50%] flex items-center justify-center '>

                                                <div className='relative max-w-sm '>
                                                    <img
                                                        src="/images/pages/workwithussection/img4.png"
                                                        className="h-full w-full"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className='w-full flex flex-col-reverse lg:flex-row gap-10 mt-10 relative'>
                                            <div className=' w-full lg:w-[50%] flex items-center justify-center '>

                                                <div className='relative max-w-sm '>
                                                    <img
                                                        src="/images/pages/workwithussection/img5.png"
                                                        className="h-full w-full"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>
                                            <div className='w-full lg:w-[50%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Pre-Approval Process</h2>
                                                        <div className="text-fontlight mb-6">
                                                            <p> <b> Budget Clarity: </b>  Understanding your budget is a vital part of the home-buying process. Through our pre-approval process, you’ll know exactly how much you can afford to borrow, giving you a clear budget to work with. This helps to streamline your property search and ensures you’re looking at homes within your price range.</p>

                                                            <p className='mt-4'><b> Streamlined Home Search: </b>  With a pre-approval in hand, you can focus your search on properties that fit your budget. This not only saves time but also positions you as a serious buyer, which can be an advantage in a competitive market.</p>
                                                        </div>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Free Consultation</h2>
                                                        <div className="text-fontlight mb-6">
                                                            <p> <b> Accurate Mortgage Estimates:  </b> Our free consultation service provides you with an accurate estimate of what your mortgage will look like, including monthly payments and interest rates. This initial meeting helps you understand your financial commitment and plan accordingly.</p>

                                                            <p className='mt-4'><b> Personalized Advice:  </b> During the consultation, our mortgage experts will offer personalized advice tailored to your unique financial situation. Whether you’re a first-time buyer or looking to refinance, our team will help you understand your options and make the best choices for your future.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ) : trackPopup === 'Bespoke Development Viewings' ? (
                                    <div className='flex flex-col gap-4 p-[5%] h-full'>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Bespoke Development Viewings</h2>

                                        <div className="flex flex-col md:flex-row gap-8 px-[5%] mt-10">
                                            <div className=" w-full h-[100] bg-primarycolor text-white p-[5%] flex items-center justify-center rounded-3xl border-4 border-[#B69D74]">
                                                <div className='text-center'>
                                                    <h2 className="text-2xl font-bold mb-4">Join Us For Your Bespoke Viewing Trip</h2>
                                                    <p className="text-muted-foreground">
                                                        Our viewing trips are designed exclusively for you, conducted on a one-to-one basis and tailored precisely to your specific criteria. Our top priority is to find your dream home in Portugal. When you arrange your trip with us, we’ll work closely with you before your departure to curate an exciting selection of properties for you to explore. Each property will perfectly match your preferences in terms of type, location, and budget.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center ">
                                                <div className='relative'>
                                                    <img src="images/pages/workwithussection/img6.png" alt="A beautiful property with a pool and scenic view" className="rounded-lg h-[350px] md:h-[400px] w-auto md:min-w-[300px] md:max-w-[300px]" />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row justify-between gap-8 mt-10 px-[5%] ">
                                            <div className="w-full md:w-1/2">
                                                <h2 className="text-2xl font-bold mb-4 text-primary">Things We Do</h2>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We do let you choose your itinerary to suit your timescales.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We do show you around the local areas, beaches, towns, golf courses and so on.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We do tailor your viewings around your requests, criteria and price range.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We do let you choose and book your own flights.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We can make suggestions but let you book your own accommodation.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" className="mr-2 h-5" />
                                                        <span>We do provide airport and hotel transfers.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <h2 className="text-2xl font-bold mb-4 text-primary">Things We Don't Do</h2>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We do not organise subsidised, high pressure inspection trips.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We do not book the cheapest and sometimes most inconvenient flights.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We do not book the cheapest and most basic hotels.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We do not tour with more than one buying party at a time.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We will not show you properties that do not match your specific criteria.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <img undefinedhidden="true" alt="cross-circle" src="https://openui.fly.dev/openui/24x24.svg?text=❌" className="mr-2 h-5" />
                                                        <span>We will not pressure you into purchasing a property during or at the end of your visit.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="px-[5%] mt-10">
                                            <div className="bg-primarycolor text-[#ffffff] p-10 lg:px-[10%] rounded-lg w-full mx-auto">
                                                <h2 className="text-center text-2xl lg:text-4xl font-bold text-[#f5a623] mb-6">Ten Great Things We Can Offer You</h2>
                                                <ol className=" space-y-4">
                                                    <li className="golden-list-item">Our unique Movehappy package saving you up to €18,000 when you purchase your new build Spanish property with us.</li>
                                                    <li className="golden-list-item">We are API Certified meaning that when you come to us, we can guarantee you will be greeted with valuable knowledge, honesty and integrity.</li>
                                                    <li className="golden-list-item">Always a personal one to one service guaranteed (this includes your viewing trip).</li>
                                                    <li className="golden-list-item">Tailored fixed rate mortgages up to 30 years, making your new property more affordable.</li>
                                                    <li className="golden-list-item">Full bank guarantees on all payments, making your hard earned cash safe and secure.</li>
                                                    <li className="golden-list-item">Complete after sales customer service, there to provide you with all the help and advice you may need during and after your purchase.</li>
                                                    <li className="golden-list-item">Full 10 year structural guarantee on all of our new build developments, equivalent to the NHBC in the UK.</li>
                                                    <li className="golden-list-item">Unconditionally, NO high pressure or underhand sales techniques. Instead, simple, informative and knowledgeable advice.</li>
                                                    <li className="golden-list-item">We only work with developers who are committed to providing a high standard of product and customer service.</li>
                                                    <li className="golden-list-item">Introduction to preferred furniture shops and home furnishing stores in the area.</li>
                                                </ol>
                                            </div>
                                        </div>

                                    </div>
                                ) : trackPopup === 'Our services are 100% free' ? (
                                    <div className='flex flex-col gap-4 h-full'>
                                        <h2 className="p-[5%] pb-0 font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Our services are 100% free</h2>

                                        <div className='w-full p-[5%] pt-0 flex flex-col lg:flex-row gap-10 mt-10 relative'>

                                            <div className='w-full lg:w-[60%]'>
                                                <div className="">
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/free.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-primarycolor">Free Legal Support</h2>
                                                        <p className="text-fontlight mb-6">
                                                            We understand that navigating legal matters can be daunting. That’s why our package includes free legal support. Our team of top-quality, English-speaking Portuguese lawyers will handle all legal aspects of your property purchase, ensuring you are fully protected throughout the entire process. From obtaining NIF numbers to finalizing contracts and managing all completion payments, we’ve got you covered.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'
                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2  text-primarycolor">Free Mortgage Assistance</h2>
                                                        <p className="text-fontlight mb-6">
                                                            Securing the best mortgage is crucial for your investment. Our free mortgage broker services ensure you get the best rates on the market. We provide pre-approval so you know exactly how much you can afford, and offer a free consultation to give you an accurate estimate of your mortgage options. Our brokers will guide you through every step of the mortgage process, making it as smooth and stress-free as possible.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Personalized Viewing Trips
                                                        </h2>
                                                        <p className="text-fontlight mb-6">
                                                            Our bespoke viewing trips are tailored to your specific criteria and conducted on a one-to-one basis. We will work closely with you before your departure to curate a selection of properties that perfectly match your preferences in terms of type, location, and budget. During your visit, we will arrange personalized tours of these properties and introduce you to the vibrant local area.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">On Going Support & Updates
                                                        </h2>
                                                        <p className="text-fontlight mb-6">
                                                            While you’re at home, our legal team will manage any required payments to the builder and keep you informed with regular updates on the progress of your property purchase. We ensure you never miss a deadline, providing peace of mind and a hassle-free experience.
                                                        </p>
                                                    </div>
                                                    <div style={{ marginBottom: '2rem' }} data-aos="fade-up" data-aos-delay="50">
                                                        <img
                                                            src="/images/icons/auction.svg"
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                            className='mb-2'

                                                        />
                                                        <h2 className="font-semibold  text-xl md:text-2xl mb-2 text-primarycolor">Currency Exchange
                                                        </h2>
                                                        <p className="text-fontlight mb-6">
                                                            We can also advise you on how to get the most out of your money when exchanging it to Euros. Our experts will help you secure the best exchange rates, ensuring you maximize your investment.
                                                            <br /> <br />
                                                            With Buy Developments, you can be confident that every aspect of your property purchase is handled with care and expertise, all at no extra cost to you. Let us take the stress out of buying your dream home in Portugal, and enjoy the journey with our professional support every step of the way.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className=' w-full lg:w-[40%]  flex justify-center lg:justify-start'>

                                                <div className='sticky top-0 max-w-sm'>
                                                    <img
                                                        src="/images/pages/workwithussection/img7.png"
                                                        className="about-section__image portrait"
                                                        // sizes="(max-width: 1024px) 42vw, 100vw"
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className='mt-10'>
                                            <DreamHomeContact />
                                        </div>
                                    </div>
                                ) : null
                            }

                        </motion.div >
                    </AnimatePresence >
                </div >

            )}
        </>
    );
};

export default WhyWorkWithUsCarousel;
