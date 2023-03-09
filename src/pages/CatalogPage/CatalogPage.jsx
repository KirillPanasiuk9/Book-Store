import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './CatalogPage.scss';
import './components/Pagination/pagination.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsList} from "../../redux/async/asyncActions";
import Loader from "../../components/Loader/Loader";
import ItemsList from "./components/ItemsList/ItemsList";


const CatalogPage = () => {
    const isLoading = useSelector(state => state.itemsListSlice.isLoading)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        const input = document.getElementById("searchInput");
        if (search) {
            dispatch(fetchItemsList(search))
            input.classList.remove("search-error");
        } else {input.classList.add("search-error")}
    }

    const handleKeySearch = (event) => {
        if(event.key === "Enter") {
            handleSearch()
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
                    onChange={handleInput}
                    onKeyDown={handleKeySearch}
                />
                <button className="search_button" onClick={handleSearch}>Search</button>
            </div>
            {isLoading ? <Loader /> : <ItemsList/>}
        </div>
    );
};

export default CatalogPage;
