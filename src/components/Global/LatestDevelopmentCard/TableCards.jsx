import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faSort } from '@fortawesome/free-solid-svg-icons';
import TableCardsRows from './TableCardsRows';

const TableCards = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'ref', direction: 'asc' });

    const data = [
        {
            beds: 3,
            interior: '103m²',
            price: '€1,600,000',
        },
        {
            beds: 4,
            interior: '150m²',
            price: '€2,500,000',
        },
        {
            beds: 1,
            interior: '45m²',
            price: '€400,000',
        },
        {
            beds: 2,
            interior: '80m²',
            price: '€900,000',
        },
        {
            beds: 4,
            interior: '200m²',
            price: '€3,000,000',
        },
        {
            beds: 2,
            interior: '85m²',
            price: '€950,000',
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
    ];

    const tableData = sortedData.map(row => ({
        beds: row.beds,
        interior: row.interior,
        price: row.price,
    }));


    return (
        <>
            <table className="min-w-full">
                <thead className='text-sm md:text-md text-white font-bold bg-primarycolor '>
                    <tr className="w-full border-b-2 border-black ">
                        {tableHeaders.map((col, index) => (
                            <th
                                key={index}
                                className={`py-2 lg:py-3 px-2 lg:px-4 font-semibold text-center cursor-pointer ${index === 0 ? 'rounded-tl-lg ' : ''}`}
                                onClick={col.key ? () => requestSort(col.key) : undefined}
                            >
                                {/* <span >{col.label}</span> */}

                                <div className='w-full flex justify-center'>
                                    <div className='w-max '>
                                        <span >{col.label}</span>
                                        <FontAwesomeIcon icon={faSort} size="sm" className='text-white ml-2 my-auto' />
                                    </div>
                                </div>

                            </th>
                        ))}
                        <th className=''></th>
                        <th className='rounded-tr-lg'></th>
                    </tr>
                </thead>
                <tbody className="text-sm md:text-md text-primarycolor">
                    {tableData.map((row, index) => (
                        <TableCardsRows key={index} row={row} index={index} />
                    ))}
                    <tr >
                        <td colspan={5} className="bg-primarycolor hover:bg-primarycolorhover font-semibold w-full text-white text-center py-2 lg:py-3 rounded-bl-lg rounded-br-lg cursor-pointer transition-colors duration-300 ease-in-out">
                            <button className="font-semibold">See The Development</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default TableCards