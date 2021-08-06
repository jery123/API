module.exports = app => {
    const farmers = require("../controllers/farmer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Produit
    router.post("/", farmers.create);
  
    // Retrieve all farmers
    router.get("/", farmers.findAll);

    router.get("/:id", farmers.findOne);
  
    // Update a Produit with id
    router.put("/:id", farmers.update);
  
    // Delete a Produit with id
    router.delete("/:id", farmers.delete);
  
    // Delete all farmers
  router.delete("/", farmers.deleteAll);
  
    app.use('/api/farmers', router);
  };