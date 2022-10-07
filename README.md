# Dragons info App

This Fullstack app (SPA React.js + Node.js with MonogoDB) allows you to receive
current information about spacecrafts by SpaceX named Dragons.

## Main functionality

- Authorisation: registration or login for registered users, logout.
- Getting up-to-date information about dragons for authorized users: Dragons
  list and more details about each of them
- This is basic functionality that can be expanded

## Implementation

### Backend (Authorisation) - Node.js + MongoDB

[Project on GitHub](https://github.com/YarPetru/spacex-spacecrafts-backend)
Backend deployed on
[heroku](https://spacex-spacecrafts-backend.herokuapp.com/api/). All changes on
github branch are automaticaly deployed on Heroku. If you want to run the app in
production/developer mode on your computer remember to change the
"axios.defaults.baseURL" in Frontend part to "http://localhost:9999/".

Backend created using basic security terms such as password encryption during
data transfer and user-friendly error-handling in frontend. But e.g. in case of
an incorrect login user receives message "Email or password is wrong" to make
hacking a bit more difficult 😅.

### Frontend Stack

- React SPA with adaptive design (using mobile first approach)
- React router v6 using Private/Public routes pattern
- Redux Toolkit. Async Thunk for auth, RTK Query for work with
  [SpaceX Api](https://github.com/r-spacex/SpaceX-API)
- Handwritten styles (including Carousel) on
  [styled components](https://styled-components.com/)
- [Formik](https://www.npmjs.com/package/formik) with
  [Yup](https://www.npmjs.com/package/yup) validation for Signup an Login forms
- Deploy on [Netlify](https://ypi-spacex-dragons.netlify.app/)

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory you can run::

### `npm install`

For install dev dependencies before working in dev mode

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console. Additionally configured pre-commit
linter check

### `npm run deploy`

Deploys the project to the [Netlify](https://ypi-spacex-dragons.netlify.app/),
automatically pre-create the build version
