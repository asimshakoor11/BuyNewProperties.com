import React, { useState } from 'react'
import GlobalForm from '../Global/GlobalForm';


const DreamHomeContact = () => {
    const [isSubmit, setIsSubmit] = useState(false)

    const handleStateChange = (value) => {
        setIsSubmit(value);
      };

    return (
        <section className="section flex flex-col xl:flex-row bg-cover bg-center relative" style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
            <div className='absolute inset-0 bg-primarycolor opacity-65'></div>

            <div className="flex-1 z-10 flex items-center justify-left xl:justify-end">
                <div className="text-white w-full lg:max-w-xl">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl  font-BebasNeueSemiExpBold">Find Your Dream Home In Europe The Right Way.</h1>
                </div>
            </div>
            <div className={`flex-1 z-10 flex items-center ${isSubmit ? 'justify-center xl:justify-start': 'xl:justify-left'}  mt-10 xl:mt-0`}>     
                <GlobalForm onStateChange={handleStateChange} />
            </div>

        </section>
    )
}

export default DreamHomeContact