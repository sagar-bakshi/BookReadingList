import { v4 as uuidv4 } from "uuid";
import dateFormat from 'dateformat';

export const BookReducer = (state, action )=>{
    let now = new Date();
    const date = dateFormat(now);

    switch (action.type) {
        case 'Add_Book':
            return [
                ...state,
                {
                    title:action.book.title,
                    author:action.book.author,
                    date:date,
                    id:uuidv4()
                }
            ]
        case 'Remove_Book':
            return  state.filter(book=>book.id !== action.id)
        default:
            return state   
            
    }

}