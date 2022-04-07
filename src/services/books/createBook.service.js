import books from "../../database/books/index.js";
import { v4 as uuidv4 } from "uuid";

const createBookService =(title,author,year)=>{
    let currentId = 0
    const newBook = {
        title,
        author,
        year,
        id: uuidv4()

    }
    books.push(newBook)
    return newBook

}
export default createBookService