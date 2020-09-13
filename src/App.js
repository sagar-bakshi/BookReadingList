import React from "react";
import "./styles.css";
import BookContextProvider from "./context/BookContext";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
        <NewBook/>
      </BookContextProvider>
    </div>
  );
}
