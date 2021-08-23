import { Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductsService";
class ProductController {
    public async create(request: Request, response: Response): Promise <Response> {
        
        // recupera os dados para inserção
        let {name, price, quantity} = request.body;

        //cria um objeto da classe CreateProductService
        let createProduct = new CreateProductService()

        // executa a inserção
        let product = await createProduct.execute({
            name, price, quantity
        })
        // retorno produto inserido
        return response.json(product);
    }
}
export default ProductController