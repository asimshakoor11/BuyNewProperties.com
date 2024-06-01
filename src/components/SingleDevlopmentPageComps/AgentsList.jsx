import React from 'react';

const agents = [
  { id: 1, name: 'Natalia Loginova', rating: 5.0, reviews: 11 },
  { id: 2, name: 'Russell Henderson', rating: 5.0, reviews: 11 },
  { id: 3, name: 'Russell Henderson', rating: 5.0, reviews: 11 },
  { id: 4, name: 'Russell Henderson', rating: 5.0, reviews: 11 },
  { id: 5, name: 'Russell Henderson', rating: 5.0, reviews: 11 },
  { id: 6, name: 'Russell Henderson', rating: 5.0, reviews: 11 },
];

const AgentsList = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {agents.map((agent) => (
          <div key={agent.id} className="text-black flex rounded-lg h-fit">
            <img src="./src/assets/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-lg rounded-bl-lg object-cover w-[40%]" />
            <div className='bg-white p-2 rounded-tr-lg rounded-br-lg w-[60%]'>
              <h3 className="font-FuturaBold text-lg">{agent.name}</h3>
              <p className=' text-[#B69474] text-lg'>★★★★★ 5.0</p>
              <p className='font-FuturaDemi'>(11 Reviews)</p>
              <div className="flex justify-start space-x-2 my-2">
                <div className={`w-8 h-5 bg-[#5298CA] rounded-xs`}></div>
                <div className={`w-8 h-5 bg-[#FFDEAB] rounded-xs`}></div>
              </div>
              <div className="flex justify-end">
                <input type="radio" name="agent" className="h-5 w-5 border-2 border-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default AgentsList;
