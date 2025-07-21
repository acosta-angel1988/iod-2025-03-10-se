"use strict";
const Models = require("../models");
// finds all users in DB, then sends array as response
const getReactions = (res) => {
    Models.Reaction.findAll({}).then(data => {
        res.send({result: 200 , data: data});
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new user in DB
const createReaction = (data, res) => {
    Models.Reaction.create(data).then(data => {
        res.send({ result: 200 , data: data});
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const updateReaction = (req, res) => {
    Models.Reaction.update(req.body, { where: { id: req.params.id }, returning: true })
        .then(data => {
        res.send({ result: 200, data: data });
    }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

// deletes user matching ID from params
const deleteReaction = (req, res) => {
    Models.Reaction.destroy({ where: { id: req.params.id } })
        .then(data => {
        res.send({ result: 200, data: data });
    }).catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    });
};

module.exports = {
getReactions, createReaction, updateReaction, deleteReaction
};