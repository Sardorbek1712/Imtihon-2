import { Router } from "express";
import { createCategory, getAllCategory,updateCategory,deleteCategory } from "../controller/category.controller.js";


export const categoryRoutes = Router()

categoryRoutes
    .post("/categories/add",createCategory)
    .get("/categories/all",getAllCategory)
    .delete('/categories/delete/:id', deleteCategory)
    .put('/categories/update/:id', updateCategory);