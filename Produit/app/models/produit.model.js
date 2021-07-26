const sql = require("./db.js");

// constructor
const Produit = function(produit) {
  this.id = produit.id;
    this.Nom = produit.Nom;
    this.Quantité = produit.Quantité;
    this.Unité_de_mesure = produit.Unité_de_mesure;
    this.Status = produit.Status;
  this.Prix_unitaire = produit.Prix_unitaire;
};

Produit.create = (newProduit, result) => {
  sql.query("INSERT INTO produit SET ?", newProduit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created produit: ", { id: res.insertId, ...newProduit });
    result(null, { id: res.insertId, ...newProduit });
  });
};

Produit.findById = (id, result) => {
  sql.query(`SELECT * FROM produit WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found produit: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Produit with the id
    result({ kind: "not_found" }, null);
  });
};

Produit.getAll = result => {
  sql.query("SELECT * FROM produit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("produit: ", res);
    result(null, res);
  });
};

Produit.updateById = (id, produit, result) => {
  sql.query(
    "UPDATE produit SET Nom = ?, Quantité = ?, Unité_de_mesure = ?,Status = ?,Prix_unitaire = ?  WHERE id = ?",
    [produit.Nom, produit.Quantité, produit.Unité_de_mesure, produit.Status, produit.Prix_unitaire, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Produit with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated produit: ", { id: id, ...produit });
      result(null, { id: id, ...produit });
    }
  );
};

Produit.remove = (id, result) => {
  sql.query("DELETE FROM produit WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Produit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted produit with id: ", id);
    result(null, res);
  });
};

Produit.removeAll = result => {
  sql.query("DELETE FROM produit", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} produit`);
    result(null, res);
  });
};

module.exports = Produit;