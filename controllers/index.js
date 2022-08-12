const router = require('express').Router();
const User = require('../models/User.js')

router.get('/', (req,res) => {
  res.render('homepage', {
    fish: "lobster"
  });
})


module.exports = router