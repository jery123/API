'use strict';
const Commande = require('../models/Commande');
//const Content = require('../models/Content');

exports.findAll = function(req, res) {
    Commande.findAll(function(err, commande) {
        //console.log('controller')
        if (err) res.json({error: err});
        //console.log('res', commande);
        res.send(commande);commande
    });
};

exports.create = function(req, res) {
    const new_commande = new Commande(req.body);
    //handles null error
    //if(!req.body.role) new_commande.role = 0;
    new_commande.is_deleted = 0;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        RegAdminiAdminster.create(new_commande, function(err, commande) {
        if (err)
            res.send(err);
            res.json({
                error: false,
                message: "La commande a été ajouté avec succès !",
                data: commande
            });
        });
    }
};

exports.findById = function(req, res) {
    Commande.findById(req.params.id, function(err, commande) {
        if (err) res.send(err);
        if (commande.length == 0){
            res.json({message: "Pas trouvé "})
        }else{
            res.json(commande);
        } 
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Commande.update(req.params.id, new Commande(req.body), function(err, commande) {
            if (err) res.send(err);
            res.json({ error:false, message: 'Les informations sur l\'commande ont été modifier avec succès ! '});
        });
    }
};


exports.delete = function(req, res) {
    Commande.delete( req.params.id, function(err, commande) {
        if (err) res.send(err);
        res.json({ error:false, message: 'Commande supprimé avec succès ' });
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