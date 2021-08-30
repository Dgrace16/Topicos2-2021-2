import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Product from "../typeorn/entities/Product";
import ProductRepository from "../typeorn/respositories/ProductRepository";

// vamos tratar as validações 
interface IRequest {
    name: string,
    price: number
    quantity: number
}


// criando  a classe
class CreateProductService {
    //criar um método chamado execute para executar a inserção
    //recebe os dados do produto e retorna o produto inserido
    public async execute({name, price, quantity}: IRequest): Promise<Product> {

        // obter o repositório do produto 
        let productRepository = getCustomRepository(ProductRepository)

        //verificar se produto existe
        let ProductExists = await productRepository.findByName(name);

        if (ProductExists) {
            console.log('Produto ja existe')
            throw new AppError(``)
        }

        //criar o produto para inserção
        let newProduct = productRepository.create({
            name, price, quantity
        })
        // efetivamente insere
        await productRepository.save(newProduct)
        //retorna o novo produto
        return newProduct
    }
    
}
export default CreateProductService