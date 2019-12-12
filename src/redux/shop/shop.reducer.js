import {ShopActionsType} from './shop.types'

const INITIAL_VALUE = {
collections: null,
isFetching: false,
errorMessage: undefined
}

  const shopReducer = (state= INITIAL_VALUE,action)=>{
      switch(action.type){
          case ShopActionsType.FETCH_COLLECTIONS_START:
              return {
                  ...state,
                  isFetching: true
              }
          case ShopActionsType.FETCH_COLLECTIONS_SUCESS:
              return {
                  ...state,
                  isFetching:false,
                  collections: action.payload
              }
          case ShopActionsType.FETCH_COLLECTIONS_FAILURE:
              return { 
                  ...state,
                  errorMessage: action.payload
              }
          default:
              return state;
      }
  }

  export default shopReducer;