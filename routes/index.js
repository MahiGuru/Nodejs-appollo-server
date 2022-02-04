var express = require('express');
var router = express.Router();
const db = require("../db/index");


/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const files = await db.get().collection('listingsAndReviews').find({}).project({_id:1, name:1 , house : 1, amenities: 1}).toArray();
        // console.log("FILESSSS ", files);
        res.json(files)
        // res.render('index', files);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
});

module.exports = router;
