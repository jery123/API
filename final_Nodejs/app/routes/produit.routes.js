module.exports = app => {
    const produits = require("../controllers/produit.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Produit
    router.post("/", produits.create);
  
    // Retrieve all produits
    router.get("/", produits.findAll);
  
    // Retrieve all published produits
    router.get("/published", produits.findAllPublished);
  
    // Retrieve all unpublished produits
    router.get("/unpublished", produits.findAllUnPublished);
  
    // Retrieve a single Produit with id
    router.get("/:id", produits.findOne);
  
    // Update a Produit with id
    router.put("/:id", produits.update);
  
    // Delete a Produit with id
    router.delete("/:id", produits.delete);
  
    // Delete all produits
    router.delete("/", produits.deleteAll);
  
    app.use('/api/produits', router);
  };