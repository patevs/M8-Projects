
# Best Mate (M8)

 > Best Mate (M8) website built using [`react`](https://github.com/facebook/react) javascript framework

| master | develop |
|:------:|:-------:|
| [![Build Status](https://travis-ci.org/patevs/best-m8.svg?branch=master)](https://travis-ci.org/patevs/best-m8) | [![Build Status](https://travis-ci.org/patevs/best-m8.svg?branch=develop)](https://travis-ci.org/patevs/best-m8) |


## Table of Contents

* [Create React App](#create-react-app)
* [CoreUI Admin Template](#coreui-admin-template)
* [React Firebase Authentication](#react-firebase-authentication)

## Create React App
This project was bootstrapped with [`Create React App`](https://github.com/facebook/create-react-app)

see also: [`User Guide`](docs/CRA.md)

### Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## CoreUI Admin Template

[![@coreui coreui](https://img.shields.io/badge/@coreui%20-coreui-lightgrey.svg?style=flat-square)](https://github.com/coreui/coreui)
[![@coreui react](https://img.shields.io/badge/@coreui%20-react-lightgrey.svg?style=flat-square)](https://github.com/coreui/react)

`CoreUI` is an Open Source Bootstrap Admin Template based on Bootstrap 4 and offers 6 versions:

 * [`HTML5 AJAX`](https://github.com/coreui/free-bootstrap-admin-template-ajax)
 * [`Angular 2+`](https://github.com/coreui/free-angular-admin-template)
 * [`React.js`](https://github.com/coreui/free-react-admin-template)
 * [`Vue.js`](https://github.com/coreui/free-vue-admin-template)
 * [`.NET Core 2`](https://github.com/coreui/free-dotnet-admin-template)

### Installation

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-react-admin-template.git my-project

# go into app's directory
$ cd my-project

 # install app's dependencies
$ npm install
```

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
CoreUI-React#v2.0.0
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html temlpate
│
├── src/             #project root
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

### Documentation

The documentation for the CoreUI Admin Template is hosted at our website [`CoreUI for React`](https://coreui.io/react/)

## React Firebase Authentication

[![Build Status](https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication.svg?branch=master)](https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-react-with-firebase/react-firebase-authentication.svg)](https://greenkeeper.io/)

* [Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/)
* [Live Version of half of the Tutorial](https://react-firebase-authentication.wieruch.com/)

### Features

* uses:
  * only React (create-react-app)
  * firebase 5
  * react-router 4
  * no Redux/MobX
    * [Redux Version](https://github.com/taming-the-state-in-react/react-redux-firebase-authentication)
    * [MobX Version](https://github.com/taming-the-state-in-react/react-mobx-firebase-authentication)
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Verification Email
  * Protected Routes with Authorization
  * Roles-based Authorization
  * Social Logins with Google, Facebook and Twitter
  * Linking of Social Logins on Account dashboard
  * Auth Persistence with Local Storage
  * Database with Users and Messages

### License

#### Commercial license

If you want to use this starter project to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase an commercial license for different team sizes:

* [1 Developer](https://gum.co/react-with-firebase-starter-pack-developer)
* [Team of up to 8 Developers](https://gum.co/react-with-firebase-starter-pack-team)
* [Unlimited Developers of an Organization](https://gum.co/react-with-firebase-starter-pack-organization)

It grants you also access to the other starter projects in this GitHub organization.

#### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use this starter project under the terms of the GPLv3.

### Installation

* `git clone git@github.com:the-road-to-react-with-firebase/react-firebase-authentication.git`
* `cd react-firebase-authentication`
* `npm install`
* `npm start`
* visit http://localhost:3000/
* Use your own Firebase Credentials

#### Use your own Firebase Credentials

* visit https://firebase.google.com and create a Firebase App
* copy and paste your Credentials from your Firebase App into *src/components/Firebase/firebase.js* file or in .env file
* [activate Sign-In Methods in your Firebase App](https://www.robinwieruch.de/react-firebase-social-login/)
  * Email/Password
  * Google
  * Facebook
  * Twitter
