import jwt from "jsonwebtoken"

const verifyAuthToken =(request,response,next)=>{
    let token = request.headers.authorization

    if(!token){
        return response.status(401).json("Esta sem o token de autenticação")
    }

    jwt.verify(token,"SECRET_KEY", (error,decoded)=>{
        if(error){
            console.log(error)
            return response.status(401).json({message : "Token Invalido"})
        }
       next()
    })
}
export default verifyAuthToken