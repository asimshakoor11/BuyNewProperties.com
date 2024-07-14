import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Checkbox } from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';



const TableCardsRows = ({ row, index }) => {

    const [isSaved, setIsSaved] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <tr className={`border-b border-gray-300 cursor-pointer hover:bg-[#fcfeff] row-hover ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}>
            <td className="py-2 lg:py-3 px-2 lg:px-4 text-center">{row.beds}</td>
            <td className="py-2 lg:py-3 px-2 lg:px-4 text-center">{row.interior}</td>
            <td className="py-2 lg:py-3 px-2 lg:px-4 text-center">{row.price}</td>
            <td className="py-2 lg:py-3 px-2 lg:px-4 text-center">
                <div className="relative w-fit flex items-center ">
                    {showTooltip && (
                        <AnimatePresence>
                            {isSaved ? (
                                <motion.p
                                    key="remove" // Unique key for the element
                                    className={`absolute w-max right-8 mb-1 lowercase text-xs bg-white shadow-lg py-1.5 px-2 text-black rounded-lg`}
                                    initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                    animate={{ x: 0, opacity: 1 }} // Animation properties
                                    exit={{ x: -20, opacity: 0 }} // Exit animation properties
                                    transition={{ duration: 0.3 }} // Animation duration

                                >
                                    Remove from favourites
                                </motion.p>
                            ) : (
                                <motion.p
                                    key="add" // Unique key for the element
                                    className={`absolute w-max right-8 mb-1 lowercase text-xs bg-white shadow-lg py-1.5 px-2 text-black rounded-lg`}
                                    initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                    animate={{ x: 0, opacity: 1 }} // Animation properties
                                    exit={{ x: -20, opacity: 0 }} // Exit animation properties
                                    transition={{ duration: 0.3 }} // Animation duration
                                >
                                    Add to favourites
                                </motion.p>
                            )}
                        </AnimatePresence>
                    )}
                    <button
                        onClick={handleSaveClick}
                        className="bg-transparent border-none cursor-pointer"
                        // title={isSaved ? "Remove from favourites" : "Add to favourites"}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon
                            icon={solidBookmark}
                            style={{
                                color: isSaved ? '#00703C' : '#c7c7c7',
                                stroke: 'black',
                                strokeWidth: '40px'
                            }}
                            className="text-xl "
                        />
                    </button>
                </div>
            </td>
            <td className="py-2 px-4 text-center">
                <button className="bg-transparent icon-slide">
                    <FontAwesomeIcon icon={faChevronRight} size='sm' />
                </button>
            </td>
        </tr >
    );
}

export default TableCardsRows