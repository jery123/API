const express = require('express')
const router = express.Router()
const adminController =   require('../controllers/adminController');

// Retrieve all admins
router.get('/', adminController.findAll);

// Create a new admin
router.post('/', adminController.create);

// Retrieve a single admin with id
router.get('/:id', adminController.findById);

// Update a admin with id
router.put('/:id', adminController.update);

// Delete a admin with id
router.delete('/:id', adminController.delete);

// Get a admin content

// router.get('/content/:admin_id', adminController.getinadmContent);



module.exports = router