const express = require('express')
const router = express.Router()
const registerController =   require('../controllers/registerController');

// Retrieve all registers
router.get('/', registerController.findAll);

// Create a new register
router.post('/', registerController.create);

// Retrieve a single register with id
router.get('/:id', registerController.findById);

// Update a register with id
router.put('/:id', registerController.update);

// Delete a register with id
router.delete('/:id', registerController.delete);

// Get a register content

// router.get('/content/:register_id', registerController.getregisterContent);



module.exports = router