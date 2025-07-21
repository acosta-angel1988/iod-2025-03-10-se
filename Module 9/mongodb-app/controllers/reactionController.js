const Models = require("../models"); // matches index.js

const getReactions = (res) => {
    // finds all users
    Models.Reaction.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createReaction = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.Reaction(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateReaction = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    console.log(req.params.id);
    Models.Reaction.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        upsert: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteReaction = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Reaction.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUserPosts = (req, res) => {
// finds all posts for a given user and populates with user details
    Models.Reaction.find({userId: req.params.uid}).populate({path: 'userId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getPostReaction = (req, res) => {
// finds all posts for a given user and populates with user details
    Models.Reaction.find({postId: req.params.uid}).populate({path: 'postId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getCommentReaction = (req, res) => {
// finds all posts for a given user and populates with user details
    Models.Reaction.find({commentId: req.params.uid}).populate({path: 'commentId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};



module.exports = {
    getReactions,
    createReaction,
    updateReaction,
    deleteReaction,
    getUserPosts,
    getPostReaction,
    getCommentReaction,
};