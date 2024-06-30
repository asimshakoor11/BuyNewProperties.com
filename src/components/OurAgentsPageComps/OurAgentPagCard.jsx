import React from 'react'

const OurAgentPagCard = ({ agentdata }) => {
    return (

        <>
            <div className="flex relative-container-agent flex-col bg-container rounded-[18px]">
                <div className='block relative overflow-hidden w-full h-[430px] md:h-[415px] rounded-[18px] border'>
                    <img src={agentdata.image} alt={`${agentdata.name} Image`} className=" w-full h-full object-cover bg-zoom rounded-[18px]" />
                </div>

                <div className="py-4">
                    <h3 className="font-semibold text-2xl">{agentdata.name}</h3>
                    <div className="flex items-center my-1">
                        <div className="flex text-[#B69474] text-xl">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className='text-2xl'>★</span>
                            ))}
                        </div>
                        <span className="ml-2 text-[#B69474] text-xl">{agentdata.rating}.0</span>
                    </div>
                    <div className="flex justify-center space-x-2 my-1">
                        {agentdata.colors.map((color, index) => (
                            <img key={index} src={color} className={`w-10 h-6 ${color} rounded-xs`}></img>
                        ))}
                    </div>
                    <button className={`${agentdata.openForagentdatas ? "bg-primarycolor" : "bg-dangercolor"} text-white font-medium text-lg w-full py-2 lg:py-3 rounded-lg my-1 font-FuturaMedium`}>
                        {agentdata.openForagentdatas ? "Open For Clients" : "Closed For Clients"}
                    </button>
                    <div className="flex justify-between gap-2 my-1">
                        <button className="bg-primarycolor text-white w-1/2 py-2 lg:py-3 font-medium rounded-lg ">Contact</button>
                        <button className="bg-secondrycolor text-white w-1/2 py-2 lg:py-3 font-medium rounded-lg">WhatsApp</button>
                    </div>
                    <button className="my-1 border-2 font-FuturaHeavy text-black border-black text-zinc-700 w-full font-medium py-2 lg:py-3 rounded-lg">
                        {agentdata.recentSales} Recent Sales
                    </button>
                </div>
            </div>
        </>

    )
}

export default OurAgentPagCard