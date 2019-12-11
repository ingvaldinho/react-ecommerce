import {ShopActionsType} from './shop.types'

const INITIAL_VALUE = {
collections: null
}

  const shopReducer = (state= INITIAL_VALUE,action)=>{
      switch(action.type){
          case ShopActionsType.UPDATE_COLLECTION:
              return {
                  ...state,
                  collections: action.payload
              }
          default:
              return state;
      }
  }

  export default shopReducer;