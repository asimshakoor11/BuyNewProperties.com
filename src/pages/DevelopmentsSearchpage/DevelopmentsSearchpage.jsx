import React, {useRef, useEffect} from 'react'
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevelopmentsSearchSec from '../../components/DevelopmentsSearchPageComps/DevelopmentsSearchSec';
import DevelopmentLocations from '../../components/Global/DevlopmentLocations';
import LuxuryDevelopments from '../../components/HomePageComps/LuxuryDevelopments';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';


const DevelopmentsSearchpage = () => {
    
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
            <section className="section customheight parallax-bg lg:bg-fixed bg-cover bg-center relative"
                style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="text-4xl md:text-[42px] font-BebasNeueSemiExpBold">Find Your New <br /> Property</h1>
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
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-center">
                Create An Account 
                </h2>
                <p className="text-[#2A2A2A] my-8 max-w-md mx-auto">
                Join Buy Developments and let us take care of you every step of the way. We’ll find your perfect property in Portugal, and the best part is, our services are completely free. Create an account today and start your journey with us!
                </p>
                <button
                    className="flex items-center mx-auto bg-primarycolor text-white px-6 py-3 rounded-lg shadow">
                    <span> Create An Account</span>
                </button>
            </section >

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