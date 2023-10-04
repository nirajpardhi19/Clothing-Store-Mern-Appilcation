// productController.js
const productService = require("../services/product.service.js")

// Create a new product
const createProduct=async(req,res)=>{
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

// Delete a product by ID
const deleteProduct=async(req,res)=>{
  const productId = req.params.id;
  try {
    const product = await productService.deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error:error.message });
  }
}

// Update a product by ID
const updateProduct=async(req,res)=>{
  const productId = req.params.id;
  try {
    
    const product = await productService.updateProduct(productId, req.body);
    return res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Get all products
// async function getAllProducts(req, res) {
//   try {
//     const products = await productService.getAllProducts();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Find a product by ID
const findProductById=async (req,res)=>{
  const productId = req.params.id;
  try {

    const product = await productService.findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error:error.message });
  }
}

// Find products by category
// async function findProductByCategory(req, res) {
//   try {
//     const category = req.params.category;
//     const products = await productService.findProductByCategory(category);
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Search products by query
// async function searchProduct(req, res) {
//   try {
//     const query = req.params.query;
//     const products = await productService.searchProduct(query);
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }

// Get all products with filtering and pagination
const getAllProducts=async (req,res)=>{
  const productId = req.params.id;
  try {

    const products = await productService.getAllProducts(req.query);

    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}

const createMultipleProduct= async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.createMultipleProduct(req.body)
    res
      .status(201)
      .send({ message: "Products Created Successfully" });
  } catch (error) {
    res.status(500).send({ error:error.message });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMultipleProduct

};
