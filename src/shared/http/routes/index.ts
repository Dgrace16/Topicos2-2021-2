// utilizar a classe Routes do express
import {request, Router} from "express"
import { resolveTypeReferenceDirective } from 'typescript'

import productRoute from "../../../modules/products/routes/routes.product"

// criar um objeto da rota
let routes = Router()

routes. use('/products', productRoute)
//criando uma rota GET raiz
routes.get('/',(request, response)=>{
    //o que sera retornado para o usuário em json
    return response.json({
        message:'It is working'
    })
})
// exportando o objeto
export default routes;