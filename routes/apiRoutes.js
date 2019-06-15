var db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(parkSmartDB) {
      res.json(parkSmartDB);
      console.log(parkSmartDB);
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
