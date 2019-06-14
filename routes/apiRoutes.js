var db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(dbParking) {
      res.json(dbParking);
    });
  });

  // Create a new Parking
  app.post("/api/Parkings", function(req, res) {
    db.Parking.create(req.body).then(function(dbParking) {
      res.json(dbParking);
    });
  });

  // Delete an Parking by id
  app.delete("/api/Parkings/:id", function(req, res) {
    db.Parking.destroy({ where: { id: req.params.id } }).then(function(
      dbParking
    ) {
      res.json(dbParking);
    });
  });
};
