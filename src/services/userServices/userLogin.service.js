import users from "../../database/users/index.js";
import jwt from "jsonwebtoken"
import * as  bcrypt from 'bcrypt'

const userLoginService = (email,password) =>{

    const  userEmail = users.find((item)=>item.email === email)

    const passwordMatch = bcrypt.compareSync(password,userEmail.password)

    if(!userEmail){
        throw new Error ("Email ou senha invalidos")
    }
    if(!passwordMatch){
        throw new Error ("Email ou senha invalidos")
    }

    const token = jwt.sign({email:email},"SECRET_KEY", {expiresIn: "24h"})

    return {token}

}

export default userLoginService