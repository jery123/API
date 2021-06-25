const Farmer = require("../models/farmer.model.js");

// Create and Save a new Farmer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Farmer
    const farmer = new Farmer({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        E_mail: req.body.E_mail,
        Pays: req.body.Pays,
      Mobile: req.body.Mobile,
      Password: req.body.Password
    });
  
    // Save Farmer in the database
    Farmer.create(farmer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Farmer."
        });
      else res.send(data);
    });
  };

// Retrieve all Farmers from the database.
exports.findAll = (req, res) => {
  Farmer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving farmers."
        });
      else res.send(data);
    });
  };

// Find a single Farmer with a FarmerId
exports.findOne = (req, res) => {
  Farmer.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Farmer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Farmer with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

// Update a Farmer identified by the FarmerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Farmer.updateById(
      req.params.id,
      new Farmer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Farmer with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Farmer with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Farmer with the specified FarmerId in the request
exports.delete = (req, res) => {
  Farmer.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Farmer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Farmer with id " + req.params.id
          });
        }
      } else res.send({ message: `Farmer was deleted successfully!` });
    });
  };

// Delete all Farmer from the database.
exports.deleteAll = (req, res) => {
  Farmer.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all farmers."
        });
      else res.send({ message: `All Farmers were deleted successfully!` });
    });
  };
