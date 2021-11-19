import React from 'react';

import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { useHistory } from 'react-router-dom';


const CollectionPreview = ({ title, items }) => {
    const history = useHistory();
    return (
        <div className='collection-preview'>
            <h1 
                className='title' 
                onClick={() => {history.push('/shop/' + title.toLowerCase())}}
                style={{cursor: 'pointer'}}
            >
                    {title}
            </h1>
            <div className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview;
