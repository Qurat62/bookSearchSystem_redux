import {
  SEARCH_BOOK,
  FETCH_BOOKS,
  FETCH_BOOK,
  LOADING

} from "../actions/types";

const initialState = {
  text: "",
  books: [],
  loading: false,
  book: [],
  limitTo: 3,

};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case FETCH_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
     

    default:
      return state;
  }
}
