import React, { useState, useEffect, useRef } from 'react';
import LatestDevelopmentCard from '../../components/Global/LatestDevlopmentsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DevSrchPagination = () => {
    let itemsPerPage = 8;
    const data = [
        { title: 'MONTISNAVIA 1', description: 'Description 1' },
        { title: 'MONTISNAVIA 2', description: 'Description 2' },
        { title: 'MONTISNAVIA 3', description: 'Description 3' },
        { title: 'MONTISNAVIA 4', description: 'Description 4' },
        { title: 'MONTISNAVIA 5', description: 'Description 5' },
        { title: 'MONTISNAVIA 6', description: 'Description 6' },
        { title: 'MONTISNAVIA 7', description: 'Description 7' },
        { title: 'MONTISNAVIA 8', description: 'Description 8' },
        { title: 'MONTISNAVIA 9', description: 'Description 9' },
        { title: 'MONTISNAVIA 11', description: 'Description 10' },
        { title: 'MONTISNAVIA 12', description: 'Description 10' },
        { title: 'MONTISNAVIA 13', description: 'Description 10' },
        { title: 'MONTISNAVIA 14', description: 'Description 10' },
        { title: 'MONTISNAVIA 15', description: 'Description 10' },
        { title: 'MONTISNAVIA 16', description: 'Description 10' },
        { title: 'MONTISNAVIA 17', description: 'Description 10' },
        { title: 'MONTISNAVIA 18', description: 'Description 10' },
        { title: 'MONTISNAVIA 19', description: 'Description 10' },
        { title: 'MONTISNAVIA 20', description: 'Description 10' },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [isInitialMount, setIsInitialMount] = useState(true);
    const devCardsRef = useRef(null);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Calculate the index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


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
            <div className="flex flex-col items-center">
                {/* Render the current items */}
                <div ref={devCardsRef} id="devcards" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 mb-10">
                    {currentItems.map((item, index) => (
                        <LatestDevelopmentCard key={index} index={index} item={item} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <ul className="flex flex-row items-center gap-2 list-none mt-4">
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
