import React, { useState, useEffect, useRef } from 'react';
import { faChevronDown, faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

const RequestATourSold = ({ dropdown }) => {

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
    const [isRequested, setIsRequested] = useState(true);


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

                                <h2 className="text-3xl text-center font-bold font-BebasNeueSemiExpBold">Make An Enquiry</h2>

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
                                    </div>

                                </form>
                            </div>

                        </>
                    ) : (
                        <></>
                    )
            }
        </>
    )
}

export default RequestATourSold