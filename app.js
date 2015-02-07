//Set Core Lib
var NodeMVC = require('cokmvc');

var options = {
    appRoot: __dirname
};

var wpi = require('wiring-pi');
wpi.setup('phys');
global.wpi = wpi;

//StartUP
NodeMVC.startup(options, function(server){
    //NodeMVC is working, enjoy!
});