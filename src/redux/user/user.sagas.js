import {takeLatest,put,all,call} from 'redux-saga/effects';

import {UserActionTypes} from './user.types';
import {signinSucess,signInFail,signoutSucess,signoutFail,signupSucess,signupFail} from './user.actions'

import {auth,googleAuthProvider,createUserprofileDocument,getUserSession} from '../../firebase/firebase.utils';

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getUserSession();
        if(!userAuth) return;
        yield getSnapChotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFail(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}


export function* getSnapChotFromUserAuth(userAuth,additionnalData){
    try{
        const userRef = yield call(createUserprofileDocument,userAuth,additionnalData);
        const userSnapchot = yield userRef.get();

        yield put(signinSucess({id:userSnapchot.id, ...userSnapchot.data()}));
    } catch (error) {
        yield put(signInFail(error));
    }
}

export function* signInwithGoogle(){
    try {
        const {user} =  yield auth.signInWithPopup(googleAuthProvider); 
        yield getSnapChotFromUserAuth(user)

    }catch(error){
        yield put(signInFail(error))
    }
}

export function* onGooogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInwithGoogle)
}

export function* onEmailSignIn({payload: {email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapChotFromUserAuth(user);

    }catch(error){
        yield put(signInFail(error));
    }
    
}

export function* signout(){
    try {
        yield auth.signOut();
        yield put(signoutSucess());
    } catch (error) {
        yield put(signoutFail(error));
    }
}

export function* onSignoutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signout)
}



export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,onEmailSignIn)
}


export function* signInAfterSignUp({payload:{user,additionnalData}}){
    yield getSnapChotFromUserAuth(user,additionnalData);
}

export function* signup({payload: {email,password,displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
         yield put(signupSucess({user,additionnalData: displayName}));         
    } catch (error) {
        yield put(signupFail(error));
    }

}

export function* onSignupStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signup)
}

export function* onSigninAfterSignUp(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCESS,signInAfterSignUp)
};

export function* userSagas(){
    yield all([call(onGooogleSignInStart),
             call(onEmailSignInStart),
             call(isUserAuthenticated),
             call(onSignoutStart),
             call(onSignupStart),
             call(onSigninAfterSignUp)
    ])
}