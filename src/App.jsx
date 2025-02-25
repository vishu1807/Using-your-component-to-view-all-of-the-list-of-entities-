import React from "react";
import BookCard from "./components/bookcard";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    image: "https://via.placeholder.com/150"
  }
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;