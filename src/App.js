import React from "react";
import "./styles.css";
import BookContextProvider from "./context/BookContext";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";

export default function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}
