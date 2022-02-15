# simple login backend

## Overview

This is the backend of a simple login app (MERN stack).

The frontend is [simple-login-client](https://github.com/iamfranco/simple-login-client).

[[Click here for Demo frontend]](https://francochanco-simple-login.netlify.app)

[[Click here for Demo backend]](https://francochanco-simple-login.herokuapp.com)

## `.env` file

Within the root folder, create a `.env` file containing the environment variables:

```
CLIENT_URI=http://localhost:3000
URI_IS_REMOTE_SECURE=FALSE
MONGO_URI=
SESSION_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

where:

- `CLIENT_URI` is the URL of the [simple-login-client](https://github.com/iamfranco/simple-login-client).

  We can set it as `http://localhost:3000` if it is still local,
  <br>or as `https://francochanco-simple-login.netlify.app` if it is up on netlify.

- `URI_IS_REMOTE_SECURE` set as `TRUE` if the site is already up on heroku etc with the `https:`, otherwise leave it as `FALSE` if it's `http://localhost...`
- `MONGO_URI` is the MongoDB connection string
- `SESSION_SECRET` could be any random string we like, for express-session
- `GOOGLE_CLIENT_ID` is the client id for google OAuth
- `GOOGLE_CLIENT_SECRET` is the client secret for google OAuth
