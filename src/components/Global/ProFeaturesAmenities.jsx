import React from 'react'

const ProFeaturesAmenities = () => {
    return (
        <>
            <div className="w-full xl:w-[70%] bg-white dark:bg-zinc-800">
                <h2 class="text-4xl font-FuturaBold text-primarycolor mb-4">Property Features & Amenities</h2>
                <div class="mb-6">
                    <h3 class="text-2xl font-FuturaHeavy text-primarycolor dark:text-blue-400 mb-2">Interior</h3>
                    <ul class="space-y-2 w-full md:w-[40%]">
                        <li class="flex justify-between">
                            <span class="flex items-center ">
                                <span class="w-2.5 h-2.5 bg-primarycolor dark:bg-blue-400 rounded-full mr-2"></span>
                                Total Bedrooms
                            </span>
                            <span class="font-bold">3</span>
                        </li>
                        <li class="flex justify-between">
                            <span class="flex items-center">
                                <span class="w-2.5 h-2.5 bg-primarycolor dark:bg-blue-400 rounded-full mr-2"></span>
                                Full Bathrooms
                            </span>
                            <span class="font-bold">5</span>
                        </li>
                    </ul>
                </div>
                <hr class="border-t border-zinc-300 dark:border-zinc-700 mb-6" />
                <div>
                    <h3 class="text-2xl font-FuturaHeavy text-primarycolor dark:text-blue-400 mb-2">Exterior</h3>
                    <ul class="space-y-2  w-full md:w-[70%]">
                        <li class="flex justify-between">
                            <span class="flex items-center">
                                <span class="w-2.5 h-2.5 bg-primarycolor dark:bg-blue-400 rounded-full mr-2"></span>
                                Stories
                            </span>
                            <div className='w-[40%]'>
                                <span class="font-bold">52</span>
                            </div>
                        </li>
                        <li class="flex justify-between">
                            <span class="flex items-center">
                                <span class="w-2.5 h-2.5 bg-primarycolor dark:bg-blue-400 rounded-full mr-2"></span>
                                Air Conditioning
                            </span>
                            <div className='w-[40%]'>
                                <span class="font-bold">Central Air</span>

                            </div>
                        </li>
                        <li class="flex justify-between">
                            <span class="flex items-center">
                                <span class="w-2.5 h-2.5 bg-primarycolor dark:bg-blue-400 rounded-full mr-2"></span>
                                Other Exterior Features
                            </span>
                            <div className='w-[40%]'>

                                <span class="font-bold">Building Courtyard, None</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
                <div className="border border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                    <img src="./src/assets/images/icons/broucher.png" alt="Brochure" className="mb-2" />
                    <h3 className="font-FuturaHeavy text-xl mb-2">Brochure</h3>
                    <p className="text-center mb-2">
                        Access all in-depth information, latest price lists, floor plans, brochures & more.
                    </p>
                    <button className="bg-primarycolor text-white py-2 px-4 rounded-lg">View Brochure</button>
                </div>
                <div className="border  border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                    <img src="./src/assets/images/icons/price-list 2.png" alt="Pricelist" className="mb-2" />
                    <h3 className="font-FuturaHeavy text-xl mb-2">Pricelist</h3>
                    <p className="text-center mb-2">
                        Access all in-depth information, latest price lists, floor plans, brochures & more.
                    </p>
                    <button className="bg-primarycolor text-white py-2 px-4 rounded-lg">View Brochure</button>
                </div>
            </div>

            <div className="w-full bg-bggray dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col xl:flex-row">
                    <div className="w-full xl:w-1/2">
                        <img className="w-full h-1/2 xl:h-full object-cover" src="./src/assets/images/homepage/heroimage.png" alt="Property Image" />
                    </div>
                    <div className="flex flex-col justify-between py-4 px-8 w-full xl:w-1/2">
                        <div className="uppercase tracking-wide text-md text-black font-bold">Lisbon, Portugal</div>
                        <h2 className="block mt-1 text-xl leading-tight font-medium text-black">Spectacular Development With Ocean Views In Cascais, Lisbon</h2>
                        <p className="mt-2 text-zinc-600 text-md">Discover the peak of Algarve living at this remarkable estate near the desirable 'Golden Triangle'. Positioned on a quiet road just outside the luxury resort of Quinta do Lago, this property offers a perfect mix of calm and convenience...</p>
                        <div className="mt-4 flex flex-wrap justify-between text-zinc-700">
                            <div>
                                <div className="tracking-wider text-xl">D1001</div>
                                <div className="text-sm font-semibold" >Reference</div>
                            </div>
                            <div>
                                <div className="tracking-wider text-xl">2 to 3</div>
                                <div className="text-sm font-semibold">Beds</div>
                            </div>
                            <div>
                                <div className="tracking-wider text-xl">150m<sup>2</sup> to 238m<sup>2</sup></div>
                                <div className="text-sm font-semibold">Area</div>
                            </div>
                        </div>
                        <div className="mt-4 text-2xl font-FuturaBold text-black">€1,200,000 to €3,500,000</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProFeaturesAmenities