import React, {  useEffect, useRef } from 'react'

import '/src/assets/Fontawesome';
import LatestDevelopmentCard from '../../components/Global/LatestDevlopmentsCard';
import LatestUpdatesCarousel from '../../components/HomePageComps/LatestUpdatesCarousel';
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';
import LuxuryDevelopments from '../../components/HomePageComps/LuxuryDevelopments';
import BecomeAnAgent from '../../components/HomePageComps/BecomeAnAgent';
import DevelopmentLocations from '../../components/Global/DevlopmentLocations';

const Homepage = () => {

    const data = [
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 1' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 2' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 3' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 4' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 5' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 6' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 7' },
    ];

    const overlayRef = useRef(null);
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
                    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`; // Adjusts slower scrolling for hero content
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
            <section className="customheight relative parallax-bg p-[7%] lg:bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)", backgroundRepeat: "no-repeat" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={overlayRef} className='absolute hidden inset-0 bg-black opacity-0 transition-opacity duration-300 z-20'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-start justify-center lg:justify-end lg:[pt-0] h-full text-white text-center  pb-[30px]">
                    <h1 className="custommax:text-[5vw] text-[29px] lg:text-[38px] font-bold font-BebasNeueSemiExpBold">THE #1 SOURCE FOR</h1>
                    <h1 className="custommax:text-[8vw] text-[50px] lg:text-[66px] font-bold font-Playfair -mt-1 md:-mt-2">NEW PROPERTIES</h1>
                    <h1 className=" custommax:text-[5vw] text-[29px] lg:text-[38px] font-bold font-BebasNeueSemiExpBold ">NEW DEVELOPMENTS FOR SALE IN <span className='bg-[#B69D74]'>Portugal.</span> </h1>
                    <h1 className="hidden custommd:block customlg:text-[12px] xl:text-[16px] font-medium mt-3">Voted the best way to buy new developments 2023-2024 according to Simple Expat  </h1>
                </div>
            </section>

            <div className='relative z-30'>
                <section>
                    <DevelopmentLocations />
                </section>

                <section className='section bg-white'>
                    <h2 className="text-4xl md:text-5xl font-BebasNeueSemiExpBold text-primarycolor text-left">Latest Developments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                        {data.map((item, index) => (
                            <LatestDevelopmentCard key={index} index={index} item={item} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-5">
                        <button className="buttonLong bg-primarycolor text-white text-center">See All Developments</button>
                    </div>
                </section>

                <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                    <WhyWorkWithUsCarousel />
                </section>

                <section  >
                    <BecomeAnAgent />
                </section >

                <section className=''>
                    <DreamHomeContact />
                </section>

                <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Luxury Developments</h2>

                    <LuxuryDevelopments />
                </section>


                <section className='section bg-white ' style={{ padding: "80px 0% 80px 0%" }}>
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl  text-primarycolor text-left pl-[7%]">Latest Updates in Real Estate</h2>
                    <LatestUpdatesCarousel />
                </section>
            </div>
        </>
    )
}

export default Homepage