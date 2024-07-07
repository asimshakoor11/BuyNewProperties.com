import React from 'react'
import { Link } from 'react-router-dom'

const OurAgentPagCard = ({ agentdata }) => {
    return (

        <>
            <Link to={'/singleagentpage'}>
                <div className="flex relative-container-agent flex-col bg-container rounded-[18px]">
                    <div className='block relative overflow-hidden w-full h-[430px] md:h-[415px] rounded-[18px] border'>
                        <img src={agentdata.image} alt={`${agentdata.name} Image`} className=" w-full h-full object-cover bg-zoom rounded-[18px]" />
                    </div>

                    <div className="py-4 font-medium">
                        <h3 className="font-medium text-2xl">{agentdata.name}</h3>
                        <div className="flex items-center my-1">
                            <div className="flex text-[#B69474] text-xl">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className='text-2xl'>★</span>
                                ))}
                            </div>
                            <span className="ml-2 text-[#B69474] text-xl">{agentdata.rating}.0</span>
                        </div>
                        <div className="flex justify-center space-x-2 my-2">
                            {agentdata.colors.map((color, index) => (
                                <img key={index} src={color} className={`w-10 h-6 ${color} rounded-xs`}></img>
                            ))}
                        </div>
                        <button className={`${agentdata.openForagentdatas ? "bg-primarycolor hover:bg-primarycolorhover" : "bg-dangercolor"} text-white font-medium text-base w-full py-2 lg:py-3 rounded-lg my-1 font-FuturaMedium cursor-pointer transition-colors duration-300 ease-in-out`}>
                            {agentdata.openForagentdatas ? "Open For Clients" : "Bussy With Clients"}
                        </button>
                        <div className="flex justify-between gap-2 my-1">
                            <button className="bg-primarycolor hover:bg-primarycolorhover text-base text-white w-1/2 py-2 lg:py-3 font-medium rounded-lg cursor-pointer transition-colors duration-300 ease-in-out ">Contact</button>
                            <button className="bg-secondrycolor hover:bg-secondrycolorhover text-base text-white w-1/2 py-2 lg:py-3 font-medium rounded-lg cursor-pointer transition-colors duration-300 ease-in-out">WhatsApp</button>
                        </div>
                        <button className="my-1 border-2  text-black border-black text-base w-full font-medium py-2 lg:py-3 rounded-lg">
                            {agentdata.recentSales} Recent Sales
                        </button>
                    </div>
                </div>
            </Link>
        </>

    )
}

export default OurAgentPagCard