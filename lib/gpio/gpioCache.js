/*
IO口缓存
*/
var wpi = require('wiring-pi'),
	gpioConst = require('./gpioConst.js');


var md = {};
md._cache = {};

md.getPin = function(id){
	var key = parseInt(id);

	//默认值
    if(!md._cache[key]){
        var pinName = gpioConst.pinName(key),
            pinMode = gpioConst.defaultMode,
        	pinValue = wpi.digitalRead(key);

        wpi.pinMode(key, pinMode);

        var pinData = {
            pin: key,
            name: pinName,
            mode: pinMode,
            value: pinValue
        };

        md.setPin(key, pinData);
    }

	return md._cache[key];
}
md.setPin = function(id, pinData){
	var key = parseInt(id);
	md._cache[key] = pinData;
}

md.init = function(){
	var pinNum = gpioConst.pinNum();

	for(var i = 1; i <= pinNum; i++){
		md.getPin(i);
	}
}


module.exports = md;
