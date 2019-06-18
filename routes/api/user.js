const express = require('express');
const router = express.Router();


// @route get api/auth/tests
//desc tests auth route
//@access  public 

const User = require('../models/User');

router.get('/test', (req,res) => res.json({msg : 'Users work'}));


router.post('register', (req,res) => {

    User.findOne({email : req.body.email})
});


module.exports = router;

