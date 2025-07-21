const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
content: { type: String, trim: true, required: true,},
Like: { type: Number, trim: true, required: true,},

//Foreign key
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
postId: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },



createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("reaction", userSchema);