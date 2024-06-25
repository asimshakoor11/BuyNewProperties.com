import React from 'react'
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevelopmentsSearchSec from '../../components/DevelopmentsSearchPageComps/DevelopmentsSearchSec';
import DevelopmentLocations from '../../components/Global/DevlopmentLocations';
import LuxuryDevelopments from '../../components/HomePageComps/LuxuryDevelopments';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';


const DevelopmentsSearchpage = () => {
    return (
        <>
            <section className="section h-full bg-cover bg-center relative"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="text-4xl md:text-6xl  font-BebasNeueSemiExpBold">Find Your New <br /> Property</h1>

                    <button
                        className="flex items-center justify-between font-semibold mx-auto mt-8 bg-primarycolor text-white px-4 py-3 rounded-xl">

                        <span> Explore New Developemnts</span>
                        <FontAwesomeIcon icon={faChevronDown} size='sm' className='ml-6' />
                    </button>
                </div>
            </section>

            <section>
                <DevelopmentLocations />
            </section>

            <section>
                <DevelopmentsSearchSec />
            </section>

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Luxury Developments</h2>
                <LuxuryDevelopments />
            </section>



            <section className="section text-center bg-white">
                <p className="text-fontdark italic uppercase tracking-wide mb-4">
                    Our Success Stories
                </p>
                <h2 className=" text-3xl md:text-5xl font-FuturaHeavy text-primarycolor mb-6">
                    Sold Developments
                </h2>
                <p className="text-[#2A2A2A] mb-8 max-w-md mx-auto">
                    With our expert team and extensive network, you are in the best hands to achieve swift and
                    successful sales.
                </p>
                <button
                    className="flex items-center mx-auto bg-primarycolor text-white px-6 py-3 rounded-lg shadow">
                    <span> View our sales</span>
                    <FontAwesomeIcon icon={faChevronRight} size='sm' className='ml-6' />
                </button>
            </section>

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                    <WhyWorkWithUsCarousel />
                </section>


            <section>
                <DreamHomeContact />
            </section>
        </>
    )
}

export default DevelopmentsSearchpage