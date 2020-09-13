import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Ultimate Python developer", author: "Sagar Bakshi", id: 1 },
    { title: "Complete developer", author: "Sandy Kumar", id: 2 },
    { title: "Compelte Web Developer", author: "Rahul Sharma", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook: addBook, removeBook: removeBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
