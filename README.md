# be-2020

Little backend prototype for `Thunder Dating`, an assessment for [Backend development](https://github.com/cmda-bt/be-course-19-20).

[Heroku link](https://be-2020.herokuapp.com/)

In this app you can signup/register and meet other people by chatting with them or checking out their wall.
This website is built PE first, so no JS was hurt in the client whilst setting up the base for this app.

# Table of contents

* [Install](#install)
    * [Additional notes](#additional-notes)
* [Deployment](#deployment)
* [Tech stack](#tech-stack)
* [Feature](#feature)
* [Scheme](#scheme)
* [Topics (A2)](#topics-a2)
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

# Deployment

The current [prototype](https://be-2020.herokuapp.com/) is being deployed on [Heroku](https://www.heroku.com/).
Every commit to the `release` branch will trigger an automatic deployment.

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

# Feature

I want people to be able to login without a hitch, and be able to change their profile info. Apart from that I'd like to create a wall where the users can post messages so that they can make themselves as interesting as they want you to think. You'll also be able to match with others based on simple preferences and chat with them.

**notes**

* Some people won't want their data given out for free to other strangers on the web.

# Scheme

## User

<details>
<summary> 
    User Schematic for mongoDB 
</summary>

```js
{
    objId: objectId,
    displayName: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true
    },
    firstName: {
        type:String,
        required: true
    },
    middleName: {
        type:String
    },
    lastName: {
        type:String,
        required: true
    },
    favoriteColor: {
        type:String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    bio: {
        type:String,
    },
    email: {
        type: String, 
        unique: true
    },
    gender:{
        type: String,
        required: true
    },
    hidePersonalData:{
        type: Boolean,
        required: true,
        default: true
    },
    uid:{
        type: String,
        require: true
    }
}
```

</details>

## Posts

**posts** Schematic for mongoDB

*WIP*

## Chat

**chat** Schematic for mongoDB

*WIP*

# Topics (A2)
- [x] Deploy your node app  and .env variables

The app has been deployed on [heroku](https://be-2020.herokuapp.com/) and makes use of the `dot-env` package to handle keys locally. 

- [x] Compress assets that get send to the client

The app makes use of `compression`. A npm package that handles gzip'ing request that come from the node server.
- [x] Hash the passwords you store in the database

The passwords have been hashed and salted by `bcrypt`. The database only has encrypted passwords.

<details>
<summary>Research</summary>

Keeping your account safe and secure is of course a big deal. Now that hackers get relatively good tools for less compared to the olden days it's in a developers best interest to keep user accounts safe. Many hackers/breaches have brought to light that some hashing methods and mechanism aren't up to par to todays standard.


References and _"Light"_ reading concerning the subject:

- [Salted Password Hashing Doing it Right](https://www.codeproject.com/Articles/704865/Salted-Password-Hashing-Doing-it-Right)
- [Common Credentials (Raw File)](https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt)
</details>

- [x] Split up route logic in modules 

All code has been split up into modules. Be it for routes in `/dev/modules/routes` or other stuff like encryption (`/dev/modules/encryption`)  and db (`/dev/modules/db`) functions. 

- [ ] Handle exceptions properly

Form checking and error handling has been setup but hasn't had a thorough implementation.

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
- [Salted Password Hashing Doing it Right](https://www.codeproject.com/Articles/704865/Salted-Password-Hashing-Doing-it-Right)

# LICENSE

MIT License

Copyright (c) 2020 Maikel Sleebos

[read full license](LICENSE)