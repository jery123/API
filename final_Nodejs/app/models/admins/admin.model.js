module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        // imgId: {
        //     type: Sequelize.INTEGER,
        //     defaultValue: 1,
        //     allowNull: true,
        //     references: {
        //         model: 'images',
        //         key: 'id'
        //     },
        //     onUpdate: 'cascade',
        //     onDelete: 'cascade'
        // },
        nom: {
        type: Sequelize.STRING,
      },
      prenom: {
        type: Sequelize.STRING,
        },
        // userName: {            
        // type: Sequelize.STRING,
        //     defaultValue: false,
        //     allowNull: false,
        // },
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
                aboutMe: {            
                    type: Sequelize.STRING,
                        defaultValue: false,
                        allowNull: false,
                             },
                   status: {            
                     type: Sequelize.BOOLEAN,//if ==1(ADMIN)  || if ==0(EMPLOYE)
                        defaultValue: 0,
                           allowNull: false,
        },
        telephone: {
            type: Sequelize.INTEGER,
            defaultValue: false,
            },
        is_delete: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0,
            },
           
    });
  
    return Admin;
  };