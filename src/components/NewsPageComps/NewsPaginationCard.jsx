import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewsPaginationCard = ({ carddata }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/singlenewspage/${encodeURIComponent(carddata.title)}`);
    }
    return (
        <>
            <div
                className="overflow-hidden w-full xl:min-w-[350px] xl:max-w-[350px] cursor-pointer bg-container" onClick={handleClick}>
                <div className='relative rounded-2xl overflow-hidden'>
                    <div className='rounded-3xl'>
                        <img
                            src="/images/pages/homepage/herosection.svg"
                            alt="Property Image"
                            className="w-full  object-cover bg-zoom rounded-2xl "
                        />
                    </div>

                    <div className='absolute inset-0 rounded-3xl bg-black opacity-30 '></div>
                </div>

                <div className="py-3">
                    <div className="flex items-center mb-3">
                        <span className="bg-primarycolor hover:bg-primarycolorhover text-white text-xs mr-2 px-2 py-1 rounded cursor-pointer transition-colors duration-300 ease-in-out">
                            {carddata.category}
                        </span>
                        <span className="text-black font-semibold text-sm">{carddata.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-3">
                        {carddata.title}
                    </h3>
                    <p className="text-black font-medium text-sm overflow-hidden line-clamp-3">
                        {carddata.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default NewsPaginationCard