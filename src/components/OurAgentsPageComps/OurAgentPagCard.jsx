import React from 'react'

const OurAgentPagCard = ({ agentdata }) => {
    return (

        <>
            <div className="flex flex-col">
                <img src={agentdata.image} alt={`${agentdata.name} Image`} className="rounded-t-lg w-full" />
                <div className="py-4">
                    <h3 className="text-2xl text-black font-FuturaHeavy">{agentdata.name}</h3>
                    <div className="flex items-center my-2">
                        <div className="flex text-[#B69474]">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className='text-2xl'>★</span>
                                // <FontAwesomeIcon key={index} icon={faStar} size='lg' className='ml-1' />

                            ))}
                        </div>
                        <span className="ml-2 text-zinc-600 dark:text-zinc-300">{agentdata.rating}.0</span>
                    </div>
                    <div className="flex justify-center space-x-2 my-2">
                        {agentdata.colors.map((color, index) => (
                            <div key={index} className={`w-10 h-6 ${color} rounded-xs`}></div>
                        ))}
                    </div>
                    <button className={`${agentdata.openForagentdatas ? "bg-primarycolor" : "bg-dangercolor"} text-white text-lg w-full py-2 rounded-lg my-2 font-FuturaMedium`}>
                        {agentdata.openForagentdatas ? "Open For Clients" : "Closed For Clients"}
                    </button>
                    <div className="flex justify-between my-2">
                        <button className="bg-primarycolor text-white w-1/2 py-2 rounded-lg mr-1">Contact</button>
                        <button className="bg-secondrycolor text-white w-1/2 py-2 rounded-lg ml-1">WhatsApp</button>
                    </div>
                    <button className="border-2 font-FuturaHeavy text-black border-black text-zinc-700 w-full py-2 rounded-lg">
                        {agentdata.recentSales} Recent Sales
                    </button>
                </div>
            </div>
        </>

    )
}

export default OurAgentPagCard