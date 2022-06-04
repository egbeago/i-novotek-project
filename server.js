const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const dbConnect = require('./config/db/dbConnect')

const usersRoute = require('./route/users/usersRoute')
const { errorHandler, notFound } = require('./middlewares/error/errorHandler')

const app = express()

// DB
dbConnect()
// console.log(process.env)

// middleware
app.use(express.json())

// users route
app.use('/api/users', usersRoute)

// err handler
app.use(notFound)
app.use(errorHandler)

// server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running ${PORT}`))
