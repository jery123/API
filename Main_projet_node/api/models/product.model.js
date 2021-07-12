

'use strict';
var dbConn = require('./../../database/db.config');
// const Path = require('./Path');


//Employee object create
var Product = function (product) {
  this.Farm_Id = product.Farm_Id;
  this.ProductName = product.ProductName;
  this.ProductDescription = product.ProductDescription;
  this.Quantity = product.Quantity;
  this.measurement_unit = product.measurement_unit;
  this.status = product.status;
  this.unit_price = product.unit_price;
};

// Content.create = function (newcontent, result) {
//     dbConn.query("INSERT INTO content set ?", newcontent, function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }else{
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };



// Content.findById = function (id, result) {
//     dbConn.query("SELECT * FROM content WHERE id = ? AND is_deleted = 0", id, function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }else{
//             result(null, res);
//         }
//     });
// };



// Content.findAll = function (result) {
//     dbConn.query("SELECT * FROM content WHERE is_deleted = 0", function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             //console.log('contents : ', res);
//             result(null, res);
//         }
//     });
// };




// Content.update = function(id, content, result){
//     dbConn.query("UPDATE content SET content=?, type=?, videoURL=?, path_id=? WHERE id = ? AND is_deleted = 0", [content.content,content.type, content.videoURL,content.path_id, id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });
// };



// Content.delete = function(id, result){
//     dbConn.query("UPDATE content SET is_deleted=1 WHERE id = ?", [id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });
// };


// Content.getPathContent = function(path_id, result){
//     // let test = checkPathValidity(path_id);
//     // console.log(test)
//     dbConn.query("SELECT * FROM content WHERE is_deleted = 0 AND path_id = ?", [path_id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             //console.log('contents : ', res);
//             result(null, res);
//         }
//     });
// }


// Content.checkPathValidity = function(path_id, result){
//     dbConn.query("SELECT is_deleted FROM paths WHERE id = ?", [path_id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             //console.log('contents : ', res);
//             result(null, res);
//             return res;
//         }
//     });
// }

// module.exports= Content;


















// module.exports = (sequelize, Sequelize) => {
//     const Product = sequelize.define("product", {
//       NomProd: {
//         type: Sequelize.STRING
//       },
//       Quantity: {
//         type: Sequelize.STRING
//       },
//       Unite_de_mesure: {
//         type: Sequelize.BOOLEAN
//       },
//       status: {
//         type: Sequelize.BOOLEAN
//       },
//       Prix_unitaire: {
//         type: Sequelize.FLOAT
//       }
//     });
  
//     return Product;
//   };