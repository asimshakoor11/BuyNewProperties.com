import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import StoriesPaginationCard from './StoriesPaginationCard';

const StoriesPagination = () => {
    let itemsPerPage = 9;
    const agentsdata = [
        { id: 1, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 2, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 3, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 4, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 5, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 6, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 7, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 8, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 9, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 10, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 11, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 12, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 13, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 14, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 15, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 16, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 17, title: "Natalia & Russell", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 18, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 19, title: "Loginova Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 20, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 21, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
        { id: 22, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: true },
        { id: 23, title: "Henderson Family", imgSrc: "/images/pages/homepage/devcardimage.svg", showPlayButton: false },
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
            <div className="flex flex-col ">
                {/* Render the current items */}
                <div ref={devCardsRef} id="devcards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">

                    {currentItems.map(card => (
                        <StoriesPaginationCard key={card.id} title={card.title} imgSrc={card.imgSrc} 
                        showPlayButton={card.showPlayButton} />
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
                                className={`h-10 lg:h-12 w-8 font-medium rounded-lg hover:bg-primarycolor hover:text-white ${currentPage === index + 1 ? 'bg-primarycolor hover:bg-primarycolorhover text-white ' : 'bg-transparent'} cursor-pointer transition-colors duration-300 ease-in-out`}

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

export default StoriesPagination;
