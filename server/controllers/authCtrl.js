require('dotenv').config()
const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

const createToken = (username, id) => {
    return jwt.sign({username, id}, SECRET, {expiresIn: '2 days'})
}

module.exports = {
    register: async (req, res) => {
        try {
            const {username, password} = req.body
            let foundUser = await User.findOne({where: {username}})
            if(foundUser) {
                res.status(400).send('That username is already taken')
            } else {
                const salt = bcrypt.genSaltSync(5)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({username, hashedPass: hash})
                console.log('newUser', newUser)
                const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
                console.log('token', token)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp
                })
            }

        } catch (error){
            console.log("There is an error in the register function")
            console.log(error)
            res.sendStatus(400)
        }
    },
    login: (req, res) => {
        console.log('hit login ')
    }
}