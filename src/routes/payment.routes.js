import { Router } from "express";
import { createPayment,getAllPayments,getPaymentById,updatePayment,deletePayment } from "../controller/pament.controller.js";

export const paymentRoutes = Router()

paymentRoutes
    .post("/payments/add",createPayment)
    .get("/payments/all",getAllPayments)
    .get("/payments/:id",getPaymentById)
    .put("/payments/update/:id",updatePayment)
    .delete("/payments/delete/:id",deletePayment)
