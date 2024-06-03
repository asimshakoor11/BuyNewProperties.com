import React, { useState, useEffect, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import LatestDevelopmentCard from '../../components/LatestDevlopmentsCard';
import OwlCarousell from '../../components/Global/OwlCarousell';
import LatestUpdatesCarousel from '../../components/LatestUpdatesCarousel';
import { motion } from 'framer-motion';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import DevlopmentLocations from '../../components/DevlopmentLocations';
import DreamHomeContact from '../../components/DreamHomeContact';

const Homepage = () => {

    const titles = ['All Types of Property', 'Number of Bedrooms', 'All Regions'];
    const dropdownItems = [
        ['House', 'Townhouse', 'Apartment', 'Commercial'],
        [],
        ['Region 1', 'Region 2', 'Region 3'],
    ];
    const [numBedrooms, setNumBedrooms] = useState(0);

    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const incrementBedrooms = () => {
        setNumBedrooms((prevNum) => prevNum + 1);
    };

    const decrementBedrooms = () => {
        setNumBedrooms((prevNum) => (prevNum > 1 ? prevNum - 1 : 1));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current[openDropdown] && !dropdownRefs.current[openDropdown].contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    const data = [
        { title: 'MONTISNAVIA 1', description: 'Description 1' },
        { title: 'MONTISNAVIA 2', description: 'Description 2' },
        { title: 'MONTISNAVIA 3', description: 'Description 3' },
        { title: 'MONTISNAVIA 4', description: 'Description 4' },
        { title: 'MONTISNAVIA 5', description: 'Description 5' },
        { title: 'MONTISNAVIA 6', description: 'Description 6' },
        { title: 'MONTISNAVIA 7', description: 'Description 7' },
    ];

    return (
        <>
            <section className="section h-auto bg-cover bg-center relative"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center  py-40">
                    <h1 className="text-4xl md:text-6xl font-bold font-FuturaHeavy">A New Standard In <br /> Real Estate</h1>
                    <div className="mt-8 bg-bggray p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-black ">
                        {titles.map((title, index) => (
                            <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                                <button
                                    className="bg-transparent font-FuturaHeavy border-black px-4 py-2 rounded-lg border-2 flex flex-row items-center gap-2"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    <span>{title}</span>
                                    {openDropdown === index ? (
                                        <FontAwesomeIcon icon={faChevronUp} size='xs' className='ml-1' />
                                    ) : (
                                        <FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-1' />
                                    )}
                                </button>
                                {openDropdown === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 w-full bg-bggray shadow-lg rounded-md py-2 z-50"
                                    >
                                        {index === 1 ? (
                                            <div className="flex flex-row justify-between items-center px-4 py-2">
                                                <span className="font-FuturaHeavy">{numBedrooms} Bedrooms</span>
                                                <div className="flex items-center mt-2">
                                                    <button onClick={decrementBedrooms} className="px-2 py-0 border mr-2 border-black rounded-md">-</button>
                                                    <button onClick={incrementBedrooms} className="px-2 py-0 border border-black rounded-md">+</button>
                                                </div>
                                            </div>
                                        ) : dropdownItems[index].map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="flex flex-row px-4 py-2 font-FuturaHeavy cursor-pointer border-black transition-colors hover:bg-gray-300 duration-150"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <input type="checkbox" id={`checkbox${itemIndex}`} className='mr-2 border' />
                                                <label htmlFor={`checkbox${itemIndex}`} className='w-full  cursor-pointer text-start' >{item}</label>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <button className="bg-primarycolor text-white p-2 rounded-md  px-10">Search</button>
                    </div>
                </div>
            </section>

            <section>
                <DevlopmentLocations />
            </section>

            <section className='section bg-white'>
                <h2 className="text-2xl md:text-4xl font-FuturaHeavy text-primarycolor text-center">Latest Developments</h2>
                <p className="text-[#828282] text-center mt-3">Check out the latest and greatest developments in Portugal.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
                    {data.map((item, index) => (
                        <LatestDevelopmentCard key={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <button className="bg-primarycolor px-20 text-white text-center py-4 rounded-xl uppercase font-bold">See the Development</button>
                </div>
            </section>

            <section className='section'>
                <h2 className="text-2xl md:text-4xl font-bold font-FuturaBold text-primarycolor text-center">Why Work With Us?</h2>
                <p className="text-fontdark text-center mt-3">Setting a new standard in new development sales.</p>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10">
                    <div className='flex flex-1 flex-col justify-center'>
                        <div className="border-2 border-black bg-white rounded-lg p-4 flex flex-col items-center h-auto xl:h-[300px] ">
                            <h2 className="text-2xl md:text-4xl text-primarycolor font-bold text-left">
                                Save €3,000 on legal fees when you purchase with us
                            </h2>
                            <div className='flex flex-col items-center xl:flex-row justify-between xl:items-start gap-4 mt-6'>

                                <p className="text-left text-[18px] text-fontlight w-full xl:w-[60%] pb-0">
                                    Our legal team will review every contract clause, ensure all documents are in order,
                                    inform you of all responsibilities, and handle the administrative tasks for the CPCV and
                                    Deed.
                                </p>

                                <img src="/images/homepage/newpackage.png" alt="Gavel and books" style={{ height: '150px' }} />
                            </div>
                        </div>
                        <button className='text-primarycolor font-FuturaBold text-3xl mt-6'>Buy Now Package</button>
                    </div>

                    <div className='flex flex-1 flex-col justify-center'>
                        <div className="border-2 border-black  bg-white rounded-lg p-4 flex flex-col h-auto xl:h-[300px] ">
                            <h2 className="text-2xl md:text-4xl text-primarycolor font-bold text-left">
                                The ultimate Client Area
                            </h2>
                            <div className='flex flex-col items-center xl:flex-row justify-between xl:items-start gap-2 mt-6'>

                                <p className="text-left text-[18px] text-fontlight w-full xl:w-[50%]">
                                    The Client Area streamlines your property search by allowing you to collaborate directly
                                    with your dedicated buyer's agent.
                                </p>

                                <img src="/images/homepage/clientarea.png" alt="Client Area" className='h-[250px] xl:h-[200px]' />
                            </div>
                        </div>
                        <button className='text-primarycolor font-FuturaBold text-3xl mt-6'>Client Area</button>
                    </div>

                </div>


                <div className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-10 py-6">
                    <div className='flex flex-col justify-center w-full lg:w-[46%] xl:w-[30%]'>
                        <div className="flex flex-col items-center  h-auto xl:h-[300px] text-center border-2 border-black  bg-white  rounded-lg p-6 ">
                            <img src="/images/homepage/free.png" alt="Free Tag" className="mb-4" crossOrigin="anonymous" />
                            <h3 className="text-[1.6rem] font-bold mb-2 text-primarycolor">Our buyers services is 100% FREE!!</h3>
                            <p className="text-fontlight mb-4">Our services are completely free from start to finish.</p>
                        </div>
                        <button className='text-primarycolor font-FuturaBold text-3xl mt-6'>It's Free</button>

                    </div>
                    <div className='flex flex-1 flex-col justify-center w-full lg:w-[46%] xl:w-[30%]'>

                        <div className="flex flex-col items-center  h-auto xl:h-[300px] text-center border-2 border-black  bg-white  rounded-lg p-6">
                            <img src="/images/homepage/localagents.png" alt="Agent" className="mb-4" crossOrigin="anonymous" />
                            <h3 className="text-[1.6rem] font-bold text-primarycolor mb-2">Local agents that speak your language</h3>
                            <p className="text-fontlight mb-4">We have many international agents that speak a variety of languages
                            </p>
                        </div>
                        <button className='text-primarycolor font-FuturaBold text-3xl mt-6'>Local Agents</button>

                    </div>

                    <div className='flex flex-1 flex-col justify-center w-full lg:w-[46%] xl:w-[30%]'>

                        <div className="flex flex-col items-center  h-auto xl:h-[300px] text-center border-2 border-black  bg-white  rounded-lg p-6">
                            <img src="/images/homepage/easyprocess.png" alt="Celebration" className="mb-4" crossOrigin="anonymous" />
                            <h3 className="text-[1.6rem] font-bold mb-2 text-primarycolor">Easy process from start to finish</h3>
                            <p className="text-fontlight mb-4">Here's to smooth transactions and bubbly celebrations – cheers!</p>
                        </div>
                        <button className='text-primarycolor font-FuturaBold text-3xl mt-6'>Easy Process</button>

                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-5">
                    <button className="bg-primarycolor px-20 text-white text-center py-4 rounded-xl uppercase font-bold">See the Development</button>

                    <button className="bg-secondrycolor px-20 text-white text-center py-4 rounded-xl uppercase font-bold">See the Development</button>
                </div>
            </section>

            <section className='section bg-white'>

                <div className="w-full mx-auto p-6">
                    <h2 className="text-2xl md:text-4xl font-FuturaHeavy text-primarycolor text-center">Become An Agent</h2>
                    <p className="text-fontdark text-center mt-3">Join the best team and brokerage in Europe.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 mb-8">
                        <div className="flex justify-center">
                            <img src="/images/homepage/becomeanagent.png" alt="Team collaboration" className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <h2 className="text-2xl  mb-2 font-FuturaHeavy text-primarycolor">Generate more clients</h2>
                            <p className="text-fontlight mb-6">
                                Unlock unparalleled success in real estate with our dynamic approach, leveraging advanced digital marketing strategies, personalized brand investment, international partnerships, and cutting-edge software solutions to supercharge your lead generation and propel your business to new heights.
                            </p>
                            <h2 className="text-2xl mb-2 font-FuturaHeavy text-primarycolor">Global Network</h2>
                            <p className="text-fontlight">
                                Our global network of partners consistently sends us high-quality clients. When you build connections with these partners, they can send you exclusive leads through our proprietary software. The possibilities are endless.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-primarycolor px-[6rem] text-white text-center py-4 rounded-xl uppercase font-bold">Join Us</button>
                    </div>
                </div>

            </section>

            <section>
                <DreamHomeContact />
            </section>

            <section className='section bg-black relative  w-full' style={{ padding: "140px 0%" }}>
                <h1 className='text-white text-4xl font-FuturaExBold text-center lg:absolute xl:left-[6rem]'>Buy New <br /> Properties</h1>

                <OwlCarousell />
            </section>

            <section className='section bg-white' style={{ padding: "80px 0% 80px 2%" }}>
                <h2 className="text-2xl md:text-4xl font-FuturaHeavy text-primarycolor text-center">Latest Updates in Real Estate</h2>
                <p className="text-fontdark text-center mt-3">Keep up-to-date with the latest Real Estate News</p>
                <LatestUpdatesCarousel />
            </section>

        </>
    )
}

export default Homepage