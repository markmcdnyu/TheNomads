// creating an instance of the express router
const router = require('express').Router();

// require the routes available in this folder 

const signup = require('../api/signup');
const home = require('./home');
const loginPage = require('./loginPage');
const resutls = require('./results');

// html routes

router.use('/', loginPage);
router.use('/signup', signup);
router.use('/home', home);
router.use('/results', resutls);



module.exports = router; 