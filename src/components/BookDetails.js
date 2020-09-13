// eslint-disable-next-line
import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';

export default function BookDetails({book}) {

    const {dispatch} = useContext(BookContext);
    return (
            <li onClick={()=>dispatch({type:'Remove_Book', id:book.id})}>
                <div className="book-title">{book.title}</div>
                <div className="book-author">-&nbsp; {book.author}</div>
                <div className="book-date">-&nbsp; {book.date}</div>
            </li>
    )
}
