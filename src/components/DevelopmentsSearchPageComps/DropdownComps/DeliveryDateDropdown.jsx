import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';

const DeliveryDateDropdown = ({ title, deliveryDate, setDeliveryDate, resetFlagDev }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isSliderUsed, setIsSliderUsed] = useState(false);

    const currentYear = new Date().getFullYear();
    const currentQuarter = Math.ceil((new Date().getMonth() + 1) / 3);

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
    }, []);

    const handleDeliveryDate = ({ minValue, maxValue }) => {
        setDeliveryDate({ minValue, maxValue });
    };

    const handlePTag = () => {
        setIsSliderUsed(true);
    }

    useEffect(() => {
        setIsSliderUsed(false);        
    }, [resetFlagDev]);

    const getQuarterYear = (value) => {
        const totalQuarters = currentQuarter + value;
        const year = currentYear + Math.floor((totalQuarters - 1) / 4);
        const quarter = totalQuarters % 4 === 0 ? 4 : totalQuarters % 4;
        return `Q${quarter} ${year}`;
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
                    {isSliderUsed && (
                        <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                            {`${getQuarterYear(deliveryDate.minValue)} - ${getQuarterYear(deliveryDate.maxValue)}`}
                        </p>
                    )}
                </div>
            </button>
            {openDropdown && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute md:right-0 mt-2 max-h-[230px] overflow-y-scroll scrollbar-custom w-full sm:w-[420px] font-medium bg-white border rounded-md py-2 z-50"
                >
                    <div className="flex flex-col gap-4 px-4 py-2">
                        <div className="w-full" style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}>
                            <MultiRangeSlider
                                min={0}
                                max={16}
                                step={1}
                                ruler={false}
                                label={false}
                                stepOnly={true}
                                minValue={deliveryDate.minValue}
                                maxValue={deliveryDate.maxValue}
                                canMinMaxValueSame={true}
                                onInput={handleDeliveryDate}
                                onChange={handlePTag}
                                className="w-full"
                                style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}
                                barLeftColor='transparent'
                                barInnerColor='black'
                                barRightColor='transparent'
                                thumbLeftColor='white'
                                thumbRightColor='white'
                            />
                            <div className="flex justify-between px-2 text-sm">
                                <span>{getQuarterYear(0)}</span>
                                <span>{getQuarterYear(16)}</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[88px]'>
                                <p className='text-sm text-fontdark font-semibold'>From</p>
                                <p className='text-base font-semibold'>
                                    {getQuarterYear(deliveryDate.minValue)}
                                </p>
                            </div>
                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[99px]'>
                                <p className='text-sm text-fontdark font-semibold'>To</p>
                                <p className='text-base font-semibold'>
                                    {getQuarterYear(deliveryDate.maxValue)}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DeliveryDateDropdown;
