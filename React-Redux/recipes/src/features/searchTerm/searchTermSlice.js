import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from "../../action-types";

// Action creators
export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  }
}

export function clearSearchTerm() {
  return {
    type: CLEAR_SEARCH_TERM
  }
}

// Selectors
export const selectSearchTerm = (state) => state.searchTerm;

// Reducer
const initialState = '';
export default function searchTermReducer (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    case CLEAR_SEARCH_TERM:
      return '';
    default:
      return state;
  }
}