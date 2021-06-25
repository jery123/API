module.exports = app => {
  const produit = require("../controllers/produit.controller.js");

  // Create a new Produit
  app.post("/produit", produit.create);

  // Retrieve all Produit
  app.get("/produit", produit.findAll);

  // Retrieve a single Produit with produitId
  app.get("/produit/:id", produit.findOne);

  // Update a Produit with produitId
  app.put("/produit/:id", produit.update);

  // Delete a Produit with produitId
  app.delete("/produit/:id", produit.delete);

  // Create a new Produit
  app.delete("/produit", produit.deleteAll);
};