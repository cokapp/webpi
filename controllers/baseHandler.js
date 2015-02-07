var pinCache = new COKMVC.hashmap();
var CONST = require('../lib/const.js');


var Handler = COKMVC.BaseController.extend({
	wpi: global.wpi,
	modeNumber: CONST.modeNumber,
	modeText: CONST.modeText,

	readPin: function(pin, callback){
		var _this = this;

		var cachedPinData;
		if(pinCache.containsKey(pin)){
			cachedPinData = pinCache.get(pin);
		}else{
			cachedPinData = {
				pin: pin,
				name: CONST.pinName(pin),
				mode: null,
				value: null
			};
		}

		if(cachedPinData.mode === null){
			_this.wpi.pinMode(pin, global.wpi.OUTPUT);
			cachedPinData.mode = _this.modeText(global.wpi.OUTPUT);
		}
		cachedPinData.value = _this.wpi.digitalRead(pin);

		pinCache.put(pin, cachedPinData);
		callback(cachedPinData);
	},
	writePin: function(pin, pinData, callback){
		var _this = this;

		var cachedPinData = {};
		if(pinCache.containsKey(pin)){
			cachedPinData = pinCache.get(pin);
		}


		if(pinData.mode != undefined && 
			pinData.mode != null && 
			pinData.mode != cachedPinData.mode){
			var pinMode = _this.modeNumber(pinData.mode);
			_this.wpi.pinMode(pin, pinMode);
			cachedPinData.mode = _this.modeText(pinMode);
		}
		if(pinData.value != undefined && 
			pinData.value != null && 
			pinData.value != cachedPinData.value){
			var pinValue = parseInt(pinData.value);
			_this.wpi.digitalWrite(pin, pinValue);
			cachedPinData.value = pinValue;
		}

		pinCache.put(pin, cachedPinData);

		callback(cachedPinData);
	}

});

module.exports = Handler;