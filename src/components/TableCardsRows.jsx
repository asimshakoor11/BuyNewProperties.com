import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
// import { Checkbox } from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';



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
        <tr className={`border-b border-gray-300 cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}>
            <td className="py-2 lg:py-3 px-4 text-center">{row.beds}</td>
            <td className="py-2 lg:py-3 px-4 text-center">{row.interior}</td>
            <td className="py-2 lg:py-3 px-4 text-center">{row.price}</td>
            <td className="py-2 lg:py-3 px-4 text-center">
                <div className="relative flex items-center">
                    {showTooltip && (
                        <motion.p
                            className={`absolute w-max right-12 mb-1 border lowercase text-xs bg-white py-1 px-2 text-black rounded-lg`}
                            initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                            animate={{ x: 0, opacity: 1 }} // Animation properties
                            transition={{ duration: 0.3 }} // Animation duration
                        >
                            {isSaved ? "Remove from favourites" : "Add to favourites"}
                        </motion.p>
                    )}

                    <button
                        onClick={handleSaveClick}
                        className="bg-transparent border-none cursor-pointer "
                        title={isSaved ? "Remove from favourites" : "Add to favourites"}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FontAwesomeIcon
                            icon={solidBookmark}
                            style={{
                                color: isSaved ? 'green' : 'silver',
                                stroke: 'black',
                                strokeWidth: '40px'
                            }}
                            className="text-xl"
                        />
                    </button>



                    {/* <button
                        onClick={handleSaveClick}
                        className="bg-transparent border-none cursor-pointer"
                        title={isSaved ? "Remove from favourites" : "Add to favourites"}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Checkbox
                            color="green"
                            className="h-5 w-5"
                            containerProps={{ className: "p-0 rounded-none" }}
                        />
                    </button> */}
                </div>
            </td>
        </tr>
    );
}

export default TableCardsRows