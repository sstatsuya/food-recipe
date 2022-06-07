const express = require("express");
const router = express.Router();
router.use('/recipe', require('./recipe'))
router.use('/type', require('./type'))
module.exports = router;
