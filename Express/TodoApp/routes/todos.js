const express = require("express");
const router = express.Router();
// import controller
const { createTodo } = require("../controllers/createTodo");
// define api route
router.post("/", createTodo);
module.exports = router;
