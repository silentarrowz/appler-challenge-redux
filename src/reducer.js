import { SEARCH_NAME } from './constants/contacts';
import {searchTerm} from './actions.js';
const initialState = {
  term:'blah'
  
};

/*

export function searchName(state = initialState, action) {
	switch(action.type){
		case SEARCH_NAME:
			state.term = action.text;
			console.log("current state is: ", state);
			console.log('current text is : ',action.text);
			return state;
		default:
		     return state;
	}
  
}
*/

export function searchName(state = initialState, action) {
    switch(action.type){
        case SEARCH_NAME:
            
            console.log("current state is: ", state);
            console.log('current text is : ',action.text);
            return {...state, term : action.text};
        default:
             return state;
    }
  
}