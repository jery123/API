const express = require('express')
const router = express.Router()
const productController =   require('../controllers/productController');

// Retrieve all products
router.get('/', productController.findAll);

// Create a new product
router.post('/', productController.create);

// Retrieve a single product with id
router.get('/:id', productController.findById);

// Update a product with id
router.put('/:id', productController.update);

// Delete a product with id
router.delete('/:id', productController.delete);

// Get a product content

// router.get('/content/:product_id', productController.getproductContent);



module.exports = router