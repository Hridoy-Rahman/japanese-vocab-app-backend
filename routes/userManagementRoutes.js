const express = require("express");
const {
  getUsers,
  updateUserRole,
} = require("../controllers/userManagementController.js");

const router = express.Router();

// User Routes
router.get("/", getUsers);
router.put("/:userId", updateUserRole);

module.exports = router;
