import React from 'react'

const CardCarousel = () => {
    return (
        <div className='relative slider-card'>
            <img
                src="./src/assets/images/homepage/cardimage.png"
                alt="image 3"
                className="h-full w-full rounded-none"
            />
            <div className='absolute inset-0 bg-black opacity-65'></div>

            <div className="absolute top-0 w-full flex justify-between items-center">
                <p className="text-black bg-bggray font-semibold text-xs  py-2 px-4 w-fit rounded-br-[15px]">Luxury Development</p>
            </div>
            <div className='absolute px-2 bottom-2 text-white'>
                <p className="text-black bg-bggray font-semibold text-[0.6rem] py-1 px-2 w-fit rounded-lg">Estrella, Libon</p>
                <p className="font-semibold text-xs mt-2">$500,000 to $800,000</p>
                <p className="font-bold text-base mt-1.5">MONTISNAVIA</p>
                <p className="text-xs text-bggray mt-1.5">Bed: 3 to 5 <span className='ml-3'>Area: 5m to 200m</span> <span className='ml-3'>Type: Apartment</span> </p>
            </div>
        </div>
    )
}

export default CardCarousel