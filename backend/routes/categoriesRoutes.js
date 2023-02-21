import  express  from "express";
import Categories from "../models/categoriesModel.js";

const categoriesRouter = express.Router();
categoriesRouter.get('/', async(req, res) => {
    const categories = await Categories.find(); 
    res.send(categories)
});

/* categoriesRouter.get('/', (req, res) => {
  res.send(data.categories);
}); */
export default categoriesRouter;

