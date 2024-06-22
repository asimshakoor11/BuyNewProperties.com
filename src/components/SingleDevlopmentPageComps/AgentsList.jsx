import React from 'react';
import { Radio } from "@material-tailwind/react";

const agents = [
  { id: 1, name: 'Natalia Loginova', rating: 5.0, reviews: 11, flags: ['flag.png', 'flag1.png', 'flag2.png', 'flag3.png',  'flag4.png', , 'flag5.png' ] },
  { id: 2, name: 'Russell Henderson', rating: 5.0, reviews: 11, flags: ['flag.png', 'flag1.png', 'flag2.png', 'flag3.png',  'flag4.png', , 'flag5.png' ] },
  { id: 3, name: 'Russell Henderson', rating: 5.0, reviews: 11, flags: ['flag.png', 'flag1.png', 'flag2.png',  'flag4.png', , 'flag5.png' ] },
  { id: 4, name: 'Russell Henderson', rating: 5.0, reviews: 11, flags: ['flag.png', 'flag1.png', 'flag2.png', 'flag3.png',  'flag5.png' ] },
  { id: 5, name: 'Russell Henderson', rating: 5.0, reviews: 11, flags: ['flag.png', 'flag1.png', 'flag4.png', , 'flag5.png' ] },
];

const AgentsList = () => {
  return (
    <>
      <div className="w-full flex flex-col flex-wrap gap-3 h-full custommdSPDCT:max-h-[800px] custommdSPDCT:min-h-[800px] ">

        <div className="rounded-3xl overflow-hidden w-full custommdSPDCT:w-[49%]">
          <img className="w-full " src="/images/global/LisbonOffice.png" alt="Office Building" />
          <div className="px-3 py-3 flex bg-white ">
            <div className='w-[92%]'>
              <div className="font-semibold text-xl mb-2 text-black dark:text-white">Lisbon Office</div>
              <p className="text-sm flex items-center font-medium">
                <img src="/images/icons/markerblack.png" alt="" className='h-4 mr-3' />
                Edifício Heron Castilho, R. Braamcamp 40, 1250-050 Lisboa
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag.png" alt="UK Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag1.png" alt="Portugal Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag2.png" alt="Germany Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag3.png" alt="Denmark Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag4.png" alt="France Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag5.png" alt="Italy Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag1.png" alt="Spain Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag2.png" alt="Netherlands Flag" />
                <img className="h-[22px] w-[38px] rounded-md" src="/images/global/flag3.png" alt="Denmark Flag" />

              </div>
            </div>

            <div className="flex justify-end items-end w-[8%] pl-2">
              <input type="radio" name="agent" checked className="h-5 w-5 border-2 border-black" />
              {/* <Radio name="color" defaultChecked  /> */}
            </div>
          </div>

        </div>




        {agents.map((agent) => (
          <div key={agent.id} className="text-black flex rounded-lg min-h-[165px] w-full custommdSPDCT:w-[49%]">
            <img src="/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-3xl rounded-bl-3xl object-cover w-[40%]" />
            <div className='bg-white flex p-3 rounded-tr-3xl rounded-br-3xl w-[60%]'>
              <div className='w-[92%] flex flex-col gap-1'>
                <h3 className="font-semibold text-lg">{agent.name}</h3>
                <p className=' text-[#B69474] text-base'> <span className='text-lg'>★★★★★ </span>  5.0</p>
                <p className='text-sm'>(11 Reviews)</p>
                <div className="flex flex-wrap justify-start gap-2 mt-2">
                  {agent.flags.map((flag, index) => (
                    <img key={index} src={`/images/global/${flag}`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  ))}
                </div>
              </div>

              <div className="flex justify-start items-end w-[8%]">
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
