import SHOP_DATA from './shop.data'

const INITIAL_VALUE = {
collections: SHOP_DATA
}

  const shopReducer = (state= INITIAL_VALUE,action)=>{
      switch(action.type){
          default:
              return state;
      }
  }

  export default shopReducer;