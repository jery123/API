const sql = require("./db.js");

// constructor
const Farmer = function(farmer) {
  // this.id = farmer.id;
  this.Nom = farmer.Nom;
  this.Prenom = farmer.Prenom;
  this.E_mail = farmer.E_mail;
  this.Pays = farmer.Pays;
  this.Mobile = farmer.Mobile;
  this.Password = farmer.Password;
};

Farmer.create = (newFarmer, result) => {
  sql.query("INSERT INTO farmer SET ?", newFarmer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);  
      return;
    }

    console.log("created farmer: ", { id: res.insertId, ...newFarmer });
    result(null, { id: res.insertId, ...newFarmer });
  });
};

Farmer.findById = (id, result) => {
  sql.query(`SELECT * FROM farmer WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found farmer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Farmer with the id
    result({ kind: "not_found" }, null);
  });
};

Farmer.getAll = result => {
  sql.query("SELECT * FROM farmer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("farmer: ", res);
    result(null, res);
  });
};

Farmer.updateById = (id, farmer, result) => {
  sql.query(
    "UPDATE farmer SET Nom = ?, Prenom = ?, E_mail = ?,Pays = ?,Mobile = ? ,Password = ?  WHERE id = ?",
    [farmer.Nom, farmer.Prenom, farmer.E_mail, farmer.Pays, farmer.Mobile,farmer.Password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Farmer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated farmer: ", { id: id, ...farmer });
      result(null, { id: id, ...farmer });
    }
  );
};

Farmer.remove = (id, result) => {
  sql.query("DELETE FROM farmer WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Farmer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted farmer with id: ", id);
    result(null, res);
  });
};

Farmer.removeAll = result => {
  sql.query("DELETE FROM farmer", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} farmer`);
    result(null, res);
  });
};

module.exports = Farmer;