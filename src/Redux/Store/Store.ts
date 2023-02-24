
import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { songReducer } from '../song/Reducer';


const rootReducer=combineReducers({
   searchResult:songReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk))