const express = require("express");
const { events } = require("../data");
const auth = require("../middleware/authMiddleware")

const router = express.Router();

// Create an event
router.post("/", auth, (req, res) => {
    const { name, description, category, date, reminder } = req.body;
    const newEvent = {
        id: events.length + 1,
        userId: req.user.userId,
        name,
        description,
        category,
        date,
        reminder
    };
    events.push(newEvent);
    res.json(newEvent);
});

// View all events
router.get("/", auth, (req, res) => {
    const userEvents = events.filter(event => event.userId === req.user.userId);
    res.json(userEvents);
});

module.exports = router;
