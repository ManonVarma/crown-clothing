import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.style.scss';

const CollectionPage = ({ collection }) => {
    console.log('collection: ', collection);
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {items.map(item => (
                        <CollectionItem className='collection-item' key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

// `ownProps` are the props of the component that we're wrapping in the `connect()` method (CollectionPage in this case)
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)  // (currying)
});

export default connect(mapStateToProps)(CollectionPage);
