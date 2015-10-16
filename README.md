# My Application

The project is generated by [LoopBack](http://loopback.io).

Make sure you have installed all of the following prerequisites on your development machine:
## Prerequisites
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* MySQL server - [Download & Install MySQL](https://www.mysql.com/downloads/) server and setup root user as 'root' with password as 'password'. Start the MySQL server instance on default port
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Gulp - You're going to use the [Gulp Task Runner](//http://gulpjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install gulp globally using npm:

```bash
$ npm install -g gulp
```

### Clone The GitHub Repository
You can use Git to directly clone the INFLO repository from githubb:
```bash
$ git clone https://github.com/Octo-Hackathon/DataCenterMashup.git
```
This will clone the latest version of the DataCenterMashup repository to a **DataCenterMashup** folder.

## Quick Install
Once you've cloned the repository and installed all the prerequisites, go to DataCenterMashup directory and install Node.js dependencies using npm:

```bash
$ npm install
```
Start your backend Node server:
```bash
$ node .
```

After that, open a new command shell and go to DataCenterMashup/ui directory and build UI resources using:

```bash
$ npm install
$ bower install
```

## Running Your Application
After the install process is over, you'll be able to run your application using gulp.

```bash
$ gulp serve
```

## Running Reporting Server
Please see [README](https://github.com/Octo-Hackathon/DataCenterMashup/blob/master/ReportsWebApp/README.md) to setup and start Report server.

Your application should run on port 3000, so in your browser just go to [http://localhost:3333](http://localhost:3333)

That's it! Your application should be running.
