const router = require('express').Router();
const userRouter = require('./user-route');
const postRouter = require('./post-route');
const commentRouter = require('./comment-route');

router.get('/', (req,res) => {
  res.render('homepage', {
    fish: "lobster"
  });
})

router.use('/api/user', userRouter)
module.exports = router