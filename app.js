//Set Core Lib
var NodeMVC = require('cokmvc');

var options = {
    appRoot: __dirname
};

global.GPIO = require('./lib/gpio/index.js');

//StartUP
NodeMVC.startup(options, function(server){
    //NodeMVC is working, enjoy!



    
});