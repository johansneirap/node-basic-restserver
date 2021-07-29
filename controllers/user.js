const { response } = require('express');

const getUser = (req, res = response) => {
    res.json({
        msg: 'get API from controller'
    });
}

const postUser = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API from controller',
        body
    });
}
const putUser = (req, res = response) => {
    res.json({
        msg: 'put API from controller'
    });
}
const deleteUser = (req, res = response) => {
    res.json({
        msg: 'delete API from controller'
    });
}

module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}