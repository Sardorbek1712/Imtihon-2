import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan";
import { appConfig } from "./config/app.config.js";
import { categoryRoutes } from "./routes/category.routes.js";
import { productRoutes } from "./routes/product.routes.js";
import { customerRoutes } from "./routes/customer.routes.js";
import { orderRoutes } from "./routes/orders.routes.js";



const app = express()

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use("/api/v1",productRoutes)
app.use("/api/v1",categoryRoutes)
app.use("/api/v1",customerRoutes)
app.use("/api/v1",orderRoutes)


app.listen(appConfig.port, appConfig.host, () => {
    console.log(`listening on ${appConfig.port}...`);
});