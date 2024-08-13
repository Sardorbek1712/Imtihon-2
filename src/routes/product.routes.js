import { Router } from "express";
import { createProduct, getAllProduct } from "../controller/product.controller.js";

export const productRoutes = Router();

productRoutes
.post("/products/add",createProduct)
.get("/products/all",getAllProduct)
// .get("/:productId",getProductById)
// .put("/:productId",updateProduct)
// .delete("/delete/:productId",deleteProduct)