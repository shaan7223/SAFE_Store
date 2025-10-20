import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModal.js";

const addProduct = asyncHandler(async (req, res) => {
    res.send("Hello")
})

export { addProduct };