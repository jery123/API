module.exports = app => {
    const produits = require("../controllers/produit.controller.js");
  
    // Create a new Produit
    app.post("/produits", produits.create);
  
    // Retrieve all Produit
    app.get("/produits", produits.findAll);
  
    // Retrieve a single Produit with produitId
    app.get("/produits/:produitId", produits.findOne);
  
    // Update a Produit with produitId
    app.put("/produits/:produitId", produits.update);
  
    // Delete a Produit with produitId
    app.delete("/produits/:produitId", produits.delete);
  
    // Create a new Produit
    app.delete("/produits", produits.deleteAll);
  };