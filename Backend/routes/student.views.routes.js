  const student = require("../../SSR/controllers/studentView.controller.js");
  const authSession = require("../../SSR/controllers/auth.session.js")
  var router = require("express").Router();

  // Get all students views
  router.get("/", authSession.isAuthenticated, student.findAll);

  // Create a students view
  router.get("/create", authSession.isAuthenticated, student.create);

  // Retrieve one student
  router.get("/find/:id", authSession.isAuthenticated, student.findOne);

  // Edit a students view
  router.get("/edit/:id", authSession.isAuthenticated, student.edit);

module.exports = router