import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Item from "./components/Item/Item";
import './CatalogPage.scss';
import './pagination.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsList} from "../../redux/async/asyncActions";
import ReactPaginate from "react-paginate";

const CatalogPage = () => {
    const itemList = useSelector(state => state.itemsListSlice.items)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 9;
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(itemList.length / itemsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    const handleSearch = () => {
        dispatch(fetchItemsList(search))
    }

    return (
        <div className="catalogPage">
            <NavBar/>
            <div className="search_form">
                <input
                    className="search"
                    placeholder="Find the book you want"
                    type={"text"}
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    onKeyDown={event => event.key === "Enter" ? handleSearch() : ""}
                />
                <button className="search_button" onClick={handleSearch}>Search</button>
            </div>
            <div className="catalog_list">
                {itemList
                    .slice(pagesVisited, pagesVisited + itemsPerPage)
                    .map(item => <Item item={item}/>)}
            </div>
            <ReactPaginate
                pageCount={pageCount}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                onPageChange={changePage}
                containerClassName={"paginationContainer"}
                previousLinkClassName={"paginationButton"}
                nextLinkClassName={"paginationButton"}
                disabledClassName={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default CatalogPage;
