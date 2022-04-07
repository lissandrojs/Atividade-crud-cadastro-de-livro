import users from "../../database/users/index.js";

const deleteUserService =({id})=>{
    const deleteUserIndex = users.findIndex((item)=>item.id === id)

    if(deleteUserIndex === -1){
        throw new Error("Usuario nao encontrado")
    }

    users.splice(deleteUserIndex,1)
}

export default deleteUserService