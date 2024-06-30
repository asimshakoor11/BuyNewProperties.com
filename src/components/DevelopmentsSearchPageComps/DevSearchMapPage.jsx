import React, { useState, useEffect } from 'react'
import LatestDevelopmentCard from '../../components/Global/LatestDevlopmentsCard';
import CustomMap from './CustomMap';
import SearchPageFilter from './SearchPageFilter';
import Navbar from '../Global/Navbar';
import { Link, useLocation } from 'react-router-dom';
import MapCardsComponent from './MapCardsComponent';


const DevSearchMapPage = () => {

    const [isDropdownOpenFilter, setIsDropdownOpenFilter] = useState(false);
    const [isNavFixed, setIsNavFixed] = useState(true)

    const closeDropdown = () => {
        setIsDropdownOpenFilter(false);
    };

    useEffect(() => {
        if (isDropdownOpenFilter) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isDropdownOpenFilter]);
    const data = [
        { title: 'New Apartments In Vale do Lobo', description: 'Description 1' },
        { title: 'New Apartments In Vale do', description: 'Description 2' },
        { title: 'New Apartments In Vale do', description: 'Description 2' },
        { title: 'New Apartments In Vale do', description: 'Description 2' },
    ];

    const location = useLocation();

    const handleButtonClick = () => {
        // Save the current URL to local storage
        localStorage.setItem('prevLocation', location.pathname);
        console.log(location.pathname)
    };

    return (
        <>
            <section className='hidden sm:block'>
                <Navbar isNavbarFixed={isNavFixed} />
            </section>
            <section className='custommax540:pt-0 sm:pt-[50px] lg:pt-[100px] pb-0 bg-bggray'>
                <div className='flex flex-col 2xl:flex-row gap-4'>
                    <div className='w-full 2xl:w-[50%] sm:mt-10 px-0 lg:px-[1%]'>
                        <div className={`hidden lg:block`}>
                            <div className={``}>
                                <h2 className="text-3xl md:text-4xl font-BebasNeueSemiExpBold text-primarycolor text-left">New Developments In Lisbon Area</h2>
                                <p className="text-fontdark text-base mt-2">160 available units found in 15 new developments.</p>
                            </div>
                        </div>
                        <div className="sticky top-0 bg-bggray z-50 pt-5 pb-4 px-[2%] lg:px-0 flex flex-row justify-between items-center font-medium gap-4">
                            <div className=" flex border border-black rounded-lg overflow-hidden ">
                                <Link to={'/developmentssearch'} onClick={handleButtonClick} className=''>
                                    <button
                                        className={`px-7 py-2 md:py-3 bg-white text-black`}
                                    >
                                        List
                                    </button>
                                </Link>
                                <button
                                    className={` px-6 py-2 md:py-3 bg-primarycolor hover:bg-primarycolorhover text-white`}
                                >
                                    Map
                                </button>
                            </div>

                            <div className="relative">
                                <button
                                    className={`w-full sm:w-32 bg-transparent text-black border border-black px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center `}
                                    onClick={() => setIsDropdownOpenFilter(true)}
                                >
                                    <span className=' hidden sm:block'>Filter</span>
                                    <img src="/images/icons/settings-sliders.svg" alt="" className='h-5' />
                                </button>
                            </div>
                        </div>
                        <div className='w-full 2xl:w-[50%] md:mt-10 block lg:hidden'>
                            <CustomMap mobile={true} />
                        </div>
                        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5 mt-10 mb-10">
                            {data.map((item, index) => (
                                <MapCardsComponent key={index} index={index} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className='w-full 2xl:w-[50%] md:mt-10 hidden lg:block'>
                        <CustomMap />
                    </div>

                </div>

            </section>

            {
                isDropdownOpenFilter && (
                    <SearchPageFilter closeDropdown={closeDropdown} />
                )
            }
        </>
    )
}

export default DevSearchMapPage