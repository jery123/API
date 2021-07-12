// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "testdb",
//    // dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "ma_bd_de_stage",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };