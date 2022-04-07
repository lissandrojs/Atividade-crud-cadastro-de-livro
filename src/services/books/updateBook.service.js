import books from "../../database/books/index.js"

const updateBookService = (title,author,year,id)=>{

    const newUpdateBook = {
        title,
        author,
        year,
        id
    }

    const bookExistsIndex = books.findIndex((user)=> user.id === id)

    if(bookExistsIndex === -1){
        throw new Error("Usuario nao existe")
    }

    books[bookExistsIndex] = {...books[bookExistsIndex],...newUpdateBook}

    return newUpdateBook
}

export default updateBookService