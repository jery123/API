
'use strict';
var dbConn = require('./../../database/db.config');
// const Path = require('./Path');


//Employee object create
var Farmer = function (farmer) {
  //this.firstName = farmer.firstName;
  //this.secondName = farmer.secondName;
  this.userName = farmer.userName;
  this.Email = farmer.Email;
  this.password = farmer.password;
  //this.confirmePassword = farmer.confirmePassword;
 // this.unit_price = farmer.unit_price;
};
