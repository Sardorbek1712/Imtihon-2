import { fetchData } from "../postgres/postgres.js";


//// ORDERLAR UCHUN GetById methodi 
export async function getOrderById(req, res) {
    try {
        const { id } = req.params;
        const order = await fetchData("SELECT * FROM orders WHERE id = $1;", id);

        if (order.length === 0) {
            return res.status(404).send({
                message: "Order not found"
            });
        }

        res.send({
            message: "Success",
            data: order
        });
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving order",
            error: error.message
        });
    }
}


/// CREATE ORDER METHODI
export async function createOrder(req, res) {
    try {
        const {created_at, customer_id, order_status} = req.body;

        const newOrder = await fetchData(
            "INSERT INTO orders (created_at, customer_id, order_status) VALUES ($1, $2, $3) RETURNING *;",
            created_at, customer_id, order_status
        );

        res.status(201).send({
            message: "Order created",
            data: newOrder
        });
    } catch (error) {
        res.status(500).send({
            message: "Error creating order",
            error: error.message
        });
    }
}


// UPDATE ORDER METHODI
export async function updateOrder(req, res) {
    try {
        const { created_at, customer_id, order_status } = req.body;
        const { id } = req.params;

        const updatedOrder = await fetchData(
            "UPDATE orders SET created_at = $1, customer_id = $2, order_status = $3  WHERE id = $4 RETURNING *;",
            created_at, customer_id, order_status, id
        );

        if (updatedOrder.length === 0) {
            return res.status(404).send({
                message: "Order not found"
            });
        }

        res.send({
            message: "Order updated",
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).send({
            message: "Error updating order",
            error: error.message
        });
    }
}


export async function deleteOrder(req, res) {
    try {
        const { id } = req.params;

        const deletedOrder = await fetchData(
            "DELETE FROM orders WHERE id = $1 RETURNING *;",
            id
        );

        if (deletedOrder.length === 0) {
            return res.status(404).send({
                message: "Order not found"
            });
        }

        res.send({
            message: "Order deleted",
            data: deletedOrder
        });
    } catch (error) {
        res.status(500).send({
            message: "Error deleting order",
            error: error.message
        });
    }
}
