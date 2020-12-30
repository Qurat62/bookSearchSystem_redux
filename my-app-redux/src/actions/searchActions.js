import { SEARCH_BOOK, FETCH_BOOKS, FETCH_BOOK, LOADING } from "./types";

export const searchBook = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_BOOK,
    payload: text,
  });
};

export const fetchBooks = (text) => (dispatch) => {
  debugger;
  fetch("https://www.googleapis.com/books/v1/volumes/?q=" + text)   
    .then((response) =>
    {
  
      response.json().then((response)=>{
        dispatch({
          type: FETCH_BOOKS,
          payload: response.items,
        })
        
      })
    
  }).catch((err) => {
      console.log(err);
    });
};


export const fetchBook = (id) => (dispatch) => {
  fetch("https://www.googleapis.com/books/v1/volumes/" + id)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: FETCH_BOOK,
        payload: response,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
