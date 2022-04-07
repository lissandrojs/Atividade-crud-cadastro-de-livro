import books from "../../database/books/index.js";

const deleteBookService = (id)=>{

    const deleteBookIndex = books.findIndex((item)=>item.id === id)

    if(deleteBookIndex === -1){
        throw new Error("Usuario nao encontrado")
    }

    books.splice(deleteBookIndex,1)

}

export default deleteBookService