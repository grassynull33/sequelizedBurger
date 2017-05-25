# sequelizedBurger
Homework #15

## Live Link
 - www.example.com

## Description
1. Once you've loaded the app, any existing burgers will pop up, and you will be able to devour burgers of your choice.
2. You can also add your own burgers and devour them as well.
3. Devoured burgers are separated from the "un-devoured" burgers.

## Requirements
- Working from a previous homework assignment, remove all references to your vanilla MySQL queries and replace them with Sequelize queries

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Handlebars
- MySQL
- Sequelize

## Code Explanation
- The most satisfying part of the assignment was converting the `SELECT *` MySQL query into a `findAll` Sequelize method. We then pass the results into the `data.burgers` array so that Handlebars can generate them in the view:

```
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
```