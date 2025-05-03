const express = require("express");
const router = express.Router();
const {
  getRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/recordController");

router.get("/", getRecords);
router.post("/", createRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

module.exports = router;
