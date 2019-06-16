var db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(parkSmartDB) {
      console.log(parkSmartDB);
      const latLong = [];
      for (let i = 0; i < parkSmartDB.length; i++) {
        let name = `${parkSmartDB[i].dataValues.firstName} ${parkSmartDB[i].dataValues.lastName}`;
        let lat = parkSmartDB[i].dataValues.lat;
        let long = parkSmartDB[i].dataValues.lon;
        let unit = [name, lat, long];
        latLong.push(unit);
      }
      res.send(latLong);
      // console.log(latLong);
    });
  });

  // Create a new Parking
  app.post("/api/Parkings", function(req, res) {
    db.Parking.create(req.body).then(function(parkSmartDB) {
      res.json(parkSmartDB);
    });
  });

  // Delete an Parking by id
  app.delete("/api/Parkings/:id", function(req, res) {
    db.Parking.destroy({ where: { id: req.params.id } }).then(function(
      parkSmartDB
    ) {
      res.json(parkSmartDB);
    });
  });
};
