import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {  // <Route /> automatically passes 3 props into its `component property`
    // , hence we can access the `match` property here
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
        </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;