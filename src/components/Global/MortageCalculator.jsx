import React from 'react'

import { faEnvelope, faArrowRotateForward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const MortageCalculator = () => {
    // mortage

    const totalPayment = 533576;
    const principalAndInterest = 469580;
    const propertyTaxes = 63996;
    const commonCharges = 0;

    const principalPercentage = (principalAndInterest / totalPayment) * 100;
    const propertyTaxesPercentage = (propertyTaxes / totalPayment) * 100;
    return (
        <>

            <section className='w-full bg-bggray flex flex-col xl:flex-row gap-4 py-10 px-[5%]'>

                <div className="bg-zinc-100 w-full lg:w-[60%]">
                    <h1 className="text-4xl font-FuturaBold text-primarycolor">Mortgage Calculator</h1>
                    <p className="mt-2 text-zinc-600 font-FuturaMedium">
                        Estimate your monthly mortgage payment, including the principal and interest, property taxes, and HOA. Adjust the values to generate a more accurate rate.
                    </p>
                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-black font-bold">Home Price</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md" placeholder="$79,995,000" />
                        </div>
                        <div>
                            <label className="block text-black font-bold">Term</label>
                            <select className="mt-1 block w-full p-2 border border-zinc-300 rounded-md text-gray-500 placeholder:text-gray-500 ">
                                <option>30-year fixed</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-black font-bold">Down Payment</label>
                            <div className="flex">
                                <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md " placeholder="$15,999,000" />
                                <input type="text" className="mt-1 ml-2 block w-16 p-2 border border-zinc-300 rounded-md " placeholder="20%" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-black font-bold">Property Tax</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md " placeholder="$63,996/month" />
                        </div>
                        <div>
                            <label className="block text-black font-bold">Interest Rate</label>
                            <div className="flex">
                                <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md " placeholder="8" />
                                <span className="mt-1 ml-2 block p-2 border border-zinc-300 rounded-md dark:bg-zinc-700 ">%</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-black font-bold">Common Charges or HOA</label>
                            <input type="text" className="mt-1 block w-full p-2 border border-zinc-300 rounded-md " placeholder="$0/month" />
                        </div>
                    </form>
                    <button className="mt-4 flex items-center text-primarycolor">
                        <span>Reset</span>
                        <FontAwesomeIcon icon={faArrowRotateForward} size='xs' className='ml-1' />
                    </button>
                </div>

                <div className="bg-zinc-100 w-full lg:w-[40%] border p-4">
                    <div className="w-[200px] h-[200px] mx-auto relative">
                        <CircularProgressbar
                            value={principalPercentage}
                            styles={buildStyles({
                                pathColor: '#002038',
                                trailColor: '#828282',
                                strokeLinecap: 'butt',
                                rotation: 0.75
                            })}
                            strokeWidth={13}
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center pointer-events-none">
                            <div className="text-[20px] font-bold text-[#002038]">
                                ${totalPayment.toLocaleString()}
                            </div>
                            <div className="text-[14px] text-[#888888]">
                                Your Payment
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-[20px]">
                        <div className="flex justify-between mb-[10px]">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-primarycolor rounded-xs mr-2"></span>
                                <span className="text-black">Principal and Interest</span>
                            </div>
                            <span className="text-black font-bold">${principalAndInterest.toLocaleString()} ({principalPercentage.toFixed(0)}%)</span>
                        </div>
                        <div className="flex justify-between mb-[10px]">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-fontdark rounded-xs mr-2"></span>
                                <span className="text-black">Property Taxes</span>
                            </div>
                            <span className="text-black font-bold">${propertyTaxes.toLocaleString()} ({propertyTaxesPercentage.toFixed(0)}%)</span>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-[#d8d8d8] rounded-xs mr-2"></span>
                                <span className="text-black">Common Charges or HOA</span>
                            </div>
                            <span className="text-black font-bold">${commonCharges.toLocaleString()} (0%)</span>
                        </div>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex items-center space-x-2 mt-6">
                        <span className="text-zinc-700 dark:text-zinc-300">Share</span>
                        <div className="flex space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center bg-white border-zinc-300 rounded-full">
                                <FontAwesomeIcon icon={faFacebook} size='xs' />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center bg-white border-zinc-300 rounded-full">
                                <FontAwesomeIcon icon={faTwitter} size='xs' />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center bg-white border-zinc-300 rounded-full">
                                <FontAwesomeIcon icon={faEnvelope} size='xs' />
                            </button>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default MortageCalculator