

'use strict';
var mysql=require('mysql');
var dbConn = require('./../../database/db.config');
// const Path = require('./Path');


//Employee object create
var Product = function (product) {
  this.Farm_Id = product.Farm_Id;
  this.product_Name = product.product_Name;
  this.Description = product.Description;
  this.status = product.status;    
  this.Quantity = product.Quantity;
  this.measurement_unit = product.measurement_unit;
//   this.status = product.status;
  this.unit_price = product.unit_price;
  //this.localisation = product.localisation;
    
};

Product.create = function (newProduct, result) {
    dbConn.query("INSERT INTO products set ?", newProduct, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        // else if (newProduct.confirm_Mdp != newProduct.mdp) {
        //     return res.status(422).json({
        //         message: "Vérifier la confirmation de votre mot de passe ! ! !",
        //     });
        // }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Product.update = function(id, product, result){
    dbConn.query("UPDATE products SET Farm_Id ,product_Name =? ,Description =? ,status =? ,Quantity =? ,measurement_unit =? ,status =? ,unit_price =? WHERE id = ? ", [product.Farm_Idproduct.product_Nameproduct.Descriptionproduct.statusproduct.Quantityproduct.measurement_unitproduct.statusproduct.unit_price, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        // }
        // else if (newProduct.confirm_Mdp != newProduct.mdp) {
        //         return res.status(422).json({
        //             message: "Vérifier la confirmation de votre mot de passe ! ! !",
        //         });
        }else{
            result(null, res);
        }
    });
};


/*|----------------------------------------|
  |                 début                  |
  |                  du                    |
  |              traitement                |
  |         des produits non publiés       |
  |----------------------------------------|*/
Product.findById = function (id, result) {
    dbConn.query("SELECT * FROM products WHERE  id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

Product.findAll = function (result) {
    dbConn.query("SELECT * FROM products ", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            //console.log('products : ', res);
            result(null, res);
        }
    });
};


Product.delete = function(id, result){
    dbConn.query("DELETE * products SET WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

/*|----------------------------------------|
  |                 fin                    |
  |                  du                    |
  |              traitement                |
  |         des produits non publiés       |
  |----------------------------------------|*/











  /*|----------------------------------------|
    |                 début                  |
    |                  du                    |
    |              traitement                |
    |         des produits  publiés          |
    |----------------------------------------|*/

    // Product.validProdfindById = function (id, result) {
    //     dbConn.query("SELECT * FROM products WHERE status=1 AND id = ? ", id, function (err, res) {
    //         if(err) {
    //             console.log("error: ", err);
    //             result(err, null);
    //         }else{
    //             result(null, res);
    //         }
    //     });
    // };
    
    // Product.validProdfindAll = function (result) {
    //     dbConn.query("SELECT * FROM products WHERE status=1 ", function (err, res) {
    //         if(err) {
    //             console.log("error: ", err);
    //             result(null, err);
    //         }else{
    //             //console.log('products : ', res);
    //             result(null, res);
    //         }
    //     });
    // };
    
    // Product.update = function(id, product, result){
    //     dbConn.query("UPDATE products SET Farm_Id ,product_Name =? ,Description =? ,status =? ,Quantity =? ,measurement_unit =? ,status =? ,unit_price =? WHERE id = ? ", [product.Farm_Idproduct.product_Nameproduct.Descriptionproduct.statusproduct.Quantityproduct.measurement_unitproduct.statusproduct.unit_price, id], function (err, res) {
    //         if(err) {
    //             console.log("error: ", err);
    //             result(null, err);
    //         // }
    //         // else if (newProduct.confirm_Mdp != newProduct.mdp) {
    //         //         return res.status(422).json({
    //         //             message: "Vérifier la confirmation de votre mot de passe ! ! !",
    //         //         });
    //         }else{
    //             result(null, res);
    //         }
    //     });
    // };
    
    
    // Product.validProddelete = function(id, result){
    //     dbConn.query("DELETE * products SET WHERE status=1 AND id = ?", [id], function (err, res) {
    //         if(err) {
    //             console.log("error: ", err);
    //             result(null, err);
    //         }else{
    //             result(null, res);
    //         }
    //     });
    // };


module.exports= Product;