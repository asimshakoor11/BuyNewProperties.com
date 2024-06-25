import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from "@material-tailwind/react";
import { motion } from 'framer-motion';

const LocationDropdown = ({ title, dropdownItems }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [checkedItems, setCheckedItems] = useState({});
    const [selectedText, setSelectedText] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    const handleLocationCheck = (locationIndex, sublocationIndex = null) => {
        setCheckedItems((prevState) => {
            const updatedState = { ...prevState };

            if (sublocationIndex === null) {
                const allChecked = dropdownItems[locationIndex].subitems.every((_, idx) => updatedState[`${locationIndex}-${idx}`]);
                dropdownItems[locationIndex].subitems.forEach((_, idx) => {
                    updatedState[`${locationIndex}-${idx}`] = !allChecked;
                });
                updatedState[`${locationIndex}`] = !allChecked;
            } else {
                updatedState[`${locationIndex}-${sublocationIndex}`] = !updatedState[`${locationIndex}-${sublocationIndex}`];
                const allSubitemsChecked = dropdownItems[locationIndex].subitems.every((_, idx) => updatedState[`${locationIndex}-${idx}`]);
                updatedState[`${locationIndex}`] = allSubitemsChecked;
            }

            updateSelectedText(updatedState);
            return updatedState;
        });
    };

    const updateSelectedText = (checkedItems) => {
        let selectedLocations = [];

        dropdownItems.forEach((item, itemIndex) => {
            const allSubitemsChecked = item.subitems.every((_, subIndex) => checkedItems[`${itemIndex}-${subIndex}`]);
            if (allSubitemsChecked) {
                selectedLocations.push(item.label);
            } else {
                item.subitems.forEach((subitem, subIndex) => {
                    if (checkedItems[`${itemIndex}-${subIndex}`]) {
                        selectedLocations.push(subitem);
                    }
                });
            }
        });

        setSelectedText(selectedLocations.join(', '));
    };

    const filteredLocations = dropdownItems.filter(location => {
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

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="bg-transparent w-full border font-medium border-grayborder px-4 py-2 md:py-3 rounded-lg"
                onClick={toggleDropdown}
            >
                <div className='flex flex-row justify-between items-center gap-2'>
                    <span>{title}</span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        size='xs'
                        style={{
                            transition: 'transform 0.3s',
                            transform: openDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    />
                </div>
                <div>
                    <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {selectedText}
                    </p>
                </div>
            </button>
            {openDropdown && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute md:right-0 mt-2 max-h-[230px] overflow-y-scroll scrollbar-custom w-full font-medium bg-white border rounded-md py-2 z-50"
                >
                    <div className="flex flex-col px-4 py-2">
                        <div className='p-2 px-4 flex items-center justify-between rounded-lg border-none bg-bggray'>
                            <input
                                type="text"
                                placeholder="Search"
                                className="outline-none rounded-lg border-none bg-bggray"
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
                </motion.div>
            )}
        </div>
    );
};

export default LocationDropdown;
