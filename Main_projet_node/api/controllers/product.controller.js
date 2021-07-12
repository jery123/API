'use strict';
const product_controller = require('../models/product.model');
// const Question = require('../models/Question');

exports.findAll = function(req, res) {
    Content.findAll(function(err, content) {
        //console.log('controller')
        if (err) return res.json({error: err});
        //console.log('res', content);
        res.send(content);
    });
};


exports.create = function(req, res) {
    const new_content = new Content(req.body);
    new_content.is_deleted = 0;
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Content.create(new_content, function(err, content) {
        if (err) return res.json(err);
            res.json({
                error: false,
                message: "content added successfully!",
                data: content
            });
        });
    }
};



exports.findById = function(req, res) {
    Content.findById(req.params.id, function(err, content) {
        if (err) return res.send(err);
        if (content.length == 0){
            res.json({message: "Not found"})
        }else{
            res.json(content);
        } 
    });
};



exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        return res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Content.update(req.params.id, new Content(req.body), function(err, content) {
            if (err) return res.send(err);
            res.json({ error:false, message: 'content successfully updated' });
        });
    }
};



exports.delete = function(req, res) {
    Content.delete( req.params.id, function(err, content) {
        if (err) return res.send(err);
        res.json({ error:false, message: 'content successfully deleted' });
    });
};

exports.getContentquestion = function(req, res) {
    
    Question.getPathquestion(req.params.content_id, function(err, question) {
        if (err) return res.send(err);
        if (question.length == 0){
            return res.json({message: 'No Question found for this content'})
        }else{
            res.json(question);
        } 
    });
    // }
};
// function checkPathValidity(req, res){
//     let test 
//     Content.checkPathValidity(req.params.path_id, function(err, content) {
//         if (err) return res.send(err);
//             console.log(content[0])
//             return content
//         })
//     return test;
// }


















































































// const db = require("../models");
// const Product = db.products;
// const Op = db.Sequelize.Op;

// // Create and Save a new Product
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.title) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a Product
//     const product = {
//       title: req.body.title,
//       description: req.body.description,
//       published: req.body.published ? req.body.published : false
//     };
  
//     // Save Product in the database
//     Product.create(product)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Product."
//         });
//       });
//   };

// // Retrieve all Products from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
//     Product.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving products."
//         });
//       });
//   };

// // Find a single Product with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     Product.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Product with id=" + id
//         });
//       });
//   };
// // Update a Product by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Product with the specified id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;
  
//     Product.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Product was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Product with id=" + id
//         });
//       });
// };
  
// exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     Product.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Product was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Product with id=" + id
//         });
//       });
//   };

// // Delete all Products from the database.
// exports.deleteAll = (req, res) => {
//     Product.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} Products were deleted successfully!` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all products."
//         });
//       });
//   };

// // Find all published Products
// exports.findAllPublished = (req, res) => {
//     Product.findAll({ where: { published: true } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving products."
//         });
//       });
//   };