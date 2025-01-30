# Ai Monorepo

A monorepo with a client->server architecture in a single repository. 

## Requirements

MySQL

or

Docker with MySQL image running on it.


## Run Locally

Clone the project

```bash
  git clone git@github.com:dannielhugo/ai-monorepo.git
```

Go to the project directory

```bash
  cd ai-monorepo
```

Install dependencies

```bash
  npm install
```

To start the backend server

```bash
  npm run start:login
```

To start the frontend

```bash
  npm run start:app
```

## To run using Docker Compose:

To build the docker images

```bash
  docker compose build
```

To run the application in Local

```bash
  docker compose up
```

## To Build Docker Image standalone

To build an image for login service

```bash
  docker build -t {image name} -f ./services/login-service/DockerFile ./services/login-service
```

To build an image for Vue js app

```bash
  docker build -t {image name} -f ./services/vue-app/DockerFile ./services/vue-app
```

## Thanks

This project is based on [Microservices from selvaprasath2706](https://github.com/selvaprasath2706/Microservices/blob/master/README.md)