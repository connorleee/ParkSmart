module.exports = function(sequelize, DataTypes) {
  var Parking = sequelize.define("Parking", {
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
      allowNull: false
    },
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    spaces: {
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
    }
  });
  return Parking;
};
