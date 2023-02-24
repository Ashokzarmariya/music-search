import { SEARCH_SONG } from "./ActionType";
import { ThunkAction } from 'redux-thunk';
// import { RootState } from './store';
import { AnyAction, Store } from 'redux';


export const searchMusicHandler = (keyword:string)=> async (dispatch:any) => {
    

    try {

        const res = await fetch(
            `https://shazam.p.rapidapi.com/auto-complete?term=${keyword}`,
            {
              method: "GET",
              headers: {
                  'X-RapidAPI-Key': '1da9632d82mshe52cacb569a7414p138479jsn8498ceeb2ea5',
                  'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
              }
            }
          );
        
         
          const data = await res.json();
          
          console.log("search result ", data)
      
          dispatch({ type: SEARCH_SONG, payload:data });
        
    } catch (error) {
        // dispatch({ type: SEARCH_SONG, payload:error.message});
        console.log("error ",error)
    }

  
};
