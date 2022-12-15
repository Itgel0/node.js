const { Router, application } = require('express');
const express = require('express');
const router = express.Router();
const { getPosts, createPost, deletePost } = require('./controller.js');
// const { gePostId } = require('./controller');

router
    .get('/', (req, res) => { res.status('200').json({ message: 'alive' }) })
    .get('/posts', getPosts)
    .post('/posts', createPost)
    // .get('/posts/:id', gePostId)
// .patch('/posts/:id')
    .delete('/posts/:id', deletePost)

module.exports = router

// const { request, response } = require("express");

// const users = [
//     { id: 1, firstname: "Saraa", lastname: "Jigs" },
//     { id: 2, firstname: "Molly", lastname: "Bilguun" },
// ];

// exports.getUsers = (request, response, next) => {
//     response.status(200).json({
//         users: users, 
//     });
// };