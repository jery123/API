'use strict';
var mysql=require('mysql');
var dbConn = require('./../../database/db.config');


//Employee object create
var Commande = function(commande){
    this.farm_Id = commande.farm_Id;
    this.prod_Id = commande.prod_Id;
    this.register_Id = commande.register_Id;
    this.product_Name = commande.product_Name;
    this.quantity = commande.quantity;
    this.prix_Unitaire = commande.prix_Unitaire;
    this.Total = commande.Total;
    this.status = commande.status;
};


Commande.create = function (newCommande, result) {
    dbConn.query("INSERT INTO commandes set ? ", newCommande, function (err, res) {
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

Commande.update = function (id, Commande, result) {
    dbConn.query("UPDATE commandes SET product_Name =?,quantity =? ",[ Commande.product_Name, Commande.quantity,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};


Commande.delete = function(id, result){
    dbConn.query("UPDATE admin SET is_deleted=1 WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};


module.exports= Commande;
