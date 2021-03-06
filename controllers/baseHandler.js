var pinCache = global.webpi.pincache;

var Handler = COKMVC.BaseController.extend({
	wpi: global.webpi.api,
	device: global.webpi.device,

	modeNumber: global.webpi.const.modeNumber,
	modeText: global.webpi.const.modeText,
	pinName: global.webpi.const.pinName,

	readPin: function(pin){
		var _this = this;

		var cachedPinData;
		if(pinCache[pin]){
			cachedPinData = pinCache[pin];
			cachedPinData.pin = pin;
			cachedPinData.name = _this.pinName(pin);
		}else{
			cachedPinData = {
				pin: pin,
				name: _this.pinName(pin),
				mode: null,
				value: null
			};
		}

		if(cachedPinData.mode === null){
			_this.wpi.pinMode(pin, _this.wpi.OUTPUT);
			cachedPinData.mode = _this.modeText(_this.wpi.OUTPUT);
		}
		cachedPinData.value = _this.wpi.digitalRead(pin);

		pinCache[pin] = cachedPinData;
		return cachedPinData;
	},
	writePin: function(pin, pinData){
		var _this = this;

		var cachedPinData = {};
		if(pinCache[pin]){
			cachedPinData = pinCache[pin];
		}

		if(pinData.mode != undefined && 
			pinData.mode != null){
			var pinMode = _this.modeNumber(pinData.mode);
			_this.wpi.pinMode(pin, pinMode);
			cachedPinData.mode = _this.modeText(pinMode);
		}else if(cachedPinData.mode === undefined 
			|| cachedPinData.mode === null){
			var pinMode = _this.wpi.OUTPUT;
			_this.wpi.pinMode(pin, pinMode);
			cachedPinData.mode = _this.modeText(pinMode);
		}

		if(pinData.value != undefined && 
			pinData.value != null){
			var pinValue = parseInt(pinData.value);
			_this.wpi.digitalWrite(pin, pinValue);
			cachedPinData.value = pinValue;
		}else if(cachedPinData.value === null
			|| cachedPinData.value === undefined){
			cachedPinData.value = _this.wpi.digitalRead(pin);
		}

		pinCache[pin] = cachedPinData;

		return cachedPinData;
	}

});

module.exports = Handler;