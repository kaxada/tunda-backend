const route = require("express").Router();
const {
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

//@desc     GET all products from database
//@route    GET /api/products
//@access   public
route.get("/", getAllProducts);

//@desc     GET product by id from database
//@route    GET /api/products/:id
//@access   public
route.get("/", getProductById);

module.exports = route;
