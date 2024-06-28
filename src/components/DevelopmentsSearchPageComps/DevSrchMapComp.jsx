import React, { useState } from 'react'
import LatestDevelopmentCard from '../../components/Global/LatestDevlopmentsCard';
import CustomMap from './CustomMap';
import { Link } from 'react-router-dom'



const DevSrchMapComp = () => {

  const data = [
    { title: 'MONTISNAVIA 1', description: 'Description 1' },
    { title: 'MONTISNAVIA 2', description: 'Description 2' },
  ];
  return (
    
    <div className='flex flex-row gap-4 px-[1%]'>
      <div className='w-[40%] hidden xl:block'>
        <div className={`flex flex-col gap-4 mt-10`}>
          <div className={``}>
            <h2 className="text-3xl md:text-4xl font-BebasNeueSemiExpBold text-primarycolor text-left">New Developments In Lisbon Area</h2>
            <p className="text-fontdark text-base mt-2">160 available units found in 15 new developments.</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-medium gap-4">
            <div className="flex border border-black rounded-lg overflow-hidden">
              <Link to={'/developmentssearch'}>
                <button
                  className={`custommax540:w-1/2 px-7 py-2 md:py-3 bg-white text-black`}
                >
                  List
                </button>
              </Link>
              <button
                className={`custommax540:w-1/2 px-6 py-2 md:py-3 bg-primarycolor text-white`}
              >
                Map
              </button>
            </div>

            <div className="relative">
              <button
                className={`w-full sm:w-32 bg-transparent text-black border border-black px-4 py-2 md:py-3 rounded-lg  flex flex-row justify-between items-center `}
              >
                <span>Filter</span>
                <img src="/images/icons/settings-sliders.png" alt="" className='h-6' />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 mb-10">
          {data.map((item, index) => (
            <LatestDevelopmentCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className='w-full xl:w-[60%] md:mt-10 '>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627269.5069357555!2d-8.328275471989427!3d39.47798258087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2s!4v1716924307054!5m2!1sen!2s"
          width="100%"
          className='h-[78vh] sticky top-5 '
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <CustomMap />
      </div>

    </div>
  )
}

export default DevSrchMapComp