import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import {CollectionOverviewContainer} from './collections-overview.styles'
const CollectionsOverview = ({collections})=>(
    <CollectionOverviewContainer>
    {
        collections.map(({id, ...othersCollectionProps})=>(
                <CollectionPreview key={id} {...othersCollectionProps} />
            ))
                    
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);