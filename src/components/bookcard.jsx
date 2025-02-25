// write the book component code here
// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-image" />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published:</strong> {book.year}</p>
      </div>
    </div>
  );
};

export default BookCard;