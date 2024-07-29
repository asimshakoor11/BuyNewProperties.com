import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';

const SingleStoriesPage = () => {

    const { title } = useParams();


    const heroContentRef = useRef(null);

    useEffect(() => {
        const parallaxEffect = () => {
            const scrolled = window.scrollY;
            const parallax = document.querySelector('.parallax-bg');
            const heroContent = heroContentRef.current;
            if (window.innerWidth > 1000) {

                if (parallax) {
                    parallax.style.backgroundPositionY = `-${scrolled * 0.3}px`; // Adjusts slower parallax scrolling
                }
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`; // Adjusts slower scrolling for hero content
                }
            }

        };

        window.addEventListener('scroll', parallaxEffect);

        return () => {
            window.removeEventListener('scroll', parallaxEffect);
        };
    }, []);

    return (
        <>

            <section className="section parallax-bg lg:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold ">{decodeURIComponent(title)}</h1>
                </div>
            </section>

            <section className='section bg-white relative z-30 -mt-10 rounded-tl-[40px] rounded-tr-[40px]'>
                <div className='relative mx-20'>
                    <div className='relative overflow-hidden max-h-[400px] flex items-center justify-center rounded-xl'>
                        <img src="/images/pages/homepage/herosection.svg" alt="" className='max-w-full max-h-full' />
                    </div>
                </div>

                <div className="relative flex flex-col lg:flex-row mt-20 w-full min-h-screen">
                    <div className="w-full lg:w-[500px] mr-20 rounded-xl">
                        <div className="sticky top-20 overflow-hidden h-[350px] rounded-xl">
                            <img
                                src="/images/pages/homepage/herosection.svg"
                                className="object-cover object-center rounded-xl h-[400px] w-full"
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-10 lg:mt-0">
                        <div className="flex flex-col">
                            <div style={{ marginBottom: '1rem' }} data-aos="fade-up" data-aos-delay="50">
                                <h2 className="font-bold text-xl md:text-2xl mb-2 text-primarycolor">Discovering Buy Developments</h2>
                                <p className="text-fontlight mb-6">
                                    Amy and Stuart initially hadn’t considered the southeast coast of Spain, but their interest was piqued after attending a Spanish homes exhibition. Buy Developments played a pivotal role in their exploration, showcasing the diversity of the region by touring them through at least six different towns and eight distinct properties. This comprehensive approach allowed Amy and Stuart to make an informed decision about the ideal location for their new home.
                                </p>
                            </div>
                            <div style={{ marginBottom: '1rem' }} data-aos="fade-up" data-aos-delay="50">
                                <h2 className="font-bold text-xl md:text-2xl mb-2 text-primarycolor">Support Throughout the Purchase Process</h2>
                                <p className="text-fontlight mb-6">
                                    From the initial contact, Nathan and Paul at Buy Developments provided unwavering support, answering questions, offering advice, and guiding Amy and Stuart through every step of the purchasing process. The team’s approach was characterized by accessibility, professionalism, and a distinct lack of pushiness—a refreshing and positive experience for the couple.
                                </p>
                            </div>
                            <div style={{ marginBottom: '1rem' }} data-aos="fade-up" data-aos-delay="50">
                                <h2 className="font-bold text-xl md:text-2xl mb-2 text-primarycolor">Support Throughout the Purchase Process</h2>
                                <p className="text-fontlight mb-6">
                                    From the initial contact, Nathan and Paul at Buy Developments provided unwavering support, answering questions, offering advice, and guiding Amy and Stuart through every step of the purchasing process. The team’s approach was characterized by accessibility, professionalism, and a distinct lack of pushiness—a refreshing and positive experience for the couple.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </section >

            <section className="section text-center bg-bggray">
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-center">
                    Would you like to become one <br /> of our success stories?
                </h2>
                <p className="text-[#2A2A2A] my-8 max-w-md mx-auto">
                    Contact us today to speak with one of our experienced experts. They will guide you seamlessly through the entire process, ensuring a stress-free move. Click the button below to get started!
                </p>
                <button
                    className="flex items-center mx-auto bg-primarycolor hover:bg-primarycolorhover font-medium  text-white px-6 py-3 rounded-lg shadow cursor-pointer transition-colors duration-300 ease-in-out">
                    <span> Contact Us Today</span>
                    <FontAwesomeIcon icon={'chevron-right'} size='lg' className='ml-5' />
                </button>
            </section >

            <section className=''>
                <DreamHomeContact />
            </section>

        </>
    )
}

export default SingleStoriesPage