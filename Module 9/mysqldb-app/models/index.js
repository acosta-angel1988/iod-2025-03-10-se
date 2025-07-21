'use strict'
const User = require('./user'); //require the model
const Post = require('./post');
const Comment = require('./comment'); 
const Reaction = require('./reaction');
async function init() {
    await User.sync();
    await Post.sync();
    await Comment.sync();
    await Reaction.sync();
     // sync the model
// also sync any extra models here
};

init();
module.exports = {
    User,
    Post,
    Comment,
    Reaction,
     // export the model
// also export any extra models here
};