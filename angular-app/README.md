# Angular Application

This prototype is a part of my bachelor's thesis. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or later)
- [Angular CLI](https://angular.io/cli) (version 17.2.1 or later)

### Install the dependencies:
```sh
npm install
```
### Available Scripts

In the project directory, you can run:

```sh
ng serve
```
Runs the app in development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
ng build
```
Builds the app for production to the `dist` folder.\
It correctly bundles Angular in production mode and optimizes the build for the best performance.

### Deployment
#### Build settings for AWS Amplify:
```yml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .amplify-hosting
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
    appRoot: angular-app

```
#### Environment variables:
in directory /angular-app/src/environments change apiUrl to the backend url in both files.
```
AMPLIFY_DIFF_DEPLOY=false
AMPLIFY_DIFF_DEPLOY=angular-app
_CUSTOM_IMAGE=public.ecr.aws/docker/library/node:18.17.0
```
