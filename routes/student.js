const express = require("express");
const router = express.Router();

const studentCtrl = require("../controllers/student");
// const auth = require("../middleware/auth");

router
  .post("/", studentCtrl.createStudent)
  .get("/", studentCtrl.getStudents)
  .get("/:name", studentCtrl.getStudent)
  .delete("/", studentCtrl.deleteStudent)
  .put("/", studentCtrl.updateStudent)
  ;

module.exports = router;
