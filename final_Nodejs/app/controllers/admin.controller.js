const db = require("../models/admins");
const Admin = db.admins;
const Op = db.Sequelize.Op;

// Create and Save a new Admin
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nom) {
        res.status(400).send({
            message: "Un champ ne doit pas etre vide ! ! !"
        });
        return;
    }
  
    // Create a Admin
    const admin = {
          nom:  req.body.nom ,
          prenom:  req.body.prenom ,
          email:   req.body.email,
          mdp: req.body.mdp,
          experience: req.body.experience,
          telephone: req.body.telephone,                  
         };

     // Save Admin in the database
     Admin.create(admin)
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

// Retrieve all Admins from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null;
  
    Admin.findAll({ where: condition })
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
  
// Find a single Admin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Admin.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Aucun l\'utilisateur trouvé avec pour id=" + id
        });
      });
  };

// Update a Admin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Admin.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "L'administrateur a été modifié avec succès."
          });
        } else {
          res.send({
            message: `Impossible de modifié le l\'administrateur dont l\'id =${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur de modification du l\'administrateur avec pour id=" + id
        });
      });
};
  
// Delete a Admin with the specified id in the request
 
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Admin.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
              
                message: "l\'administrateur supprimer avec succès!"
                
          });
        } else {
          res.send({
            message: `Impossible de supprimer  l\'administrateur dont l\'id=${id}. Maybe Admin was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer le l\'administrateur dont l\' id=" + id
        });
      });
};
  
// Delete all Admin from the database.
exports.deleteAll = (req, res) => {
    Admin.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Administrateur supprimer avec succès!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all l\'utilisateurs."
        });
      });
};
  
// // Find all published Admins
// exports.findAllPublished = (req, res) => {
//     Admin.findAll({ where: { published: true } })
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
    
// // Find all unpublished Admins
// exports.findAllUnPublished = (req, res) => {
//     Admin.findAll({ where: { published: false } })
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
  



// //Login admin 
// exports.update = (req, res) => {
//     const id = req.params.id;
   
//   Admin.update(req.body, {
//     role:  true,
//     where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Connexion ok !"
//           });
//         } else {
//           res.send({
//             message: `Impossible de connecter L'utilisateur dont l\'id =${id}. Maybe Admin was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Erreur de connexion de l\'utilisateur avec pour id=" + id
//         });
//       });
// };
  


// ////get list of login Admin
// exports.loginList = (req, res) => {
//   const role = req.query.role;
//   var condition = role ? req.query.role : true;

//   Admin.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Une erreur s'est produite lors du traitement du produit."
//       });
//     });
// };


// ////get list of register Admin
// exports.registerList = (req, res) => {
//   const role = req.query.role;
//   var condition = role ? req.query.role : false;

//   Admin.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Une erreur s'est produite lors du traitement du produit."
//       });
//     });
// };

