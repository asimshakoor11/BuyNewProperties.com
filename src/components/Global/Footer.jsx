import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <section className="px-[7%] py-[40px]  bg-bggray rounded-lg relative z-20">
                <div className='w-full flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0'>
                    <div className="text-2xl lg:text-3xl font-semibold text-primarycolor w-full xl:w-1/2">
                        Get The Latest Updates though Our Newsletter.
                    </div>
                    <div className="flex flex-col space-y-2 w-full xl:w-1/2">
                        <input
                            type="text"
                            placeholder="Contact Preference"
                            className="border-2 border-black rounded-lg py-3 px-3 w-full"
                        />
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="agreef" className="mr-2" />
                            <label htmlFor="agreef" className="text-sm text-fontdark">I agree to receive info by email and I agree to the <a href="#" className="text-primarycolor font-bold">privacy policy</a>.</label>
                        </div>
                    </div>
                </div>

            </section>

            <section className="relative z-20 w-full flex flex-col 2xl:flex-row 2xl:justify-between gap-6 px-[7%] py-[40px] bg-white">
                <div className="flex flex-col space-y-4">
                    <button className="w-fit  rounded-md bg-primarycolor border border-primarycolor text-white py-2 px-8 lg:py-3 lg:space-x-2 ">
                        <FontAwesomeIcon icon={faUser} size='md' /> <span className=''> My Profile</span>
                    </button>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                        </div>
                        <div className='' >
                            <p className='text-sm font-semibold'>Call us Free from the UK:</p>
                            <p className='text-md font-semibold'>+44 0765 987654</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                        </div>
                        <div >
                            <p className='text-sm font-semibold'>Portugal Offices:</p>
                            <p className='text-md font-semibold'>+351 919 931 440</p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div>
                            <img src="/images/icons/telephone.png" alt="" className='h-6' />
                        </div>
                        <div >
                            <p className='text-sm font-semibold '>Call us Free from the USA:</p>
                            <p className='text-md font-semibold'>+1 (484) 521 9665</p>
                        </div>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <div>
                            <img src="/images/icons/mail.png" alt="" className='h-6' />

                        </div>
                        <div >
                            <p className='text-sm font-semibold'>Email us at:</p>
                            <p className='text-md font-semibold'>info@buy.re</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap gap-10 xl:gap-20 mt-5 lg:mt-0">
                    <div className="flex flex-col space-y-4 text-primarycolor text-xl lg:text-2xl">
                        <Link to={"/"} className='font-bold' >
                            <span className='hover-underline-animationbm'>Home</span>
                        </Link>
                        <Link to={"/developmentssearch"} className='font-bold' >
                            <span className='hover-underline-animationbm '>New Developments</span>
                        </Link>
                        <Link to={"/ouragents"} className='font-bold' >
                            <span className='hover-underline-animationbm '>Agents</span>
                        </Link>
                        <Link to={"/"} className='font-bold' >
                            <span className='hover-underline-animationbm '>Services</span>
                        </Link>
                        <Link to={"/"} className='font-bold' >
                            <span className='hover-underline-animationbm '>Guides</span>
                        </Link>
                        <Link to={"/"} className='font-bold' >
                            <span className='hover-underline-animationbm '>Contact</span>
                        </Link>

                        <a href="#" className="font-bold flex items-center ">
                            <span className='hover-underline-animationbm '>
                                Henderson Realty
                            </span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ml-2' size='sm' />
                        </a>
                    </div>
                    <div className="flex flex-col space-y-2  text-primarycolor text-xs">
                        <span className="text-fontdark text-sm font-bold mb-2">Company</span>

                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>About</span>

                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Referrals</span>

                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Partnerships</span>

                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Blog</span>

                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Become an agent</span>
                        </a>
                    </div>

                    <div className="flex flex-col space-y-2  text-primarycolor text-xs">
                        <span className="text-fontdark text-sm font-semibold mb-2">Services</span>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Aftercare</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Mortgage</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Legal</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Rental</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Currency Exchange</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Investment</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Golden Visa</span>


                        </a>
                    </div>

                    <div className="flex flex-col space-y-2  text-primarycolor text-xs">
                        <span className="text-fontdark text-sm font-bold mb-2">Guides</span>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Buyers Guide</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Investment Guide</span>


                        </a>
                        <a href="#" className="font-bold">
                            <span className='hover-underline-animationbm '>Relocation Guide</span>


                        </a>
                    </div>
                </div>

            </section>

            <section className="relative z-20 border-b border-zinc-300 px-[7%] py-[40px] flex flex-col md:flex-row md:justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Link to={"/"}>
                        <img src="/images/global/logodark.png" style={{ width: "250px" }} alt="" />
                    </Link>

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