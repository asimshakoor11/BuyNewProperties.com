import React from 'react'
import LatestDevelopmentCard from '../../components/Global/LatestDevlopmentsCard';



const DevSrchMapComp = () => {

  const data = [
    { title: 'MONTISNAVIA 1', description: 'Description 1' },
    { title: 'MONTISNAVIA 2', description: 'Description 2' },
    { title: 'MONTISNAVIA 3', description: 'Description 3' },
    { title: 'MONTISNAVIA 4', description: 'Description 4' },
  ];
  return ( 
    <div className='flex flex-row gap-4 px-[7%]'>
      <div className='w-[30%] hidden xl:block'>
        <div className="grid grid-cols-1 mt-10 mb-10">
          {data.map((item, index) => (
            <LatestDevelopmentCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className='w-full xl:w-[70%] md:mt-10 '>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627269.5069357555!2d-8.328275471989427!3d39.47798258087986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb32242dbf4226d5%3A0x2ab84b091c4ef041!2sPortugal!5e0!3m2!1sen!2s!4v1716924307054!5m2!1sen!2s"
          width="100%"
          className='h-[78vh] sticky top-[150px] '
          style={{ border: 0 }}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  )
}

export default DevSrchMapComp