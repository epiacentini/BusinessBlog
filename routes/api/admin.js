const express = require('express');
const router = express.Router();
const config = require('config');
const Admin = require('../../models/Admin');

// @route   POST api/users
//@desc     Register User
// @access  Public

router.post('/', async (req, res) => {
  const { password } = req.body;
  try {
    /* let Admin = await Admin.findOne({ password });

    if (Admin) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Admin already exists' }] });
    }*/

    admin = new Admin({
      password,
    });

    await admin.save();
    res.status(200).send('Password Set');
    /*const payload = {
        user: {
          id: user.id,
        },
      };*/

    /*jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );*/
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
