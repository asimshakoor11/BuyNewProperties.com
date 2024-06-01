import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <section className="px-[7%] py-[40px] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="text-3xl md:text-4xl font-semibold text-primarycolor w-full xl:w-[44%]">
                    Get The Latest Updates though Our Newsletter.
                </div>
                <div className="flex flex-col space-y-2 w-full xl:w-[48%]">
                    <input
                        type="text"
                        placeholder="Contact Preference"
                        className="border-2 border-black rounded-lg py-4 px-2 w-full md:w-[54%]"
                    />
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="agreef" className="mr-2" />
                        <label htmlFor="agreef" className="text-sm text-fontdark">I agree to receive info by email and I agree to the <a href="#" className="text-primarycolor font-bold">privacy policy</a>.</label>
                    </div>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row gap-20 lg:gap-40 px-[7%] py-[40px] bg-white">
                <div className="flex flex-col space-y-2">
                    <button className="flex items-center bg-[#005334] text-white p-2 px-4 rounded-lg">
                        <FontAwesomeIcon icon={faUser} className='mr-2' size='sm' />
                        Login/Register
                    </button>
                    <button className="flex items-center bg-primarycolor text-white p-2  px-4 rounded-lg">
                        <FontAwesomeIcon icon={faPhone} className='mr-2' size='sm' />
                        +351 919 931 440
                    </button>
                    <button className="flex items-center bg-transparent border-2 border-primarycolor text-black p-2  px-2 rounded-lg">
                        <FontAwesomeIcon icon={faEnvelope} className='mr-2' size='sm' />
                        info@buy.re
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-20 mt-0 md:mt-0">
                    <div className="flex flex-col space-y-2 text-primarycolor font-FuturaHeavy text-2xl">
                        <a href="#" className="font-bold">
                            Home
                        </a>
                        <a href="#" className="font-bold">
                            New Developments
                        </a>
                        <a href="#" className="font-bold">
                            Agents
                        </a>
                        <a href="#" className="font-bold">
                            Services
                        </a>
                        <a href="#" className="font-bold">
                            Guides
                        </a>
                        <a href="#" className="font-bold">
                            Contact
                        </a>
                        <a href="#" className="font-bold flex items-center">
                            Henderson Realty
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' size='sm' />
                        </a>
                    </div>
                    <div className="flex flex-col space-y-1 mt-4 md:mt-0 text-primarycolor text-xs">
                        <span className="text-fontdark font-bold mb-2">Company</span>
                        <a href="#" className="font-bold">
                            About
                        </a>
                        <a href="#" className="font-bold">
                            Referrals
                        </a>
                        <a href="#" className="font-bold">
                            Partnerships
                        </a>
                        <a href="#" className="font-bold">
                            Blog
                        </a>
                        <a href="#" className="font-bold">
                            Become an agent
                        </a>
                    </div>

                    <div className="flex flex-col space-y-1 mt-4 md:mt-0 text-primarycolor text-xs">
                        <span className="text-fontdark font-semibold mb-2">Services</span>
                        <a href="#" className="font-bold">
                            Aftercare
                        </a>
                        <a href="#" className="font-bold">
                            Mortgage
                        </a>
                        <a href="#" className="font-bold">
                            Legal
                        </a>
                        <a href="#" className="font-bold">
                            Rental
                        </a>
                        <a href="#" className="font-bold">
                            Currency Exchange
                        </a>
                        <a href="#" className="font-bold">
                            Investment
                        </a>
                        <a href="#" className="font-bold">
                            Golden Visa
                        </a>
                    </div>

                    <div className="flex flex-col space-y-1 mt-4 md:mt-0 text-primarycolor text-xs">
                        <span className="text-fontdark font-bold mb-2">Guides</span>
                        <a href="#" className="font-bold">
                            Buyers Guide
                        </a>
                        <a href="#" className="font-bold">
                            Investment Guide
                        </a>
                        <a href="#" className="font-bold">
                            Relocation Guide
                        </a>
                    </div>
                </div>
            </section>

            <section className="border-b border-zinc-300 px-[7%] py-[40px] flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="/images/global/logodark.png" style={{ width: "250px" }} alt="" />
                </div>

                <div className="flex space-x-2 mt-6 md:mt-0">
                    <a href="#" className="border border-fontdark py-2 px-3 rounded-md">
                        <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </a>
                    <a href="#" className="border border-fontdark py-2 px-3 rounded-md">
                        <FontAwesomeIcon icon={faSquareFacebook} size='lg' />
                    </a>
                    <a href="#" className="border border-fontdark py-2 px-3 rounded-md">
                        <FontAwesomeIcon icon={faYoutube} size='lg' />
                    </a>
                    <a href="#" className="border border-fontdark py-2 px-3 rounded-md">
                        <FontAwesomeIcon icon={faLinkedin} size='lg' />
                    </a>
                    <a href="#" className="border border-fontdark py-2 px-3 rounded-md">
                        <FontAwesomeIcon icon={faXTwitter} size='lg' />
                    </a>

                </div>
            </section>

        </>
    )
}

export default Footer