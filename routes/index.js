const router = require("express").Router();
const skillSetRoutes = require("./api/SkillSets");

//  routes
router.use("/", skillSetRoutes);

module.exports = router;