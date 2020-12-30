import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Layout/BookCard.css";
const BookCard =(props)=> {

    const { book } = props;
    return (
      <div class="main">
        <div class="cards">
          <div class="cards_item">
            <div class="card">
              <div class="card_image">
                <img
                  className="imgSize"
                  alt="Book Cover"
                  src={
                    book.volumeInfo !== undefined &&
                    book.volumeInfo.imageLinks !== undefined
                      ? book.volumeInfo.imageLinks.smallThumbnail
                      : "No image loaded"
                  }
                ></img>
              </div>
              <div class="card_content">
                <h2 class="card_title">
                  {book.volumeInfo !== undefined &&
                  book.volumeInfo.title !== undefined ? (
                    book.volumeInfo.title
                  ) : (
                    <h2 class="card_title">No title found</h2>
                  )}
                </h2>
                
                <Link className="btn card_btn" to={"/Book/" + book.id}>
                  Book Details
                  <i className="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default BookCard;
