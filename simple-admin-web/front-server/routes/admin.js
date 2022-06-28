const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("admin");
});

// router.get("/create", (req, res, next) => {
//     res.render("admin.html");
// });

// router.get("/read", (req, res, next) => {
//     res.render("admin.html");
// });

// router.get("/update", (req, res, next) => {
//     res.render("admin.html");
// });

// router.get("/delete", (req, res, next) => {
//     res.render("admin.html");
// });

module.exports = router;