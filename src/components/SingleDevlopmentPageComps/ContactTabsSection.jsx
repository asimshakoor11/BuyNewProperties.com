import React, { useState } from 'react'
import AgentsList from '../../components/SingleDevlopmentPageComps/AgentsList';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RequestATour from './RequestATour';
import GlobalForm from '../Global/GlobalForm';


const ContactTabsSection = () => {

    const [selectedTab, setSelectedTab] = useState('contact');
    const [isSubmit, setIsSubmit] = useState(false)

    const handleStateChange = (value) => {
        setIsSubmit(value);
    };

    return (
        <section className="section bg-primarycolor">

            <div className="flex flex-col  md:flex-row items-center justify-center gap-6 mt-10 mb-10">
                <button
                    className={`w-[300px] px-8 py-3 border-2 text-base font-semibold rounded-xl border-white ${selectedTab === 'contact' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('contact')}
                >
                    <FontAwesomeIcon icon={faPhone} size='md' className='mr-4' />
                    Contact
                </button>
                {/* <button
                    className={`px-8 py-3 border-2 text-lg md:text-xl font-FuturaDemi rounded border-white ${selectedTab === 'videoChat' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('videoChat')}
                >
                    <FontAwesomeIcon icon={faVideo} size='md' className='mr-4' />
                    View via video chat
                </button> */}
                <button
                    className={`w-[300px] px-8 py-3 border-2 text-base font-semibold rounded-xl border-white  ${selectedTab === 'RequestTour' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('RequestTour')}
                >
                    <FontAwesomeIcon icon={faUser} size='md' className='mr-4' />
                    Book in person viewing
                </button>
            </div>
            <div className='my-10 flex flex-col items-center'>
                <p className='lg:w-[600px] text-xs text-center italic text-bggray'>Select your preferred viewing method, in person or via video chat from the comfort of your home.</p>
                <p className='lg:w-[600px] mt-3 text-xs text-center italic text-bggray'>Select your desired viewing date and you’ll be contacted by an agent to discuss available time slots and finalize the tour schedule.</p>
            </div>

            {selectedTab === 'contact' && (
                <div className="flex flex-col flex-wrap gap-10 md:flex-row w-full ">
                    <div className={`text-black rounded-lg flex items-center w-full xl:w-[32%] ${isSubmit ? 'justify-center xl:justify-start' : 'xl:justify-left'}  `}>
                        <GlobalForm onStateChange={handleStateChange} />
                    </div>

                    <div className=' mt-10 xl:mt-0 w-full xl:w-[63%]'>
                        <AgentsList />
                    </div>
                </div>
            )}
            {/* {selectedTab === 'videoChat' && (
                <div className="flex flex-col flex-wrap gap-6 md:flex-row w-full">
                    <div className="bg-white text-black p-6 rounded-lg flex items-center w-full xl:w-[32%]">
                        <ContactForm />
                    </div>

                    <div className=' mt-10 xl:mt-0 w-full flex flex-col justify-between xl:w-[65%]'>
                        <DateTimePicker />
                        <button type="submit" className="bg-green-500 w-fit text-white px-10 py-2 rounded-lg mt-4">
                            Contact agent
                        </button>
                    </div>
                </div>
            )} */}
            {selectedTab === 'RequestTour' && (
                <div className='flex items-center justify-center border border-bggray rounded-2xl text-white p-8'>
                    <div className='w-full lg:w-3/4'>
                        <RequestATour />
                    </div>

                </div>
            )}


        </section >
    )
}

export default ContactTabsSection