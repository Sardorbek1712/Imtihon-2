import { Router } from "express";
import { createOrder } from "../controller/orders.controller.js";


export const orderRoutes = Router()

orderRoutes
    .post("/orders/add",createOrder)
    // .get("/customers/all",getAllCustomers)
    // .get("/customers/:id",getCustomerById)
    // .delete('/customers/delete/:id', deleteCustomer)
    // .put('/customers/update/:id', updateCustomer);