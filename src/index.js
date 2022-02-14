require("dotenv").config()
const express = require("express")
const passport = require("passport")
const session = require("express-session")
const cors = require("cors")

const connectDB = require("./connectDB")
const auth = require("./auth")
const setRoutes = require("./routes")
const endpointURI = require("./../endpointURI")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: endpointURI.clientHomepage, credentials: true }))

app.set("trust proxy", 1)

const User = connectDB.User
const sessionStore = connectDB.sessionStore

auth.setup(passport, User) // passport JS strategies (local and Google)

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

setRoutes(app, User, passport)
