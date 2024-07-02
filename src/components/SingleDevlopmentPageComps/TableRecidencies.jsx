import React, { useState, useEffect } from 'react'


import { faChevronRight, faSort } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SingleUnitPopup from './SingleUnitPopup';


const TableRecidencies = ({ booking }) => {

    const [sortConfig, setSortConfig] = useState({ key: 'ref', direction: 'asc' });

    const data = [
        {
            ref: 'P49024',
            propertyType: 'Apartment',
            beds: 3,
            interior: '103m²',
            terrace: '23m²',
            floorPlot: 'G/F',
            unit: 'B21',
            parking: 2,
            price: '€1,600,000',
        },
        {
            ref: 'P49025',
            propertyType: 'Penthouse',
            beds: 4,
            interior: '150m²',
            terrace: '50m²',
            floorPlot: '5/F',
            unit: 'P5',
            parking: 2,
            price: '€2,500,000',
        },
        {
            ref: 'P49026',
            propertyType: 'Studio',
            beds: 1,
            interior: '45m²',
            terrace: '10m²',
            floorPlot: '2/F',
            unit: 'S2',
            parking: 1,
            price: '€400,000',
        },
        {
            ref: 'P49027',
            propertyType: 'Apartment',
            beds: 2,
            interior: '80m²',
            terrace: '20m²',
            floorPlot: '3/F',
            unit: 'A3',
            parking: 1,
            price: '€900,000',
        },
        {
            ref: 'P49028',
            propertyType: 'Duplex',
            beds: 4,
            interior: '200m²',
            terrace: '60m²',
            floorPlot: 'G-1/F',
            unit: 'D1',
            parking: 2,
            price: '€3,000,000',
        },
        {
            ref: 'P49029',
            propertyType: 'Apartment',
            beds: 2,
            interior: '85m²',
            terrace: '25m²',
            floorPlot: '1/F',
            unit: 'A1',
            parking: 1,
            price: '€950,000',
        },
        {
            ref: 'P49030',
            propertyType: 'Penthouse',
            beds: 3,
            interior: '120m²',
            terrace: '40m²',
            floorPlot: '4/F',
            unit: 'P4',
            parking: 2,
            price: '€2,000,000',
        },
        {
            ref: 'P49031',
            propertyType: 'Apartment',
            beds: 3,
            interior: '110m²',
            terrace: '30m²',
            floorPlot: '2/F',
            unit: 'B22',
            parking: 1,
            price: '€1,400,000',
        },
        {
            ref: 'P49032',
            propertyType: 'Studio',
            beds: 1,
            interior: '50m²',
            terrace: '15m²',
            floorPlot: 'G/F',
            unit: 'S1',
            parking: 1,
            price: '€450,000',
        },
        {
            ref: 'P49033',
            propertyType: 'Duplex',
            beds: 5,
            interior: '220m²',
            terrace: '70m²',
            floorPlot: 'G-2/F',
            unit: 'D2',
            parking: 3,
            price: '€3,500,000',
        },
    ];

    const sortedData = [...data].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const columns = [
        { label: 'Ref.', key: 'ref' },
        { label: 'Property Type', key: 'propertyType' },
        { label: 'Beds', key: 'beds' },
        { label: 'Interior', key: 'interior' },
        { label: 'Terrace', key: 'terrace' },
        { label: 'Floor/Plot', key: 'floorPlot' },
        { label: 'Unit', key: 'unit' },
        { label: 'Parking', key: 'parking' },
        { label: 'Price', key: 'price' },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);


    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupOpen]);


    return (

        <>
            <table className="min-w-full mr-0 custommaxforSDP:mr-10">
                <thead className='text-md text-black font-bold'>
                    <tr className="w-full border-b-2 border-black">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="py-2 px-4 text-center cursor-pointer"
                                onClick={col.key ? () => requestSort(col.key) : undefined}
                            >
                                <div className={`w-max  ${index === 0 ? '' : 'mx-auto'}`}>
                                    <span>{col.label}</span>
                                    <FontAwesomeIcon icon={faSort} size="sm" className='text-gray-400 ml-2 my-auto' />
                                </div>
                            </th>
                        ))}
                        <th className="py-2 px-4 text-center">Plans</th>
                        <th className="py-2 px-4 text-center">Book Now</th>
                        <th className="py-2 px-4 text-center"></th>
                    </tr>
                </thead>
                <tbody className='text-md text-primarycolor font-FuturaDemi'>
                    {sortedData.map((row, index) => (
                        <tr key={index} className={`border-b border-gray-300 cursor-pointer hover:bg-[#fcfeff] row-hover ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}
                            onClick={() => { setIsPopupOpen(true) }}
                        >
                            <td className="py-2 px-4 text-center">{row.ref}</td>
                            <td className="py-2 px-4 text-center">{row.propertyType}</td>
                            <td className="py-2 px-4 text-center">{row.beds}</td>
                            <td className="py-2 px-4 text-center">{row.interior}</td>
                            <td className="py-2 px-4 text-center">{row.terrace}</td>
                            <td className="py-2 px-4 text-center">{row.floorPlot}</td>
                            <td className="py-2 px-4 text-center">{row.unit}</td>
                            <td className="py-2 px-4 text-center">{row.parking}</td>
                            <td className="py-2 px-4 text-center">{row.price}</td>
                            <td className="py-2 px-4 text-center">
                                <button className="bg-transparent">
                                    <img alt="download" src="/images/icons/download.svg" className='h-5' />
                                </button>
                            </td>
                            <td className="py-2 px-4 text-center">
                                {(
                                    booking ? (<button className="bg-primarycolor hover:bg-primarycolorhover w-max text-sm text-white px-4 py-2 rounded cursor-pointer transition-colors duration-300 ease-in-out">
                                        Book Now
                                    </button>) : (<button className="bg-transparent  text-primarycolor px-4 py-2 rounded">
                                        -
                                    </button>)
                                )}
                            </td>
                            <td className="py-2 px-4 text-center">
                                <button className="bg-transparent icon-slide">
                                    <FontAwesomeIcon icon={faChevronRight} size='sm' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isPopupOpen && (
                <SingleUnitPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            )}
        </>
    )
}

export default TableRecidencies