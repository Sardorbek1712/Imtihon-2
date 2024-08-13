import { Router } from "express";
import { createCustomer, getAllCustomers,getCustomerById,updateCustomer,deleteCustomer } from "../controller/customer.controller.js";


export const customerRoutes = Router()

customerRoutes
    .post("/customers/add",createCustomer)
    .get("/customers/all",getAllCustomers)
    .get("/customers/:id",getCustomerById)
    .delete('/customers/delete/:id', deleteCustomer)
    .put('/customers/update/:id', updateCustomer);