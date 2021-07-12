
'use strict';
var dbConn = require('./../../database/db.config');
// const Path = require('./Path');


//Employee object create
var Client = function (client) {
  this.firstName = client.firstName;
  this.secondName = client.secondName;
  this.userName = client.userName;
  this.Email = client.Email;
  this.password = client.password;
  this.confirmePassword = client.confirmePassword;
 this.unit_price = client.unit_price;
};
 