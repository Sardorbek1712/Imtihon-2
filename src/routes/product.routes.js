import { Router } from "express";
import { createProduct,getProductById, getAllProducts,updateProduct,deleteProduct, } from "../controller/product.controller.js";

export const productRoutes = Router();

productRoutes
.post("/products/add",createProduct)
.get("/products/all",getAllProducts)
.get("/products/:id",getProductById)
.put("/products/update/:id",updateProduct)
.delete("/products/delete/:id",deleteProduct)