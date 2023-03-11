import React from 'react';
import ReactPaginate from "react-paginate";
import './pagination.scss'

const Pagination = ({itemList, setPageNumber, itemsPerPage}) => {
    const pageCount = Math.ceil(itemList.length / itemsPerPage) //todo: how to keep just calculable vars in  component

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <ReactPaginate
            pageCount={pageCount}
            previousLabel={"❮"}
            nextLabel={"❯"}
            onPageChange={changePage}
            containerClassName={"paginationContainer"}
            previousLinkClassName={"next"}
            nextLinkClassName={"previous"}
            disabledClassName={"paginationDisable"}
            activeClassName={"paginationActive"}
            pageClassName={"paginationElement"}
        />
    );
};

export default Pagination;
