import React, { useState } from 'react';
import { Radio } from "@material-tailwind/react";

const AgentsList = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };


  return (
    <>
      <div className="w-full flex flex-col flex-wrap gap-4 h-full custommdSPDCT:max-h-[800px] custommdSPDCT:min-h-[800px] ">

        <div className='flex flex-col custommdSPDCT:flex-row gap-4 w-full'>
          <div className='flex w-full custommdSPDCT:w-1/2'>

            <div className="rounded-3xl overflow-hidden w-full bg-white " onClick={() => handleCardClick(1)}
            >
              <img className="w-full min-h-[180px] max-[180px]" src="/images/global/LisbonOffice.png" alt="Office Building" />
              <div className="p-4 flex bg-white  w-full">
                <div className=''>
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

                <div className="flex justify-end items-end  pl-2">
                  <input type="radio" name="agent" checked={selectedCard === 1}
                    className="min-h-5 min-w-5 border-2 border-black" />
                  {/* <Radio name="color" defaultChecked  /> */}
                </div>
              </div>

            </div>

          </div>

          <div className='flex flex-col justify-between gap-4 w-full custommdSPDCT:w-1/2'>

            <div className="text-black flex rounded-lg w-full h-1/2" onClick={() => handleCardClick(2)}>
              <img src="/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-3xl rounded-bl-3xl object-cover w-[40%]" />
              <div className='bg-white flex p-4 rounded-tr-3xl rounded-br-3xl w-[60%]'>
                <div className='flex flex-col gap-1 w-full'>
                  <h3 className="font-semibold text-lg">Natalia Loginova</h3>
                  <p className=' text-[#B69474] text-base'> <span className='text-lg'>★★★★★ </span>  5.0</p>
                  <p className='text-sm'>(11 Reviews)</p>
                  <div className="flex flex-wrap justify-start gap-2 mt-2">
                    <img src={`/images/global/flag.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                    <img src={`/images/global/flag1.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                    <img src={`/images/global/flag2.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  </div>
                </div>

                <div className="flex justify-start items-end">
                  <input type="radio" name="agent" checked={selectedCard === 2} 
 className="min-h-5 min-w-5 border-2 border-black" />
                </div>
              </div>
            </div>

            <div className="text-black flex rounded-lg w-full h-1/2" onClick={() => handleCardClick(3)}>
              <img src="/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-3xl rounded-bl-3xl object-cover w-[40%]" />
              <div className='bg-white flex p-4 rounded-tr-3xl rounded-br-3xl w-[60%]'>
                <div className=' flex flex-col gap-1 w-full'>
                  <h3 className="font-semibold text-lg">Natalia Loginova</h3>
                  <p className=' text-[#B69474] text-base'> <span className='text-lg'>★★★★★ </span>  5.0</p>
                  <p className='text-sm'>(11 Reviews)</p>
                  <div className="flex flex-wrap justify-start gap-2 mt-2">
                    <img src={`/images/global/flag.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                    <img src={`/images/global/flag5.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                    <img src={`/images/global/flag3.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                    <img src={`/images/global/flag4.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  </div>
                </div>

                <div className="flex justify-start items-end ">
                  <input type="radio" name="agent" checked={selectedCard === 3} className="min-h-5 min-w-5 border-2 border-black" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex flex-col custommdSPDCT:flex-row gap-4'>
          <div className="text-black flex rounded-lg w-full custommdSPDCT:w-1/2 min-h-[175px]" onClick={() => handleCardClick(4)}>
            <img src="/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-3xl rounded-bl-3xl object-cover w-[40%]" />
            <div className='bg-white flex p-4 rounded-tr-3xl rounded-br-3xl w-[60%]'>
              <div className=' flex flex-col gap-1 w-full'>
                <h3 className="font-semibold text-lg">Natalia Loginova</h3>
                <p className=' text-[#B69474] text-base'> <span className='text-lg'>★★★★★ </span>  5.0</p>
                <p className='text-sm'>(11 Reviews)</p>
                <div className="flex flex-wrap justify-start gap-2 mt-2">
                  <img src={`/images/global/flag.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag1.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag2.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag5.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag4.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                </div>
              </div>

              <div className="flex justify-start items-end ">
                <input type="radio" name="agent" checked={selectedCard === 4} className="min-h-5 min-w-5 border-2 border-black" />
              </div>
            </div>
          </div>

          <div className="text-black flex rounded-lg w-full custommdSPDCT:w-1/2 min-h-[175px]" onClick={() => handleCardClick(5)}>
            <img src="/images/homepage/cardimage.png" alt="Agent Image" className="rounded-tl-3xl rounded-bl-3xl object-cover w-[40%]" />
            <div className='bg-white flex p-4 rounded-tr-3xl rounded-br-3xl w-[60%]'>
              <div className=' flex flex-col gap-1 w-full'>
                <h3 className="font-semibold text-lg">Natalia Loginova</h3>
                <p className=' text-[#B69474] text-base'> <span className='text-lg'>★★★★★ </span>  5.0</p>
                <p className='text-sm'>(11 Reviews)</p>
                <div className="flex flex-wrap justify-start gap-2 mt-2">
                  <img src={`/images/global/flag.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag5.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag3.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                  <img src={`/images/global/flag4.png`} alt="Flag" className='h-[22px] w-[38px] rounded-md' />
                </div>
              </div>

              <div className="flex justify-start items-end ">
                <input type="radio" name="agent" checked={selectedCard === 5} className="min-h-5 min-w-5 border-2 border-black" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </>
  );
};

export default AgentsList;
