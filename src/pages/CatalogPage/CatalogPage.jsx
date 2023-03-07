import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Item from "./components/Item/Item";
import './CatalogPage.scss';
import './pagination.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsList} from "../../redux/async/asyncActions";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader/Loader";


const CatalogPage = () => {
    const itemList = useSelector(state => state.itemsListSlice.items)
    const isLoading = useSelector(state => state.itemsListSlice.isLoading)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const [pageNumber, setPageNumber] = useState(0)
    const itemsPerPage = 9; //todo: out of the component with capital
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(itemList.length / itemsPerPage) //todo: how to keep just calculable vars in  component

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const handleSearch = () => {
        let input = document.getElementById("searchInput");
        if (search) {
            dispatch(fetchItemsList(search))
            input.classList.remove("search-error");
        } else {input.classList.add("search-error")}
    }

    const handleKeySearch = (event) => {
        if(event.key === "Enter") {
            let input = document.getElementById("searchInput");
            if (search) {
                dispatch(fetchItemsList(search))
                input.classList.remove("search-error");
            } else {input.classList.add("search-error")}
        }
    }

    return (
        <div className="catalogPage">
            <NavBar/>
            <div className="search_form">
                <input
                    className="search"
                    id="searchInput"
                    placeholder="Find the book you want"
                    type={"text"}
                    value={search}
                    onChange={event => setSearch(event.target.value)} //todo: add handler
                    onKeyDown={handleKeySearch}
                />
                <button className="search_button" onClick={handleSearch}>Search</button>
            </div>

            {isLoading
                ?
                <Loader />
                :
                <>
                    <div className="catalog_list">
                        {itemList
                            .slice(pagesVisited, pagesVisited + itemsPerPage)
                            .map(item => <Item item={item} key={item.id}/>)}
                    </div>
                    <ReactPaginate
                        pageCount={pageCount}
                        previousLabel={"❮"}
                        nextLabel={"❯"}
                        onPageChange={changePage}
                        containerClassName={"paginationContainer"}
                        previousLinkClassName={"paginationButton"}
                        nextLinkClassName={"paginationButton"}
                        disabledClassName={"paginationDisable"}
                        activeClassName={"paginationActive"}
                        pageClassName={"paginationElement"}
                    />
                </>
            }
        </div>
    );
};

export default CatalogPage;
