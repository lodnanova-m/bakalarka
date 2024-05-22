# Oracle JET Virtual DOM Application

This project is developed as a demonstration of the Virtual DOM architecture in Oracle JET, as outlined in the official [Oracle JET documentation](https://docs.oracle.com/en/middleware/developer-tools/jet/14/vdom/get-started-virtual-dom-architecture-oracle-jet.html#GUID-6AEB5A00-22D8-4BC1-AAB3-4134F906C1C0).

## Prerequisites

Ensure the following software is installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npm.com/get-npm) (version 6.x or later)
- Oracle JET CLI (Install via npm with `npm install -g @oracle/ojet-cli`)

## Getting Started

To set up and run this project locally, follow these instructions.

### Install the dependencies:
```sh
npm install
```


### Available Scripts

In the project directory, you can run:

```sh
ojet serve
```
Launches the application in development mode.
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.


The page will reload if you make edits.
You will also see any lint errors in the console.

```sh
ojet build --release
```

Compiles the application for production to the `web` folder.
It optimizes the Oracle JET application for best performance in production mode.

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
            - npx ojet build web --release
      artifacts:
        baseDirectory: web
        files:
          - '**/*'
      cache:
        paths:
          - .npm/**/*
    appRoot: jet-vdom-web-app

```
#### Environment variables:
```
AMPLIFY_MONOREPO_APP_ROOT=jet-vdom-web-app
AMPLIFY_DIFF_DEPLOY=false
```
