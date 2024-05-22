# Next.js Application

This prototype is a part of my bachelor's thesis and it was bootstrapped with [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
npm run dev
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh
npm run build
```

Builds the app for production to the `.next` folder.\
It correctly bundles Next.js in production mode and optimizes the build for the best performance.

```sh
npm start
```

Starts the application in production mode.\
Make sure you have run `npm run build` first.

```sh
npm run lint
```

Runs the linter on the project files.

### Deployment

#### Build settings for AWS Amplify:

```yml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm install
        build:
          commands:
            - env | grep -e URL >> .env.production
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - "**/*"
      cache:
        paths:
          - .next/cache/**/*
          - node_modules/**/*
    appRoot: next_js_app
```

#### Environment variables:

url_backend = URL of the backend server.

```
AMPLIFY_DIFF_DEPLOY=false
AMPLIFY_DIFF_DEPLOY=next_js_app
_CUSTOM_IMAGE=public.ecr.aws/docker/library/node:18.17.0
URL=url_backend
```
