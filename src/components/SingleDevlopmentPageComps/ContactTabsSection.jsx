import React, { useState } from 'react'

import AgentsList from '../../components/SingleDevlopmentPageComps/AgentsList';
import ContactForm from '../../components/SingleDevlopmentPageComps/ContactForm';
import DateTimePicker from '../../components/SingleDevlopmentPageComps/DateTimePicker';
import { faPhone, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactTabsSection = () => {

    const [selectedTab, setSelectedTab] = useState('contact');
    return (
        <section className="section bg-primarycolor">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
                <button
                    className={`px-8 py-3 border-2  text-lg md:text-xl  font-FuturaDemi rounded border-white ${selectedTab === 'contact' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('contact')}
                >
                    <FontAwesomeIcon icon={faPhone} size='md' className='mr-4' />
                    Contact
                </button>
                <button
                    className={`px-8 py-3 border-2 text-lg md:text-xl font-FuturaDemi rounded border-white ${selectedTab === 'videoChat' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('videoChat')}
                >
                    <FontAwesomeIcon icon={faVideo} size='md' className='mr-4' />
                    View via video chat
                </button>
                <button
                    className={`px-8 py-3 border-2 text-lg md:text-xl font-FuturaDemi  rounded border-white  ${selectedTab === 'inPersonViewing' ? 'bg-white text-primarycolor' : 'bg-tranparent text-white'}`}
                    onClick={() => setSelectedTab('inPersonViewing')}
                >
                    <FontAwesomeIcon icon={faUser} size='md' className='mr-4' />
                    Book in person viewing
                </button>
            </div>
            <h2 className="text-center text-2xl font-FuturaDemi italic mb-6 text-white">Start your exciting journey of buying a new development</h2>
            {selectedTab === 'contact' && (
                <div className="flex flex-col flex-wrap gap-6 md:flex-row w-full">
                    <div className="bg-white text-black p-6 rounded-lg flex items-center w-full xl:w-[32%]">
                        <ContactForm />
                    </div>

                    <div className=' mt-10 xl:mt-0 w-full xl:w-[65%]'>
                        <AgentsList />
                        <button type="submit" className="bg-green-500 text-white px-10 py-2 rounded-lg mt-4">
                            Contact agent
                        </button>
                    </div>
                </div>
            )}
            {selectedTab === 'videoChat' && (
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
            )}
            {selectedTab === 'inPersonViewing' && (
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
            )}


        </section >
    )
}

export default ContactTabsSection