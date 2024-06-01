import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import OurAgentPagCard from './OurAgentPagCard';

const OurAgentsPagination = () => {

    let itemsPerPage = 9
    const agentsdata = [
        {
            id: 1,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 2,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 3,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 4,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 5,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 6,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 7,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 8,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 9,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 10,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 11,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 12,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 13,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 14,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 15,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 16,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 17,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 18,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        {
            id: 19,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 20,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },

        {
            id: 21,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/homepage/cardimage.png",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["bg-[#5298CA]", "bg-[#FFDEAB]"]
        },
        // Add more client objects here
    ];

    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(agentsdata.length / itemsPerPage);

    // Calculate the index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = agentsdata.slice(indexOfFirstItem, indexOfLastItem);

    // Function to change the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // pagination

    // carddata


    return (
        <div className="flex flex-col">
            {/* Render the current items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
                {currentItems.map(agentdata => (
                    <OurAgentPagCard key={agentdata.id} agentdata={agentdata} />
                ))}
            </div>

            {/* Pagination Controls */}
            <ul className="flex flex-row justify-center items-center list-none mt-4">
                <li>
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="px-2 py-1 border-2 mr-2 border-primarycolor rounded-l bg-transparent disabled:opacity-50"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} size='md' />
                    </button>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li key={index}>
                        <button
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-primarycolor text-white' : 'bg-transparent'}`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 border-2 ml-2 border-primarycolor rounded-l bg-transparent disabled:opacity-50"
                    >
                        <FontAwesomeIcon icon={faChevronRight} size='md' />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default OurAgentsPagination