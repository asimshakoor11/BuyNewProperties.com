import React, { useEffect, useRef } from 'react'
import StoriesPaginationCard from '../../components/ClientStoriesPageComps/StoriesPaginationCard';
import AreaGuidesCard from '../../components/AreaGuidesComps/AreaGuidesCard';
import DreamHomeContact from '../../components/HomePageComps/DreamHomeContact';
import AreaGuidesMapComp from '../../components/AreaGuidesComps/AreaGuidesMapComp';

const AreaGudiesPage = () => {

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

    const AlgarvesData = [
        { id: 1, title: "Quinta do Lago", text: "Luxury Living At Its Finest", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 2, title: "Vale do Lobo", text: "Everything By Your Doorstep", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 3, title: "Vilamoura", text: "The Best Golf In Portugal", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 4, title: "Loule", text: "Historic & Stunning", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 5, title: "Quinta do Lago", text: "Luxury Living At Its Finest", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 6, title: "Vale do Lobo", text: "Everything By Your Doorstep", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 7, title: "Vilamoura", text: "The Best Golf In Portugal", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 8, title: "Loule", text: "Historic & Stunning", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
    ];


    const LisbonsData = [
        { id: 1, title: "Quinta do Lago", text: "Luxury Living At Its Finest", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 2, title: "Vale do Lobo", text: "Everything By Your Doorstep", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 3, title: "Vilamoura", text: "The Best Golf In Portugal", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 4, title: "Loule", text: "Historic & Stunning", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 5, title: "Quinta do Lago", text: "Luxury Living At Its Finest", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 6, title: "Vale do Lobo", text: "Everything By Your Doorstep", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },

    ];

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
        },
        {
            id: 2,
            position: { lat: 41.1579, lng: -8.6291 },
            info: {
                image: '/images/homepage/dreamhomecontact.png',
                title: 'New Development Porto',
                location: 'Porto, Portugal',
                price: '€500,000',
                beds: '1 to 2 Beds from'
            }
        },
        {
            id: 3,
            position: { lat: 37.0179, lng: -7.9307 },
            info: {
                image: '/images/homepage/dreamhomecontact.png',
                title: 'New Development Faro',
                location: 'Faro, Portugal',
                price: '€450,000',
                beds: '2 to 4 Beds from'
            }
        }
    ];

    return (

        <>

            <section className="section parallax-bg lg:bg-fixed bg-cover  relative"
                style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div ref={heroContentRef} className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center py-40">
                    <h1 className="herofontsize font-BebasNeueSemiExpBold">Portugal Area Guides</h1>
                </div>
            </section>

            <section className='px-[7%] pb-[80px] pt-[40px] bg-bggray relative z-30 -mt-10 rounded-tl-[40px] rounded-tr-[40px]'>
                <div className='w-full flex flex-col lg:flex-col gap-10'>
                    <div className='w-full lg:w-[40%]'>
                        <h1 className='font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left '>A guide to Portugal’s <br /> prime locations</h1>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <p className='font-normal text-justify'>Thinking about moving to Portugal or investing in its real estate? Understanding the local lifestyle is key. Savor exquisite Mediterranean cuisine at top-notch restaurants, stay active with state-of-the-art gyms and wellness centers, and enjoy the latest events and attractions. Our expert team offers personalized recommendations and support to help you seamlessly integrate and make the most of your new home.</p>
                    </div>
                </div>
            </section>

            <section className='px-[7%] pt-[40px] bg-white '>
                <div className='relative mx-0 lg:mx-20'>
                    <div className='relative overflow-hidden max-h-[500px] flex items-center justify-center rounded-xl'>
                        <AreaGuidesMapComp locations={locationareas} />
                    </div>
                </div>
            </section>

            <section className='section bg-white '>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Algarve’s Key Areas</h2>
                <p className='font-normal text-justify'>We have tailored our bespoke guides on Marbella’s key areas, highlighting all there is to know about the most sought-after and desirable locations.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 mb-10">

                    {AlgarvesData.map(card => (
                        <AreaGuidesCard key={card.id} title={card.title} text={card.text} imgSrc={card.imgSrc}
                            showPlayButton={card.showPlayButton} />
                    ))}
                </div>
            </section>

            <section className='px-[7%] pb-[80px] bg-white '>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Lisbon’s Key Areas</h2>
                <p className='font-normal text-justify'>We have tailored our bespoke guides on Marbella’s key areas, highlighting all there is to know about the most sought-after and desirable locations.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 mb-10">

                    {LisbonsData.map(card => (
                        <AreaGuidesCard key={card.id} title={card.title} text={card.text} imgSrc={card.imgSrc}
                            showPlayButton={card.showPlayButton} />
                    ))}
                </div>
            </section>

            <section className=''>
                <DreamHomeContact />
            </section>

        </>

    )
}

export default AreaGudiesPage