let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.reactionController.getReactions(res);
});

// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.reactionController.createReaction(req.body, res);
});

router.put("/:id", (req, res) => {
    Controllers.reactionController.updateReaction(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.reactionController.deleteReaction(req, res);
});



module.exports = router;