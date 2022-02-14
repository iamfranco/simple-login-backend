require("dotenv").config()
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")

mongoose.connect(process.env.MONGO_URI, {}, () => {
  console.log("Connected to MongoDB")
})

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    googleId: { type: String, required: false },
    displayName: { type: String, required: true },
    username: { type: String, required: false },
    hash: { type: String, required: false },
    salt: { type: String, required: false }
  })
)

const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  dbName: "simple-login",
  collectionName: "sessions"
})

module.exports.User = User
module.exports.sessionStore = sessionStore
