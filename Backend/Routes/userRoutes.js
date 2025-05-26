const { contactMe } = require("../Controllers/userController")


const router = require("express").Router();


router.post("/contact-me", contactMe)


module.exports = router;