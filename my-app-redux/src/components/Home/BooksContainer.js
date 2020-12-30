import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import BookCard from "../Home/BookCard";

const BooksContainer = (props) => {
  const { books } = props;

  const [limitTo, setLimitTo] = useState(3);
  const onLoadMore = () => {
    setLimitTo(limitTo + 3);
  };
  const resetInterval = () => setLimitTo(3);
  let content = "";
  content =
  
     books && books.length > 0
      ? books
          .slice(0, limitTo)
          .map((book, index) => <BookCard key={index} book={book} />)
      : null;

  return (
    <div className="row">
      <div>{content}</div>

      <div className="">
          
        {books && books.length >= limitTo ? (
          <button
            className="productButtonStyle setWidth button-color-brown"
            onClick={onLoadMore}
          >
            Load More >>
          </button>
        ) : (
          <label className="setWidth">
            ~~~~~~~~~~~ No Suggestions ~~~~~~~~~~~
          </label>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books,
});

export default connect(mapStateToProps)(BooksContainer);
