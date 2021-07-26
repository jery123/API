module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
      productId: {
          type: Sequelize.INTEGER,
          //defaultValue: 1,
          allowNull: false,
          references: {
              model: 'produits',
              key: 'id'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
      },
        clientId: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
      status: {
        type: Sequelize.ENUM('EC', 'V', '')
        //EC :: pour les commandes en cour 
        //v:: pour les commandes valide
          
        },
        quantité: {
            type: Sequelize.INTEGER              
            },      
       
    },
    {
        engine: 'MYISAM',
        charset: 'latin1'
    });
  
    return Commande;
  };