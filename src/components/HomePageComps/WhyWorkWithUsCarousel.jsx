import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import { faPlus, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const WhyWorkWithUsCarousel = () => {
    const carouselRef = useRef(null);
    const divRef = useRef(null);
    const additionalPixels = 20;
    const [divWidth, setDivWidth] = useState(0);
    const [popupContent, setPopupContent] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const scrollLeft = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            carouselRef.current.scrollBy({ left: -(divWidth + additionalPixels), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
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
        if (divRef.current) {
            setDivWidth(divRef.current.offsetWidth);
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
            imgSrc: "/images/icons/free.svg",
            title: "Our services are 100% free",
            description: "Our services are completely free from start to finish."
        },
        {
            imgSrc: "/images/icons/user-headset.svg",
            title: "Multilingual team of agents",
            description: "We have many international agents that speak a variety of languages."
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
        }
    ];

    const handlePlusClick = (item) => {
        setPopupContent(item);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };


    useEffect(() => {
        if (isPopupVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupVisible]);
  

    // const handleScrollDown = () => {
    //     window.scrollTo({
    //         top: window.scrollY + 100, // Scrolls the document to the bottom
    //         behavior: "smooth" // Optional: adds smooth scrolling effect
    //     });
    // };

    return (
        <>
            <div ref={carouselRef} className="w-full flex flex-nowrap justify-evenly py-2 overflow-x-scroll overflow-y-hidden gap-6 scrollbar-hide mt-10 pr-[7%] pl-[7%]">
                {items.map((item, index) => (
                    <div data-aos="fade-up"
                        data-aos-delay={index * 100} className='trnasformscale cursor-pointer' onClick={() => { handlePlusClick(item); }}>
                        <div
                            key={index}
                            ref={divRef}
                            className=" bg-white dark:bg-zinc-800 rounded-3xl overflow-hidden
                       min-w-[320px] max-w-[320px] md:min-w-[390px] md:max-w-[390px] h-full"
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
                                    <button className='py-2 px-3 rounded-full bg-primarycolor' >
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
                    <button className="bg-primarycolor font-medium text-white py-2 lg:py-3 px-8 rounded-lg">Sign Up For Free</button>
                    <div>
                        <button onClick={scrollLeft} className="py-2 lg:py-3 px-3 border border-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={scrollRight} className="py-2 lg:py-3 px-3 border border-black rounded-lg">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isPopupVisible && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-gray-800 p-4 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClosePopup}

                    >
                        <motion.div
                            className="bg-white rounded-lg p-3 md:p-6 md:max-w-lg mx-auto relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="absolute top-4 right-4 text-xl font-bold border py-1 px-3 rounded-full text-white bg-gray-800" onClick={handleClosePopup}>
                                <FontAwesomeIcon icon={faXmark} size='md' />
                            </button>
                            <div className='flex flex-col gap-4 p-6 h-full'>
                                <div className='flex flex-col gap-4'>
                                    <div className='w-full h-[60px] flex items-center'>
                                        <img src={popupContent.imgSrc} alt="" width={"50px"} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primarycolor pr-6">{popupContent.title}</h3>
                                    <p className="text-black text-md pr-6">{popupContent.description}</p>
                                    <a href="#" className='text-blue-900 underline'>Learn more</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default WhyWorkWithUsCarousel;
