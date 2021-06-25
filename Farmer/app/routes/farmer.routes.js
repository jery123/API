module.exports = app => {
    const farmers = require("../controllers/farmer.controller.js");
  
    // Create a new Farmer
    app.post("/farmers", farmers.create);
  
    // Retrieve all Farmer
    app.get("/farmers", farmers.findAll);
  
    // Retrieve a single Farmer with FarmerId
    app.get("/farmers/:farmerId", farmers.findOne);
  
    // Update a Farmer with FarmerId
    app.put("/farmers/:farmersId", farmers.update);
  
    // Delete a Farmer with FarmerId
    app.delete("/farmers/:farmerId", farmers.delete);
  
    // Create a new Farmer
    app.delete("/farmers", farmers.deleteAll);
  };