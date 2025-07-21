const Models = require("../models"); // matches index.js

const getPosts = (res) => {
    // finds all posts
    Models.Post.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createPost = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.Post(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updatePost = (req, res) => {
    // updates the post matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    console.log(req.params.id);
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        upsert: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deletePost = (req, res) => {
    // deletes the post matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUserPosts = (req, res) => {
// finds all posts for a given user and populates with user details
    Models.Post.find({userId: req.params.uid}).populate({path: 'userId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getUserPosts,
};