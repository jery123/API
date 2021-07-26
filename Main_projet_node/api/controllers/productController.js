'use strict';
const Product = require('../models/Product');
//const Content = require('../models/Content');

exports.findAll = function(req, res) {
    Product.findAll(function(err, product) {
        //console.log('controller')
        if (err) res.json({error: err});
        //console.log('res', product);
        res.send(product);
    });
};

exports.create = function(req, res) {
    const new_product = new product(req.body);
    //handles null error
   // if(!req.body.role) new_product.role = 0;
    new_product.is_deleted = 0;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Product.create(new_product, function(err, product) {
        if (err)
            res.send(err);
            res.json({
                error: false,
                message: "L'utilisateur a été ajouté avec succès !",
                data: product
            });
        });
    }
};

exports.findById = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if (err) res.send(err);
        if (product.length == 0){
            res.json({message: "Pas trouvé "})
        }else{
            res.json(product);
        } 
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Product.update(req.params.id, new product(req.body), function(err, product) {
            if (err) res.send(err);
            res.json({ error:false, message: 'Les informations sur l\'utilisateur ont été modifier avec succès ! '});
        });
    }
};


exports.delete = function(req, res) {
    Product.delete( req.params.id, function(err, product) {
        if (err) res.send(err);
        res.json({ error:false, message: 'Utilisateur supprimé avec succès ' });
    });
};


// exports.getPathContent = function(req, res) {

//     Content.getPathContent(req.params.path_id, function(err, content) {
//         if (err) return res.send(err);
//         if (content.length == 0){
//             return res.json({message: 'No content found'})
//         }else{
//             res.json(content);
//         } 
//     });
// };