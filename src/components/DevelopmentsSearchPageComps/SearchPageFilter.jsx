import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';
import { Checkbox } from "@material-tailwind/react";
import LocationDropdown from './DropdownComps/LocationDropdown';
import PropertyTypeDropdown from './DropdownComps/PropertyTypeDropdown';
import BuildingStageDropdown from './DropdownComps/BuildingStageDropdown';
import DeliveryDateDropdown from './DropdownComps/DeliveryDateDropdown';
import './Styles/DevSearchSec.css'


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
    ['House', 'Townhouse', 'Apartment', 'Commercial'],
    [],
    []
];

const SearchPageFilter = ({ closeDropdown }) => {

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
        setBudget({
            minValue: Math.round(e.minValue / 50000) * 50000,
            maxValue: Math.round(e.maxValue / 50000) * 50000
        });
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };
    // sliders 

    // list / map 

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

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log('Input value:', event.target.value);
    };

    const [buildingStage, setBuildingStage] = useState({ minValue: 0, maxValue: 2 });
    const [deliveryDate, setDeliveryDate] = useState({ minValue: 0, maxValue: 16 });
    const [resetFlag, setResetFlag] = useState(false);
    const [resetFlagDev, setResetFlagDev] = useState(false);
    const [resetFlagLoc, setResetFlagLoc] = useState(false);
    const [resetFlagBul, setResetFlagBul] = useState(false);

    const resetFilters = () => {
        setBuildingStage({ minValue: 0, maxValue: 2 });
        setDeliveryDate({ minValue: 0, maxValue: 16 });
        setResetFlag(prevFlag => !prevFlag);
        setResetFlagLoc(prevFlagL => !prevFlagL);
        setResetFlagDev(prevFlagL => !prevFlagL);
        setResetFlagBul(prevFlagL => !prevFlagL);
        setSelectedOptionsPA([]);
        setSelectedOptionsAMN([]);
        setInputValue('')
        setSelectedTags([]);
        setBedrooms({ minValue: 0, maxValue: 8 })
        setArea({ minValue: 0, maxValue: 500 });
        setBudget({ minValue: 0, maxValue: 2000000 });
        setIsAdvanceFilter(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup-container') {
            closeDropdown()
        }
    };


    return (
        <>           

            <div
                id="popup-container"
                className="fixed z-50 h-screen w-full inset-0 px-[2%] pt-[5%] bg-gray-800 bg-opacity-50 backdrop-blur-lg transition-opacity duration-300 overflow-y-scroll "
                onClick={handleOutsideClick}>
                <AnimatePresence>
                    <motion.div
                        initial={{ y: "110vh" }} // Start from the very bottom of the screen
                        animate={{ y: 0 }} // Slide to the original position
                        exit={{ y: "110vh" }} // Slide back to the very bottom of the screen when exiting
                        transition={{ y: { duration: 0.5, ease: "easeInOut" } }}

                        className="bg-white h-full max-w-[1420px] mx-auto relative rounded-tr-lg rounded-tl-lg z-30">
                        <div className='sticky z-50 top-5 pr-5 w-full flex justify-end'>
                            <button
                                className=" bg-transparent text-black"
                                onClick={closeDropdown}
                            >
                                <FontAwesomeIcon icon={faXmark} size='xl' />
                            </button>
                        </div>


                        <div className='bg-white w-full p-[11%] md:p-[6%] md:pb-[12%] flex flex-col text-black rounded-tr-lg rounded-tl-lg z-30'>
                            <div className=''>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <LocationDropdown
                                        title={titles[0]}
                                        dropdownItems={dropdownItems[0]}
                                        resetFlagLoc={resetFlagLoc} />
                                    <PropertyTypeDropdown
                                        title={titles[1]}
                                        dropdownItems={dropdownItems[1]}
                                        resetFlag={resetFlag}
                                    />
                                    <BuildingStageDropdown
                                        title={titles[2]}
                                        dropdownItems={dropdownItems[2]}
                                        buildingStage={buildingStage}
                                        setBuildingStage={setBuildingStage}
                                        resetFlagBul={resetFlagBul} />
                                    <DeliveryDateDropdown
                                        title={titles[3]}
                                        dropdownItems={dropdownItems[3]}
                                        deliveryDate={deliveryDate}
                                        setDeliveryDate={setDeliveryDate}
                                        resetFlagDev={resetFlagDev}
                                    />
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
                                            <span className='-mr-6 lg:-mr-10'>{area.maxValue} m<sup>2</sup> {area.maxValue === 500 && "+"} </span>
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
                                            <span className='-ml-3'>€{formatNumber(budget.minValue)}</span>
                                            <span className='-mr-8 lg:-mr-12'>€{formatNumber(budget.maxValue)} {budget.maxValue === 2000000 && "+"}</span>
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
                                            id="reference"
                                            className={`w-full p-3 py-2 md:py-3 ${inputValue === '' ? 'capitalize' : 'uppercase'} bg-transparent border-grayborder border outline-none placeholder:text-fontdark rounded-lg`}
                                            placeholder="Reference"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="relative">
                                        <button
                                            className={`bg-primarycolor hover:bg-primarycolorhover text-white w-full border px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-2 cursor-pointer transition-colors duration-300 ease-in-out`}
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
                                                        className={`p-3 border border-grayborder text-black text-xs sm:text-sm rounded-full ${selectedTags.includes(tag) ? 'bg-primarycolor text-white hover:bg-primarycolorhover hover:text-white' : 'bg-white hover:bg-bggray hover:text-black'
                                                            } cursor-pointer transition-colors duration-300 ease-in-out`}
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
                                        onClick={resetFilters} >

                                        <span>Reset Filters</span>
                                        <img src="/images/icons/rotate-reverse.svg" alt="" className='h-4' />
                                    </button>

                                    <button
                                        className={`bg-secondrycolor hover:bg-secondrycolorhover text-white w-full md:w-[250px] border border-grayborder px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center gap-2 cursor-pointer transition-colors duration-300 ease-in-out`}
                                        onClick={() => { resetFilters(); closeDropdown()}} >
                                        <span>Search</span>
                                        <FontAwesomeIcon icon={faSearch} size='base' />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>

            </div>
        </>
    )
}

export default SearchPageFilter