## Welcome to the Articulate Developer Challenge!

### The coding challenge

Your goal is to implement a simplified version of the [Articulate Review](https://articulate.com/360/review#play-video) comment sidebar.

At a minimum, **your implementation should handle comments and replies to those comments**. What you choose to implement from there is up to you. :)

### Implementation notes:

- this project was bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app)
  - you can find information on how to perform a number of common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
- the React-based frontend lives in `/src` and is reachable at http://localhost:3000
- the beginning of a REST API lives in `/server` and is reachable at http://localhost:5000
  - the REST API currently loads static json files on start up and uses those as a makeshift in-memory database
- you don't need to worry about or implement authentication
  - there is a "current logged in user" toggle in the upper-right corner of the frontend website that lets you switch between users

### Getting started

To get things up and running on your dev machine:

1. `yarn install` (or `npm install`)
1. `yarn start` (or `npm start`)
