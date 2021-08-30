// utilizando dependência do express
import { Router } from "express";
import ProductController from "../controllers/ProductController";

let productRoute = Router()

let productController= new ProductController()

productRoute.get('/', productController.index) // todos produtos
productRoute.get('/:id', productController.show) // um produto
productRoute.post('/', productController.create) // criar
productRoute.delete('/:id', productController.delete) // remover
productRoute.put('/:id', productController.update) // atualizar

export default productRoute