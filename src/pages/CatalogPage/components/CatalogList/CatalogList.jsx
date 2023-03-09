import React, {useState} from 'react';
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination";
import "./catalogList.scss"
import {useSelector} from "react-redux";


const CatalogList = () => {
    const itemList = useSelector(state => state.itemsListSlice.items)
    const itemsPerPage = 9
    const [pageNumber, setPageNumber] = useState(0)
    const pagesVisited = pageNumber * itemsPerPage

    return (
        <>
            <div className="catalog_list">
                {itemList
                    .slice(pagesVisited, pagesVisited + itemsPerPage)
                    .map(item => <Item item={item} key={item.id}/>)}
            </div>
            <Pagination
                itemList={itemList}
                setPageNumber={setPageNumber}
                itemsPerPage={itemsPerPage}
            />
        </>
    );
};

export default CatalogList;
