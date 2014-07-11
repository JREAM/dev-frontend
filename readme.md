# CoffeeScript

JavaScript sucks.

    # Global Node Installation
    $ sudo add-apt-repository ppa:chris-lea/node.js
    $ sudo apt-get update
    $ sudo apt-get install nodejs coffeescript

Then $ coffee

    coffee --join site.js --watch --compile --output coffee/ js/