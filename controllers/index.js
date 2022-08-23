const router = require('express').Router();
const User = require('../models')

router.get('/', (req,res) => {
  res.render('homepage', {
    fish: "lobster"
  });
})


module.exports = router