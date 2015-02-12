//Set Core Lib
var NodeMVC = require('cokmvc');

var options = {
    appRoot: __dirname
};


var wpi = require('wiring-pi');
wpi.setup('phys');

global.webpi = {};
global.webpi.api = wpi;
global.webpi.const = require('./lib/const.js');
global.webpi.device = wpi.piBoardId();
global.webpi.device.pinNum = global.webpi.const.pinNum(global.webpi.device.model);
global.webpi.pincache = {};

//StartUP
NodeMVC.startup(options, function(server){
    //NodeMVC is working, enjoy!



    
});