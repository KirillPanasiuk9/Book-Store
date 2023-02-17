import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Item from "./components/Item/Item";
import './CatalogPage.scss'
import {useSelector} from "react-redux";

const CatalogPage = () => {
    const itemList = useSelector(state => state.itemsListSlice.items)

    return (
        <div className="catalogPage">
            <NavBar/>
            <div className="catalog_list">
                {/*{itemList.}*/}
            </div>
        </div>
    );
};

export default CatalogPage;
