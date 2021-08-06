const db = require("../models/clients");
const Client = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
        res.status(400).send({
            message: "Un champ ne doit pas etre vide ! ! !"
        });
        return;
    }
  
    // Create a User
    const user = {
          nom:  req.body.nom ,
          prenom:  req.body.prenom ,
          email:   req.body.email,
          mdp: req.body.mdp,
          ville: req.body.ville,
          telephone: req.body.telephone,
    };

     // Save Client in the database
     Client.create(user)
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

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Client.findAll({ where: condition })
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
  
// Find a single Clkient with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Client.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Aucun client trouvé avec pour id=" + id
        });
      });
  };

// Update a Client by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Client.update(req.body, {
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
  
// Delete a User with the specified id in the request
 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Client.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
              
                message: "le client a été supprimé avec succès!"
                
          });
        } else {
          res.send({
            message: `Impossible de supprimer  le client dont l\'id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le client dont l\' id est " + id
        });
      });
};
  
// Delete all User from the database.
exports.deleteAll = (req, res) => {
    Client.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} clients supprimés avec succès!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Une erreur s'est produite lors de la suppression des clients ."
        });
      });
};
  



//Modifier les infos sur un client 
exports.update = (req, res) => {
    const id = req.params.id;
   
  Client.update(req.body, {
    role:  true,
    where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Connexion ok ! \n Modification avec succès "
          });
        } else {
          res.send({
            message: `Impossible de modifier verifiez vos informtions SVP `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de connexion "
        });
      });
};
  
