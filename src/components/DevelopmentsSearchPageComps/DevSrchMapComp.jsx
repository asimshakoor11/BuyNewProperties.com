import React from 'react'
import LatestDevelopmentCard from '../LatestDevlopmentsCard';


const DevSrchMapComp = () => {

  const data = [
    { title: 'MONTISNAVIA 1', description: 'Description 1' },
    { title: 'MONTISNAVIA 2', description: 'Description 2' },
    { title: 'MONTISNAVIA 3', description: 'Description 3' },
    { title: 'MONTISNAVIA 4', description: 'Description 4' },
    { title: 'MONTISNAVIA 5', description: 'Description 5' },
    { title: 'MONTISNAVIA 6', description: 'Description 6' },
  ];
  return (
    <div className='flex w-full flex-col md:flex-row gap-4'>
      <div className='w-full md:w-1/2'>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10 mb-10">
          {data.map((item, index) => (
            <LatestDevelopmentCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className='w-full md:w-1/2 md:mt-10'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627269.5069357555!2d-8.328275471989427!3d39.47798258087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2s!4v1716924307054!5m2!1sen!2s"
          width="100%"
          className='h-[400px] md:h-full'
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  )
}

export default DevSrchMapComp