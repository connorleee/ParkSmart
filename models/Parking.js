module.exports = function(sequelize, DataTypes) {
  var Parking = sequelize.define("Parking", {
    house: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [6],
      isNumeric: true
    },
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    numSpaces: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spacePrice: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    units: {
      type: DataTypes.STRING,
      defaultValue: "month"
    },
    spaceType: DataTypes.STRING,
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    photo: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  });

  // Parking.associate = function(models) {
  //   Parking.belongsTo(models.Leaser, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // Parking.associate = function(models) {
  //   Parking.hasMany(models.Availability, {
  //     onDelete: "cascade"
  //   });
  // };

  return Parking;
};
