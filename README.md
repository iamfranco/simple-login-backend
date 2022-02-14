# simple login backend

## Overview

This is the backend of a simple login app (MERN stack).

The frontend is [simple-login-client](https://github.com/iamfranco/simple-login-client).

## `.env` file

Within the root folder, create a `.env` file containing the environment variables:

```
CLIENT_URI=http://localhost:3000
MONGO_URI=
SESSION_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

where:

- `CLIENT_URI` is the URL of the simple-login-client, we can set it as `http://localhost:3000` or appropriate
- `MONGO_URI` is the MongoDB connection string
- `SESSION_SECRET` could be any random string we like, for express-session
- `GOOGLE_CLIENT_ID` is the client id for google OAuth
- `GOOGLE_CLIENT_SECRET` is the client secret for google OAuth
