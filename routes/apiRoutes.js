const db = require("../models");

module.exports = function(app) {
  // Get all Parkings
  app.get("/api/Parkings", function(req, res) {
    db.Parking.findAll({}).then(function(parkSmartDB) {
      // console.log(parkSmartDB);
      const parkingSpaces = [];
      for (let i = 0; i < parkSmartDB.length; i++) {
        let lat = parkSmartDB[i].dataValues.lat;
        let long = parkSmartDB[i].dataValues.lon;
        let name = `${parkSmartDB[i].dataValues.firstName} ${parkSmartDB[i].dataValues.lastName}`;
        let phone = parkSmartDB[i].dataValues.phone;
        let email = parkSmartDB[i].dataValues.email;
        let price = parkSmartDB[i].dataValues.spacePrice;
        let spaceType = parkSmartDB[i].dataValues.spaceType;
        let numSpaces = parkSmartDB[i].dataValues.numSpaces;
        let photo = parkSmartDB[i].dataValues.photo;
        let unit = [
          lat,
          long,
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

  /* firstName, lastName, phone, email, house, street, city, 
   state, zip, lat, lon, numSpaces, spacePrice, spaceType, photo */
  app.post("/api/Parkings", function(req, res) {
    console.log(req, res);
    db.Parking.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      house: req.body.house,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      lat: req.body.lat,
      long: req.body.long,
      numSpaces: req.body.numSpaces,
      spacePrice: req.body.spacePrice,
      spaceType: req.body.spaceType,
      photo: req.body.photo
    }).then(function() {
      res.redirect("/map.html");
    });
  });

  // app.post("/api/Parkings", function(req, res) {
  //   console.log(req.body);
  //   db.Parking.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     phone: req.body.phone,
  //     email: req.body.email,
  //     house: req.body.house,
  //     street: req.body.street,
  //     city: req.body.city,
  //     state: req.body.state,
  //     zip: req.body.zip,
  //     lat: req.body.lat,
  //     long: req.body.long,
  //     numSpaces: req.body.numSpaces,
  //     spacePrice: req.body.spacePrice,
  //     spaceType: req.body.spaceType,
  //     photo: req.body.photo
  //   }).then(function() {
  //     res.json(parkSmartDB);
  //     res.redirect("/map.html");
  //   });
  // });

  // Delete an Parking by id
  app.delete("/api/Parkings/:id", function(req, res) {
    db.Parking.destroy({ where: { id: req.params.id } }).then(function(
      parkSmartDB
    ) {
      res.json(parkSmartDB);
    });
  });
};
