import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';


const DeliveryDateDropdown = ({ title }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [deliveryDate, setDeliveryDate] = useState({ minValue: 0, maxValue: 4 });
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

    const handleDeliverydate = ({ minValue, maxValue }) => {
        setDeliveryDate({ minValue, maxValue });
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
                        selected option 4
                    </p>
                </div>
            </button>
            {openDropdown && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute md:right-0 mt-2 max-h-[230px] overflow-y-scroll scrollbar-custom w-[420px] font-medium bg-white border rounded-md py-2 z-50"
                >
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
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default DeliveryDateDropdown;
