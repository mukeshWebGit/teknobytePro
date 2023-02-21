import express from "express";
import Product from "../models/productModel.js";
import Categories from "../models/categoriesModel.js";
import Slides from "../models/slideModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

 
const seedRouter = express.Router();
seedRouter.get('/', async(req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    await Categories.remove({});
    const createdCategories = await Categories.insertMany(data.categories);
    await Slides.remove({});
    const createdSlides = await Slides.insertMany(data.slides);
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({createdProducts, createdCategories, createdSlides, createdUser})
});

export default seedRouter;