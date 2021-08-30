import { Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductsService";
import DeleteProductService from "../services/DeleteProductsService";
import ListProductService from "../services/ListProductService";
import ShowProductsService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";
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
    // criando o método para remover um produto no banco de dados
    public async delete(request: Request, response: Response):Promise<Response>{
        // o id do produto para remoção vira na URL
        let {id} = request.params
        // criar objeto de service
        let deleteProductService = new DeleteProductService();
        
        await deleteProductService.execute({id});

        return response.json([]);
    }
    // criando método de listagem 
    public async index(request: Request, response: Response): Promise<Response>{

        let listProductService = new ListProductService();

        let products = await listProductService.execute();

        return response.json(products);
    }
    // criar método para mostra um produto no banco
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showProductsService = new ShowProductsService
        let product =await showProductsService.execute({id})
        
        return response.json(product)
    }
    // criar método para atualizar um produto no banco
    public async update (request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let {name,quantity,price} = request.body

        let updateProductService = new UpdateProductService()
        let product = await updateProductService.execute({id,name,quantity,price})

        return response.json(product)
    }
     
}
export default ProductController