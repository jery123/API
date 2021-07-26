module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Produit
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // // Retrieve all published users
    // router.get("/published", users.findAllPublished);
  
    // // Retrieve all unpublished users
    // router.get("/unpublished", users.findAllUnPublished);
  
    // Retrieve a single Produit with id
    router.get("/:id", users.findOne);
  
    // Update a Produit with id
    router.put("/:id", users.update);
  
    // Delete a Produit with id
    router.delete("/:id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);

    // Retrieve all register users
    router.get("/registerlist", users.registerList);
  
    // Retrieve all login users
    router.get("/loginlist", users.loginList);
  
  
    app.use('/api/users', router);
  };