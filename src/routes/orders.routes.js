import { Router } from "express";
import { createOrder,getOrderById,updateOrder,deleteOrder } from "../controller/orders.controller.js";


export const orderRoutes = Router()

orderRoutes
    .post("/orders/add",createOrder)
    .get("/orders/:id",getOrderById)
    .put('/orders/update/:id', updateOrder)
    .delete('/orders/delete/:id', deleteOrder);