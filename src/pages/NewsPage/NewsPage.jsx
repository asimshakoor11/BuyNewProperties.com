import React, { useEffect, useRef, useState } from 'react'
import NewsPagination from '../../components/NewsPageComps/NewsPagination';

const BuildingRenovation = [
    {
        id: 1,
        imageSrc: "/images/pages/homepage/herosection1.svg",
        date: "May 15th 2024",
        category: "News",
        title: "Portugal Property Buying Process",
        description: "Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process"
    },
    {
        id: 2,
        imageSrc: "/images/pages/homepage/herosection2.svg",
        date: "June 1st 2024",
        category: "Market",
        title: "Latest Trends in Real Estate",
        description: "Explore the latest trends in real estate and understand how the market is evolving"
    },
    {
        id: 3,
        imageSrc: "/images/pages/homepage/herosection3.svg",
        date: "July 10th 2024",
        category: "Tips",
        title: "How to Buy Your First Home",
        description: "Buying your first home can be daunting. Here are some tips to help you get started"
    },
    {
        id: 4,
        imageSrc: "/images/pages/homepage/herosection4.svg",
        date: "August 5th 2024",
        category: "Advice",
        title: "Understanding Property Taxes",
        description: "Learn about property taxes and how they can impact your real estate investments"
    },
    {
        id: 5,
        imageSrc: "/images/pages/homepage/herosection5.svg",
        date: "September 12th 2024",
        category: "News",
        title: "Housing Market Predictions for 2025",
        description: "Experts share their predictions for the housing market in 2025 and what buyers should expect"
    },
    {
        id: 6,
        imageSrc: "/images/pages/homepage/herosection6.svg",
        date: "October 20th 2024",
        category: "Market",
        title: "Real Estate Investment Strategies",
        description: "Discover effective strategies for investing in real estate and maximizing your returns"
    },
    {
        id: 7,
        imageSrc: "/images/pages/homepage/herosection7.svg",
        date: "November 15th 2024",
        category: "News",
        title: "Impact of Interest Rates on Housing",
        description: "Understand how changes in interest rates can affect the housing market and your buying power"
    },
    {
        id: 8,
        imageSrc: "/images/pages/homepage/herosection8.svg",
        date: "December 1st 2024",
        category: "Tips",
        title: "Renovation Tips for Increasing Home Value",
        description: "Learn which renovations can add the most value to your home and attract potential buyers"
    },
    {
        id: 9,
        imageSrc: "/images/pages/homepage/herosection9.svg",
        date: "January 10th 2025",
        category: "Advice",
        title: "Choosing the Right Real Estate Agent",
        description: "Find out how to select a real estate agent who can help you navigate the buying or selling process"
    },
    {
        id: 10,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 11,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 12,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    }
];

const Business = [
    {
        id: 1,
        imageSrc: "/images/pages/homepage/herosection1.svg",
        date: "May 15th 2024",
        category: "News",
        title: "Portugal Property Buying Process",
        description: "Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process"
    },
    {
        id: 2,
        imageSrc: "/images/pages/homepage/herosection2.svg",
        date: "June 1st 2024",
        category: "Market",
        title: "Latest Trends in Real Estate",
        description: "Explore the latest trends in real estate and understand how the market is evolving"
    },
    {
        id: 3,
        imageSrc: "/images/pages/homepage/herosection3.svg",
        date: "July 10th 2024",
        category: "Tips",
        title: "How to Buy Your First Home",
        description: "Buying your first home can be daunting. Here are some tips to help you get started"
    },
    {
        id: 4,
        imageSrc: "/images/pages/homepage/herosection4.svg",
        date: "August 5th 2024",
        category: "Advice",
        title: "Understanding Property Taxes",
        description: "Learn about property taxes and how they can impact your real estate investments"
    },
    {
        id: 5,
        imageSrc: "/images/pages/homepage/herosection5.svg",
        date: "September 12th 2024",
        category: "News",
        title: "Housing Market Predictions for 2025",
        description: "Experts share their predictions for the housing market in 2025 and what buyers should expect"
    },
    {
        id: 6,
        imageSrc: "/images/pages/homepage/herosection6.svg",
        date: "October 20th 2024",
        category: "Market",
        title: "Real Estate Investment Strategies",
        description: "Discover effective strategies for investing in real estate and maximizing your returns"
    },
    {
        id: 7,
        imageSrc: "/images/pages/homepage/herosection7.svg",
        date: "November 15th 2024",
        category: "News",
        title: "Impact of Interest Rates on Housing",
        description: "Understand how changes in interest rates can affect the housing market and your buying power"
    },
    {
        id: 8,
        imageSrc: "/images/pages/homepage/herosection8.svg",
        date: "December 1st 2024",
        category: "Tips",
        title: "Renovation Tips for Increasing Home Value",
        description: "Learn which renovations can add the most value to your home and attract potential buyers"
    },
    {
        id: 9,
        imageSrc: "/images/pages/homepage/herosection9.svg",
        date: "January 10th 2025",
        category: "Advice",
        title: "Choosing the Right Real Estate Agent",
        description: "Find out how to select a real estate agent who can help you navigate the buying or selling process"
    },
    {
        id: 10,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 11,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 12,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 13,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 14,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 15,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 16,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 17,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 18,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    }
];

const PortugueseLife = [
    {
        id: 1,
        imageSrc: "/images/pages/homepage/herosection1.svg",
        date: "May 15th 2024",
        category: "News",
        title: "Portugal Property Buying Process",
        description: "Portugal Property Buying Process Portugal Property Buying Process Portugal Property Buying Process"
    },
    {
        id: 2,
        imageSrc: "/images/pages/homepage/herosection2.svg",
        date: "June 1st 2024",
        category: "Market",
        title: "Latest Trends in Real Estate",
        description: "Explore the latest trends in real estate and understand how the market is evolving"
    },
    {
        id: 3,
        imageSrc: "/images/pages/homepage/herosection3.svg",
        date: "July 10th 2024",
        category: "Tips",
        title: "How to Buy Your First Home",
        description: "Buying your first home can be daunting. Here are some tips to help you get started"
    },
    {
        id: 4,
        imageSrc: "/images/pages/homepage/herosection4.svg",
        date: "August 5th 2024",
        category: "Advice",
        title: "Understanding Property Taxes",
        description: "Learn about property taxes and how they can impact your real estate investments"
    },
    {
        id: 5,
        imageSrc: "/images/pages/homepage/herosection5.svg",
        date: "September 12th 2024",
        category: "News",
        title: "Housing Market Predictions for 2025",
        description: "Experts share their predictions for the housing market in 2025 and what buyers should expect"
    },
    {
        id: 6,
        imageSrc: "/images/pages/homepage/herosection6.svg",
        date: "October 20th 2024",
        category: "Market",
        title: "Real Estate Investment Strategies",
        description: "Discover effective strategies for investing in real estate and maximizing your returns"
    },
    {
        id: 7,
        imageSrc: "/images/pages/homepage/herosection7.svg",
        date: "November 15th 2024",
        category: "News",
        title: "Impact of Interest Rates on Housing",
        description: "Understand how changes in interest rates can affect the housing market and your buying power"
    },
    {
        id: 8,
        imageSrc: "/images/pages/homepage/herosection8.svg",
        date: "December 1st 2024",
        category: "Tips",
        title: "Renovation Tips for Increasing Home Value",
        description: "Learn which renovations can add the most value to your home and attract potential buyers"
    },
    {
        id: 9,
        imageSrc: "/images/pages/homepage/herosection9.svg",
        date: "January 10th 2025",
        category: "Advice",
        title: "Choosing the Right Real Estate Agent",
        description: "Find out how to select a real estate agent who can help you navigate the buying or selling process"
    },
    {
        id: 10,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 11,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 12,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 13,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 14,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 15,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 16,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 17,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 18,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 19,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 20,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 21,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 22,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 23,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 24,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    },
    {
        id: 25,
        imageSrc: "/images/pages/homepage/herosection10.svg",
        date: "February 5th 2025",
        category: "Market",
        title: "Emerging Real Estate Markets in 2025",
        description: "Explore the emerging real estate markets that offer great investment opportunities in 2025"
    },
    {
        id: 26,
        imageSrc: "/images/pages/homepage/herosection11.svg",
        date: "March 12th 2025",
        category: "News",
        title: "Government Policies Affecting Real Estate",
        description: "Learn about new government policies and regulations that could impact the real estate market"
    },
    {
        id: 27,
        imageSrc: "/images/pages/homepage/herosection12.svg",
        date: "April 20th 2025",
        category: "Advice",
        title: "Tips for First-Time Landlords",
        description: "If you're considering becoming a landlord, these tips will help you get started on the right foot"
    }
];

const NewsPage = () => {
    const [selectedNews, setSelectedNews] = useState('Building & Renovation')
    const heroContentRef = useRef(null);

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

    return (
        <>
            <section className="section parallax-bg md:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold">News</h1>
                </div>
            </section>

            <section className='px-[7%] bg-white'>

                <div className='w-full '>

                    <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 mx-auto  '>
                        <div className='w-full xl:max-w-[750px] pt-[80px] md:pb-[80px]  '>
                            {
                                selectedNews === 'Building & Renovation' ? (
                                    <div>
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Found {BuildingRenovation.length} Articles</h2>
                                        <NewsPagination CardData={BuildingRenovation} />
                                    </div>
                                ) :
                                    selectedNews === 'Business' ? (
                                        <div>
                                            <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Found {Business.length} Articles</h2>
                                            <NewsPagination CardData={Business} />
                                        </div>
                                    ) :
                                        selectedNews === 'Portuguese Life' ? (
                                            <div>
                                                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Found {PortugueseLife.length} Articles</h2>
                                                <NewsPagination CardData={PortugueseLife} />
                                            </div>
                                        ) : null
                            }
                        </div>

                        <div className='w-full xl:w-[35%] flex items-start justify-center pb-[80px]  '>

                            <div class="relative z-40 w-full xl:w-64 bg-card text-card-foreground mt-10 xl:-mt-14">
                                <div class="px-4 py-3 font-bold font-Shippori_Mincho text-2xl text-white bg-secondrycolor rounded-tr-md rounded-tl-md  transition-colors duration-300 ease-in-out">News</div>
                                <nav class="flex flex-col">
                                    <button class={`px-4 py-3 text-left  border border-transparent border-b-[#D1D1D1] ${selectedNews === 'Building & Renovation' ? 'font-semibold bg-primarycolor  text-white' : 'font-medium bg-bggray hover:bg-bggrayhover text-black'} cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => { setSelectedNews('Building & Renovation') }}>Building & Renovation</button>
                                    <button class={`px-4 py-3 text-left border border-transparent border-b-[#D1D1D1] ${selectedNews === 'Business' ? 'font-semibold bg-primarycolor  text-white' : 'font-medium bg-bggray hover:bg-bggrayhover text-black'} cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => { setSelectedNews('Business') }}>Business</button>
                                    <button class={`px-4 py-3 text-left rounded-br-md rounded-bl-md ${selectedNews === 'Portuguese Life' ? 'font-semibold bg-primarycolor  text-white' : 'font-medium bg-bggray hover:bg-bggrayhover text-black'} cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => { setSelectedNews('Portuguese Life') }}>Portuguese Life</button>

                                </nav>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NewsPage