import React, {useEffect } from "react";
import { connect } from "react-redux";
import "../Layout/BookCard.css";
import { fetchBook, setLoading } from "../../actions/searchActions";

import Spinner from "../Layout/Spinner";

const Book =(props)=>{

  useEffect(() => {
    props.fetchBook(props.match.params.id)
    props.setLoading();
    
  }, []);
  
 
    const { loading, book } = props;

    let bookInfo = "";
    bookInfo =
      book !== undefined && book.volumeInfo !== undefined ? (
        <div class="main">
          <div class="cards">
            <div class="cards_item_detail">
              <div class="card_detail">
                <div class="card_image">
                  <img
                    className="imgSizeDetail"
                    src={
                      book.volumeInfo !== undefined &&
                      book.volumeInfo.imageLinks !== undefined
                        ? book.volumeInfo.imageLinks.smallThumbnail
                        : "No image loaded"
                    }
                  ></img>
                </div>
                <div class="card_content_detail">
                  <h2 class="card_title">
                    {book.volumeInfo !== undefined ? (
                      <h2>{book.volumeInfo.title}</h2>
                    ) : (
                      "No title found"
                    )}
                  </h2>
                  {book.volumeInfo.authors !== undefined ? (
                    <h4 class="card_title">{book.volumeInfo.authors}</h4>
                  ) : (
                    "No author found"
                  )}
                  {book.volumeInfo.publisher !== undefined ? (
                    <h4 class="card_title">{book.volumeInfo.publisher}</h4>
                  ) : (
                    "No publisher found"
                  )}

                  {book.volumeInfo.publishedDate !== undefined ? (
                    <h6 class="card_title">{book.volumeInfo.publishedDate}</h6>
                  ) : (
                    "No publishedDate found"
                  )}

                  {book.volumeInfo !== undefined ? (
                    <h6 class="card_title">{book.volumeInfo.description}</h6>
                  ) : (
                    "No description found"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "No book found !"
      );

    let content = loading ? <Spinner /> : bookInfo;
    return <div className="row">{content}</div>;
  
}
const mapStateToProps = (state) => ({
  loading: state.books.loading,
  book: state.books.book,
});
export default connect(mapStateToProps, { fetchBook, setLoading })(Book);

