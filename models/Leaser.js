module.exports = function(sequelize, DataTypes) {
  var Leaser = sequelize.define("Leaser", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  });

  //   Leaser.associate = function(models) {
  //     Leaser.hasMany(models.Parking, {
  //       onDelete: "cascade"
  //     });
  //   };

  return Leaser;
};
