import users from "../../database/users/index.js";

const updateUserService =({id,name,email,password})=>{
    const updateUser ={
        id,
        name,
        email,
        password
    }

    const userExistsIndex = users.findIndex((user)=> user.id === id)
  
    if(userExistsIndex === -1){
        throw new Error("Usuario nao existe")
    }
    users[userExistsIndex] = {...users[userExistsIndex], ...updateUser}

    return updateUser
}

export default updateUserService