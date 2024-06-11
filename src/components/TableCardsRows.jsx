import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkbox } from "@material-tailwind/react";


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
                            className="absolute right-[30px] w-max text-md bg-white border py-1 px-2 text-black rounded-md"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isSaved ? "Remove from favourites" : "Add to favourites"}
                        </motion.p>
                    )}
                    <button
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
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default TableCardsRows