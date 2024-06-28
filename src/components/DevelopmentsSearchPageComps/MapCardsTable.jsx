import React, { useState } from 'react';
import MapCardTableRows from './MapCardTableRows';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSort } from '@fortawesome/free-solid-svg-icons';

const MapCardsTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'ref', direction: 'asc' });

    const data = [
        {
            beds: 3,
            interior: '103m²',
            price: '€1,600,000',
            floor: 2,
            parking: 'Yes'
        },
        {
            beds: 4,
            interior: '150m²',
            price: '€2,500,000',
            floor: 3,
            parking: 'No'
        },
        {
            beds: 1,
            interior: '45m²',
            price: '€400,000',
            floor: 1,
            parking: 'Yes'
        },
        {
            beds: 2,
            interior: '80m²',
            price: '€900,000',
            floor: 4,
            parking: 'Yes'
        },
        {
            beds: 4,
            interior: '200m²',
            price: '€3,000,000',
            floor: 6,
            parking: 'No'
        },
        {
            beds: 2,
            interior: '85m²',
            price: '€950,000',
            floor: 5,
            parking: 'Yes'
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

    const tableHeaders = [
        { label: 'Beds', key: 'beds' },
        { label: 'Area', key: 'interior' },
        { label: 'Price', key: 'price' },
        { label: 'Floor', key: 'floor' },
        { label: 'Parking', key: 'parking' },
    ];

    const tableData = sortedData.map(row => ({
        beds: row.beds,
        interior: row.interior,
        price: row.price,
        floor: row.floor,
        parking: row.parking,
    }));

    return (
        <>
            <table className="min-w-full">
                <thead className='text-sm md:text-md text-white font-bold bg-primarycolor'>
                    <tr className="w-full border-b-2 border-black">
                        {tableHeaders.map((col, index) => (
                            <th
                                key={index}
                                className={`py-2 lg:py-3 px-2 lg:px-4 font-medium text-center cursor-pointer ${index === 0 ? 'rounded-tl-[18px] ' : ''}`}
                                onClick={col.key ? () => requestSort(col.key) : undefined}
                            >
                                <div className='w-full flex justify-center '>
                                    <div className='w-max text-center '>
                                        <span>{col.label}</span>
                                        <FontAwesomeIcon icon={faSort} size="sm" className='text-gray-400 ml-2 my-auto' />
                                    </div>
                                </div>

                            </th>
                        ))}
                        <th className='rounded-tr-[18px]'></th>
                    </tr>
                </thead>
                <tbody className="text-sm md:text-md text-primarycolor">
                    {tableData.map((row, index) => (
                        <MapCardTableRows key={index} row={row} index={index} />
                    ))}
                    <tr>
                        <td colSpan={6} className="bg-primarycolor font-medium w-full text-white text-center py-2 lg:py-3 rounded-bl-[18px] rounded-br-[18px]">
                            <button className="font-medium">See the Development</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MapCardsTable;
