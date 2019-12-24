const express = require('express')
const router = express.Router()
router.use("/user", require("./user"))
// router.use("/message", require("./message/index"))
module.exports = router