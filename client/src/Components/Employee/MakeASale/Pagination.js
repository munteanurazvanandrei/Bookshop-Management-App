import React, { useState } from 'react'

const Pagination = () => {
    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // Number of Records to be displayed on each page   
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // Records to be displayed on the current page
    const currentRecords = filteredItems.slice(indexOfFirstRecord, indexOfLastRecord);

    // Calculating the number of pages
    const nPages = Math.ceil(filteredItems.length / recordsPerPage)

    // Array holding page numbers
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    return (
        <>
            <div>Pagination</div>
            
        </>
    )
}

export default Pagination