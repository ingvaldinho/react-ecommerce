import {ShopActionsType} from './shop.types';
import {firestore,convertCollectionSnapChotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = ()=> ({
    type: ShopActionsType.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSucess = collectionsMap => ({
    type: ShopActionsType.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap
})

export const fetchCollectionsFail = errorMessage => ({
    type: ShopActionsType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = ()=>{
   return dispach =>{
    const collectionRef = firestore.collection('collections');
    dispach(fetchCollectionsStart());


        collectionRef.get().then( async (snapchot)=>{
           const collectionMap = convertCollectionSnapChotToMap(snapchot);   
           dispach(fetchCollectionsSucess(collectionMap))

        }).catch(error=>{
            dispach(fetchCollectionsFail(error.message));
        })
    }
}