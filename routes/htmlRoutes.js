var db = require("../models");

module.exports = function(app) {
  // Load index page
  //app.get("/", function(req, res) {
    //db.Parking.findAll({}).then(function(dbParking) {
      //res.render("index", {
       /* input: "currentlocation",
        msg: "Welcome!",
        Parkings: dbParking
      });
    });
  });*/

  app.get("/map/:input", function(req, res) {
    var input = req.params.input;
    db.Parking.findAll({}).then(function(dbParking) {
      res.render("map", {
        searchInput: input,
        msg: "Welcome!",
        Parkings: dbParking
      });
    });
  });

  // Load Parking page and pass in an Parking by id
  app.get("/Parking/:id", function(req, res) {
    db.Parking.findOne({ where: { id: req.params.id } }).then(function(
      dbParking
    ) {
      res.render("Parking", {
        Parking: dbParking
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
