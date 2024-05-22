# Preact Application

This prototype is a part of my bachelor's thesis and was created using [Create Preact App](https://preactjs.com/).

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or later)

### Install the dependencies:

```sh
npm install
```

### Available Scripts

In the project directory, you can run:

```sh
npm run dev
```

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```sh
npm run build
```

Builds the app for production to the dist folder.
It correctly bundles Preact in production mode and optimizes the build for the best performance.

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
        baseDirectory: dist
        files:
          - "**/*"
      cache:
        paths:
          - .npm/**/*
    appRoot: preact-app
```

#### Environment variables:

```
AMPLIFY_DIFF_DEPLOY=false
AMPLIFY_MONOREPO_APP_ROOT=preact-app
```
