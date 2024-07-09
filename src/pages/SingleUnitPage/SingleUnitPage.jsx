import React, { useState, useEffect } from 'react';
import HeroSection from '../../components/SingleUnitPageComps/HeroSection'
import Navbar from '../../components/Global/Navbar'
import Footer from '../../components/Global/Footer'
import MortageCalculator from '../../components/Global/MortageCalculator'
import PropertyDetails from '../../components/SingleDevlopmentPageComps/PropertyDetails'
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel'
import ContactTabsSection from '../../components/SingleDevlopmentPageComps/ContactTabsSection'
import LatestDevelopmentCard from '../../components/Global/LatestDevelopmentCard/LatestDevlopmentsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import LightBox from '../../components/SingleDevlopmentPageComps/LightBox';
import CustomMapComp from '../../components/Global/CustomMapComp';

const SingleUnitPage = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
        setActiveSection(sectionId);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closebox = () => {
        setIsLightboxOpen(false);
    };

    const locationareas = [
        {
            id: 1,
            position: { lat: 38.7223, lng: -9.1393 },
            info: {
                image: '/images/homepage/dreamhomecontact.png',
                title: 'New Development Lisbon',
                location: 'Estrela, Lisbon',
                price: '€650,000',
                beds: '2 to 3 Beds from'
            }
        }
    ];

    const data = [
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 1' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 2' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 3' },
    ];

    const imagessingleunitpage = [
        '/images/pages/singleunitpage/image1.jpg',
        '/images/pages/singleunitpage/image2.jpg',
        '/images/pages/singleunitpage/image3.jpg',
        '/images/pages/singleunitpage/image4.jpg',
        '/images/pages/singleunitpage/image5.jpg',
        '/images/pages/singleunitpage/image6.jpg',
        '/images/pages/singleunitpage/image7.jpg',
        '/images/pages/singleunitpage/image8.jpg',
    ];
    return (
        <>
            <LightBox isOpen={isLightboxOpen} onClose={closebox} images={imagessingleunitpage} />

            <Navbar themewhite={true} />

            <section id='overview' className='section bg-white mt-5'>
                <HeroSection imagessingleunitpage={imagessingleunitpage}/>
            </section>

            <section id='features'>
                <PropertyDetails SingleUnitPage={true} />
            </section>

            <section className='section'>
                <div className="overflow-hidden flex flex-col xl:flex-row gap-0"
                >
                    <div className='relative w-full rounded-tl-[18px] rounded-tr-[18px] xl:rounded-tr-[0px] rounded-bl-[0px] xl:rounded-bl-[18px] '>

                        <div className='relative h-full  overflow-hidden rounded-tl-[18px]  rounded-tr-[18px] xl:rounded-tr-[0px] rounded-bl-[0px] xl:rounded-bl-[18px]'>
                            <img
                                src="/images/pages/homepage/herosection.svg"
                                alt="image 1"
                                className={`h-full w-full rounded-tl-[18px]  rounded-tr-[18px] xl:rounded-tr-[0px] rounded-bl-[0px] xl:rounded-bl-[18px] object-cover bg-cover bg-container bg-zoom`}
                            />
                        </div>

                    </div>
                    <div className="w-full bg-primarycolor p-6 rounded-tr-[0px] xl:rounded-tr-[18px] rounded-br-[18px] rounded-bl-[18px] xl:rounded-bl-[0px] ">
                        <div className="flex flex-col justify-between h-full gap-6 text-white">

                            <div className='flex items-center gap-1 font-semibold'>
                                <span>
                                    <img src="/images/icons/locationmarkerwhite.svg" alt="location" className='h-4 mr-2' />
                                </span>
                                <span>
                                    Lisbon, Portugal
                                </span>
                            </div>
                            <p className="font-medium text-[1.6rem] ">Spectacular Development With Ocean Views In Cascais, Lisbon</p>
                            <div className="flex flex-wrap gap-10 ">
                                <div>
                                    <div className="text-xl">D1001</div>
                                    <div className="text-sm font-semibold" >Reference</div>
                                </div>
                                <div>
                                    <div className="text-xl">2 to 5</div>
                                    <div className="text-sm font-semibold">Bedsrooms</div>
                                </div>
                                <div>
                                    <div className="text-xl">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                    <div className="text-sm font-semibold">Interior Build</div>
                                </div>

                            </div>
                            <p className="font-semibold text-[1.6rem]">$500,000 to $800,000</p>

                            <button className=" w-fit bg-transparent hover:bg-white  border border-white text-white hover:text-primarycolor px-4 sm:px-12 py-2 lg:py-3 rounded-lg  font-medium cursor-pointer transition-colors duration-300 ease-in-out" >See Project</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section  bg-white' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel themegray={true} />
            </section>

            <section className=''>
                {/* <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left px-[7%]">Location</h2>

                <div className='mt-10 px-[7%] relative'>
                    <div className="flex space-x-2 w-full overflow-x-scroll scrollbar-hide">
                        <button className="bg-primarycolor hover:bg-primarycolorhover text-white font-medium px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out">All</button>
                        <button className=" flex items-center space-x-2 bg-white font-medium border border-bggray px-6 py-2 rounded-md">
                            <img undefinedhidden="true" alt="school-icon" src="/images/icons/school.svg" className='w-[25px]' />
                            <span className=''>Schools </span>
                        </button>
                        <button className="min-w-[180px] lg:w-auto flex items-center space-x-2 bg-white font-medium border border-bggray px-4 py-2 rounded-md">
                            <img alt="shopping-icon" src="/images/icons/bags-shopping.svg" className='w-[25px]' />
                            <span>Shopping</span>
                        </button>
                        <button className="min-w-[180px] lg:w-auto flex items-center space-x-2 bg-white font-medium border border-bggray px-4 py-2 rounded-md">
                            <img undefinedhidden="true" alt="transportation-icon" src="/images/icons/subway.svg" className='w-[25px]' />
                            <span>Transportation </span>
                        </button>
                        <button className="min-w-[180px] lg:w-auto flex items-center space-x-2 bg-white font-medium border border-bggray px-4 py-2 rounded-md">
                            <img undefinedhidden="true" alt="transportation-icon" src="/images/icons/doctor.svg" className='w-[25px]' />

                            <span>Health</span>
                        </button>
                        <button className="min-w-[180px] lg:w-auto flex items-center space-x-2 bg-white font-medium border border-bggray  px-4 py-2 rounded-r-lg">
                            <img undefinedhidden="true" alt="transportation-icon" src="/images/icons/rocket-lunch.svg" className='w-[25px]' />

                            <span>Activities</span>
                        </button>
                        <div className='hidden custommaxforSDP:block fade-right'></div>

                    </div>

                </div> */}
                <div >
                    <CustomMapComp customview={true} locations={locationareas} />
                </div>
            </section>

            <section className='section bg-white'>
                <MortageCalculator />

            </section>

            <section id='neighborhood' className='section bg-cover bg-center h-screen flex items-end relative' style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)", backgroundRepeat: "no-repeat" }}>
                <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                <div className='relative z-20 w-[500px] p-8 flex flex-col gap-3 text-white border border-bggray rounded-xl'>
                    <p className='font-bold text-lg'>THE NEIGHBORHOOD</p>
                    <h2 className='font-BebasNeueSemiExpBold font-bold text-4xl md:text-5xl'>Upper East Side</h2>
                    <p className='font-medium text-medium'>An upscale residential haven renowned for its elegance and glamour, the Upper East Side is marked by a pretty blend of luxurious townhouses and historic apartment buildings.</p>
                </div>
            </section>

            <section id='contact'>
                <ContactTabsSection />
            </section>

            <section className='section bg-white'>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Similar Developments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                    {data.map((item, index) => (
                        <LatestDevelopmentCard key={index} index={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <button className="buttonLong bg-primarycolor hover:bg-primarycolorhover text-white text-center cursor-pointer transition-colors duration-300 ease-in-out">See More</button>
                </div>
            </section>

            <Footer />

            <section className={`md:flex fixed bottom-4 w-full z-30  justify-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[120px]'}`}>
                <div className='w-fit md:w-xl mx-auto bg-[#242323] text-white flex gap-2 py-3 px-3 rounded-3xl'>
                    <button
                        className={`hidden md:block bg-transparent border ${activeSection === 'overview' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={() => handleScrollToSection('overview')}
                    >
                        <span> Overview</span>
                    </button>
                    <button
                        className={`hidden md:block bg-transparent border ${activeSection === 'features' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={() => handleScrollToSection('features')}
                    >
                        <span> Features</span>
                    </button>

                    <button
                        className={`bg-transparent border border-[#434343] ${activeSection === 'herosection' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-3 px-4 md:py-4 md:px-5  rounded-xl cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={() => { openLightbox(); setActiveSection('herosection') }}
                    >
                        <img src="/images/icons/whitepicture.svg" alt="" className='min-h-23 min-w-21' style={{ maxWidth: "21px" }} />

                        {/* <img src="/images/icons/picture.png" alt="" /> */}
                    </button>
                    <button className='bg-secondrycolor border border-secondrycolor hover:bg-secondrycolorhover hover:border-secondrycolorhover py-3 px-4 md:py-4 md:px-8  rounded-xl cursor-pointer transition-colors duration-300 ease-in-out'
                        onClick={() => handleScrollToSection('contact')}
                    >
                        <span className='hidden md:block'> Contact</span>
                        <img src="/images/icons/envelopewhite.svg" alt="" className='block md:hidden min-h-23 min-w-21' style={{ maxWidth: "21px" }} />
                    </button>
                    <button
                        className='bg-transparent border border-[#434343] hover:border-[#A5A5A5] py-3 px-4 md:py-4 md:px-5  rounded-xl cursor-pointer transition-colors duration-300 ease-in-out'
                        onClick={() => setIsSaved(!isSaved)}
                    >
                        <FontAwesomeIcon
                            icon={solidBookmark}
                            style={{
                                color: isSaved ? 'green' : '#242323',
                                stroke: 'white',
                                strokeWidth: '40px'
                            }}
                            className="text-xl md:text-2xl"
                        />
                    </button>
                </div>
            </section>
        </>
    )
}

export default SingleUnitPage