import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MultiRangeSlider from 'multi-range-slider-react';

const BuildingStageDropdown = ({ title, buildingStage, setBuildingStage, resetFlagBul }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isSliderUsed, setIsSliderUsed] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);
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

    const handleBuildingStage = ({ minValue, maxValue }) => {
        if (minValue !== buildingStage.minValue) {
            setLastUpdated('minValue');
            console.log("minvalue updated")
        } else if (maxValue !== buildingStage.maxValue) {
            setLastUpdated('maxValue');
            console.log("maxvalue updated")

        }
        setBuildingStage({ minValue, maxValue });
    };

    const handlePTag = () => {
        setIsSliderUsed(true);
    }

    useEffect(() => {
        setIsSliderUsed(false);
    }, [resetFlagBul]);

    const getBuildingStageLabel = (value) => {
        switch (value) {
            case 0:
                return "Pre Sale";
            case 1:
                return "Under Construction";
            case 2:
                return "Completed";
            default:
                return "";
        }
    };

    useEffect(() => {
        const rangeslider = document.getElementById("rangeslider")
        if (rangeslider) {
            if (buildingStage.maxValue === buildingStage.minValue) {
                rangeslider.classList.remove("custom-slider")
                rangeslider.classList.add("custom-sliderg")
            }
            else if (buildingStage.minValue === buildingStage.maxValue) {
                rangeslider.classList.remove("custom-slider")
                rangeslider.classList.add("custom-sliderg")
            }
            else {
                rangeslider.classList.remove("custom-sliderg")
                rangeslider.classList.add("custom-slider")
            }
        }
    }, [buildingStage.minValue, buildingStage.maxValue]);

    useEffect(() => {
        const rangethumbs = document.getElementById("rangethumbs")
        if (rangethumbs) {
            if (lastUpdated === "minValue") {
                rangethumbs.classList.add("customthumbsleft")
                rangethumbs.classList.remove("customthumbsright")
            }
            else if (lastUpdated === "maxValue") {
                rangethumbs.classList.add("customthumbsright")
                rangethumbs.classList.remove("customthumbsleft")
            }
            else {
                rangethumbs.classList.remove("customthumbsright")
                rangethumbs.classList.remove("customthumbsleft")
            }
        }
    }, [buildingStage.minValue, buildingStage.maxValue]);

    return (
        <div className="relative hidden md:block" ref={dropdownRef}>
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
                    {
                        isSliderUsed && (
                            <p className="w-full text-left text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                {`${lastUpdated === "minValue" ? `${buildingStage.minValue === 0 || buildingStage.minValue === 2 ? '': 'From '}` + getBuildingStageLabel(buildingStage.minValue) : `${buildingStage.maxValue === 0 || buildingStage.maxValue === 2 ? '': 'To '}` + getBuildingStageLabel(buildingStage.maxValue)}`}

                            </p>
                        )
                    }

                </div>
            </button>
            {openDropdown && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute lg:right-0 mt-2 max-h-[230px] overflow-y-scroll scrollbar-custom w-full sm:w-[420px] font-medium bg-white border rounded-md py-2 z-50"
                >
                    <div className="flex flex-col gap-4 px-4 py-2">
                        <div id='rangethumbs' className="w-full" style={{ border: "none", boxShadow: "none", backgroundColor: "transparent" }}>
                            <MultiRangeSlider
                                id='rangeslider'
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
                                onChange={handlePTag}
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
                                <p className='text-base font-semibold'>
                                    {getBuildingStageLabel(buildingStage.minValue)}
                                </p>
                            </div>
                            <div className='flex flex-col items-start justify-start bg-bgf5 p-3 w-2/5 rounded-lg min-h-[99px]'>
                                <p className='text-sm text-fontdark font-semibold'>To</p>
                                <p className='text-base font-semibold'>
                                    {getBuildingStageLabel(buildingStage.maxValue)}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default BuildingStageDropdown;
