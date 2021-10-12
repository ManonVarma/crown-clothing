import React from 'react';
import { useLocation } from 'react-router';
import CollectionItem from '../../components/collection-item/collection-item.component';

import SHOP_DATA from '../../redux/shop/shop.data';

import './search-page.style.css';

const SearchPage = () => {
    let location = useLocation();
    let text = location.state.searchedText;

    let allItemsList=[];
    for (let key in SHOP_DATA) {
        SHOP_DATA[key].items.forEach(item => {
            allItemsList.push(item);
        });
    };
    let filteredItems = [];
    if (text !== '') {
        allItemsList.forEach(item => {
            if (item.name.toLowerCase().includes(text.toLowerCase()))
                filteredItems.push(item);
        });
    }

    return (
        <div className='search-page'>
            {
                filteredItems.length === 0 ?
                <h2 className='no-item'>No items available</h2>
                :
                <div>
                    <h1 className='yes-item'>Matched Apparels</h1>
                    <div className='matched-items'>
                        {
                            filteredItems.map(item => {
                                return <CollectionItem className='collection-item' key={item.id} item={item}></CollectionItem>
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchPage;
