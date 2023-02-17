import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Item from "./components/Item/Item";
import './CatalogPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsList} from "../../redux/async/asyncActions";

const CatalogPage = () => {
    const itemList = useSelector(state => state.itemsListSlice.items)
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

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
                />
                <button className="search_button" onClick={handleSearch}>Find</button>
            </div>
            <div className="catalog_list">
                {itemList.map(item => <Item item={item}/>)}
            </div>
        </div>
    );
};

export default CatalogPage;
