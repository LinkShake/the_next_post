# TheNextPost

## Index

[//]: <> (prettier ignore)

> - [About](https://github.com/LinkShake/the_next_post#about)
>   - [The project](https://github.com/LinkShake/the_next_post#the-project)
>   - [The techstack](https://github.com/LinkShake/the_next_post#the-techstack)
> - [Setup](https://github.com/LinkShake/the_next_post#setup):
>   - [Download the code and install all the dependencies](https://github.com/LinkShake/the_next_post#download-the-code-and-install-all-the-dependencies)
> - [Setup the enviroment variables](https://github.com/LinkShake/the_next_post#setup-the-enviroment-variables)
> - [Run the project](https://github.com/LinkShake/the_next_post#run-the-project):
>   - [Run via CLI and npm](https://github.com/LinkShake/the_next_post#run-via-cli-and-npm)
> - [Future of the project](https://github.com/LinkShake/the_next_post#future-of-the-project):
>   - [What misses in the project](https://github.com/LinkShake/the_next_post#what-misses-in-the-project)
>   - [Potential new features](https://github.com/LinkShake/the_next_post#potential-new-features)

## About

### The project

TheNextPost is a "reddit-clone". More precisly is a fullstack web app realized with the core concepts of rooms that users can create.
In these rooms you can post some text content, edit it or delete it and you can also comment different posts.

### The techstack

To build this project I used mainly these technologies:

|               |                                                 |
| ------------- | ----------------------------------------------- |
| **Language**  | [`Typescript`](https://www.typescriptlang.org/) |
| **Framework** | [`Next.js 13`](https://beta.nextjs.org/)        |
| **Database**  | [`Mongodb`](https://www.mongodb.com/)           |
| **ODM**       | [`Mongoose.js`](https://mongoosejs.com/)        |
| **Auth**      | [`Nextauth.js`](https://next-auth.js.org/)      |

I built everything on top of REST APIs directly in the api routes provided by Next.

## Setup

**Important:** To download the dependencies and run the project you need [`Node.js`](https://nodejs.org/it/) and [`npm`](https://www.npmjs.com/) installed on your machine. To be able to do CRUD operations you have to have Mongodb installed.

### Download the code and install all the dependencies

In order to download the code you can clone the repo

```
git clone https://github.com/LinkShake/the_next_post.git
```

or you can decide to download zipped code.
To download all the dependencies run

```
 npm i
```

in the command line.

## Setup the enviroment variables

In order to use the app you have to create a `.env` file with:

- your github id
- your github app's secret
- your db URI

For more information about auth check [`Nextauth`](https://next-auth.js.org/getting-started/example) docs.

## Run the project

### Run via CLI and npm

To run this project using the command line and npm you have to write

```
npm dev
```

in your command line and press enter: this will launch the app at `http://localhost:3000`.

## Future of the project

- Polish the comments feature
- Make the app responsive
