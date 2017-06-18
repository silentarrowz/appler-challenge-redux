import { SEARCH_NAME } from './constants/contacts';

export function searchTerm(term) {
	console.log("in action: ", term);
  return {
    type: SEARCH_NAME,
   	text:term
  };
}