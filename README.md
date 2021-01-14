# Minitab Pre-Interview Assignment
#### Taran Rickard - tbr5094@psu.edu - 484-949-5540
&nbsp;

## Installation
To install and run our React Application you will need the following on your machine
#### Node.js and NPM
> https://nodejs.org/en/download/
#### The git CLI
> https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Once this is set up, open a terminal in the folder you'd like to download the package to. Then, download from github.
> git clone https://github.com/TaranRickard/minitab-interview.git

after downloading from github, a new folder will be created in your current directory. Navigate into that directory.
> cd minitab-interview

now that our react app is on the machine, we need to get ready to launch it. There are 2 ways to do this. We can either start the development server or serve the production build.

&nbsp;

## Launching the Development Server
In the same minitab-interview directory, we need to install the rest of the build dependencies.
> npm install

After the package is fully installed, we can start the development server

>npm start

###### Hint: if the directory is open in VSCode, there will be an 'NPM SCRIPTS' extension on the left underneath file explorer.

The React Application will open in your default web browser automatically and the command line will also show a url.

&nbsp;

## Serving the Production Build
The github repo also stores the hostable production build of the application. To launch this on your machine, you will need a static server. 

You can install a static server on any machine with Node.js here:
> npm install -g serve

This will install a server to the machine that can be launched from any directory. To serve the production build of our application, in the same minitab-directory ...

> serve build

The command line will show a URL to open in the browser.

