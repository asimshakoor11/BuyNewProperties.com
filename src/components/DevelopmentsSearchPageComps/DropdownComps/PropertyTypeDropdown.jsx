import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from "@material-tailwind/react";
import { motion } from 'framer-motion';

const PropertyTypeDropdown = ({ title, dropdownItems }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});
    const [allChecked, setAllChecked] = useState(false);
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

    // Function to handle checkbox changes
    const handleCheck = (itemIndex) => {
        if (itemIndex === 'All') {
            const newAllChecked = !allChecked;
            setAllChecked(newAllChecked);
            const newCheckedItems = {};
            dropdownItems.forEach((item, index) => {
                newCheckedItems[`${index}`] = newAllChecked;
            });
            setCheckedItems(newCheckedItems);
        } else {
            const newCheckedItems = { ...checkedItems, [itemIndex]: !checkedItems[itemIndex] };
            setCheckedItems(newCheckedItems);
            // Check if all items are checked to update "All" checkbox
            const allChecked = dropdownItems.every((item, index) => newCheckedItems[`${index}`]);
            setAllChecked(allChecked);
        }
    };

    // Function to get the selected items text
    const getSelectedItemsText = () => {
        const selectedItems = dropdownItems.filter((item, index) => checkedItems[`${index}`]);
        return selectedItems.length > 0 ? selectedItems.join(', ') : '';
    };

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
                        {getSelectedItemsText()}
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
                        <div
                            className="flex flex-row gap-2 px-4 py-2 cursor-pointer border-black transition-colors hover:bg-bggray rounded-lg duration-150"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Checkbox
                                color="black"
                                className="h-5 w-5 bg-[#EBEBEB] checked:bg-[#002038] hover:before:opacity-0"
                                containerProps={{ className: "p-0 rounded-none" }}
                                id={`checkboxAll`}
                                checked={allChecked}
                                onChange={() => handleCheck('All')}
                            />
                            <label htmlFor={`checkboxAll`} className='w-full cursor-pointer text-start'>All</label>
                        </div>
                        {dropdownItems.map((item, itemIndex) => (
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
                                        onChange={() => handleCheck(`${itemIndex}`)}
                                    />
                                    <label htmlFor={`checkbox${itemIndex}`} className='w-full cursor-pointer text-start'>{item}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default PropertyTypeDropdown;
