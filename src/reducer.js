import { SEARCH_NAME } from './constants/contacts';
import {searchTerm} from './actions.js';
const initialState = {
  term:''
  
};



export function searchName(state = initialState, action) {
	switch(action.type){
		case SEARCH_NAME:
			state.term = action.text;
			return state;
		default:
		     return state;
	}
  
}
