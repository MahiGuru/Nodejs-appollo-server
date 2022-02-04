var express = require('express');
var router = express.Router();
const db = require("../db/index");


// var root = {
//     course: getCourse,
//     courses: getCourses
// };
router.get('/', async(req, res) => {
    console.log("inside /")
    res.render('index', {title: "hello world"});
})
/* GET home page. */
router.get('/comments', async (req, res, next) => {
    try {
        const files = await db.get().collection('comments').find({}).toArray();
        // console.log("FILESSSS ", files);
        res.json(files)
        // res.render('index', files);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
});

router.get('/movies', async (req, res, next) => {
    try {
        const files = await db.get().collection('movies').find({}).toArray();
        // console.log("FILESSSS ", files);
        res.json(files)
        // res.render('index', files);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
});

router.get('/sessions', async (req, res, next) => {
    try {
        const files = await db.get().collection('sessions').find({}).toArray();
        // console.log("FILESSSS ", files);
        res.json(files)
        // res.render('index', files);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
});

router.get('/theaters', async (req, res, next) => {
    try {
        const files = await db.get().collection('theaters').find({}).toArray();
        // console.log("FILESSSS ", files);
        res.json(files)
        // res.render('index', files);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
});

router.get('/users', async (req, res, next) => {
    try {
        const files = await db.get().collection('users').find({}).toArray();
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
