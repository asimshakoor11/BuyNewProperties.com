import React from 'react'

const DreamHomeContact = () => {
    return (
        <section className="section flex flex-col lg:flex-row bg-cover bg-center relative" style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }}>
            <div className='absolute  inset-0 bg-primarycolor opacity-65'></div>

            <div className="flex-1 z-10 flex items-center justify-center">
                <div className="text-white max-w-lg">
                    <h1 className="text-4xl lg:text-6xl font-FuturaBold  mb-4">Find Your Dream Home In Europe The Right Way.</h1>
                    <p className="text-lg text-[#D9D9D9]">Our clients are our top priority, and we go the extra mile to ensure your experience is seamless and enjoyable. Whether you're planning to relocate or seeking a fantastic investment opportunity, we've got you covered every step of the way.</p>
                </div>
            </div>
            <div className="flex-1 z-10 flex items-center justify-center mt-10 lg:mt-0">
                <form className="bg-bggray p-6 rounded-lg shadow-lg w-full max-w-md">
                    <div className="mb-4 ">
                        <input type="text" className="w-full p-3  border-black border-2 placeholder:text-fontdark  rounded-lg " placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="w-full p-3  border-black border-2 placeholder:text-fontdark rounded-lg" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <input type="tel" className="w-full p-3  border-black border-2 placeholder:text-fontdark rounded-lg" placeholder="Phone" />
                    </div>
                    <div className="mb-4">
                        <select className="w-full p-3 text-fontdark  border-black border-2 placeholder:text-fontdark rounded-lg">
                            <option>Select a topic</option>
                            <option>Buying</option>
                            <option>Selling</option>
                            <option>Renting</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <textarea className="w-full p-3  border-black border-2 placeholder:text-fontdark rounded-lg" rows="4" placeholder="Message"></textarea>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="agree" className="mr-2" />
                        <label htmlFor="agree" className="text-sm text-fontdark">I agree to receive info by email and I agree to the <a href="#" className="text-primarycolor font-bold">privacy policy</a>.</label>
                    </div>
                    <button type="#" className="w-full bg-primarycolor text-white p-3 rounded-lg">Contact Us</button>
                </form>
            </div>

        </section>
    )
}

export default DreamHomeContact