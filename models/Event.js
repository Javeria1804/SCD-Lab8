const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    description: String,
    category: { type: String, enum: ["Meeting", "Birthday", "Appointment"], required: true },
    date: Date,
    reminder: Boolean,
});

module.exports = mongoose.model("Event", EventSchema);
