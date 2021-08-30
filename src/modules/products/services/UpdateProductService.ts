import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorn/entities/Product"
import ProductRepository from "../typeorn/respositories/ProductRepository"

interface IRequest{
    id: string;
    name: string;
    price: number;
    quanlity: number;
}

class UpdateProductService{
    public async execute({id, name, price, quanlity}: IRequest): Promise<Product>{
        let productRepository = getCustomRepository(ProductRepository)
        // verifica se existe para atualizar 
        let product = await productRepository.findOne(id)
        if(!product){
            throw new AppError('produto não existente')
        }
        let productExist = await productRepository.findByName(name)
        if(productExist){
            throw new AppError(`Produto já existente com este nome`)
        }

        product.name = name
        product.price = price
        product.quanlity = quanlity

        productRepository.save(product)

        return product
    }
}

export default UpdateProductService