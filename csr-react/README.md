# CSR React Application

This prototype is a part of my bachelor's thesis and it was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or later)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Install the dependencies:

```sh
npm install
```

### Available Scripts

In the project directory, you can run:

```sh
npm start
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Deployment
#### Build settings for AWS Amplify:
```yml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci --cache .npm --prefer-offline
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: build
        files:
          - '**/*'
      cache:
        paths:
          - .npm/**/*
    appRoot: csr-react

```
#### Environment variables:
url_backend = URL of the backend server.
```
AMPLIFY_DIFF_DEPLOY=false
AMPLIFY_DIFF_DEPLOY=csr-react
REACT_APP_URL=url_backend
```