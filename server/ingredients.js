var router = require('express').Router();

router.get('/ingredients', function(req, res){
  let db = req.app.locals.db;
  findIngredients(db, function(recipes){
    res.send(recipes);
  })
});

var findIngredients = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('ingredients');
  // Find some documents
  collection.find({}).toArray(function(err, recipes) {
    callback(recipes);
  });
}

module.exports = router;
