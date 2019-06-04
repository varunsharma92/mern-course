const express = require('express');
const router = express.Router();


// @route get api/auth/tests
//desc tests auth route
//@access  public 

router.get('/test', (req,res) => res.json({msg : 'Users work'}));


module.exports = router;

