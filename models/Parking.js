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
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    house: DataTypes.INTEGER,
    street: DataTypes.STRING,
    state: DataTypes.STRINGS,
    zip: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    spaces: DataTypes.INTEGER,
    spacePrice: DataTypes.DECIMAL,
    units: {
      type: DataTypes.INTEGER,
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
