'use strict';
var mysql=require('mysql');
const  dbConn = require('./../../database/db.config');
// const Path = require('./Commande');
// var dbConn = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'test' });
// dbConn.connect(function (err) { if (err) throw err; console.log("Database connected!"); });

//Employee object create
var Register = function(register){
    this.Nom = register.Nom;
    this.Prenom = register.Prenom;
    this.nom_Utilisateur = register.nom_Utilisateur;
    // this.role = register.role;
    this.telephone = register.telephone;
    this.email = register.email;
    this.mdp = register.mdp;
    this.confirm_Mdp = register.confirm_Mdp;
};

Register.create = function (newRegister, result) {
    dbConn.query("INSERT INTO registers set ? ", newRegister, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        // } else if(newRegister.confirm_Mdp !=newRegister.mdp){
        //     return res.status(422).json({
        //         message: "Vérifier la confirmation de votre mot de passe ! ! !",
        //     });
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

///Utilisateur de type client (role=0)
Register.findById = function (id, result) {
    dbConn.query("SELECT * FROM registers WHERE is_deleted=0 AND id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Register.findAll = function (result) {
    dbConn.query("SELECT * FROM registers WHERE is_deleted=0 ", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            //console.log('registers : ', res);
            result(null, res);
        }
    });
};

Register.update = function(id, register, result){
    dbConn.query("UPDATE registers SET Nom =?, Prenom =?, nom_Utilisateur =?, telephone =?, email =?, mdp =?, confirm_Mdp =? WHERE id = ? ", [ register.Nom, register.Prenom, register.nom_Utilisateur,  register.telephone, register.email , register.mdp, register.confirm_Mdp , id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else if (newRegister.confirm_Mdp != newRegister.mdp) {
                return res.status(422).json({
                    message: "Vérifier la confirmation de votre mot de passe ! ! !",
                });
        }else{
            result(null, res);
        }
    });
};


Register.delete = function(id, result){
    dbConn.query("UPDATE registers SET is_deleted=1 WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

//get commande

Register.getCommande = function(register_Id, result){
    // let test = checkPathValidity(register_Id);
    // console.log(test)
    dbConn.query("SELECT * FROM Commande WHERE is_deleted = 0 AND register_Id = ?", [register_Id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            //console.log('contents : ', res);
            result(null, res);
        }
    });
}


module.exports= Register;
