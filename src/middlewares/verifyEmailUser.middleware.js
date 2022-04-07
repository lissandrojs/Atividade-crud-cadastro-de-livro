import users from "../database/users/index.js"

const verifyEmailUser =(request,response,next)=>{
    const {email} = request.body

    const userExists = users.find((item)=> item.email === email)

    if(userExists){
        return response.status(400).json({message:"Email ja existe"})
    }

    next()

}

export default verifyEmailUser