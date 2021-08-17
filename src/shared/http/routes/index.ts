// utilizar a classe Routes do express
import {request, Router} from "express"
import { resolveTypeReferenceDirective } from 'typescript'

// criar um objeto da rota
let routes = Router()

//criando uma rota GET raiz
routes.get('/',(request, response)=>{
    //o que sera retornado para o ususario em json
    return response.json({
        message:'It is working'
    })
})
// exportando o objeto
export default routes;