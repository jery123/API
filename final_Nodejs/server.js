const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models/produits");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
const dbuser = require("./app/models/users");
dbuser.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync dbuser.");
});
const dbimg = require("./app/models/images");
dbimg.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
  const dbadmin = require("./app/models/admins");
  dbadmin.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync dbadmin.");
    });
  const initRoutes = require("./app/routes/image.routes");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jery application." });
});

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));
initRoutes(app);


///// route

require("./app/routes/produit.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});