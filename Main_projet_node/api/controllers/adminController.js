'use strict';
const Admin = require('../models/Admin');
//const Content = require('../models/Content');

exports.findAll = function(req, res) {
    Admin.findAll(function(err, admin) {
        //console.log('controller')
        if (err) res.json({error: err});
        //console.log('res', admin);
        res.send(admin);
    });
};

exports.create = function(req, res) {
    const new_admin = new Admin(req.body);
    //handles null error
   // if(!req.body.role) new_admin.role = 0;
    new_admin.is_deleted = 0;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        RegAdminiAdminster.create(new_admin, function(err, admin) {
        if (err)
            res.send(err);
            res.json({
                error: false,
                message: "L'administrateur a été ajouté avec succès !",
                data: admin
            });
        });
    }
};

exports.findById = function(req, res) {
    Admin.findById(req.params.id, function(err, admin) {
        if (err) res.send(err);
        if (admin.length == 0){
            res.json({message: "Pas trouvé "})
        }else{
            res.json(admin);
        } 
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Admin.update(req.params.id, new Admin(req.body), function(err, admin) {
            if (err) res.send(err);
            res.json({ error:false, message: 'Les informations sur l\'administrateur ont été modifier avec succès ! '});
        });
    }
};


exports.delete = function(req, res) {
    Admin.delete( req.params.id, function(err, admin) {
        if (err) res.send(err);
        res.json({ error:false, message: 'Administrateur supprimé avec succès ' });
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