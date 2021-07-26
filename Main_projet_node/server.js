// const aws = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
// const multer = require('multer');
// const multerS3 = require('multer-s3');

// Configure dotevn
dotenv.config();

// create express app
const app = express();

// AWS SDK conf
// var s3 = new aws.S3({
//   accesKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// })
 
// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_S3_BUCKET_NAME,
//     acl: 'public-read',
//     metadata: function (req, file, cb) {
//       cb(null, {fieldName: file.fieldname});
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString())
//     }
//   })
// })


// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


// define a root route
app.get('/', (req, res) => {
  res.send("Bienvenur sur l' API de Jery foto.\n Veillez contater l'Administrateur pour plus d'infos");
});

// Require routes
const loginRoutes = require('./api/routers/logins')
const commandeRoutes = require('./api/routers/commandes')
const adminRoutes = require('./api/routers/admins')
const  productRoutes= require('./api/routers/products')
const registerRoutes = require('./api/routers/registers')

// using as middleware
app.use('/api/logi', loginRoutes)
app.use('/api/commande', commandeRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/product", productRoutes)
app.use('/api/register', registerRoutes)



app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message);
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});