import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

export default function NavBar() {
  const { books } = useContext(BookContext);
  return (
    <nav className="navbar">
      <h1>My Readings</h1>
      <p>Currently you have {books.length} to get through...</p>
    </nav>
  );
}
