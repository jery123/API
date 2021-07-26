const express = require('express')
const router = express.Router()
const loginController =   require('../controllers/loginController');

// Retrieve all logins
router.get('/', loginController.findAll);

// Create a new login
router.post('/', loginController.create);

// Retrieve a single login with id
router.get('/:id', loginController.findById);

// Update a login with id
router.put('/:id', loginController.update);

// Delete a login with id
router.delete('/:id', loginController.delete);

// Get a login content

// router.get('/content/:login_id', loginController.getloginContent);



module.exports = router