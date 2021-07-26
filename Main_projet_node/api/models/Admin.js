'use strict';
var mysql=require('mysql');
const  dbConn = require('./../../database/db.config');


//Employee object create
var Admin = function(admin){
    this.Nom = admin.Nom;
    this.Prenom = admin.Prenom;
    // this.nom_Utilisateur = admin.nom_Utilisateur;
    // this.status = admin.status;
    this.telephone = admin.telephone;
    this.email = admin.email;
    this.password = admin.password;
    // this.confirm_Mdp = admin.confirm_Mdp;
};

Admin.create = function (newAdmin, result) {
    dbConn.query("INSERT INTO farmers set ? ", newAdmin, function (err, res) {
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

Admin.findById = function (id, result) {
    dbConn.query("SELECT * FROM admin WHERE is_deleted=0 AND id = ?", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Admin.findAll = function (result) {
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

Admin.update = function(id, admin, result){
    dbConn.query("UPDATE admin SET Nom =?, Prenom =?, mail =?, password =?, telephone =?, e WHERE id = ? ", [ admin.Nom, admin.Prenom, admin.email , admin.password, admin.telephone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


Admin.delete = function(id, result){
    dbConn.query("UPDATE admin SET is_deleted=1 WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports= Admin;
