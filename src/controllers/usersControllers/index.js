import createUserService from "../../services/userServices/createUser.service.js"
import listUserService from "../../services/userServices/listUser.service.js"

export default class usersController{

    store(request,response){
        const {name,email,password} = request.body

        try {
            const newUser = createUserService({name,email,password})
            return response.status(201).json(newUser)  
    } 
    catch (err) {
     return response.status(400).json({
       status: "error",
       message: err.message,
     });
        
   }
}

    index(request,response){
        const listUsers = listUserService()

        return response.json(listUsers) 
    }

    update(request,response){

    }

    delete(request,response){

    }

}