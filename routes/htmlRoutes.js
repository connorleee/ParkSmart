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

  /*app.get("/map/:input", function(req, res) {
    var input = req.params.input;
    db.Parking.findAll({}).then(function(dbParking) {
      res.render("map", {
        searchInput: input,
        msg: "Welcome!",
        Parkings: result
      });
    });
  });*/

  app.get("/zip/:zip", function(req, res) {
    db.Parking.findAll({
      where: {
        zip: req.params.zip
      }
    }).then(function(result) {
      res.render("index", {
        msg: `Parking locations in ${req.params.zip} zip code.`,
        Parkings: result
      });
    });
  });

  // Load Parking page and pass in an Parking by id
  app.get("/Parking/:id", function(req, res) {
    db.Parking.findOne({ where: { id: req.params.id } }).then(function(result) {
      res.render("Parking", {
        Parking: result
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
