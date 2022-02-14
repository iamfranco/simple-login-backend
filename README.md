# simple login backend

## Overview

This is the backend of a simple login app (MERN stack).

The frontend is [simple-login-client](https://github.com/iamfranco/simple-login-client).

## `.env` file

Within the root folder, create a `.env` file containing the environment variables:

```
MONGO_URI=
SESSION_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

where:

- `MONGO_URI` is the MongoDB connection string
- `SESSION_SECRET` could be any random string you like, for express-session
- `GOOGLE_CLIENT_ID` is the client id for google OAuth
- `GOOGLE_CLIENT_SECRET` is the client secret for google OAuth
