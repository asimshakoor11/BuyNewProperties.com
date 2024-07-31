
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import CustomMapComp from '../../components/Global/CustomMapComp';
import LatestDevelopmentCard from '../../components/Global/LatestDevelopmentCard/LatestDevlopmentsCard';
import SingleAreaGuidesMapComp from '../../components/AreaGuidesComps/SingleAreaGuidesMapComp';


const SingleAreaGuidePage = () => {

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

    const locationareas = [
        {
            id: 1,
            position: { lat: 38.7223, lng: -9.1393 },
            info: {
                image: '/images/homepage/dreamhomecontact.png',
                title: 'New Development Lisbon',
                location: 'Estrela, Lisbon',
                price: '€650,000',
                beds: '2 to 3 Beds from'
            }
        }
    ];

    const data = [
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 1' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 2' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 3' },
    ];

    return (
        <>
            <section className="section parallax-bg lg:bg-fixed bg-cover relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold ">{decodeURIComponent(title)}</h1>
                </div>
            </section>

            <section className='px-[7%] pb-[80px] pt-[40px] bg-white relative z-30 -mt-10 rounded-tl-[40px] rounded-tr-[40px]'>

                <div className="relative flex flex-col lg:flex-row mt-20 w-full min-h-screen">

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

                    <div className="w-full lg:w-[800px] ml-0 lg:ml-20 rounded-xl">
                        <div className="sticky top-20 overflow-hidden rounded-xl ">
                            <div className='space-y-2'>
                                <h1 className='font-bold text-xl text-primarycolor'>Properties In Quinta do Lago</h1>
                                <p>Explore the full selection of <span className='underline'>properties for sale in Quinta do Lago. </span> </p>
                            </div>

                            <div className='mt-5'>
                                <h3 className='font-bold text-xl text-primarycolor'>Algarve Prime Areas</h3>
                                <div className="space-y-4 mt-5">
                                    <div className=" flex items-start rounded-lg cursor-pointer">
                                        <div className='relative overflow-hidden w-[150px] h-[100px] bg-container mr-4 flex items-center rounded-xl'>
                                            <img alt="Property image" src="/images/pages/homepage/devcardimage.svg" className="h-full object-cover bg-zoom rounded-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Vale do Lobo</h4>
                                            <p className="text-lg">Everything by your doorstep</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start rounded-lg  cursor-pointer">
                                        <div className='relative overflow-hidden w-[150px] h-[100px] bg-container mr-4 flex items-center rounded-xl'>
                                            <img alt="Property image" src="/images/pages/homepage/devcardimage.svg" className="h-full object-cover bg-zoom rounded-xl" />
                                        </div>
                                        <div >
                                            <h4 className="font-bold">Vale do Lobo</h4>
                                            <p className="text-lg">Everything by your doorstep</p>
                                        </div>
                                    </div>


                                    <div className="flex items-start rounded-lg cursor-pointer ">
                                        <div className='relative overflow-hidden w-[150px] h-[100px]  bg-container  mr-4 flex items-center rounded-xl'>
                                            <img alt="Property image" src="/images/pages/homepage/devcardimage.svg" className="h-full object-cover bg-zoom rounded-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Vale do Lobo</h4>
                                            <p className="text-lg">Everything by your doorstep</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >

            <section className=''>
                <div >
                    <SingleAreaGuidesMapComp />
                </div>
            </section>

            <section className='section bg-white'>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Similar Developments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                    {data.map((item, index) => (
                        <LatestDevelopmentCard key={index} index={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <button className="buttonLong bg-primarycolor hover:bg-primarycolorhover text-white text-center cursor-pointer transition-colors duration-300 ease-in-out">See More</button>
                </div>
            </section>
        </>
    )
}

export default SingleAreaGuidePage