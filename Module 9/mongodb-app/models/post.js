const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
title: { type: String, trim: true, required: true },
description: { type: String, trim: true, required: true },
content: { type: String, trim: true, required: true,},
publisher: { type: String, trim: true, required: true },

//Foreign key
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", userSchema);