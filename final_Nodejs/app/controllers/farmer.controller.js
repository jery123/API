const db = require("../models/farmers");
const Farmer = db.farmers;
const Op = db.Sequelize.Op;

// Create and Save a new farmer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
        res.status(400).send({
            message: "Un champ ne doit pas etre vide ! ! !"
        });
        return;
    }
  
    // Create a farmer
    const farmer = {
          nom:  req.body.nom ,
          prenom:  req.body.prenom ,
          userName:  req.body.userName,
          email:   req.body.email,
          mdp: req.body.mdp,
          experience: req.body.experience,
          ville: req.body.ville,
          telephone: req.body.telephone,                  
        //   role:  req.body.experience ,
        //   is_delete:  req.body.experience ,
        // imgId: req.body.imgId,
        // nom: req.body.nom,
        // description: req.body.description,
        // published: req.body.published ? req.body.published : false
    };

     // Save farmer in the database
     Farmer.create(farmer)
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

// Retrieve all farmer from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Farmer.findAll({ where: condition })
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
  
// Find a single Farmer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Farmer.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Aucun l\'utilisateur trouvé avec pour id=" + id
        });
      });
  };

// Update a Farmer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Farmer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Le a été modifié avec succès."
          });
        } else {
          res.send({
            message: `Impossible de modifié le l\'utilisateur dont l\'id =${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification du l\'utilisateur avec pour id=" + id
        });
      });
};
  
// Delete a Farmer with the specified id in the request
 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Farmer.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
              
                message: "Producteur supprimer avec succès!"
                
          });
        } else {
          res.send({
            message: `Impossible de supprimer  le producteur dont l\'id=${id}. \n Producteur pas trouvé!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le producteur dont l\' id=" + id
        });
      });
};
  
// Delete all Farmer from the database.
exports.deleteAll = (req, res) => {
    Farmer.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Utilisateur supprimer avec succès!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all l\'utilisateurs."
        });
      });
};
//Modifier les infos sur un producteur
exports.update = (req, res) => {
    const id = req.params.id;
   
  Farmer.update(req.body, {
    role:  true,
    where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Connexion ok !"
          });
        } else {
          res.send({
            message: `Impossible de connecter L'utilisateur dont l\'id =${id}. \n Pas trouver !`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de connexion de l\'utilisateur avec pour id=" + id
        });
      });
};
  