import users from "../../database/users/index.js";
import { v4 as uuidv4 } from "uuid";

const createUserService = ({name,email,password})=>{
    const emailUser = users.find((user)=> user.email === email)

    if(emailUser){
        throw new Error("Email ja existe")
    }
    const newUser ={
        id : uuidv4(),
        name,
        email,
        password,
    }
    users.push(newUser)

    return newUser

}
export default createUserService