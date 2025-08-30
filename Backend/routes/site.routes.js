const auth = require("../controllers/auth.js");
let authToken = require("../middlewares/auth.js");

var router = require("express").Router();

router.post("/", authToken, auth.signin);

router.get("ws", authToken, auth.signin);

module.exports = router;
