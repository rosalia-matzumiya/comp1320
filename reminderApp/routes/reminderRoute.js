const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");
const reminderController = require("../controllers/reminderController");

// Routes start here

app.get("/", ensureAuthenticated, reminderController.list);

app.get("/new", ensureAuthenticated, reminderController.new);

app.get("/:id", ensureAuthenticated, eminderController.listOne);

app.get(":id/edit", ensureAuthenticated, reminderController.edit);

app.post("/", ensureAuthenticated, reminderController.create);

app.post("/update/:id", ensureAuthenticated, reminderController.update);

app.post("/delete/:id", ensureAuthenticated, reminderController.delete);

module.exports = router;