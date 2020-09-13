import { v4 as uuidv4 } from "uuid";

export const BookReducer = (state, action )=>{

    switch (action.type) {
        case 'Add_Book':
            return [
                ...state,
                {
                    title:action.book.title,
                    author:action.book.author,
                    id:uuidv4()
                }
            ]
            break;
        case 'Remove_Book':
            return  state.filter(book=>book.id !== action.id)
        default:
            return state   
            
    }

}