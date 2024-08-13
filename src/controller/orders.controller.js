import { fetchData } from "../postgres/postgres.js";

// ORDER YARATISH BAJARILDI:
export const createOrder = async function (req,res) {
    const { created_at, customer_id, address,order_status } = req.body;
    const newOrder = await fetchData(
        "INSERT INTO orders (created_at,customer_id,address,order_status) VALUES ($1,$2,$3,$4) RETURNING *;",
        created_at, customer_id, address,order_status
    );
    if(!customer_id){
        res.status(404).send({
            message:"Not found Customer",
            error:error.message
        })
    }
    res.status(201).send({
        message:"Order Created",
        data: newOrder
    });
}


