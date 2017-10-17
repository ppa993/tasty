var express = require('express');
var router = express.Router();

/*
 * GET dish list.
 */
router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

/*
 * GET dish by ID.
 */
router.get('/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    var articalID = req.params.id;
    collection.find({ '_id': articalID }, {}, function (e, docs) {
        res.json(docs);
    });
});

/*
 * POST to add new dish.
 */
router.post('/', function(req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to delete dish.
 */
router.delete('/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('dishes');
    var articalToDelete = req.params.id;
    collection.remove({ '_id': articalToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;