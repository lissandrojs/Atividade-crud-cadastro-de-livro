import createUserService from "../../services/userServices/createUser.service.js"
import deleteUserService from "../../services/userServices/delete.service.js"
import listUserService from "../../services/userServices/listUser.service.js"
import updateUserService from "../../services/userServices/updateUser.service.js"

import userLoginService from "../../services/userServices/userLogin.service.js"

export default class usersController{

    async store (request,response){
        const {name,email,password} = request.body

        try {
            const newUser = await createUserService({name,email,password})
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
        const {id} = request.params
        const {name,email,password} = request.body
        
        try{
            const updateUser = updateUserService({id,name,email,password})
            return response.json(updateUser) 

        }catch(err){
            return response.status(400).json({
                status : "error",
                message : err.message,
            })
        }

    }

    delete(request,response){
        const {id} = request.params

        try{
            deleteUserService({id})
            return response.status(201).json()


        }catch(err){
            return response.status(400).json({
                status : "error",
                message : err.message
            })

        }

    }

    userLoginController (request,response){

        const {email,password} = request.body

        const userLogin = userLoginService(email,password)
        return response.json(userLogin)

    }

}