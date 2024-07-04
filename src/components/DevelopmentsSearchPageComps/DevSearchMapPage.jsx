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
        { title: 'New Apartments In Vale do Lobo', description: 'Description 1', type: 'private' },
        { title: 'New Apartments In Vale do', description: 'Description 2', type: 'public' },
        { title: 'New Apartments In Vale do', description: 'Description 2', type: 'private' },
        { title: 'New Apartments In Vale do', description: 'Description 2', type: 'public' },
    ];

    const location = useLocation();

    const handleButtonClick = () => {
        // Save the current URL to local storage
        localStorage.setItem('prevLocation', location.pathname);
        console.log(location.pathname)
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
        },
        {
          id: 2,
          position: { lat: 41.1579, lng: -8.6291 },
          info: {
            image: '/images/homepage/dreamhomecontact.png',
            title: 'New Development Porto',
            location: 'Porto, Portugal',
            price: '€500,000',
            beds: '1 to 2 Beds from'
          }
        },
        {
          id: 3,
          position: { lat: 37.0179, lng: -7.9307 },
          info: {
            image: '/images/homepage/dreamhomecontact.png',
            title: 'New Development Faro',
            location: 'Faro, Portugal',
            price: '€450,000',
            beds: '2 to 4 Beds from'
          }
        }
      ];

    return (
        <>
            <section className='hidden lg:block'>
                <Navbar isNavbarFixed={isNavFixed} />
            </section>
            <section className='p-0 bg-bggray'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='w-full 2xl:w-[50%] lg:pt-[100px] lg:mt-10 px-0 lg:px-[1%]'>
                        <div className={`hidden lg:block`}>
                            <div className={``}>
                                <h2 className="text-3xl md:text-4xl font-BebasNeueSemiExpBold text-primarycolor text-left">New Developments In Lisbon Area</h2>
                                <p className="text-fontdark text-base mt-2">160 available units found in 15 new developments.</p>
                            </div>
                        </div>
                        <div className="sticky top-0 bg-bggray z-[100] pt-5 pb-4 px-4 lg:px-0 flex flex-row justify-between items-center font-medium gap-4">
                            <div className=" flex border border-black rounded-lg overflow-hidden ">
                                <Link to={'/developmentssearch'} onClick={handleButtonClick} className=''>
                                    <button
                                        className={`px-7 py-2 md:py-3 bg-white text-black`}
                                    >
                                        List
                                    </button>
                                </Link>
                                <button
                                    className={` px-6 py-2 md:py-3 bg-primarycolor hover:bg-primarycolorhover text-white cursor-pointer transition-colors duration-300 ease-in-out`}
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
                        {/* <div className='fixed inset-0 h-screen w-full block lg:hidden'>
                            <CustomMap />
                        </div> */}
                        <div className="hidden lg:grid grid-cols-1 gap-10 mt-10 mb-10">
                            {data.map((item, index) => (
                                <MapCardsComponent key={index} index={index} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className='fixed lg:relative inset-0 w-full 2xl:w-[50%] '>
                        <CustomMap locations={locationareas} />
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