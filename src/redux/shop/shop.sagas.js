import {ShopActionsType} from './shop.types';
import {takeLatest,call,put,all} from 'redux-saga/effects';

import {firestore,convertCollectionSnapChotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsFail,fetchCollectionsSucess} from './shop.action';

export function* fetchCollectionAsync(){

    try{
        const collectionRef =  firestore.collection('collections');
        const snapchot = yield collectionRef.get();

        const collectionMap = yield call(convertCollectionSnapChotToMap,snapchot);

        yield put(fetchCollectionsSucess(collectionMap))
    }catch(error){
         yield put(fetchCollectionsFail(error.message));
    }

}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionsType.FETCH_COLLECTIONS_START,
         fetchCollectionAsync
         );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}