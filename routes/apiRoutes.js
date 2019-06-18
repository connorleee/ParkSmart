var db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(parkSmartDB) {
      const parkingSpaces = [];
      for (let i = 0; i < parkSmartDB.length; i++) {
        let lat = parkSmartDB[i].dataValues.lat;
        let lng = parkSmartDB[i].dataValues.lng;
        let name = `${parkSmartDB[i].dataValues.firstName} ${parkSmartDB[i].dataValues.lastName}`;
        let phone = parkSmartDB[i].dataValues.phone;
        let email = parkSmartDB[i].dataValues.email;
        let price = parkSmartDB[i].dataValues.spacePrice;
        let spaceType = parkSmartDB[i].dataValues.spaceType;
        let numSpaces = parkSmartDB[i].dataValues.numSpaces;
        let photo = parkSmartDB[i].dataValues.photo;
        let unit = [
          lat,
          lng,
          name,
          phone,
          email,
          price,
          spaceType,
          numSpaces,
          photo
        ];
        parkingSpaces.push(unit);
      }
      res.send(parkingSpaces);
    });
  });

  // Create a new Parking
  app.post("/api/Parkings", function(req, res) {
    db.Parking.create(req.body).then(function(parkSmartDB) {
      res.json(parkSmartDB);
    });
  });

  // // Delete an Parking by id
  // app.delete("/api/Parkings/:id", function(req, res) {
  //   db.Parking.destroy({ where: { id: req.params.id } }).then(function(
  //     parkSmartDB
  //   ) {
  //     res.json(parkSmartDB);
  //   });
  // });
};
