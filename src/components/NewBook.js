import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext';

export default function NewBook() {
      const [title, setTitle]=useState('');
      const [author, setAuthor] = useState('');
      const {addBook} = useContext(BookContext);

      function submitHandler(e) {
          e.preventDefault();
          addBook(title,author);
          setTitle('');
          setAuthor('');
      }

    return (
        <div className="new-book">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Book Title" onChange={(e)=>setTitle(e.target.value)}   value={title} required/>
                    <input type="text" placeholder="Author Name" onChange={(e)=>setAuthor(e.target.value)}  value={author} required/>
                    <input type="submit"  value="Add Book"/>
                </form>
        </div>
    )
}
