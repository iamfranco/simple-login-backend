require("dotenv").config()
const genHashSalt = require("./auth").genHashSalt
const endpointURI = require("./../endpointURI")
const port = process.env.PORT || 5000
const clientHomepage = endpointURI.clientHomepage
const clientLoginPage = endpointURI.clientLoginPage

function setRoutes(app, User, passport) {
  app.get("/", (req, res) => {
    res.send("Hello World")
  })

  app.post("/register", (req, res) => {
    const username = req.body.username || ""
    const password = req.body.password || ""

    if (username == "" || password == "") {
      console.log("invalid username or password")
      return res.json({
        success: false,
        message: "invalid username or password"
      })
    }

    // fail if username already exists
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log("error during MongoDB username search")
        return res.json({
          success: false,
          message: "error during MongoDB username search"
        })
      }

      if (user) {
        console.log("username already exist")
        return res.json({
          success: false,
          message: "username already exist"
        })
      } else {
        // store new username and hashed password to mongoDB
        const { hash, salt } = genHashSalt(password)
        User.create(
          {
            displayName: username,
            username: username,
            hash: hash,
            salt: salt
          },
          (err, user) => {
            if (err) {
              console.log("error during MongoDB create new user")
              return res.json({
                success: false,
                message: "error during MongoDB create new user"
              })
            }
            req.login(user, err => {
              if (err) {
                console.log("error during login")
                return res.json({
                  success: false,
                  message: "error during login"
                })
              }
              console.log("successful login")
              return res.json({
                success: true
              })
            })
          }
        )
      }
    })
  })

  app.post("/login", passport.authenticate("local"), (req, res) => {
    if (req.isAuthenticated()) {
      return res.json({
        success: true
      })
    } else {
      return res.json({
        success: false,
        message: "login failed"
      })
    }
  })

  app.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }))

  app.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: clientLoginPage }), function (req, res) {
    res.redirect(clientHomepage)
  })

  app.get("/logout", (req, res) => {
    req.logout()
    res.send("logged out")
  })

  app.get("/getuser", (req, res) => {
    res.send(req.user)
  })

  app.listen(port, () => {
    console.log("Listening on " + port)
  })
}

module.exports = setRoutes
