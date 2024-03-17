import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

const app = express();

app.get(`/`, (req, res) => {
    res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use(errorHandler);

app.use(notFound);

app.listen(port, () => console.log(`Server running on port ${port}`));
