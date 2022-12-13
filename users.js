const { request, response } = require("express");

const users = [
    { id: 1, firstname: "Saraa", lastname: "Jigs" },
    { id: 2, firstname: "Molly", lastname: "Bilguun" },
];

exports.getUsers = (request, response, next) => {
    response.status(200).json({
        users: users, 
    });
};