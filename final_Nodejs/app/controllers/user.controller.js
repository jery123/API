const db = require("../models/users");
const User = db.users;
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

     // Save User in the database
     User.create(user)
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

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    User.findAll({ where: condition })
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
  
// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Aucun l\'utilisateur trouvé avec pour id=" + id
        });
      });
  };

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    User.update(req.body, {
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
  
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
              
                message: "l\'utilisateur supprimer avec succès!"
                
          });
        } else {
          res.send({
            message: `Impossible de supprimer  l\'utilisateur dont l\'id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le l\'utilisateur dont l\' id=" + id
        });
      });
};
  
// Delete all User from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
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
  
// // Find all published Users
// exports.findAllPublished = (req, res) => {
//     User.findAll({ where: { published: true } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving les utilisateurs."
//         });
//       });
// };
    
// // Find all unpublished Users
// exports.findAllUnPublished = (req, res) => {
//     User.findAll({ where: { published: false } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving les utilisateurs."
//         });
//       });
// };
  



//Login user 
exports.update = (req, res) => {
    const id = req.params.id;
   
  User.update(req.body, {
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
            message: `Impossible de connecter L'utilisateur dont l\'id =${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de connexion de l\'utilisateur avec pour id=" + id
        });
      });
};
  


////get list of login user
exports.loginList = (req, res) => {
  const role = req.query.role;
  var condition = role ? req.query.role : true;

  User.findAll({ where: condition })
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


////get list of register user
exports.registerList = (req, res) => {
  const role = req.query.role;
  var condition = role ? req.query.role : false;

  User.findAll({ where: condition })
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

