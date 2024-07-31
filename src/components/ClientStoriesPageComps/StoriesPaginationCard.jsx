import React, { useEffect, useState } from 'react';
import VideoPopup from '../SingleDevlopmentPageComps/VideoPopup';
import { useNavigate } from 'react-router-dom';

const StoriesPaginationCard = ({ title, imgSrc, showPlayButton }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handlePlayButtonClick = (e) => {
        e.stopPropagation(); // Prevents the click event from bubbling up
        setShowPopup(true);
    };

    const handleClickCard = () => {
        if (!showPopup) { // Only navigate if the popup is not open
            navigate(`/singlestoriespage/${encodeURIComponent(title)}`);
        }
    };

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup]);

    return (
        <div
            className="card rounded-[18px] cursor-pointer"
            onClick={handleClickCard}
        >
            <div className='relative overflow-hidden bg-container rounded-[18px] '>
                <img src={imgSrc} alt={title} className="w-full card-image bg-zoom" />
                {showPlayButton && (
                    <div className='absolute bottom-4 left-4'>
                        <button
                            className='flex items-center gap-1 text-white bg-primarycolor hover:bg-primarycolorhover font-semibold text-[14px] px-3 py-3 rounded cursor-pointer transition-colors duration-300 ease-in-out'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={handlePlayButtonClick} // Handle click to show popup
                        >
                            <span>Play</span>
                            <img
                                src={isHovered ? "/images/icons/playicon.svg" : "/images/icons/playicon.svg"}
                                alt="Play Icon"
                                className='h-4'
                            />
                        </button>
                    </div>
                )}
            </div>
            <p className="card-title pt-5 font-semibold text-2xl">{title}</p>

            {showPopup && <VideoPopup id="popup-container" videoUrl='https://www.youtube.com/embed/dQw4w9WgXcQ' onClose={handleClosePopup} />}
        </div>
    );
};

export default StoriesPaginationCard;
