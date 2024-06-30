import React, { useState, useEffect, useRef } from 'react';
import { faChevronDown, faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

const RequestATour = ({dropdown}) => {

    const [view, setView] = useState('list');
    const [startDate] = useState(dayjs());
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const containerRef = useRef(null);

    const [isContactPreference, setIsContactPreference] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        preference: '',
        message: '',
        agree: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isRequested, setIsRequested] = useState(false);


    const getNext7Days = (start) => {
        return Array.from({ length: 9 }, (_, index) => start.add(index, 'day'));
    };

    const handleScroll = (direction) => {
        const container = containerRef.current;
        const scrollAmount = 115; // Adjust based on your design and requirements
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            if (container.scrollLeft + scrollAmount >= maxScrollLeft + 100) {
                // If at the end, reset to the start
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const days = getNext7Days(startDate);

    const handleDateClick = (index) => {
        setActiveIndex(index);
        setSelectedDate(days[index].format('dddd, MMMM D, YYYY'));
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsContactPreference(false);
        }
    };

    useEffect(() => {
        if (isContactPreference) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isContactPreference]);

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Set selected option
        setFormData({ ...formData, preference: option }); // Update form data if needed
        setIsContactPreference(false); // Close dropdown
    };

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name.trim()) formErrors.name = "Full Name is required";
        if (!formData.phone.trim()) formErrors.phone = "Phone is required";
        if (!formData.email.trim()) formErrors.email = "Email is required";
        if (!formData.agree) formErrors.agree = "You must agree to the privacy policy";
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitted(true);
        }
    };
    return (
        <>
            {
                isSubmitted ? (
                    <>
                        <div className='flex justify-center'>

                            <div className="bg-transaprent rounded-lg flex flex-col justify-between items-center max-w-md">
                                <h2 className="text-center text-3xl font-BebasNeueSemiExpBold">See You Soon</h2>
                                <p className="text-center mt-4 font-semibold">
                                    {selectedDate}  at  {selectedOption}
                                </p>
                                <button className='buttonShort mt-4 bg-transparent border-2 border-bggray text-white  font-semibold'>
                                    Create an Account
                                </button>
                            </div>
                        </div>

                    </>
                ) :
                    isRequested ? (
                        <>
                            <div className='flex flex-col items-center'>

                                <h2 className="text-3xl text-center font-bold font-BebasNeueSemiExpBold">Schedule a Tour</h2>

                                <form className="bg-transparent pt-4 rounded-lg w-full xl:max-w-md" onSubmit={handleSubmit}>
                                    <div className='flex flex-col lg:flex-row xl:flex-col gap-0 lg:gap-4 xl:gap-0'>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="name" className='text-sm font-medium'>Full Name</label>
                                            <input
                                                type="text"
                                                id='name'
                                                className={`w-full p-3 mt-2 bg-transparent border-bggray border-2 text-bggray placeholder:text-bggray  rounded-lg ${errors.name ? 'border-red-500' : ''}`}
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                        </div>
                                        <div className="mb-4 w-full lg:w-[49%] xl:w-full">
                                            <label htmlFor="phone" className='text-sm font-medium'>Phone (+int code)</label>
                                            <input
                                                type="tel"
                                                id='phone'
                                                className={`w-full p-3 mt-2 bg-transparent border-bggray border-2 text-bggray placeholder:text-bggray  rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label htmlFor="email" className='text-sm font-medium'>Email</label>
                                            <input
                                                type="email"
                                                id='email'
                                                className={`w-full p-3 mt-2 bg-transparent border-bggray border-2 text-bggray placeholder:text-bggray  rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                        </div>

                                    </div>

                                    <div className=" flex items-start">
                                        <input
                                            type="checkbox"
                                            id="agree"
                                            className="mr-2"
                                            checked={formData.agree}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="agree" className="text-xs text-[#A8A8A8]">
                                            By providing Buy Developments your contact information, you acknowledge and agree to our Private Policy and consent to receiving marketing communications, including through automated calls, texts, and emails.
                                        </label>
                                    </div>

                                    {errors.agree && <p className="text-red-500 text-sm mb-4">{errors.agree}</p>}
                                    <div className='flex-col lg:flex-row xl:flex-col gap-0 lg:gap-4 xl:gap-0'>

                                        <div className=' text-center mt-6'>
                                            <button type="submit" className="py-2 md:py-3 w-[180px] font-semibold bg-[#F7F7F7] text-black rounded-lg">Send Request</button>
                                        </div>

                                        <div className=' text-center mt-6 font-semibold'>
                                            <p>{selectedDate}  at  {selectedOption}</p>
                                            <button type="submit" className="mt-4 py-2 md:py-3 w-[180px] font-semibold border border-white bg-transparent text-white rounded-lg" onClick={() => { setIsRequested(false) }}>Change</button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </>
                    ) : (
                        <>
                            <h2 className="text-3xl  text-center font-bold font-BebasNeueSemiExpBold">Schedule a Tour</h2>

                            <div ref={containerRef} className="flex overflow-x-auto mt-6 scrollbar-hide">
                                {days.map((day, index) => (
                                    <div
                                        key={index}
                                        className={`text-center rounded-2xl py-6 mr-2 flex-shrink-0 w-[110px] cursor-pointer border  border-white hover:text-primarycolor hover:bg-white
                                                        ${index === activeIndex
                                                ? 'bg-white text-primarycolor'
                                                : 'bg-transparent text-white'
                                            }`}
                                        onClick={() => handleDateClick(index)}
                                    >
                                        <div className='font-normal text-sm'>{day.format('dddd')}</div>
                                        <div className="text-5xl my-2 font-bold">{day.format('DD')}</div>
                                        <div className='font-normal text-sm'>{day.format('MMMM')}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center gap-2 items-center mt-6 text-[#A5A5A5]">
                                <button
                                    className="h-[40px] w-[40px] border border-[#A5A5A5] rounded-lg"
                                    onClick={() => handleScroll('left')}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} size='base' />
                                </button>
                                <button
                                    className="h-[40px] w-[40px] border border-[#A5A5A5] rounded-lg"
                                    onClick={() => handleScroll('right')}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} size='base' />
                                </button>
                            </div>

                            <div className="mt-6 w-full">
                                <label htmlFor="preference" className='text-sm font-medium'>Choose a time</label>
                                <div className="relative mt-3" ref={dropdownRef}>
                                    <button
                                        className={`w-full bg-transparent text-white p-3 rounded-lg border-2 border-white flex flex-row justify-between items-center gap-2 `}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsContactPreference(!isContactPreference);
                                        }}
                                    >
                                        <div className='flex gap-2 items-center'>
                                            <span>{selectedOption || 'Select'}</span>
                                        </div>
                                        <motion.span
                                            animate={{ rotate: isContactPreference ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="ml-2"
                                        >
                                            <FontAwesomeIcon icon={faChevronDown} size='base' />
                                        </motion.span>
                                    </button>
                                    {isContactPreference && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`absolute w-full flex ${dropdown ? ' max-h-[160px] min-h-[160px] ' : ' max-h-[160px] ' } overflow-y-scroll scrollbar-hide right-0 py-4 px-2 bg-white border rounded-md mt-2 z-30`}
                                        >
                                            <div className={`w-full flex flex-row flex-wrap justify-evenly gap-2 `}>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100 hover:text-black
                                                    ${selectedOption === '9:00 AM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('9:00 AM')}
                                                >
                                                    9:00 AM
                                                </button>

                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '10:00 AM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('10:00 AM')}
                                                >
                                                    10:00 AM
                                                </button>

                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '11:00 AM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('11:00 AM')}
                                                >
                                                    11:00 AM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '12:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('12:00 PM')}
                                                >
                                                    12:00 PM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '1:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('1:00 PM')}
                                                >
                                                    1:00 PM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '2:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('2:00 PM')}
                                                >
                                                    2:00 PM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                ${selectedOption === '3:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('3:00 PM')}
                                                >
                                                    3:00 PM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '4:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('4:00 PM')}
                                                >
                                                    4:00 PM
                                                </button>
                                                <button
                                                    className={`w-[96px] text-center py-1 text-md text-primarycolor border border-primarycolor rounded-lg hover:bg-gray-100  hover:text-black 
                                                    ${selectedOption === '5:00 PM' ? 'bg-primarycolor text-white' : ''}`}
                                                    onClick={() => handleOptionClick('5:00 PM')}
                                                >
                                                    5:00 PM
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <div className="w-fit mx-auto flex justify-center p-1 bg-[#667f99] rounded-lg space-x-2 mt-6">
                                <button
                                    className={`px-3 py-1 md:px-7 md:py-2 ${view === 'list' ? 'bg-primarycolor text-white' : ' text-white'} rounded-lg`}
                                    onClick={() => setView('list')}
                                >
                                    In person
                                </button>
                                <button
                                    className={`px-3 py-1 md:px-7 md:py-2 ${view === 'map' ? 'bg-primarycolor text-white' : ' text-white'} rounded-lg`}
                                    onClick={() => setView('map')}
                                >
                                    Via video chat
                                </button>
                            </div>
                            <div className='text-center mt-6'>
                                <button className={` font-semibold py-2 px-4 rounded-lg w-fit text-black ${selectedDate && selectedOption ? 'bg-[#f7f7f7]  cursor-pointer' : 'bg-[#D0D0D0] cursor-not-allowed'}`}
                                    disabled={!selectedDate || !selectedOption}
                                    onClick={() => setIsRequested(true)}
                                >Request</button>
                            </div>
                        </>
                    )
            }

        </>
    )
}

export default RequestATour