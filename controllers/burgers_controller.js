var express = require('express');
var router = express.Router();

// Requiring our Burger model
var db = require('../models');

// get route -> index
router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  db.Burger.findAll({})
  .then(function (dbBurger) {
    var data = {
      burgers: []
    };

    console.log(dbBurger);

    for (var i = 0; i < dbBurger.length; i++) {
      data.burgers.push(dbBurger[i].dataValues);
    }

    res.render('index', data);
  });
});

// post route -> back to index
router.post('/burgers/create', function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(function (dbBurger) {
      res.redirect('/');
    });
});

// put route -> back to index
router.put('/burgers/update', function (req, res) {
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.body.burger_id
      }
    })
    .then(function (dbBurger) {
      res.redirect('/');
    });
});

module.exports = router;
