import { Router } from "express";
import { createContract,getContractById,deleteContract,getAllContracts,updateContract, } from "../controller/contract.controller.js";

export const contractRoutes = Router()

contractRoutes
    .post("/contracts/add",createContract)
    .get("/contracts/all",getAllContracts)
    .get("/contracts/:id",getContractById)
    .put("/contracts/update/:id",updateContract)
    .delete("/contracts/delete/:id",deleteContract)
