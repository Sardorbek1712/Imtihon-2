import { fetchData } from "../postgres/postgres.js";
import formidable from "formidable";



const form = formidable({
    keepExtensions: true,
    uploadDir: "uploads"
  }
  )
// PODUCT YARATISH BAJARILDI:

export const createProduct = async (req, res) => {
    const [fields,files] = await form.parse(req)
    try{
      await fetchData('INSERT INTO product(title, description, price, image_url, rating,category_id, count) VALUES ($1,$2,$3,$4,$5,$6,$7);',
      fields.title[0],
      fields.description[0],
      fields.price[0],
      files.image_url[0].newFilename,
      fields.rating[0],
      fields.category_id[0],
      fields.count[0]
    )
    res.status(201).send({
      message: "Successfully created"})
  
    }catch(err){
      res.status(500).send({error: err.message})
    }
  }

//  PRODUCTLARNI CHIQARISH BAJARILDI:
export const getAllProduct = async (req,res) => {
    const response = fetchData(`SELECT * FROM product`)
    
    res.status(200).send({
        message : "Ok",
        data : response
    }
    )
}


