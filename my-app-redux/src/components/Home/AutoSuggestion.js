import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  searchBook,
  fetchBooks,
  setLoading,
} from "../../actions/searchActions";

const AutoSuggestion = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    dispatch(fetchBooks(userInput));
    dispatch(setLoading());
  }, [userInput]);
  const handleInput = (e) => {
    if (e.target.value === "") {
      setUserInput("");
    } else {
      setUserInput(e.target.value);
      dispatch(searchBook(e.target.value));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(userInput));
    dispatch(setLoading());
  };

  return (
    <div className="">
      <div className="">
        <h1 className="heading">
          Search for a book ,book of your choice .....
        </h1>
        <input
          type="search"
          onChange={handleInput}
          className="inputStyle golden-color-border"
        />
        <button
          className="productButtonStyle button-color-brown"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default AutoSuggestion;
