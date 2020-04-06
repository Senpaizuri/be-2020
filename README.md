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
* [Feature](#feature)
* [TLDR;](#tldr)
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

For this project to run smoothly make sure you have a working and running [MongoDB Atlas cluster](https://www.mongodb.com/cloud).

The `.env` file should contain the following
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

# Feature

I want people to be able to login without a hitch, and be able to change their profile info. Apart from that I'd like to create a wall where the users can post messages so that they can make themselves as interesting as they want you to think. You'll also be able to match with others based on simple preferences and chat with them.

**notes**

* Some people won't want their data given out for free to other strangers on the web.

# TLDR;
With [this app](https://be-2020.herokuapp.com/) people can: 

1. User visits the website and creates a new account (`/register`)
2. The user proceeds to login (`/login`)
3. The user can then see other profiles (`/profile/:uid`) or change it's own (`/profile/:uid/edit`) 

*todo*

4. Users can add posts to their own wall
5. Users can connect through basic preferences
6. Users can chat with each other once they match

# TODO

## MVP

* [x] Basic Login/register Flow
* [x] Basic sessions with JTW or SS Sessions
* [x] Basic Styling
* [x] User Profiles
* [x] Editable Profiles
* [x] List other Users
* [x] View other Users

## BACKLOG

* [ ] Redesign App
* [ ] Better Server Side Feedback form validation
* [ ] Add wall/posts to profiles
* [ ] Client Side feedback form validation
* [ ] Add "Online" functionality
* [ ] Add Matching with other users
* [ ] Add Chatting (RT?) with other users
* [ ] Look into JTW for sessions instead of SS sessions?
* [ ] Hybrid Filter/Login?
* [ ] Image uploads for profiles/posts?

# Resources
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