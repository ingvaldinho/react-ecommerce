import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const checkUserSession = ()=> ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const googleSignInStart = ()=>({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signinSucess = (user)=>({
    type: UserActionTypes.SIGN_IN_SUCESS,
    payload: user
})

export const signInFail = error=>({
    type: UserActionTypes.SIGN_IN_FAIL,
    payload: error
})

export const emailSignInStart = (emailAndPassword)=>({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signoutStart = ()=>({
    type: UserActionTypes.SIGN_OUT_START
})

export const signoutSucess = ()=>({
    type: UserActionTypes.SIGN_OUT_SUCESS
})

export const signoutFail = (error)=>({
    type: UserActionTypes.SIGN_OUT_FAIL,
    payload: error
})

export const signUpStart = (userCredentials)=>({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
})

export const signupSucess = ({user,additionnalData})=>({
    type: UserActionTypes.SIGN_UP_SUCESS,
    payload: {user,additionnalData}
})

export const signupFail = error =>({
    type: UserActionTypes.SIGN_UP_FAIL,
    payload: error
})
