


import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';



const DevlopmentLocations = () => {
    const [hoveredButton, setHoveredButton] = useState(null);    

    const getBackgroundImage = () => {
        // Define conditions to determine which background image to use
        if (hoveredButton === 'Algarve') {
            return 'url(/images/homepage/hoverimg1.jpg)';
        } else if (hoveredButton === 'Newyork') {
            return 'url(/images/homepage/hoverimg2.jpg)';

        } else if (hoveredButton === 'Lisbon') {
            return 'url(/images/homepage/hoverimage3.jpg)';

        } else if (hoveredButton === 'Porto') {
            return 'url(/images/homepage/hoverimg1.jpg)';


        } else if (hoveredButton === 'Florida') {
            return 'url(/images/homepage/hoverimg2.jpg)';


        } else if (hoveredButton === 'LongIsland') {
            return 'url(/images/homepage/hoverimage3.jpg)';


        } else if (hoveredButton === 'Georgia') {
            return 'url(/images/homepage/hoverimg1.jpg)';


        } else {
            return '';
        }
    };

    const handleMouseEnter = (buttonName) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
        const section = document.getElementById('sectionid');
        section.style.backgroundImage = 'none';
    };
    return (
        <section id='sectionid' className="section relative bg-bggray rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-20"
            style={{ backgroundImage: `linear-gradient(to left, transparent, #F7F7F7 60%), ${getBackgroundImage()}`, backgroundSize: "cover" }} >

            <h2 className="text-2xl md:text-4xl font-bold text-primarycolor dark:text-zinc-200 mb-4
                font-FuturaBold">
                Development Locations
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <button
                    className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Algarve')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Algarve</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />
                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 px-4 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Newyork')}
                    onMouseLeave={handleMouseLeave}>
                    <span>New York</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Lisbon')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Lisbon</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Porto')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Porto</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />
                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Florida')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Florida</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('LongIsland')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Long Island</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button className="flex justify-between items-center border-black border-2 font-bold p-2 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Georgia')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Georgia</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
            </div>
        </section>
    )
}

export default DevlopmentLocations