import React, { useRef, useState } from 'react'
import Navbar from '../../components/Global/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const SoldDevelopmentsPage = () => {

    const carouselRef = useRef(null);
    const divRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate()

    const [items, setItems] = useState([
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        }
    ]);

    const handleSaveClick = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, isSaved: !item.isSaved } : item
        )));
    };

    const handleMouseEnter = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, showTooltip: true } : item
        )));
    };

    const handleMouseLeave = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, showTooltip: false } : item
        )));
    };

    const handleNavigate = () => {
        navigate('/singlesloddevelopment')
    }

    return (
        <>
            <Navbar themewhite={true} />

            <section className='section bg-white mt-10'>
                <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">Sold Developments</h2>

                <div ref={carouselRef} className="w-full flex flex-wrap py-2 overflow-hidden gap-4 scrollbar-hide mt-10 cursor-pointer" onClick={handleNavigate}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            ref={divRef}
                            data-aos="fade-up" data-aos-delay={index * 100}
                            className="relative rounded-xl overflow-hidden h-[560px] md:min-h-[480px] lg:min-h-[600px] w-full md:w-[48%] herohomlg:w-[32%] bg-container"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className='absolute inset-0 bg-black opacity-30 z-10'></div>

                            <div className="flex items-center absolute top-4 right-4 z-30">
                                {item.showTooltip && (
                                    <motion.p
                                        className={`absolute w-max right-6 mr-2 mb-1 lowercase text-xs bg-white py-1 px-2 text-black rounded-lg`}
                                        initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                        animate={{ x: 0, opacity: 1 }} // Animation properties
                                        transition={{ duration: 0.3 }} // Animation duration
                                    >
                                        {item.isSaved ? "Remove from favourites" : "Add to favourites"}
                                    </motion.p>
                                )}

                                <button
                                    onClick={() => handleSaveClick(index)}
                                    className="bg-transparent border-none cursor-pointer"
                                    title={item.isSaved ? "Remove from favourites" : "Add to favourites"}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <FontAwesomeIcon
                                        icon={solidBookmark}
                                        style={{
                                            color: item.isSaved ? 'green' : 'silver',
                                            stroke: 'black',
                                            strokeWidth: '40px'
                                        }}
                                        className="text-2xl"
                                    />
                                </button>
                            </div>

                            <div
                                className='absolute inset-0 bg-zoom -z-10'
                                style={{
                                    backgroundImage: `url(${item.imgSrc})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>

                            <motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ y: hoveredIndex === index ? -10 : 0 }}
                                transition={{ duration: 0.5 }}
                                className='w-full h-fit absolute z-20 bottom-0 flex flex-col justify-center items-left gap-2 p-6 text-white'>
                                <div className='flex items-center gap-2 text-sm'>
                                    <span>
                                        <img src="/images/icons/locationmarkerwhite.svg" alt="location" className='h-4' />
                                    </span>
                                    <span>
                                        Algarve, Portugal
                                    </span>
                                </div>
                                <h1 className='font-semibold text-xl'>{item.title}</h1>

                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-wrap gap-4"
                                    >
                                        <div>
                                            <div className="text-lg">D1001</div>
                                            <div className="text-sm font-semibold">Reference</div>
                                        </div>
                                        <div>
                                            <div className="text-lg">2 to 5</div>
                                            <div className="text-sm font-semibold">Bedrooms</div>
                                        </div>
                                        <div>
                                            <div className="text-lg">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                            <div className="text-sm font-semibold">Build</div>
                                        </div>
                                    </motion.div>
                                )}

                            </motion.div>

                            <div className='absolute bottom-0 z-10 h-[35%] w-full px-10' style={{ background: 'linear-gradient(to bottom, transparent, #000000 50%)' }}></div>

                        </div>
                    ))}
                </div>

            </section>


        </>
    )
}

export default SoldDevelopmentsPage