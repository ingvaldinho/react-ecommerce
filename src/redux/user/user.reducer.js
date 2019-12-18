import {UserActionTypes} from './user.types'

const INITIAL_VALUE = {
    currentUser: null,
    error: null
    
}

const userReducer = (state = INITIAL_VALUE, action)=>{
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null

            }
        case UserActionTypes.SIGN_OUT_SUCESS:
            return {
                ...state,
                currentUser:null,
                error: null
            }
        case UserActionTypes.SIGN_UP_FAIL:
        case UserActionTypes.SIGN_OUT_FAIL:
        case UserActionTypes.SIGN_IN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
    
}

export default userReducer;