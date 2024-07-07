import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import NewsPaginationCard from './NewsPaginationCard';

const NewsPagination = ({CardData = []}) => {
    let itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);
    const [isInitialMount, setIsInitialMount] = useState(true);
    const devCardsRef = useRef(null);

    // Calculate the total number of pages
    const totalPages = Math.ceil(CardData.length / itemsPerPage);

    // Calculate the index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CardData.slice(indexOfFirstItem, indexOfLastItem);


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
                <div ref={devCardsRef} id="devcards" className="grid grid-cols-1 herohommd:grid-cols-2 gap-4 mt-10 mb-10">
                    {/* {currentItems.map(agentdata => (
                        <OurAgentPagCard key={agentdata.id} agentdata={agentdata} />
                    ))}
                     */}
                    {currentItems.map((data, index) => (
                        <NewsPaginationCard key={index} carddata={data} />
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

export default NewsPagination;
