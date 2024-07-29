import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import VideoPopup from '../SingleDevlopmentPageComps/VideoPopup';
import { useNavigate } from 'react-router-dom';

const StoriesPaginationCard = ({ title, imgSrc, showPlayButton }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate()

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClickCard = () => {

        navigate(`/singlestoriespage/${encodeURIComponent(title)}`);
    }

    useEffect(() => {
        if (showPopup ) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup ]);


    return (
        <div className="card rounded-[18px]">
            <div className='relative overflow-hidden bg-container rounded-[18px]'>
                <img src={imgSrc} alt={title} className="w-full card-image bg-zoom" />
                <div className='absolute top-0 left-0 right-0 h-[80%]' onClick={handleClickCard}></div>
                {showPlayButton && (
                    <div className='absolute bottom-4 left-4'>
                        <button
                            className='flex items-center gap-1 text-black hover:text-white bg-white hover:bg-primarycolorhover opacity-80 font-semibold text-[13px] px-2 py-2 rounded cursor-pointer transition-colors duration-300 ease-in-out'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
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
            <p className="card-title mt-5 font-bold text-2xl">{title}</p>

            {showPopup && <VideoPopup id="popup-container" videoUrl='https://www.youtube.com/embed/dQw4w9WgXcQ' onClose={handleClosePopup} />}

        </div>
    )
}

export default StoriesPaginationCard