var db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(parkSmartDB) {
<<<<<<< HEAD
      console.log("HEllp");
=======
>>>>>>> 60cb0a2e1f1fa7f032ccc1673e7bccefaefeb4d7
      res.json(parkSmartDB);
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
