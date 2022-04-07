import createBookService from "../../services/books/createBook.service.js";
import deleteBookService from "../../services/books/deleteBook.service.js";
import listBookService from "../../services/books/listBook.service.js";
import updateBookService from "../../services/books/updateBook.service.js";

export default class BooksController {
  /*Criar */
    store(request,response){
      const {title,author,year} = request.body

      try {
        const createBook = createBookService(title,author,year)
        return response.json(createBook)
      } 
      catch (err) {
      return response.status(400).json({
        status: "error",
        message: err.message,
      })}

    }
    /*Listar */
    index(request,response){

        const listBooks = listBookService()
        return response.json(listBooks)
      
    }
    /*Atualizacao total */
    update(request,response){
      
      const {title,author,year} = request.body
      const {id} = request.params

        const updateBook = updateBookService(title,author,year,id)
        return response.json(updateBook)

    }
    /*Deletar */
    delete(request,response){

      const {id} = request.params
      
      try{
        deleteBookService(id)
        return response.status(201).json()


    }catch(err){
        return response.status(400).json({
            status : "error",
            message : err.message
        })
      

    }
  }
}