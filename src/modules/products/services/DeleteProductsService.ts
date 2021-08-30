// criar regra de negocio para remover um produto
// isso deve ser feito aqui no service e não no controller

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import ProductRepository from "../typeorn/respositories/ProductRepository";

// vamos criar uma interface - tipo de dados 
interface IRequest {
    id: string
}

class DeleteProductService {

     // vamos fazer o método assíncrono execute
    public async execute({id}: IRequest): Promise<void> {
        //recuperar o repositorio do produto
        let productRepository = getCustomRepository(ProductRepository)
        // procura pelo produto que sera removido
        let  ProductExist = await productRepository.findOne(id)
        if(!ProductExist) {
            throw new AppError(`Não existe o produto`) // lança o erro - sai do metodo
        }
        // o produto existe , vamos remover
        await productRepository.remove(ProductExist)
    }
}
export default DeleteProductService
