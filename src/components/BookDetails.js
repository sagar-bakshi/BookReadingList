import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';

export default function BookDetails({book}) {

    const {dispatch} = useContext(BookContext);
    return (
            <li onClick={()=>dispatch({type:'Remove_Book', id:book.id})}>
                <div className="book-title">{book.title}</div>
                <div className="book-author">- {book.author}</div>
            </li>
    )
}
