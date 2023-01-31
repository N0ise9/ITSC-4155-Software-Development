# ITSC-4155-Software-Development

ITSC-4155 Software Development Projects class at UNCC

# Getting Up and Running with LetsEat

## Install NodeJS

This project requires Node 18.13.0 or newer. Go to [nodejs.org](https://nodejs.org/en/), download and install NodeJS 18.13.0 or newer. Be sure to include NPM and adding Node to your PATH during installation.

- NPM stands for Node Package Manager and is a command-line tool for managing dependencies of projects.
- You can verify node is installed by opening a terminal and typing `node --version`. Verify the version matches the requirements above.

## Installing Dependencies

Once Node and NPM are installed, open a terminal and navigate to the root of this project. Run the command `npm install`. This will install all of the dependencies needed for running the project.

- To see a list of the dependencies for this project open the `package.json` in the root of this project. You'll notice two sections called `dependencies` and `devDependencies`. Dependencies are the packages that will be included when building the app for production. Dev dependencies are only used during development. This helps keep the bundle size small when deploying to production.
- You'll notice that a new folder is automatically added called `node_modules`. This folder holds the source for all of the project's dependencies. This folder should not be committed to source control.

## Running the Code

### Environment and Local Database

This project uses [Prisma](https://www.prisma.io) with a [PostgreSQL](https://www.postgresql.org/) database to store all of the necessary data to run LetsEat. You will need [Docker](https://www.docker.com/) installed on your machine. You can go [here](https://docs.docker.com/get-docker/) to download the latest version of Docker.

[WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) will need to be installed on your machine in order to properly communicate with Docker containers. WSL stands for "Windows Subsystem for Linux". To learn more about WSL2, you can go [here](https://learn.microsoft.com/en-us/windows/wsl/about). To install WSL2, open PowerShell and enter the following command:

```
wsl --install
```

After this has finished, to verify that you are running WSL2, you will then run this command:

```
wsl --set-default-version 2
```

Restart your computer if necessary.

Prisma for TypeScript requires an environment variable in a `.env` file for database linkage. This file contains environment variables that will be personal for anyone who clones this repository and is not included in commits.

- Create a file named `.env` in the root of the project - in the same place as this README.md file. In this new file, in the first line add:

```
DATABASE_URL="postgresql://LetsEat:EatingIsFUN@localhost:5432/postgres"
```

- Save the file.

Once you have installed Docker, WSL2, Node.js, and ran `npm install` in the root of this project, run the following command in a terminal/Powershell window:

```
docker run --name letseat -p 5432:5432 -e POSTGRES_USER=LetsEat  -e POSTGRES_PASSWORD=EatingIsFUN -d postgres
```

This starts a new container using the [latest PostgreSQL image from Docker Hub](https://hub.docker.com/_/postgres) with the name "letseat."

Next run `npx prisma db push` in a terminal with the working directory in the root of this project. This command compiles the Prisma schema, pushes it to the Postgres DB, and generates the types for development.

- To stop the container, run the command: `docker container stop letseat`.
- To start the container, run the command: `docker container start letseat`.

Prisma also offers a tool for viewing the data in the database called Prisma Studio. To start it, run the command: `npx prisma studio`. This will output a localhost URL that you can paste into your browser and explore the database.

### Start LetsEat

Now that our dependencies are installed and our database is running, we can run the code. Type `npm start` to start the project. To stop the project or to stop Prisma Studio hit `CTRL + C` in the running terminal.

## Tests

This project uses [Jest](https://jestjs.io/) and [ts-jest](https://www.npmjs.com/package/ts-jest) for writing and running tests. Test files are denoted by files with the `.spec.ts` extension.

### Unit tests

To run unit tests use the command `npm run test`. This will run every unit test file found in the project. To run tests for a specific file use the command `npm run test [file name]`.

### Integration tests

To run integration tests make sure the Postgres container is running and use the command `npm run integration`. This will run every integration test file found in the project. To run tests for a specific file use the command `npm run integration [file name]`.
