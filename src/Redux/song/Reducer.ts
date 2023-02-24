import { SEARCH_SONG } from "./ActionType";

const initialState={

}
interface pera{
    type:string,
    payload:any
    
};
  export const songReducer = (store = initialState, { type, payload }:pera) => {
    if (type === SEARCH_SONG) {
      return { ...store, searchResult:payload  };
    } 
  
    return store;
  };