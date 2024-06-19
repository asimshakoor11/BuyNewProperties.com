import React, { useState } from 'react'
import Tabcontent from './Tabcontent';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState('Culture');

    const tabs = [
        { name: 'Culture', cards: [
            { icon: 'park', title: 'Parks' },
            { icon: 'bag', title: 'Shopping' },
            { icon: 'nightlife', title: 'Night Life' },
        ] },
        { name: 'Culinary', cards: [
            { icon: 'restaurant', title: 'Restaurants' },
            { icon: 'cafes', title: 'Cafes' },
            { icon: 'shopping', title: 'Groceries' },
        ] },
        { name: 'Transportation', cards: [
            { icon: 'pedestrain', title: 'Padestrian Friendly' },
            { icon: 'cycling', title: 'Cycling Friendly' },
            { icon: 'truck', title: 'Transit Friendly' },
            { icon: 'car', title: 'Car Friendly' },
        ] },
        { name: 'Character', cards: [
            { icon: 'quiet', title: 'Quiet' },
            { icon: 'greenery', title: 'Greenery' },
            { icon: 'historic', title: 'Historic' },
            { icon: 'vibrant', title: 'Vibrant' },
        ] },
    ];

    return (
        <section className="section p-6 bg-bggray text-zinc-800 dark:text-zinc-50">
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-4xl font-FuturaBold text-primarycolor">BuyNewProperties. Lifestyle Index</h2>
                <p className="text-fontdark text-lg md:text-2xl mt-1">
                    Amplifying our listings by providing geo-targeted undefined insights that matter most.
                </p>
            </div>
            <div className="flex justify-center">
                 <div className="inline-flex flex-wrap justify-center items-center gap-2 rounded-full bg-gray-300 p-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.name}
                            className={`px-2 py-1 text-md md:px-4 md:py-2 md:text-lg hover:bg-white  font-FuturaDemi rounded-full ${
                                activeTab === tab.name ? 'bg-white text-zinc-800 dark:bg-zinc-900 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-300'
                            }`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>
            {tabs.map(tab => (
                activeTab === tab.name && <Tabcontent key={tab.name} cards={tab.cards} />
            ))}
            <p className="text-center italic text-gray-600 text-lg mt-8">
                Ratings for culture and culinary categories reflect only proximity to the listed <br /> property and are not to be construed as ratings of perceived or actual quality.
            </p>
        </section>
    );
};

export default TabSection