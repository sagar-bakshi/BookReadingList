import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

export default function BookList() {

        const {books} = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
                <ul>
                        {books.map(book=>{
                            return  (<BookDetails book={book} key={book.id}/> )
                                   })}
                </ul>
        </div>
    )  :(
        <div className="empty">No Books To Read Enjoy Free Time....</div>
      )
}
