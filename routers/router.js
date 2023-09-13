let express = require("express");
let router = express.Router();
router.use("/users", require("./user_router"));

module.exports = router;
