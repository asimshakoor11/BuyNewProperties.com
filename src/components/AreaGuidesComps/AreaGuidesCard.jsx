import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import VideoPopup from '../SingleDevlopmentPageComps/VideoPopup';
import { useNavigate } from 'react-router-dom';

const AreaGuidesCard = ({ title, imgSrc, showPlayButton, text }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleClick = () => {
        setShowPopup(true);
      };

    const handleClickCard = () => {
        navigate(`/singleareaguidepage/${encodeURIComponent(title)}`);
    }
    
    return (
        <div className="card rounded-[18px]" onClick={handleClickCard}>
            <div className='relative overflow-hidden bg-container rounded-[18px] aspect-square'>
                <img src={imgSrc} alt={title} className="w-full h-full card-image bg-zoom object-cover" />
                {showPlayButton && (
                    <div className='absolute bottom-4 left-4'>
                        <button
                            className='flex items-center gap-1 text-black hover:text-white bg-white hover:bg-primarycolorhover opacity-80 font-semibold text-[13px] px-2 py-2 rounded cursor-pointer transition-colors duration-300 ease-in-out'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick();
                            }}
                        >
                            <span>Play</span>
                            <img
                                src={isHovered ? "/images/icons/playicon.svg" : "/images/icons/playblack.svg"}
                                alt="Play Icon"
                                className='h-4'
                            />
                        </button>
                    </div>
                )}
            </div>
            <p className="card-title mt-3 font-bold text-lg">{title}</p>
            <p className="card-title mt-3 font-medium text-xl">{text}</p>

            {showPopup && <VideoPopup id="popup-container" videoUrl='https://www.youtube.com/embed/dQw4w9WgXcQ' onClose={handleClosePopup} />}

        </div>
    )
}

export default AreaGuidesCard