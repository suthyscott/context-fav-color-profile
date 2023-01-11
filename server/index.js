require('dotenv').config()
// const dotenv = require('dotenv')
// dotenv.config()

const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')

const {User} = require('./models/user')
const {FavColor} = require('./models/favColor')

const {login, register} = require('./controllers/authCtrl')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(FavColor)
FavColor.belongsTo(User)


app.post('/register', register)
app.post('/login', login)


sequelize
    .sync()
    // .sync({force: true})
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))