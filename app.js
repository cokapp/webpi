//Set Core Lib
var NodeMVC = require('cokmvc');

var options = {
    appRoot: __dirname
};

var CONST = require('../lib/const.js');

var wpi = require('wiring-pi');
wpi.setup('phys');

var device = wpi.piBoardId();
device.pinNum = CONST.pinNum(device.model);

global.webpi = {
	const: CONST,
	device: wpi.piBoardId(),
	api: wpi
};

//StartUP
NodeMVC.startup(options, function(server){
    //NodeMVC is working, enjoy!
});