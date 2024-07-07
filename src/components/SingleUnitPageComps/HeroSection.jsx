import React, { useState, useEffect } from 'react';
import './Styles/HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import LightBox from '../SingleDevlopmentPageComps/LightBox';

const HeroSection = ({imagessingleunitpage}) => {
    const [isHoverPlay, setIsHoverPlay] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    
    const closeLightbox = () => {
        setIsPopupOpen(false);
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('');

    

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagessingleunitpage.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagessingleunitpage.length) % imagessingleunitpage.length);
    };

    const getCurrentImages = () => {
        const nextIndex = (index) => (index + currentIndex) % imagessingleunitpage.length;
        return [
            imagessingleunitpage[nextIndex(0)],
            imagessingleunitpage[nextIndex(1)],
            imagessingleunitpage[nextIndex(2)],
            imagessingleunitpage[nextIndex(3)]
        ];
    };

    useEffect(() => {
        setFadeClass('fade-in');
        const timer = setTimeout(() => {
            setFadeClass('');
        }, 1000); // Match the duration of the animation
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const currentImages = getCurrentImages();

    
    useEffect(() => {
        if ( isPopupOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [ isPopupOpen]);

    return (
        <>
            <section className="">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    <div className="col-span-1 lg:col-span-2 bg-container rounded-lg">
                        <div className="relative rounded-lg">
                            <div className='rounded-lg'>
                                <img key={currentImages[0]} src={currentImages[0]} alt="Main view of the property" className={`rounded-lg w-full bg-zoom ${fadeClass}`} />
                            </div>
                            <button className="absolute top-4 right-4 bg-bggray text-primarycolor font-medium px-3 py-1 rounded-full">FOR SALE</button>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-4 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className='aspect-square lg:aspect-auto bg-container rounded-lg'>
                            <img key={currentImages[1]} src={currentImages[1]} alt="Thumbnail 1" className={`rounded-lg w-full h-full object-cover bg-zoom ${fadeClass}`} />
                        </div>
                        <div className='aspect-square lg:aspect-auto  bg-container rounded-lg'>
                            <img key={currentImages[2]} src={currentImages[2]} alt="Thumbnail 2" className={`rounded-lg w-full h-full  object-cover  bg-zoom ${fadeClass}`} />
                        </div>
                        <div className='block lg:hidden xl:block aspect-square lg:aspect-auto  bg-container rounded-lg'>
                            <img key={currentImages[3]} src={currentImages[3]} alt="Thumbnail 3" className={`rounded-lg w-full h-full  object-cover  bg-zoom ${fadeClass}`} />
                        </div>
                        <div className="relative block lg:hidden xl:block bg-container rounded-lg">
                            <div className='h-full aspect-square lg:aspect-auto  '>
                                <img key={currentImages[3]} src={currentImages[3]} alt="Thumbnail 4" className={`rounded-lg w-full h-full  object-cover  bg-zoom ${fadeClass}`} />
                            </div>
                            <div className="hidden xl:flex absolute inset-0 bg-black  bg-opacity-50 items-center justify-center rounded-lg">
                                <div className={`${isHoverPlay ? 'px-3.5 py-1.5' : 'px-2 py-1'} row-hover px-3 py-1 text-white border border-[#ACACAC] hover:border-white rounded-full transition-all cursor-pointer duration-300 ease-in-out`}
                                    onClick={() => {setIsPopupOpen(true);}}
                                    onMouseEnter={() => { setIsHoverPlay(true) }}
                                    onMouseLeave={() => { setIsHoverPlay(false) }}>
                                    <span className="text-base mr-2">View All Photos</span>
                                    <FontAwesomeIcon icon={faChevronRight} size='xs' className='icon-slide' />
                                </div>
                            </div>
                            <div className="flex xl:hidden absolute inset-0 bg-black  bg-opacity-50 items-center justify-center rounded-lg">
                                <div className='px-2 py-1 text-white ' onClick={() => {setIsPopupOpen(true);}}>
                                    <span className="text-base mr-2">+{imagessingleunitpage.length - 4}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between gap-3 mt-6'>
                    <div className="">
                        <h2 className="text-3xl font-bold text-primarycolor">1000 Brickell Plz Unit: UPH1</h2>
                        <p className="text-2xl font-medium text-primarycolor mt-2">$18,000,000</p>
                    </div>

                    <div className="hidden lg:flex gap-1 ">
                        <button onClick={handlePrevious} className="py-2 lg:py-3 px-3 border border-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={handleNext} className="py-2 lg:py-3 px-3 border border-black rounded-lg">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>
            {isPopupOpen && (<LightBox isOpen={isPopupOpen} onClose={closeLightbox} images={imagessingleunitpage}/>)}

        </>
    );
};

export default HeroSection;
