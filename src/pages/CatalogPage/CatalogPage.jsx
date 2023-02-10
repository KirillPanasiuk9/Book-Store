import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Item from "./components/Item/Item";
import './CatalogPage.scss'

const CatalogPage = () => {
    return (
        <div className="catalogPage">
            <NavBar/>
            <div className="catalog_list">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
};

export default CatalogPage;
