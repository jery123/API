const express = require('express')
const router = express.Router()
const commandeController =   require('../controllers/commandeController');

// Retrieve all commandes
router.get('/', commandeController.findAll);

// Create a new commande
router.post('/', commandeController.create);

// Retrieve a single commande with id
router.get('/:id', commandeController.findById);

// Update a commande with id
router.put('/:id', commandeController.update);

// Delete a commande with id
router.delete('/:id', commandeController.delete);

// Get a commande content

// router.get('/content/:commande_id', commandeController.getcommandeContent);



module.exports = router