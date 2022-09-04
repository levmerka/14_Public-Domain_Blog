const router = require('express').Router();
const userRouter = require('./user-route');
const postRouter = require('./post-route');
const commentRouter = require('./comment-route');
const homeRouter =require('./home-route')
router.get('/', (req,res) => {
  res.render('homepage', {
    postData: "lobster"
  });
})

router.use('/', homeRouter);
router.use('/api/user', userRouter)
// router.use('/posts', postRouter)
module.exports = router 