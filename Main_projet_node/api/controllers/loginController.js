'use strict';
const Login = require('../models/Login');
//const Content = require('../models/Content');

exports.findAll = function(req, res) {
    Login.findAll(function(err, login) {
        //console.log('controller')
        if (err) res.json({error: err});
        //console.log('res', login);
        res.send(login);
    });
};

exports.create = function(req, res) {
    const new_login = new Login(req.body);
    //handles null error
   // if(!req.body.role) new_login.role = 0;
    new_login.is_deleted = 0;
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Login.create(new_login, function(err, login) {
        if (err)
            res.send(err);
            res.json({
                error: false,
                message: "L'utilisateur a été ajouté avec succès !",
                data: login
            });
        });
    }
};

exports.findById = function(req, res) {
    Login.findById(req.params.id, function(err, login) {
        if (err) res.send(err);
        if (login.length == 0){
            res.json({message: "Pas trouvé "})
        }else{
            res.json(login);
        } 
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Login.update(req.params.id, new Login(req.body), function(err, login) {
            if (err) res.send(err);
            res.json({ error:false, message: 'Les informations sur l\'utilisateur ont été modifier avec succès ! '});
        });
    }
};


exports.delete = function(req, res) {
    Login.delete( req.params.id, function(err, login) {
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