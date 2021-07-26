const db = require("../models/produits");
const Produit = db.produits;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
        res.status(400).send({
            message: "Un champ ne doit pas etre vide ! ! !"
        });
        return;
    }
  
    // Create a Product
    const produit = {
        
        prodId: req.body.prodId,
        imgId: req.body.imgId,
        nom: req.body.nom,
        description: req.body.description,
      published: req.body.published ? req.body.published : false,
      quantité: req.body.quantité,
      prixUnitaire: req.body.prixUnitaire,
      uniteDeMesure: req.body.uniteDeMesure,
    };

     // Save Product in the database
     Produit.create(produit)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Une erreur s'est produite lors du traitement de la requete."
       });
     });
 };

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Produit.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite lors du traitement du produit."
        });
      });
};
  
// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Produit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Aucun produit trouvé avec pour id=" + id
        });
      });
  };

// Update a Product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Produit.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le a été modifié avec succès."
          });
        } else {
          res.send({
            message: `Impossible de modifié le produit dont l\'id =${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification du produit avec pour id=" + id
        });
      });
};
  
// Delete a Product with the specified id in the request
 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Produit.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Produit supprimer avec succès!"
          });
        } else {
          res.send({
            message: `Impossible de supprimer le produit dont l\'id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le produit dont l\' id=" + id
        });
      });
};
  
// Delete all Product from the database.
exports.deleteAll = (req, res) => {
    Produit.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Produits supprimer avec succès!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all produits."
        });
      });
};
  
// Find all published Products
exports.findAllPublished = (req, res) => {
    Produit.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving produits."
        });
      });
};
    
// Find all unpublished Products
exports.findAllUnPublished = (req, res) => {
    Produit.findAll({ where: { published: false } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving produits."
        });
      });
  };