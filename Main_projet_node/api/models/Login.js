'use strict';
var mysql=require('mysql');
var dbConn = require('./../../database/db.config');


//Employee object create
var Login = function(login){
    // this.Nom = login.Nom;
    // this.Prenom = login.Prenom;
    this.nom_Utilisateur = login.nom_Utilisateur;
    this.status = login.status;
    //
    this.email = login.email;
    this.mdp = login.mdp;
    this.telephone = login.telephone;
    // this.confirm_Mdp = login.confirm_Mdp;
};


Login.create = function (newLogin, result) {
    dbConn.query("INSERT INTO farmers set (SELECT nom_Utilisateur,email,mdp FROM registers WHERE nom_Utilisateur=? AND (email=? AND mdp=? )", newLogin, function (err, res) {
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

Login.findById = function (id, result) {
    dbConn.query("SELECT * FROM farmers WHERE is_deleted=0 AND id = ?", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};


Login.findAll = function (result) {
    dbConn.query("SELECT * FROM farmers WHERE is_deleted=0 ", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            //console.log('registers : ', res);
            result(null, res);
        }
    });
};

Login.update = function(id, login, result){
    dbConn.query("UPDATE farmers SET nom_Utilisateur=?, status=?, email=?, mdp=?,telephone=? WHERE id = ? ", [ login.nom_Utilisateur, login.status, login.email , login.mdp, login.telephone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
// Login.updateMdp = function (id, login, result) {
//     dbConn.query("UPDATE farmers SET mdp=? ",[login.mdp,id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });
// };

Login.delete = function(id, result){
    dbConn.query("UPDATE farmers SET is_deleted=1 WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};


module.exports= Login;