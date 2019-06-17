module.exports = function(sequelize, DataTypes) {
  var Availability = sequelize.define("Renter", {
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

  //   Availability.associate = function(models) {
  //     Availability.belongsTo(models.Parking, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };

  return Availability;
};
