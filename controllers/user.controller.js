const User = require('../models/user.model');
const {
    v4: uuidv4
} = require('uuid');
const bcrypt = require('bcrypt');
require('dotenv').config();
var jwt = require('jsonwebtoken');
const saltRounds = 10;



const getAllUser = async (req, res) => {
    const users = await User.find()
    res.status(200).send(users)
};

const createUser = async (req, res) => {
    const {
        username,
        role,
        email,
        mobile,
        password,
        img,
    } = req.body;

    const exist = await User.findOne({
        email,
        username
    });

    if (exist) {
        return res.status(400).json({
            status: false,
            message: 'User already exist'
        });
    }

    try {
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const newUser = new User({
                id: uuidv4(),
                username: username,
                role: role,
                email: email,
                mobile: mobile,
                password: hash,
                image: img,
            });
            await newUser.save();
            res.status(200).json({
                status: true,
                message: 'User is created successfully'
            });
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
};


const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;


    try {
        const exist = await User.findOne({
            email: email
        });

        if (!exist) {
            return res.status(401).json({
                success: false,
                message: 'User is not found'
            });
        };
        if (!bcrypt.compareSync(password, exist.password)) {
            return res.status(404).json({
                success: false,
                message: 'Incorrect Password'
            })
        }

        const accessToken = jwt.sign({
            email: email
        }, process.env.ACCESS_TOKEN, {
            expiresIn: '1d'
        });
        res.status(200).json({
            status: true,
            message: 'User is valid',
            accessToken: accessToken,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }


};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const result = await User.deleteOne({
        id: id
    })
    res.status(200).send({
        status: true,
        message: 'user delete successfully'
    })
}


module.exports = {
    getAllUser,
    createUser,
    deleteUser,
    loginUser
};