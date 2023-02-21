import  express  from "express";
import Slides from "../models/slideModel.js";

const slidesRouter = express.Router();
slidesRouter.get('/', async(req, res) => {
    const slides = await Slides.find(); 
    res.send(slides); 
});

/* slidesRouter.get('/', (req, res) => {
  res.send(data.slides);
}); */
 
  
export default slidesRouter;

