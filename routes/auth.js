const express = require('express')
const User = require('../models/Register')
const router = express.Router()


router.post("/register", async (req, res) => {
  let newuser = new User({
    team: req.body.team
  })
    await newuser.save();
    return res.send({success: "success" })
  }
)

module.exports = router;