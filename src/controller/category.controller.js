import { fetchData } from "../postgres/postgres.js";


// KATEGORIYALARNI YARATISH BAJARILDI:
export const createCategory = async function (req, res) {
    try {
        const { name, image_url , category_id } = req.body;

        const newCategory = await fetchData(
            "INSERT INTO category (name, image_url, category_id) VALUES ($1, $2, $3) RETURNING *;",
            name, image_url, category_id
        );

        res.status(201).send({
            message: "Category created",
            data: newCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Category yaratishda ERROR",
            error: error.message
        });
    }
}

//////////////// HAMMA CATEGORIYALARNI CHIQARISH BAJARILDI:
export const getAllCategory = async function(req, res) {
        const allCategories = await fetchData(
            "SELECT * FROM category WHERE category_id is NULL;"
        );

        for (const c of allCategories) {
            const subCategories = await fetchData(
                "SELECT * FROM category WHERE category_id = $1 RETURNING *;",
                c.id
            );
            c.subCategories = subCategories;
        }

        res.send({
            message: "Success",
            data: allCategories
        });
    }


// KATEGORIYALARNI ID ORQALI YANGILASH BAJARILDI:
export const updateCategory = async function(req, res) {
    try {
        const { name, category_id } = req.body;
        const { id } = req.params;

        const updatedCategory = await fetchData(
            "UPDATE category SET name = $1, category_id = $2 WHERE id = $3 RETURNING *; ",
            name,
            category_id, 
            id
        );
        if (updatedCategory.length === 0) {
            return res.status(404).send({
                message: "Category not found"
            });
        }

        res.send({
            message: "Category updated",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Category yangilashda XATOLIK",
            error: error.message
        });
    }
}

// KATEGORIYALARNI ID ORQALI O`CHIRISH BAJARILDI:
export const deleteCategory = async function(req, res) {
    try {
        const { id } = req.params;

        const deletedCategory = await fetchData(
            "DELETE FROM category WHERE id = $1 RETURNING *;",
            id
        );

        if (deletedCategory.length === 0) {
            return res.status(404).send({
                message: "Category not found"
            });
        }

        res.send({
            message: "Category deleted",
            data: deletedCategory
        });
    } catch (error) {
        res.status(500).send({
            message: "Category ochirishda ERROR",
            error: error.message
        });
    }
}
