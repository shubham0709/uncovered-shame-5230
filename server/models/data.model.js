const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    dataName: { type: String, required: true },
});

const dataModel = mongoose.model("data", dataSchema);

module.exports = { dataModel };