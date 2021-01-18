const express = require('express');
const User = require('../models').User;

const router = express.Router();

router.get('/', async (req, res, next) => {

    //promise
    // User.findAll()
    //     .then((users) => {
    //         res.json(users);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         next(arr);
    //     });

    //async-await

    try{
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;