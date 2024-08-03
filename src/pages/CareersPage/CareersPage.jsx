import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

const CareersPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [hoverIndex, setHoverIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [filteredJobs, setFilteredJobs] = useState([]);

    const alljobs = [
        { title: "Licensed Real Estate Asim", location: "SERHANT. MARKETS" },
        { title: "Licensed Real Estate Agent", location: "SERHANT. MARKETS" },
        { title: "Licensed Real Estate Asim", location: "SERHANT. MARKETS" },
        { title: "Licensed Real Estate Agent", location: "SERHANT. MARKETS" },
    ];

    const brokerage = [
        { title: "Licensed Real Estate Agent", location: "SERHANT. MARKETS" },
        { title: "Licensed Real Estate Agent", location: "SERHANT. MARKETS" },
    ];

    const heroContentRef = useRef(null);

    useEffect(() => {
        const parallaxEffect = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector('.parallax-bg');
            const heroContent = heroContentRef.current;
            if (window.innerWidth > 1000) {
                if (parallax) {
                    parallax.style.backgroundPositionY = `-${scrolled * 0.3}px`;
                }
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
            }
        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    useEffect(() => {
        filterJobs();
    }, [inputValue, activeTab]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const filterJobs = () => {
        let jobsToFilter = activeTab === 'all' ? alljobs : brokerage;
        let filtered = jobsToFilter.filter(job =>
            job.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            job.location.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    return (
        <>
            <section className="section parallax-bg lg:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold">Careers</h1>
                </div>
            </section>

            <section className='px-[7%] pb-[80px] pt-[80px] bg-bggray relative z-30 -mt-10 rounded-tl-[40px] rounded-tr-[40px]'>
                <div className='w-full flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-[40%]'>
                        <h1 className='font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left '>A guide to Portugal’s <br /> prime locations</h1>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <p className='font-normal text-justify'>Thinking about moving to Portugal or investing in its real estate? Understanding the local lifestyle is key. Savor exquisite Mediterranean cuisine at top-notch restaurants, stay active with state-of-the-art gyms and wellness centers, and enjoy the latest events and attractions. Our expert team offers personalized recommendations and support to help you seamlessly integrate and make the most of your new home.</p>
                    </div>
                </div>
            </section>

            <section className='section bg-white'>
                <div className='flex flex-col gap-5 sm:flex-row items-start sm:items-center justify-between'>
                    <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">Current Openings</h2>

                    <div className='w-full sm:w-2/6 bg-white border-[2px] border-[#e6e4e4] rounded-lg relative p-1 focus-within:border-grayborder'>
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none placeholder:text-fontdark  rounded-lg p-2 w-full bg-white"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <span className={`flex items-center justify-center absolute top-1 right-1 border border-[#e6e4e4] focus-within:border-grayborder h-10 w-10 rounded-full `}>
                            <FontAwesomeIcon icon={faSearch} size='sm' />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="flex mt-10 pb-0 border-b border-b-[#e6e4e4]">
                        <button
                            id="allTab"
                            className={`tab-button font-medium px-8 pb-6  ${activeTab === 'all' ? 'text-primarycolor hover-underline-animationper' : 'text-gray-700 hover-underline-animationcar'
                                }`}
                            onClick={() => setActiveTab('all')}
                        >
                            All
                        </button>
                        <button
                            id="brokerageTab"
                            className={`tab-button font-medium px-8 pb-6  ${activeTab === 'brokerage' ? 'text-primarycolor hover-underline-animationper' : 'text-gray-700 hover-underline-animationcar'
                                }`}
                            onClick={() => setActiveTab('brokerage')}
                        >
                            Brokerage
                        </button>
                    </div>

                    <div className="flex flex-col gap-5 mt-10" id={`${activeTab}Tab`}>
                        {filteredJobs.length === 0 ? (
                            <div className="flex justify-center items-center mt-10">
                                <p className="text-gray-500">Search results not found.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5 mt-10">
                                {filteredJobs.map((agent, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center bg-transparent p-4 md:p-8 rounded-lg border border-[#e6e4e4] hover:border-grayborder transition-all cursor-pointer duration-300 ease-in-out"
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <div>
                                            <h2 className="text-xl font-semibold text-primarycolor">{agent.title}</h2>
                                            <div className="flex items-center gap-1 mt-2">
                                                <img src="/images/icons/locationmarkerblack.svg" alt="" className="h-4" />
                                                <p className="text-black">{agent.location}</p>
                                            </div>
                                        </div>
                                        <button
                                            className={`border rounded-full ${hoverIndex === index ? 'w-10 h-10 border-grayborder' : 'w-8 h-8 border-[#e6e4e4]'
                                                } flex items-center justify-center transition-all cursor-pointer duration-300 ease-in-out`}
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} size="xs" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareersPage;
