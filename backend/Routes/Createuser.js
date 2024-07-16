const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const { body, validationResult } = require("express-validator");

router.post(
  "/signupuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 5 }),
    body("name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    try {
      let userData = await User.findOne(email);
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }

      if (req.body.password === userData.password) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct credentials" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;