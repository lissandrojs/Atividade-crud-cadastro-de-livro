import users from "../../database/users/index.js";
import { v4 as uuidv4 } from "uuid";
import * as  bcrypt from 'bcrypt'



const createUserService = async ({name,email,password})=>{


    const hashedPassword = await bcrypt.hash(password,10)
    const newUser ={
        id : uuidv4(),
        name,
        email,
        password: hashedPassword
    }
    users.push(newUser)

    return newUser

}
export default createUserService