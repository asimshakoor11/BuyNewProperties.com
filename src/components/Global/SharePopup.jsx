
import React, { useState, useRef, useEffect } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SharePopup = ({ onCloseShare, handleOutsideClick }) => {

    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    const copyToClipboard = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        }
    };
    return (
        <>
            <div id="popup-container" class="fixed inset-0 z-[1000] bg-gray-800 p-4 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
                onClick={handleOutsideClick}
            >
                <div id="popup-content" class="bg-white rounded-lg w-[300px] md:w-[500px] mx-auto relative"
                >
                    <div className="flex justify-between items-center md:p-3 p-6 mb-8 w-full border-b-2 border-gray-300">
                        <h2 className="text-xl font-semibold">Share Development</h2>
                        <button className="text-2xl font-bold text-black" onClick={onCloseShare}>
                            <FontAwesomeIcon icon={faXmark} size='md' />
                        </button>
                    </div>
                    <div className='px-6 pb-6 md:px-3 md:pb-3 '>
                        <div className="mb-8">
                            <input
                                type="text"
                                readOnly
                                className="w-full p-2 border rounded-md bg-gray-100"
                                value="https://newbuilds.com/listings/confidence?property=()"
                                ref={inputRef}
                            />
                        </div>
                        <div className="mb-8">
                            <button
                                className="w-full py-3 md:py-4 bg-primarycolor font-medium rounded-md text-white flex items-center gap-3 justify-center"
                                onClick={copyToClipboard}
                            >
                                <img src="/images/icons/copywhite.svg" alt="" className="h-5" />
                                Copy link
                            </button>
                            {copied && <p className="text-green-500 mt-2">Copied!</p>}
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button className="flex-1 py-3 md:py-4  border border-primarycolor rounded-md flex items-center justify-center ">
                                <img src="/images/icons/envelope.svg" alt="" className='h-5 mr-3 ' />

                                Email
                            </button>
                            <button className="flex-1 py-3 md:py-4 border border-primarycolor rounded-md flex items-center justify-center ">

                                <img src="/images/icons/comment-alt-dots.svg" alt="" className='h-5 mr-3' />
                                Sms
                            </button>
                            <button className="flex-1 py-3 md:py-4 border border-primarycolor rounded-md flex items-center justify-center ">
                                <FontAwesomeIcon icon={faWhatsapp} size='lg' className='mr-3' />
                                WhatsApp
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SharePopup