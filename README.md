# be-2020

Little backend prototype for `Thunder Dating`, an assessment for [Backend development](https://github.com/cmda-bt/be-course-19-20).

[Heroku link](https://be-2020.herokuapp.com/)

In this app you can signup/register and meet other people by chatting with them or checking out their wall.
This website is built PE first, so no JS was hurt in the client whilst setting up the base for this app.

# Table of contents

* [Install](#install)
    * [Additional notes](#additional-notes)
* [Tech stack](#tech-stack)
* [Deployment](#deployment)
* [TODO](#todo)
    * [MVP](#mvp)
    * [BACKLOG](#backlog)
* [Resources](#resources)
    * [Insightful resources](#insightful-resources)

# Install

```bash
    # Running locally?
    npm i && npm run start
```

```bash
    # Running locally and for dev?
    npm i && npm run dev
```

## Additional notes

- For this project to run smoothly make sure you have a working and running [MongoDB Atlas cluster](https://www.mongodb.com/cloud).

- The `.env` file should contain the following
```env
    MNG_URI = mongo server uri
    SESSION_HASH = a unique hash for signing server side sessions
    PORT = the port to run on locally
```

# Tech stack

The main npm package drivers of this project:

- bcrypt
- body-parser
- Ejs
- Express
- Express-session
- mongodb
- mongoose

<details>
    <summary>Other Dependencies</summary>

- dotenv
- Concurrently
- Gulp (and small gulp packages)
- nodemon
- node-fetch
- node-sass

</details>

# Deployment

The current [prototype](https://be-2020.herokuapp.com/) is being deployed on [Heroku](https://www.heroku.com/).
Every commit to the `release` branch will trigger an automatic deployment.

# TODO

## MVP
[x] Basic Login/register Flow
[x] Basic sessions with JTW or SS Sessions
[ ] Basic Styling
[x] User Profiles
[x] Editable Profiles
[x] List other Users
[x] View other Users

## BACKLOG

[ ] Redesign App
[ ] Client Side feedback for form validation
[ ] Add "Online" functionality
[ ] Add Chatting (RT?) with other users
[ ] Add Matching with other users
[ ] Add wall/posts to profiles
[ ] Look into JTW for sessions instead of SS sessions
[ ] Image uploads for profiles/posts

## Resources
- [MongoDB - Node](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)
- [MongoDB - CodeCamp](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Express Sessions](https://www.npmjs.com/package/express-session)
- [Gulp](https://gulpjs.com/docs/en/api/concepts/)
- [Multer, GridFS](https://bezkoder.com/node-js-upload-store-images-mongodb/)

### Insightful resources
- [JWT "vs" Sessions](https://stackoverflow.com/questions/43452896/authentication-jwt-usage-vs-session)
- [Authentication with JWT](https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c)
- [Pagination](https://codeforgeek.com/server-side-pagination-using-node-and-mongo/)
- [Generate UID](https://stackoverflow.com/questions/18524125/req-query-and-req-param-in-expressjs)

# LICENSE
MIT License

Copyright (c) 2020 Maikel Sleebos

[read full license](LICENSE)