const express = require("express");
const controllers = require("../controllers/contactsControllers");

const router = express.Router();

router.get("/", controllers.getContactsController);

router.post("/");

router.delete("/:contactId");

// router.put('/:contactId')

module.exports = router;
