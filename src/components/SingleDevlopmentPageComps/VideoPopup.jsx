import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VideoPopup = ({ videoUrl, onClose }) => {
    return (
        
        <div className='fixed inset-0 z-[1000] bg-gray-800 p-4 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300'>
            <button className='absolute z-40 top-4 right-4 cursor-pointer text-white' onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} size='2x' />
            </button>
            <div className='relative w-full'>
                <iframe
                    className='w-full aspect-video '
                    src={videoUrl}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='Video'
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;
