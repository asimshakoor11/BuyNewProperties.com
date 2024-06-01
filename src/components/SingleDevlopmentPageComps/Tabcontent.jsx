


import React from 'react'

const Tabcontent = ({ cards }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-center flex-wrap justify-center my-8">
        {cards.map((card, index) => (
            <div key={index} className="w-[250px] min-h-[220px] flex flex-col items-center justify-center border-2 rounded-lg">
                <img src={`/images/icons/${card.icon}.svg`} alt={`${card.title} Icon`} className="mx-auto mb-2" />
                <h3 className="text-3xl font-FuturaHeavy text-primarycolor text-center">{card.title}</h3>
                <div className="flex justify-center items-center mt-2">
                    <span className="text-primarycolor text-lg">★★★★★</span>
                    <img src="/images/icons/disclaimer.svg" alt="Disclaimer Icon" />
                </div>
            </div>
        ))}
    </div>
    )
}

export default Tabcontent