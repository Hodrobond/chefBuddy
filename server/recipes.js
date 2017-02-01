var router = require('express').Router();

router.get('/recipes', function(req, res){
  let db = req.app.locals.db;
  findRecipes(db, function(recipes){
    res.send(recipes);
  })
});

var findRecipes = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('recipes');
  // Find some documents
  collection.find({}).toArray(function(err, recipes) {
    callback(recipes);
  });
}

module.exports = router;
