const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8083"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Pour l'image
const dbimg = require("./app/models/images");
dbimg.sequelize.sync( ).then(() => {
    console.log("Drop and re-sync db.");
  });

  //Pour les administrateurs
  const dbadmin = require("./app/models/admins");
  dbadmin.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync dbadmin.");
    });
    const initRoutes = require("./app/routes/image.routes");
  
  //Pour les farmers
  const dbfarmer = require("./app/models/farmers");
  dbfarmer.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync dbfarmer.");
  });

const dbproduit = require("./app/models/produits");
dbproduit.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync dbproduit.");
});

//pour le client
const dbclient = require("./app/models/clients");
  dbclient.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync dbclient.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jery application." });
});

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


///// route

require("./app/routes/image.routes")(app);
require("./app/routes/farmer.routes")(app);
require("./app/routes/admin.routes")(app);
require("./app/routes/produit.routes")(app);
require("./app/routes/client.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});