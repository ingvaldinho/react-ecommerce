import {all,put,call,takeLatest} from 'redux-saga/effects';

import {UserActionTypes} from '../user/user.types';
import {clearCart} from './cart.actions'


export function* clearCartonSignout(){
    yield put(clearCart());
}

export function* onSignoutSucess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCESS,clearCartonSignout)
}

export function* cartSagas(){
    yield all([call(onSignoutSucess)])
}