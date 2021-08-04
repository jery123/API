module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
    //   prodId: {
    //       type: Sequelize.INTEGER,
    //       //defaultValue: 1,
    //       allowNull: false,
    //       references: {
    //           model: 'users',
    //           key: 'id'
    //       },
    //       onUpdate: 'cascade',
    //       onDelete: 'cascade'
    //   },
        // imgId: {
        //     type: Sequelize.INTEGER,
        //     defaultValue: 1,
        //     allowNull: false,
        //     references: {
        //         model: 'images',
        //         key: 'id'
        //     },
        //     onUpdate: 'cascade',
        //     onDelete: 'cascade'
        // },
      
        nom: {
            type: Sequelize.STRING,
            defaultValue: false,
            allowNull: false
          },
      description: {
          type: Sequelize.STRING,
          allowNull: true
      },
      published: {
        type: Sequelize.BOOLEAN
        },
        quantité: {
            type: Sequelize.INTEGER
        },
        prixUnitaire: {
            type: Sequelize.INTEGER
            },
            uniteDeMesure: {
                type: Sequelize.ENUM('Kg','Litre','Cageot', 'Sacs')
                },
                   
    },
    
    {
        engine: 'MYISAM',
        charset: 'latin1'
    });
  
    return Produit;
  };