import React from 'react'
import Footer from '../../components/Global/Footer'
import Navbar from '../../components/Global/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faSquareFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact'
import TableRecidenciesAgent from '../../components/SingleAgentsPageComp/TableRecidenciesAgent'
import Testimonials from '../../components/SingleAgentsPageComp/Testimonials'

const SingleAgentPage = () => {
    const imagessingelagentpage = [
        '/images/pages/homepage/bgiamge.webp',
        '/images/pages/homepage/herosection.svg',
        '/images/pages/homepage/architecture.jpg',
        '/images/pages/homepage/kuala-lumpur.jpg',
    ];

    return (
        <>
            <Navbar themewhite={true} />

            <section className='section bg-white mt-10'>
                <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-3'>

                    <div className='w-full lg:w-1/2 px-20' style={{ position: 'relative' }}>
                        <div className='block relative bg-container overflow-hidden w-full rounded-[18px] aspect-square' style={{ position: 'sticky', top: '10px' }}>
                            <img src="/images/pages/agentpage/agentimg2.jpeg" alt={`Image`} className="w-full h-full object-cover bg-zoom rounded-[18px]" />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                        <div className='text-primarycolor font-extrabold text-4xl lg:text-5xl'>
                            <h1>Russell</h1>
                            <h1>Henderson</h1>
                        </div>
                        <div className='space-y-2 '>
                            <span className='flex items-center gap-2  font-semibold'>
                                <img src="/images/icons/circle-user.svg" alt="" className='h-5' />
                                <span>CEO / Real Estate Broker</span>
                            </span>
                            <span className='flex items-center gap-2 font-semibold'>
                                <img src="/images/icons/locationmarkerblack.svg" alt="" className='h-5' />
                                <span>Lisbon | Algarve | Porto</span>
                            </span>
                        </div>

                        <div className="flex items-center">
                            <div className="flex text-[#B69474] text-xl">
                                <span className='text-2xl'>★</span>
                                <span className='text-2xl'>★</span>
                                <span className='text-2xl'>★</span>
                                <span className='text-2xl'>★</span>
                                <span className='text-2xl'>★</span>
                            </div>
                            <span className="ml-2 text-[#B69474] text-xl">5.0</span>
                        </div>
                        <div className='flex gap-2 -mt-2'>
                            <img src="/images/global/flag1.png" alt="" className='h-6' />
                            <img src="/images/global/flag2.png" alt="" className='h-6' />
                        </div>
                        <div className='space-y-2 mt-2'>
                            <span className='flex items-center gap-2 font-semibold'>
                                <img src="/images/icons/phone-call.svg" alt="" className='h-5' />
                                <a href="tel:+351919931440" title='Call' className='flex items-center gap-2'>
                                    <span className='hover-underline-animationbm'>+351 919 931 440</span>
                                </a>
                            </span>
                            <span className='flex items-center gap-2 font-semibold'>
                                <img src="/images/icons/envelope.svg" alt="" className='h-5' />
                                <a href="mailto:russell@buy.re" title='Email'  className='flex items-center gap-2'>
                                    <span className='hover-underline-animationbm'>russell@buy.re</span>
                                </a>
                            </span>
                        </div>

                        <div className='mt-2'>
                            <button className='bg-secondrycolor hover:bg-secondrycolorhover text-white rounded-lg py-2 px-12 cursor-pointer transition-colors duration-300 ease-in-out'>Contact</button>
                        </div>

                        <div className="flex space-x-2 mt-2">
                            <a href="#" className="border border-fontdark h-[42px] w-[45px] flex items-center justify-center rounded-lg">
                                <FontAwesomeIcon icon={faInstagram} size='lg' />
                            </a>
                            <a href="#" className="border border-fontdark h-[42px] w-[45px] flex items-center justify-center rounded-lg">
                                <FontAwesomeIcon icon={faSquareFacebook} size='lg' />
                            </a>
                            <a href="#" className="border border-fontdark h-[42px] w-[45px] flex items-center justify-center rounded-lg">
                                <FontAwesomeIcon icon={faYoutube} size='lg' />
                            </a>
                            <a href="#" className="border border-fontdark h-[42px] w-[45px] flex items-center justify-center rounded-lg">
                                <FontAwesomeIcon icon={faLinkedin} size='lg' />
                            </a>
                            <a href="#" className="border border-fontdark h-[42px] w-[45px] flex items-center justify-center rounded-lg">
                                <FontAwesomeIcon icon={faXTwitter} size='lg' />
                            </a>
                        </div>

                        <div className='mt-6'>

                            <p>
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>

                            <br />

                            <p>
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                            <br />

                            <p>
                                Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area. Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.Join the best team and brokerage in Europe. We make sure you get a minimum amount of leads so you can crush your goals and become the best in your area.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-bggray">
                <div className="">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Past Sales</h2>
                    <div className='relative'>
                        <div className="overflow-x-auto mt-14 md:scrollbar-hide">
                            <TableRecidenciesAgent booking={false} images={imagessingelagentpage} />
                        </div>
                        <div className='hidden custommaxforSDPTable:block fade-right'></div>
                    </div>
                </div>
            </section >

            <section className='section bg-white border border-black'>
                <Testimonials />
            </section>

            <section>
                <DreamHomeContact />
            </section>


            <Footer />
        </>
    )
}

export default SingleAgentPage