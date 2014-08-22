# Frontend

This is a front-end Development Application that uses [NodeJS](http://nodejs.org) along with some of it's packages for rapid front-end development.
This front-end setup was inspired by [Dan Sacket](https://github.com/dansackett), my favorite guy.

## A global Node Installation
If you don't have Node Installed, here is how you can accomplish it properly on Ubuntu. Windows Installations do not need this.

    $ sudo add-apt-repository ppa:chris-lea/node.js
    $ sudo apt-get update
    $ sudo apt-get install nodejs 

## Install Bower and Gulp 
Again, this is an Ubuntu installation.

    $ sudo apt-get install -g bower gulp
    
For a Windows installation, open a terminal and run:

    $ npm install bower gulp

## Install Bower Packages

This refers to the `bower.json` and are automatically placed in `public/third-party`, the location is defined in `.bowerrc`

    $ bower install

## Install Gulp Packages

The NodeJS files refer to the `package.json` file, this includes all the Gulp files.

    $ npm install

# Ready to Rock

Once everything is installed you are ready to rock your system and develop like a boss.

## Compile Coffee and SASS

This is a one time compilation script that could be run at will, or even upon deployment if you use a deployment script.

    $ gulp 

# Compile Coffee and SASS on Save

This is the primary way to develop, just leave the `watch` running, and upon every save you'll have updated and compiled files.

    $ gulp watch
