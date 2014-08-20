# Frontend

A front-end setup Inspired by [Dan Sacket](https://github.com/dansackett).

## A global Node Installation

    $ sudo add-apt-repository ppa:chris-lea/node.js
    $ sudo apt-get update
    $ sudo apt-get install nodejs 

## Install Bower and Gulp 

    $ sudo apt-get install -g bower gulp

## Install Bower Packages

This refers to the `bower.json` and are automatically placed in `public/third-party` defined in `.bowerrc`

    $ bower install

## Install Gulp Packages

This refers to the `package.json` file.

    $ npm install

# Compile Coffee and SASS

    $ gulp 

# Compile Coffee and SASS on Save

    $ gulp watch
