import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import LatestUpdatesCarousel from '../../components/HomePageComps/LatestUpdatesCarousel';


const SingleNewsPage = () => {
    const heroContentRef = useRef(null);
    const { title } = useParams();

    useEffect(() => {
        const parallaxEffect = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector('.parallax-bg');
            const heroContent = heroContentRef.current;
            if (window.innerWidth > 1000) {

                if (parallax) {
                    parallax.style.backgroundPositionY = `-${scrolled * 0.3}px`; // Adjusts slower parallax scrolling
                }
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`; // Adjusts slower scrolling for hero content
                }
            }
        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    const [activeTab, setActiveTab] = useState('');
    const [hoverTab, setHoverTab] = useState('');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        document.getElementById(tabId).scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['buyportugal', 'sellportugal', 'buyporto', 'sellporto'];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveTab(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <section className="section parallax-bg md:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative flex justify-start items-end h-full  text-white pt-80 mb-10">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold ">{decodeURIComponent(title)}</h1>
                </div>
            </section>

            <section className='section relative z-50 bg-white -mt-10 rounded-tr-[40px] rounded-tl-[40px]'>
                <div className="flex flex-col md:flex-row gap-6">
                    <aside className="hidden lg:block w-full lg:w-1/4 mt-4 ">
                        <nav className='sticky top-20 p-4  bg-bggray rounded-lg'>
                            <ul className="space-y-2">
                                <li
                                    onMouseEnter={() => { setHoverTab("buyportugal") }}
                                    onMouseLeave={() => { setHoverTab("") }}
                                >
                                    <a
                                        href="#buyportugal"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleTabClick('buyportugal');
                                        }}
                                        className={`flex items-center p-2 ${activeTab === 'buyportugal' ? 'text-primarycolor font-semibold ' : 'text-black hover:text-primarycolor font-medium'} rounded  cursor-pointer transition-colors duration-300 ease-in-out`}
                                    >
                                        <span className={`mr-2 border ${activeTab === 'buyportugal' ? 'border-primarycolor' : 'border-bggray'} ${hoverTab === 'buyportugal' ? 'border-primarycolor' : 'border-bggray'} h-10 w-12 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-300 ease-in-out`}>
                                            1
                                        </span>
                                        How to buy a property in Portugal
                                    </a>
                                </li>
                                <li
                                onMouseEnter={() => { setHoverTab("sellportugal") }}
                                onMouseLeave={() => { setHoverTab("") }}>
                                    <a
                                        href="#sellportugal"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleTabClick('sellportugal');
                                        }}
                                        className={`flex items-center p-2 ${activeTab === 'sellportugal' ? 'text-primarycolor font-semibold ' : 'text-black hover:text-primarycolor font-medium'} rounded cursor-pointer transition-colors duration-300 ease-in-out`}
                                    >
                                        <span className={`mr-2 border ${activeTab === 'sellportugal' ? 'border-primarycolor' : 'border-bggray'} ${hoverTab === 'sellportugal' ? 'border-primarycolor' : 'border-bggray'} h-10 w-12 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-300 ease-in-out`}>
                                            2
                                        </span>
                                        How to sell a property in Portugal
                                    </a>
                                </li>
                                <li
                                onMouseEnter={() => { setHoverTab("buyporto") }}
                                onMouseLeave={() => { setHoverTab("") }}>
                                    <a
                                        href="#buyporto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleTabClick('buyporto');
                                        }}
                                        className={`flex items-center p-2 ${activeTab === 'buyporto' ? 'text-primarycolor font-semibold ' : 'text-black hover:text-primarycolor font-medium'} rounded  cursor-pointer transition-colors duration-300 ease-in-out`}
                                    >
                                        <span className={`mr-2 border ${activeTab === 'buyporto' ? 'border-primarycolor' : 'border-bggray'} ${hoverTab === 'buyporto' ? 'border-primarycolor' : 'border-bggray'} h-10 w-12 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-300 ease-in-out`}>
                                            3
                                        </span>
                                        How to buy a property in Porto
                                    </a>
                                </li>
                                <li
                                onMouseEnter={() => { setHoverTab("sellporto") }}
                                onMouseLeave={() => { setHoverTab("") }}>
                                    <a
                                        href="#sellporto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleTabClick('sellporto');
                                        }}
                                        className={`flex items-center p-2 ${activeTab === 'sellporto' ? 'text-primarycolor font-semibold ' : 'text-black hover:text-primarycolor font-medium'} rounded  cursor-pointer transition-colors duration-300 ease-in-out`}
                                    >
                                        <span className={`mr-2 border ${activeTab === 'sellporto' ? 'border-primarycolor' : 'border-bggray'} ${hoverTab === 'sellporto' ? 'border-primarycolor' : 'border-bggray'} h-10 w-12 flex items-center justify-center rounded-md cursor-pointer transition-colors duration-300 ease-in-out`}>
                                            4
                                        </span>
                                        How to sell a property in Porto
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <div className='w-full lg:w-3/4 p-4'>
                        <h1 className="text-3xl font-semibold mb-4">{decodeURIComponent(title)}</h1>

                        <div className="mt-8" id='buyportugal'>
                            <h2 className="text-2xl font-bold mb-4">Buy Property In Portugal</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>

                        <div id='sellportugal'>
                            <h2 className="text-2xl font-bold mb-4">Sell Property In Portugal</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>

                        <div id='buyporto'>
                            <h2 className="text-2xl font-bold mb-4">Buy Property In Porto</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>

                        <div id='sellporto'>
                            <h2 className="text-2xl font-bold mb-4">Sell Property In Porto</h2>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <p className="mb-4">
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-bggray relative z-20' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left pl-[7%]">You May Also Like</h2>
                <LatestUpdatesCarousel />
            </section>
        </>
    )
}

export default SingleNewsPage