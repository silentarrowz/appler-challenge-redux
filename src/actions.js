import { SEARCH_NAME } from './constants/contacts';

export function searchTerm(term) {
  return {
    type: SEARCH_NAME,
   	text:term
  };
}