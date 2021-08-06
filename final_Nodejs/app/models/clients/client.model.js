module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        imgId: {
            type: Sequelize.INTEGER,
            defaultValue: 2,
            allowNull: false,
            references: {
                model: 'images',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
      
        nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
        },
      email: {            
            type: Sequelize.STRING,
                defaultValue: false,
                allowNull: false,
            },
            mdp: {            
                type: Sequelize.STRING,
                    defaultValue: false,
                    allowNull: false,
                },          
        ville: {
            type: Sequelize.STRING,
            defaultValue: 0,
            },
        telephone: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        is_delete: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
            },
                  
    });
  
    return Client;
  };