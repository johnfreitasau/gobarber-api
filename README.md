<h1 align="center">
  <img alt="Logo" src="https://res.cloudinary.com/dmjx3hvs0/image/upload/v1598600445/go_barber_mpvs1p.svg" width="200px">
</h1>

<h3 align="center">
  GoBarber project - Express Application 
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/johnfreitasau/gobarber-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/johnfreitasau/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Freitas-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/johnfreitasau/gobarber-api?color=%23FF9000">

  <a href="https://github.com/johnfreitasau/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/johnfreitasau/gobarber-api?color=%23FF9000">
  </a>

  <a href="https://github.com/johnfreitasau/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/johnfreitasau/gobarber-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/johnfreitasau/gobarber-api?color=%23FF9000">
</p>



## About the project

This api provides everything you need to organise appointments between the customers and the barbers.

Customer can select the best time available between Monday and Friday from 9am to 6pm.

Providers can see all their appointments using a calendar, manage the times and see his agenda of the day.

To see the **web client**, click here: [GoBarber Web](https://github.com/johnfreitasau/gobarber-web)<br />
To see the **mobile client**, click here: [GoBarber Mobile](https://github.com/johnfreitasau/gobarber-mobile)

## Technologies

Technologies used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: Docker is recommended

**Clone the project and access the folder**

```bash
$ git clone https://github.com/johnfreitas/gobarber-api.git && cd gobarber-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=gobarber -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of mongoDB using docker
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Create the instance of redis using docker
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# and set the values, if they are not filled,
# to connect with docker database containers
$ cp ormconfig.example.json ormconfig.json

# Once the services are running, run the migrations
$ yarn typeorm migration:run

# then, run the api service
$ yarn dev:server

# that's all. Enjoy the api!
```

## How to contribute

**Make a fork to this repository**

```bash
# Fork using GitHub official command line or using the github website.

$ gh repo fork johnfreitasau/gobarber-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gobarber-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
---
