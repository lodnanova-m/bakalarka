# Svelte Application

This prototype is a part of my bachelor's thesis and was created using [Create Svelte](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (version 14.x or later)
- [npm](https://www.npmjs.com/get-npm) (version 6.x or later)

## Getting Started
Copy `.env.example` file and name it `.env`.
To get a local copy up and running, follow these simple steps.

### Install the dependencies:

```sh
npm install
```

### Available Scripts

In the project directory, you can run:

```sh
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Runs the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```sh
npm run build
```

Builds the app for production to the `dist` folder.\
It correctly bundles Svelte in production mode and optimizes the build for the best performance.

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
            - env >> .env
            - npm run build
            - node amplify.mjs
      artifacts:
        baseDirectory: .amplify-hosting
        files:
          - "**/*"
      cache:
        paths:
          - .npm/**/*
    appRoot: svelte-app
```

#### Environment variables:

url_backend = URL of the backend server.

```
_CUSTOM_IMAGE=public.ecr.aws/docker/library/node:18.19.0
URL=url_backend
```
