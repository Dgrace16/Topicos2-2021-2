import { getCustomRepository } from "typeorm";
import Product from "../typeorn/entities/Product";
import ProductRepository from "../typeorn/respositories/ProductRepository";

class ListProductService{

    public async execute(): Promise<Product[]>{
        
        let productRepository = getCustomRepository(ProductRepository)
        let product = productRepository.find();
        // retornna todos os produtos
        
        return product;

    }

}
export default ListProductService