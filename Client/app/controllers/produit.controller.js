const Produit = require("../models/produit.model.js");

// Create and Save a new Produit
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Produit
    const produit = new Produit({
        Nom: req.body.Nom,
        Quantité: req.body.Quantité,
        Unité_de_mesure: req.body.Unité_de_mesure,
        Status: req.body.Status,
        Prix_unitaire: req.body.Prix_unitaire
    });
  
    // Save Produit in the database
    Produit.create(produit, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Produit."
        });
      else res.send(data);
    });
  };

// Retrieve all Produits from the database.
exports.findAll = (req, res) => {
    Produit.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving produits."
        });
      else res.send(data);
    });
  };

// Find a single Produit with a ProduitId
exports.findOne = (req, res) => {
    Produit.findById(req.params.produitId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Produit with id ${req.params.produitId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Produit with id " + req.params.produitId
          });
        }
      } else res.send(data);
    });
  };

// Update a Produit identified by the produitId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Produit.updateById(
      req.params.produitId,
      new Produit(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Produit with id ${req.params.produitId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Produit with id " + req.params.produitId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Produit with the specified produitId in the request
exports.delete = (req, res) => {
    Produit.remove(req.params.produitId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Produit with id ${req.params.produitId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Produit with id " + req.params.produitId
          });
        }
      } else res.send({ message: `Produit was deleted successfully!` });
    });
  };

// Delete all Produits from the database.
exports.deleteAll = (req, res) => {
    Produit.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all produits."
        });
      else res.send({ message: `All Produits were deleted successfully!` });
    });
  };
