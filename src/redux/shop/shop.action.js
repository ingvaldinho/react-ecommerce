import {ShopActionsType} from './shop.types';

export const updateCollections = (collections)=> ({
    type: ShopActionsType.UPDATE_COLLECTION,
    payload: collections
})