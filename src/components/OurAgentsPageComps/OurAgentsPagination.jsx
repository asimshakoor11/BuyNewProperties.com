import React, { useState, useEffect, useRef } from 'react';
import OurAgentPagCard from './OurAgentPagCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DevSrchPagination = () => {
    let itemsPerPage = 8;
    const agentsdata = [
        {
            id: 1,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 2,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png", "/images/global/flag2.png"]
        },

        {
            id: 3,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 4,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png", "/images/global/flag4.png"]
        },

        {
            id: 5,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 6,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 7,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 8,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 9,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 10,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 11,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 12,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 13,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 14,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 15,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 16,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 17,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 18,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        {
            id: 19,
            name: "Russell Henderson",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 20,
            name: "Natalia Loginova",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: false,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },

        {
            id: 21,
            name: "Stefanie Mendes",
            rating: 5.0,
            image: "/images/pages/agentpage/agentimg2.jpeg",
            openForagentdatas: true,
            recentSales: 20,
            colors: ["/images/global/flagus.png", "/images/global/flag1.png"]
        },
        // Add more client objects here
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [isInitialMount, setIsInitialMount] = useState(true);
    const devCardsRef = useRef(null);

    // Calculate the total number of pages
    const totalPages = Math.ceil(agentsdata.length / itemsPerPage);

    // Calculate the index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = agentsdata.slice(indexOfFirstItem, indexOfLastItem);


    // Function to change the page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);

    };

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < totalPages) {
            // setCurrentPage(currentPage + 1);
            paginate(currentPage + 1);
        }
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (currentPage > 1) {
            // setCurrentPage(currentPage - 1);
            paginate(currentPage - 1);
        }
    };

    useEffect(() => {
        if (!isInitialMount && devCardsRef.current) {
            const offsetTop = devCardsRef.current.getBoundingClientRect().top + window.pageYOffset - 300;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        setIsInitialMount(false);
    }, [currentPage]);

    return (
        <>
            <div className="flex flex-col">
                {/* Render the current items */}
                <div ref={devCardsRef} id="devcards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10 mb-10">
                    {currentItems.map(agentdata => (
                        <OurAgentPagCard key={agentdata.id} agentdata={agentdata} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <ul className="flex flex-row items-center justify-center gap-2 list-none mt-4">
                    <li>
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="py-2 lg:py-3 px-3 border border-black rounded-lg bg-transparent disabled:opacity-50"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} size='md' />
                        </button>
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => paginate(index + 1)}
                                className={`h-10 lg:h-12 w-8 font-medium rounded-lg hover:bg-primarycolor hover:text-white ${currentPage === index + 1 ? 'bg-primarycolor hover:bg-primarycolorhover text-white' : 'bg-transparent'}`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="py-2 lg:py-3 px-3 border border-black rounded-lg bg-transparent disabled:opacity-50"
                        >
                            <FontAwesomeIcon icon={faChevronRight} size='md' />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default DevSrchPagination;
