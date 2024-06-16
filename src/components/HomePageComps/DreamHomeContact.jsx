import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const DreamHomeContact = () => {

    const [isContactPreference, setIsContactPreference] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
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
    const dropdownRef = useRef(null);

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

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setFormData({ ...formData, preference: option });
        setIsContactPreference(false);
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name.trim()) formErrors.name = "Full Name is required";
        if (!formData.phone.trim()) formErrors.phone = "Phone is required";
        if (!formData.email.trim()) formErrors.email = "Email is required";
        if (!formData.preference.trim()) formErrors.preference = "Contact Preference is required";
        if (!formData.message.trim()) formErrors.message = "Message is required";
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
        <section className="section flex flex-col xl:flex-row bg-cover bg-center relative" style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
            <div className='absolute inset-0 bg-primarycolor opacity-65'></div>

            <div className="flex-1 z-10 flex items-center justify-left xl:justify-end">
                <div className="text-white w-full lg:max-w-xl">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl  font-BebasNeueSemiExpBold">Find Your Dream Home In Europe The Right Way.</h1>
                </div>
            </div>
            <div className={`flex-1 z-10 flex items-center ${isSubmitted ? 'justify-center xl:justify-start': 'xl:justify-left'}  mt-10 xl:mt-0`}>
                {isSubmitted ? (
                    <div className="bg-bggray p-6 rounded-lg flex flex-col justify-between items-center max-w-md">
                        <h2 className="text-center text-3xl font-BebasNeueSemiExpBold">Thank You For Getting In Touch!</h2>
                        <p className="text-center mt-4">One of our experts will reach out to you very shortly.</p>
                        <button className='buttonShort mt-4 bg-transparent border-2 border-black font-semibold'>
                            Create an Account
                        </button>
                    </div>
                ) : (
                    <form className="bg-bggray p-6 rounded-lg  w-full xl:max-w-md" onSubmit={handleSubmit}>
                        <div className='flex flex-col lg:flex-row xl:flex-col gap-0 lg:gap-4 xl:gap-0'>
                            <div className="mb-4 w-full lg:w-[49%] xl:w-full">
                                <label htmlFor="name" className='text-sm font-medium'>Full Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    className={`w-full p-3 mt-2 border-black border-2 placeholder:text-fontdark rounded-lg ${errors.name ? 'border-red-500' : ''}`}
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
                                    className={`w-full p-3 mt-2 border-black border-2 placeholder:text-fontdark rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row xl:flex-col gap-0 lg:gap-4 xl:gap-0'>
                            <div className="mb-4 w-full lg:w-[49%] xl:w-full">
                                <label htmlFor="email" className='text-sm font-medium'>Email</label>
                                <input
                                    type="email"
                                    id='email'
                                    className={`w-full p-3 mt-2 border-black border-2 placeholder:text-fontdark rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="mb-4 w-full lg:w-[49%] xl:w-full">
                                <label htmlFor="preference" className='text-sm font-medium'>Preference</label>
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        className={`w-full bg-transparent text-black p-3 rounded-lg border-2 border-black flex flex-row justify-between items-center gap-2 ${errors.preference ? 'border-red-500' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsContactPreference(!isContactPreference);
                                        }}
                                    >
                                        <div className='flex gap-2 items-center'>
                                            <span>{selectedOption || 'Contact Preference'}</span>
                                        </div>
                                        <motion.span
                                            animate={{ rotate: isContactPreference ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="ml-2"
                                        >
                                            <FontAwesomeIcon icon={faChevronDown} size='xs' />
                                        </motion.span>
                                    </button>
                                    {isContactPreference && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`absolute right-0 w-full bg-white border rounded-md mt-2 py-2 z-30`}
                                        >
                                            <button
                                                className="w-full text-left p-3 text-md text-fontdark hover:bg-gray-100 hover:underline"
                                                onClick={() => handleOptionClick('Email')}
                                            >
                                                Email
                                            </button>
                                            <button
                                                className="w-full text-left p-3 text-md text-fontdark hover:bg-gray-100 hover:underline"
                                                onClick={() => handleOptionClick('Phone')}
                                            >
                                                Phone
                                            </button>
                                            <button
                                                className="w-full text-left p-3 text-md text-fontdark hover:bg-gray-100 hover:underline"
                                                onClick={() => handleOptionClick('Whatsapp')}
                                            >
                                                Whatsapp
                                            </button>
                                            <button
                                                className="w-full text-left p-3 text-md text-fontdark hover:bg-gray-100 hover:underline"
                                                onClick={() => handleOptionClick('Any')}
                                            >
                                                Any
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                                {errors.preference && <p className="text-red-500 text-sm">{errors.preference}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className='text-sm font-medium'>Message</label>
                            <textarea
                                id='message'
                                className={`w-full p-3 mt-2 border-black border-2 placeholder:text-fontdark rounded-lg ${errors.message ? 'border-red-500' : ''}`}
                                rows="5"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="agree"
                                className="mr-2"
                                checked={formData.agree}
                                onChange={handleInputChange}
                            />
                            <label htmlFor="agree" className="text-sm text-fontdark">
                                I agree to receive info by email and I agree to the <a href="#" className="text-primarycolor font-bold">privacy policy</a>.
                            </label>
                        </div>
                        {errors.agree && <p className="text-red-500 text-sm mb-4">{errors.agree}</p>}
                        <button type="submit" className="buttonLong w-full bg-primarycolor text-white rounded-lg">Contact Us</button>
                    </form>
                )}
            </div>

        </section>
    )
}

export default DreamHomeContact