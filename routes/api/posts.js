const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

// @route POST api/posts
//@desc create a post
// @access private
router.post(
  '/',
  /* [auth, [check('text', 'Text is required').not().isEmpty()]],*/
  async (req, res) => {
    /* const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }*/

    try {
      // const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        /*  tags: req.body.tags.split(',').map((tags) => tags.trim()),
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,*/
      });

      const post = await newPost.save();
      res.json(post);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route GET api/posts
//@desc GET all post
// @access private
/*
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
*/
/*
// @route GET api/posts/:id
//@desc GET post by id
// @access private

router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});
*/
/*
// @route Delete api/posts/:id
//@desc Delete a post
// @access private

router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).send('Server Error');
  }
});
*/

module.exports = router;
