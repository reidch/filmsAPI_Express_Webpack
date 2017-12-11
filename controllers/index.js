var express = require('express');
var router = new express.Router();

router.use("/films", require("./films"));

module.exports = router;
