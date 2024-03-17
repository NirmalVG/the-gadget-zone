import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/ProductModel.js";

// @desc fetch all products
// @route GETG /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc fetch a products
// @route GETG /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error("Resource not found");
    }
});

export { getProducts, getProductById };