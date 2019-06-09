module.exports = function(sequelize, DataTypes) {
  var Parking = sequelize.define("Parking", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
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
    space_price: DataTypes.DECIMAL,
    units: {
      type: DataTypes.INTEGER,
      defaultValue: "month"
    },
    space_type: DataTypes.STRING,
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  
  return Parking;
};