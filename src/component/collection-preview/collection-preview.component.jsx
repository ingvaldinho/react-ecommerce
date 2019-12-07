import React from 'react';
import {withRouter} from 'react-router-dom';

import {CollectionPreviewContainer,PreviewContainer,TitleContainer} from './collection-preview.styles';
import ItemCollection from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items,history,match,routeName})=>(
    <CollectionPreviewContainer>
        <TitleContainer onClick={()=>history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter(
                    (item,idx)=> idx<4
                )
                .map((item)=>(
                    <ItemCollection key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>


    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);