import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';
import DevSrchListComp from './DevSrchListComp';
import DevSrchMapComp from './DevSrchMapComp';
import './Styles/DevSearchSec.css'
import { Checkbox } from "@material-tailwind/react";
import ReactSlider from 'react-slider';

const titles = ['Location', 'Property Type', 'Building Stage', 'Delivery Date'];
const dropdownItems = [
    [
        {
            label: 'Lisbon',
            subitems: ['Cascais', 'Lapa', 'Estrella', 'Sintra', 'Amadora']
        },
        {
            label: 'Algarve',
            subitems: ['Loule', 'Tavira', 'Lagos']
        },
        {
            label: 'Manchester',
            subitems: ['Northern Quarter', 'Didsbury', 'Chorlton']
        },
        {
            label: 'Birmingham',
            subitems: ['Jewellery Quarter', 'Digbeth']
        }
    ],
    ['All', 'House', 'Townhouse', 'Apartment', 'Commercial'],
    [],
    []
];



const DevelopmentsSearchSec = () => {

    // sliders 
    const [bedrooms, setBedrooms] = useState({ minValue: 0, maxValue: 8 });
    const [area, setArea] = useState({ minValue: 0, maxValue: 500 });
    const [budget, setBudget] = useState({ minValue: 0, maxValue: 2000000 });

    const handleBedroomsChange = (e) => {
        setBedrooms({ minValue: e.minValue, maxValue: e.maxValue });
    };

    const handleAreaChange = (e) => {
        // Ensuring the values are within the step increments
        setArea({ minValue: Math.round(e.minValue / 10) * 10, maxValue: Math.round(e.maxValue / 10) * 10 });
    };

    const handleBudgetChange = (e) => {
        // Ensuring the values are within the step increments
        setBudget({ minValue: Math.round(e.minValue / 50000) * 50000, maxValue: Math.round(e.maxValue / 50000) * 50000 });
    };
    // sliders 

    // dropdown sliders 
    const [buildingStage, setBuildingStage] = useState({ minValue: 0, maxValue: 2 });
    const handleBuildingStage = (e) => {
        setBuildingStage({ minValue: e.minValue, maxValue: e.maxValue });
    };

    const [deliveryDate, setDeliveryDate] = useState({ minValue: 0, maxValue: 4 });
    const handleDeliverydate = (e) => {
        setDeliveryDate({ minValue: e.minValue, maxValue: e.maxValue });
    };



    // dropdowns 


    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [checkedItems, setCheckedItems] = useState({});

    const dropdownRefs = useRef([]);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    const handleCheck = (categoryIndex, itemIndex = null) => {
        setCheckedItems((prevState) => {
            const updatedState = { ...prevState };

            if (itemIndex === 0) {
                // Toggle "All" checkbox
                const allChecked = dropdownItems[categoryIndex].slice(1).every((_, idx) => updatedState[`${categoryIndex}-${idx + 1}`]);
                dropdownItems[categoryIndex].slice(1).forEach((_, idx) => {
                    updatedState[`${categoryIndex}-${idx + 1}`] = !allChecked;
                });
                updatedState[`${categoryIndex}-0`] = !allChecked;
            } else {
                // Toggle individual checkbox
                updatedState[`${categoryIndex}-${itemIndex}`] = !updatedState[`${categoryIndex}-${itemIndex}`];
                const allItemsChecked = dropdownItems[categoryIndex].slice(1).every((_, idx) => updatedState[`${categoryIndex}-${idx + 1}`]);
                updatedState[`${categoryIndex}-0`] = allItemsChecked;
            }

            return updatedState;
        });
    };

    const handleLocationCheck = (locationIndex, sublocationIndex = null) => {
        setCheckedItems((prevState) => {
            const updatedState = { ...prevState };

            if (sublocationIndex === null) {
                // Toggle country checkbox
                const allChecked = dropdownItems[0][locationIndex].subitems.every((_, idx) => updatedState[`${locationIndex}-${idx}`]);
                dropdownItems[0][locationIndex].subitems.forEach((_, idx) => {
                    updatedState[`${locationIndex}-${idx}`] = !allChecked;
                });
                updatedState[`${locationIndex}`] = !allChecked;
            } else {
                // Toggle city checkbox
                updatedState[`${locationIndex}-${sublocationIndex}`] = !updatedState[`${locationIndex}-${sublocationIndex}`];
                const allSubitemsChecked = dropdownItems[0][locationIndex].subitems.every((_, idx) => updatedState[`${locationIndex}-${idx}`]);
                updatedState[`${locationIndex}`] = allSubitemsChecked;
            }

            return updatedState;
        });
    };


    const filteredLocations = dropdownItems[0].filter(location => {
        const subitemsMatch = location.subitems.some(subitem => subitem.toLowerCase().includes(searchValue.toLowerCase()));
        const locationMatch = location.label.toLowerCase().includes(searchValue.toLowerCase());
        return locationMatch || subitemsMatch;
    }).map(location => {
        const filteredSubitems = location.subitems.filter(subitem => subitem.toLowerCase().includes(searchValue.toLowerCase()));
        return {
            ...location,
            subitems: filteredSubitems
        };
    });

    // dropdowns 

    // list / map 

    const [view, setView] = useState('list');
    const [isPurchaseAggrement, setIsPurchaseAggrement] = useState(false);
    const [selectedOptionsPA, setSelectedOptionsPA] = useState([]);
    const dropdownRefPA = useRef(null);

    const optionsPA = [
        { id: 'checkbox1', label: 'Ready to sign', sublabel: 'safest delivery estimates' },
        { id: 'checkbox2', label: 'Est. less than 6 months', sublabel: 'some uncertainty on delivery time estimates' },
        { id: 'checkbox3', label: 'Est. more than 6 months', sublabel: 'high uncertainty on delivery time estimates' },
    ];

    const handleCheckboxChangePA = (option) => {
        setSelectedOptionsPA((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const handleClickOutsidePA = (event) => {
        if (dropdownRefPA.current && !dropdownRefPA.current.contains(event.target)) {
            setIsPurchaseAggrement(false);
        }
    };

    useEffect(() => {
        if (isPurchaseAggrement) {
            document.addEventListener('mousedown', handleClickOutsidePA);
        } else {
            document.removeEventListener('mousedown', handleClickOutsidePA);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsidePA);
        };
    }, [isPurchaseAggrement]);

    const [isAmenities, setIsAmenities] = useState(false);
    const [selectedOptionsAMN, setSelectedOptionsAMN] = useState([]);
    const dropdownRefAMN = useRef(null);

    const optionsAMN = [
        'Indoor Garage',
        'Maids Room',
        'BBQ',
        'Community Pool',
        'Fitness',
        'Private Pool',
        'Gated',
        'Garage',
        'Social Club',
    ];

    const handleCheckboxChangeAMN = (option) => {
        setSelectedOptionsAMN((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    useEffect(() => {
        if (isAmenities) {
            document.addEventListener('mousedown', handleClickOutsideAMN);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideAMN);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideAMN);
        };
    }, [isAmenities]);


    const handleClickOutsideAMN = (event) => {
        if (dropdownRefAMN.current && !dropdownRefAMN.current.contains(event.target)) {
            setIsAmenities(false);
        }
    };

    const [isAdvanceFilter, setIsAdvanceFilter] = useState(false);
    const dropdownRefAF = useRef(null);

    const handleClickOutsideAF = (event) => {
        if (dropdownRefAF.current && !dropdownRefAF.current.contains(event.target)) {
            setIsAdvanceFilter(false);
        }
    };

    useEffect(() => {
        if (isAdvanceFilter) {
            document.addEventListener('mousedown', handleClickOutsideAF);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideAF);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideAF);
        };
    }, [isAdvanceFilter]);

    const [isDropdownOpenFilter, setIsDropdownOpenFilter] = useState(false);

    useEffect(() => {
        if (isDropdownOpenFilter) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isDropdownOpenFilter]);


    const tags = [
        "Close To Golf", "Close To Dining", "Close To Beach", "Close To Nature", "Close To Desert",
        "Close To Sea", "Sea View", "Garden View", "Mountain View", "Creek View", "Lake View",
        "Desert View", "Skyline View", "Canal View", "Lagoon View", "With Payment Plans",
        "High Rental Yield", "High Appreciation In Value", "Well-Known And Established Communities"
    ];
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter((t) => t !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    return (
        <>
            <section className='section bg-white'>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">New Developments In Lisbon Area</h2>
                        <p className="text-fontdark text-lg">160 available units found in 15 new developments.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex border border-black rounded-lg overflow-hidden">
                            <button
                                className={`px-7 py-2 md:py-3 ${view === 'list' ? 'bg-primarycolor text-white' : 'bg-white text-black'} `}
                                onClick={() => setView('list')}
                            >
                                List
                            </button>
                            <button
                                className={`px-6 py-2 md:py-3 ${view === 'map' ? 'bg-primarycolor text-white' : 'bg-white text-black'} `}
                                onClick={() => setView('map')}
                            >
                                Map
                            </button>
                        </div>
                        <div className="relative">
                            <button
                                className={`bg-transparent text-black w-full border border-grayborder px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-6 `}
                                onClick={() => setIsDropdownOpenFilter(true)}
                            >
                                <span>Filters</span>
                                <img src="/images/icons/settings-sliders.png" alt="" className='h-4' />
                            </button>
                        </div>
                    </div>
                </div>

                {view === 'map' ? <DevSrchMapComp /> : <DevSrchListComp />}

                {
                    isDropdownOpenFilter && (
                        <button
                            className="fixed z-[99] top-[6%] md:top-[9%] right-[6%] lg:top-[13%] lg:right-[4%]  bg-transparent text-black border border-zinc-700 rounded-full py-1 px-2 md:py-2 md:px-3"
                            onClick={() => setIsDropdownOpenFilter(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} size='lg' />
                        </button>
                    )
                }

                {
                    isDropdownOpenFilter && (
                        <div id="popup-container"
                            className="fixed z-50 h-screen w-full inset-0 px-[2%] pt-[5%] bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 overflow-y-scroll "
                        >
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, y: 300 }}
                                    animate={{ opacity: isDropdownOpenFilter ? 1 : 0, y: isDropdownOpenFilter ? 0 : 300 }}
                                    transition={{ opacity: { duration: 0.3 }, y: { duration: 0.3 } }}
                                    style={{
                                        display: isDropdownOpenFilter ? 'block' : 'none', // This ensures the div is hidden when not animated
                                    }}
                                    className="bg-white h-full relative rounded-tr-lg rounded-tl-lg z-30">

                                    <div className='bg-white w-full p-[11%] md:p-[6%] md:pb-[12%] flex flex-col text-black rounded-tr-lg rounded-tl-lg z-30'>
                                        <div className=''>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                {titles.map((title, index) => (
                                                    <div key={index} className="relative" ref={(el) => (dropdownRefs.current[index] = el)}>
                                                        <button
                                                            className="bg-transparent w-full border font-medium border-grayborder px-4 py-2 md:py-3 rounded-lg "
                                                            onClick={() => toggleDropdown(index)}
                                                        >
                                                            <div className='flex flex-row justify-between items-center gap-2'>
                                                                <span className=''>{title}</span>
                                                                <FontAwesomeIcon
                                                                    icon={faChevronDown}
                                                                    size='xs'
                                                                    style={{
                                                                        transition: 'transform 0.3s',
                                                                        transform: openDropdown === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                                                    Selected option
                                                                </p>
                                                            </div>

                                                        </button>
                                                        {openDropdown === index && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className={`absolute md:right-0 mt-2 max-h-[230px] overflow-y-scroll scrollbar-custom  ${ (index === 2 || index === 3) ? 'w-[420px]' : 'w-full'} font-medium bg-white border rounded-md py-2 z-50`}
                                                            >
                                                                {index === 0 ? (
                                                                    <div className="flex flex-col px-4 py-2">
                                                                        <div className='p-2 px-4 flex items-center justify-between rounded-lg border-none bg-bggray '>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Search"
                                                                                className=" outline-none rounded-lg border-none bg-bggray "
                                                                                value={searchValue}
                                                                                onChange={(e) => setSearchValue(e.target.value)}
                                                                            />
                                                                            <FontAwesomeIcon icon={faXmark} size='sm' onClick={() => { setSearchValue('') }} />
                                                                        </div>

                                                                        {filteredLocations.length === 0 ? (
                                                                            <div className="flex flex-col items-center py-4">
                                                                                <span className="text-gray-500">No results found</span>
                                                                            </div>
                                                                        ) : (
                                                                            filteredLocations.map((item, itemIndex) => (
                                                                                <div key={itemIndex}>
                                                                                    <div
                                                                                        className="flex flex-row gap-2 px-4 py-2 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                                                                                        onClick={(e) => e.stopPropagation()}
                                                                                    >
                                                                                        <Checkbox
                                                                                            color="black"
                                                                                            className="h-5 w-5 bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                                                                            containerProps={{ className: "p-0 rounded-none" }}
                                                                                            id={`checkbox${itemIndex}`}
                                                                                            checked={checkedItems[`${itemIndex}`] || false}
                                                                                            onChange={() => handleLocationCheck(itemIndex)}
                                                                                        />
                                                                                        <label htmlFor={`checkbox${itemIndex}`} className='w-full cursor-pointer text-start'>{item.label}</label>
                                                                                    </div>
                                                                                    {item.subitems.map((subitem, subindex) => (
                                                                                        <div
                                                                                            key={subindex}
                                                                                            className="flex flex-row gap-2 ml-4 px-4 py-1 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                                                                                            onClick={(e) => e.stopPropagation()}
                                                                                        >
                                                                                            <Checkbox
                                                                                                color="black"
                                                                                                className="h-4 w-[17px] bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                                                                                containerProps={{ className: "p-0 rounded-none" }}
                                                                                                id={`checkbox${itemIndex}-${subindex}`}
                                                                                                checked={checkedItems[`${itemIndex}-${subindex}`] || false}
                                                                                                onChange={() => handleLocationCheck(itemIndex, subindex)}
                                                                                            />
                                                                                            <label htmlFor={`checkbox${itemIndex}-${subindex}`} className='w-full cursor-pointer text-start'>{subitem}</label>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            ))
                                                                        )}
                                                                    </div>
                                                                ) : index === 1 ? (
                                                                    <div className="flex flex-col px-4 py-2">
                                                                        {dropdownItems[index].map((item, itemIndex) => (
                                                                            <div key={itemIndex}>
                                                                                <div
                                                                                    className="flex flex-row gap-2 px-4 py-2 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                                                                                    onClick={(e) => e.stopPropagation()}
                                                                                >
                                                                                    <Checkbox
                                                                                        color="black"
                                                                                        className="h-5 w-5 bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                                                                        containerProps={{ className: "p-0 rounded-none" }}
                                                                                        id={`checkbox${index}-${itemIndex}`}
                                                                                        checked={checkedItems[`${index}-${itemIndex}`] || false}
                                                                                        onChange={() => handleCheck(index, itemIndex)}
                                                                                    />
                                                                                    <label htmlFor={`checkbox${index}-${itemIndex}`} className='w-full cursor-pointer text-start'>{item}</label>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>

                                                                ) : index === 2 ? (
                                                                    <div className="flex flex-col gap-4 px-4 py-2">
                                                                        <div className="w-full" style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}>
                                                                            <MultiRangeSlider
                                                                                min={0}
                                                                                max={2}
                                                                                step={1}
                                                                                ruler={false}
                                                                                label={false}
                                                                                stepOnly={true}
                                                                                minValue={buildingStage.minValue}
                                                                                maxValue={buildingStage.maxValue}
                                                                                canMinMaxValueSame={true}
                                                                                onInput={handleBuildingStage}
                                                                                className="w-full custom-slider"
                                                                                style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                                                                barLeftColor='transparent'
                                                                                barInnerColor='black'
                                                                                barRightColor='transparent'
                                                                                thumbLeftColor='white'
                                                                                thumbRightColor='white'
                                                                            />

                                                                            <div className="flex justify-between px-2 text-sm">
                                                                                <span>Pre Sale</span>
                                                                                <span className=" max-w-20 text-center ml-4">Under Construction</span>
                                                                                <span>Completed</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='flex justify-between items-center gap-4'>
                                                                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[88px]'>
                                                                                <p className='text-sm text-fontdark font-semibold'>From</p>
                                                                                <p className='text-base font-semibold'>{buildingStage.minValue === 0 && "PreSale"} {buildingStage.minValue === 1 && "Under Construction"} {buildingStage.minValue === 2 && "Completed"}</p>
                                                                            </div>
                                                                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[99px]'>
                                                                                <p className='text-sm text-fontdark font-semibold'>To</p>
                                                                                <p className='text-base font-semibold'>{buildingStage.maxValue === 2 && "Completed"} {buildingStage.maxValue === 1 && "Under Construction"} {buildingStage.maxValue === 0 && "PreSale"}</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Add more custom elements here */}
                                                                    </div>
                                                                ) : index === 3 ? (
                                                                    <div className="flex flex-col gap-4 px-4 py-2">
                                                                        <div className="w-full" style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}>
                                                                            <MultiRangeSlider
                                                                                min={0}
                                                                                max={4}
                                                                                step={1}
                                                                                ruler={false}
                                                                                label={false}
                                                                                stepOnly={true}
                                                                                minValue={deliveryDate.minValue}
                                                                                maxValue={deliveryDate.maxValue}
                                                                                canMinMaxValueSame={true}
                                                                                onInput={handleDeliverydate}
                                                                                className="w-full"
                                                                                style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                                                                barLeftColor='transparent'
                                                                                barInnerColor='black'
                                                                                barRightColor='transparent'
                                                                                thumbLeftColor='white'
                                                                                thumbRightColor='white'
                                                                            />

                                                                            <div className="flex justify-between px-2 text-sm">
                                                                                <span>Q2 2024</span>
                                                                                <span>Q2 2028</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='flex justify-between items-center gap-4'>
                                                                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[88px]'>
                                                                                <p className='text-sm text-fontdark font-semibold'>From</p>
                                                                                <p className='text-base font-semibold'>{deliveryDate.minValue === 0 && "Q2 2024"} {deliveryDate.minValue === 1 && "Q2 2025"} {deliveryDate.minValue === 2 && "Q2 2026"} {deliveryDate.minValue === 3 && "Q2 2027"} {deliveryDate.minValue === 4 && "Q2 2028"}</p>
                                                                            </div>
                                                                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[99px]'>
                                                                                <p className='text-sm text-fontdark font-semibold'>To</p>
                                                                                <p className='text-base font-semibold'>{deliveryDate.maxValue === 0 && "Q2 2024"} {deliveryDate.maxValue === 1 && "Q2 2025"} {deliveryDate.maxValue === 2 && "Q2 2026"} {deliveryDate.maxValue === 3 && "Q2 2027"} {deliveryDate.maxValue === 4 && "Q2 2028"}</p>
                                                                            </div>
                                                                        </div>
                                                                        {/* Add more custom elements here */}
                                                                    </div>
                                                                ) : null}
                                                            </motion.div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-4 md:mt-10">
                                                <div>
                                                    <label htmlFor="bedrooms" className="block mt-2 text-center font-medium">Bedrooms</label>


                                                    <MultiRangeSlider
                                                        min={0}
                                                        max={8}
                                                        step={1}
                                                        ruler={false}
                                                        label={false}
                                                        stepOnly={true}
                                                        minValue={bedrooms.minValue}
                                                        maxValue={bedrooms.maxValue}
                                                        onInput={handleBedroomsChange}
                                                        className="w-full"
                                                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                                        barLeftColor='transparent'
                                                        barInnerColor='black'
                                                        barRightColor='transparent'
                                                        thumbLeftColor='white'
                                                        thumbRightColor='white'
                                                    />

                                                    <div className="flex justify-between px-2 font-medium">
                                                        <span className=''>{bedrooms.minValue}</span>
                                                        <span className='-mr-3'>
                                                            {bedrooms.maxValue} {bedrooms.maxValue === 8 && "+"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="area" className="block mt-2 text-center font-medium">Area</label>
                                                    <MultiRangeSlider
                                                        min={0}
                                                        max={500}
                                                        step={10}
                                                        ruler={false}
                                                        label={false}
                                                        stepOnly={true}
                                                        minValue={area.minValue}
                                                        maxValue={area.maxValue}
                                                        onInput={handleAreaChange}
                                                        className="w-full"
                                                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                                        barLeftColor='transparent'
                                                        barInnerColor='black'
                                                        barRightColor='transparent'
                                                        thumbLeftColor='white'
                                                        thumbRightColor='white'
                                                    />
                                                    <div className="flex justify-between px-2 font-medium">
                                                        <span className='-ml-3'>{area.minValue} m<sup>2</sup> </span>
                                                        <span className='-mr-10'>{area.maxValue} m<sup>2</sup> {area.maxValue === 500 && "+"} </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="budget" className="block mt-2 text-center font-medium">Budget</label>
                                                    <MultiRangeSlider
                                                        min={0}
                                                        max={2000000}
                                                        step={50000}
                                                        ruler={false}
                                                        label={false}
                                                        stepOnly={true}
                                                        minValue={budget.minValue}
                                                        maxValue={budget.maxValue}
                                                        onInput={handleBudgetChange}
                                                        className="w-full"
                                                        style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                                        barLeftColor='transparent'
                                                        barInnerColor='black'
                                                        barRightColor='transparent'
                                                        thumbLeftColor='white'
                                                        thumbRightColor='white'

                                                    />
                                                    <div className="flex justify-between px-2 font-medium">
                                                        <span className='-ml-3'>€{budget.minValue}</span>
                                                        <span className='-mr-12'>€{budget.maxValue} {budget.maxValue === 2000000 && "+"}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-medium mt-4 md:mt-10">

                                                <div className="relative" ref={dropdownRefPA}>
                                                    <button
                                                        className={`bg-transparent w-full border border-grayborder px-4 py-2 md:py-3 rounded-lg`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setIsPurchaseAggrement(!isPurchaseAggrement);
                                                        }}
                                                    >
                                                        <div className='flex flex-row justify-between items-center gap-2 '>

                                                            <div className='flex gap-2 items-center'>
                                                                <span>{'Purchase Agreement'}</span>
                                                            </div>
                                                            <motion.span
                                                                animate={{ rotate: isPurchaseAggrement ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="ml-2"
                                                            >
                                                                <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                                            </motion.span>
                                                        </div>
                                                        <div>
                                                            {selectedOptionsPA.length > 0 && (
                                                                <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                                                    {selectedOptionsPA.join(', ')}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </button>
                                                    {isPurchaseAggrement && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className={`absolute w-full right-0 py-4 px-2 max-h-[220px] overflow-scroll scrollbar-custom bg-white border rounded-md mt-2 z-30`}
                                                        >
                                                            <div className="flex flex-col">
                                                                {optionsPA.map((option) => (
                                                                    <div
                                                                        key={option.id}
                                                                        className="flex flex-row items-center gap-3 px-4 py-2 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <Checkbox
                                                                            color="black"
                                                                            className="h-5 w-5 bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                                                            containerProps={{ className: "p-0 rounded-none" }}
                                                                            id={option.id}
                                                                            onChange={() => handleCheckboxChangePA(option.label)}
                                                                            checked={selectedOptionsPA.includes(option.label)}
                                                                        />
                                                                        <label htmlFor={option.id} className='w-full cursor-pointer text-start flex flex-col '>
                                                                            <span className='font-medium'>{option.label}</span>
                                                                            <span className='text-fontdark text-sm'>{option.sublabel}</span>
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                </div>

                                                <div className="relative" ref={dropdownRefAMN}>
                                                    <button
                                                        className={`bg-transparent w-full border border-grayborder px-4 py-2 md:py-3 rounded-lg`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setIsAmenities(!isAmenities);
                                                        }}
                                                    >
                                                        <div className='flex flex-row justify-between items-center gap-2 '>
                                                            <div className='flex gap-2 items-center'>
                                                                <span>{'Amenities'}</span>
                                                            </div>
                                                            <motion.span
                                                                animate={{ rotate: isAmenities ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="ml-2"
                                                            >
                                                                <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                                            </motion.span>
                                                        </div>

                                                        <div >
                                                            {selectedOptionsAMN.length > 0 && (
                                                                <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                                                    {selectedOptionsAMN.join(', ')}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </button>
                                                    {isAmenities && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className={`absolute w-full right-0 py-4 px-2 max-h-[220px] overflow-scroll scrollbar-custom bg-white border rounded-md mt-2 z-30`}
                                                        >
                                                            <div className="flex flex-col">
                                                                {optionsAMN.map((option, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="flex flex-row items-center gap-3 px-4 py-2 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                                                                        onClick={(e) => e.stopPropagation()}
                                                                    >
                                                                        <Checkbox
                                                                            color="black"
                                                                            className="h-5 w-5 bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                                                            containerProps={{ className: "p-0 rounded-none" }}
                                                                            id={`checkbox${index}`}
                                                                            onChange={() => handleCheckboxChangeAMN(option)}
                                                                            checked={selectedOptionsAMN.includes(option)}
                                                                        />
                                                                        <label htmlFor={`checkbox${index}`} className='w-full cursor-pointer text-start flex flex-col '>
                                                                            <span className='font-medium'>
                                                                                {option}
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </div>

                                                <div>
                                                    <input
                                                        type="text"
                                                        id='reference'
                                                        className={`w-full p-3 py-2 md:py-3 uppercase bg-transparent border-grayborder border outline-none placeholder:text-fontdark rounded-lg`}
                                                        placeholder="Refernece"
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <button
                                                        className={`bg-primarycolor text-white w-full border px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-2 `}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setIsAdvanceFilter(!isAdvanceFilter);
                                                        }}
                                                    >
                                                        <div className='flex gap-2 items-center'>
                                                            Advance Filters
                                                        </div>
                                                        <motion.span
                                                            animate={{ rotate: isAdvanceFilter ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="ml-2"
                                                        >
                                                            <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                                        </motion.span>
                                                    </button>
                                                </div>
                                            </div>

                                            {isAdvanceFilter && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`w-full my-8 md:px-16`}
                                                >
                                                    <div className="w-full p-2 bg-bggray border rounded-md z-30">
                                                        <div className="flex flex-wrap gap-2 p-4 bg-background">
                                                            {tags.map((tag, index) => (
                                                                <button
                                                                    key={index}
                                                                    className={`p-3 border border-grayborder text-black text-sm rounded-full ${selectedTags.includes(tag) ? 'bg-primarycolor text-white' : 'bg-white'
                                                                        } hover:bg-bggray hover:text-black`}
                                                                    onClick={() => toggleTag(tag)}
                                                                >
                                                                    {tag}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}

                                            <div className='flex flex-col md:flex-row justify-between gap-4  font-medium mt-4 md:mt-10'>
                                                <button
                                                    className={`bg-transparent text-black w-full md:w-[250px] border border-grayborder px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-2 `}
                                                >
                                                    <span>Reset Filters</span>
                                                    <img src="/images/icons/rotate-reverse.svg" alt="" className='h-4' />
                                                </button>

                                                <button
                                                    className={`bg-[#005334] text-white w-full md:w-[250px] border border-grayborder px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-2 `}
                                                >
                                                    <span>Search</span>
                                                    <FontAwesomeIcon icon={faSearch} size='base' />
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </motion.div>
                            </AnimatePresence>

                        </div>
                    )
                }
            </section>


        </>

    )
}

export default DevelopmentsSearchSec