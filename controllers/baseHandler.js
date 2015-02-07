var CONST = {
	pinMode: {
		'in': global.wpi.INPUT,
		'out': global.wpi.OUTPUT,
		'input': global.wpi.INPUT,
		'output': global.wpi.OUTPUT,

		'INPUT': global.wpi.INPUT,
		'OUTPUT': global.wpi.OUTPUT,
		'PWM_OUTPUT': global.wpi.PWM_OUTPUT,
		'GPIO_CLOCK': global.wpi.GPIO_CLOCK,
		'SOFT_PWM_OUTPUT': global.wpi.SOFT_PWM_OUTPUT,
		'SOFT_TONE_OUTPUT': global.wpi.SOFT_TONE_OUTPUT
	}
};

var modeCache = new COKMVC.hashmap();
modeCache.put(global.wpi.INPUT, 'INPUT');
modeCache.put(global.wpi.OUTPUT, 'OUTPUT');
modeCache.put(global.wpi.PWM_OUTPUT, 'PWM_OUTPUT');
modeCache.put(global.wpi.GPIO_CLOCK, 'GPIO_CLOCK');
modeCache.put(global.wpi.SOFT_PWM_OUTPUT, 'SOFT_PWM_OUTPUT');
modeCache.put(global.wpi.SOFT_TONE_OUTPUT, 'SOFT_TONE_OUTPUT');

modeCache.put('IN', global.wpi.INPUT);
modeCache.put('OUT', global.wpi.OUTPUT);
modeCache.put('INPUT', global.wpi.INPUT);
modeCache.put('OUTPUT', global.wpi.OUTPUT);
modeCache.put('PWM_OUTPUT', global.wpi.PWM_OUTPUT);
modeCache.put('GPIO_CLOCK', global.wpi.GPIO_CLOCK);
modeCache.put('SOFT_PWM_OUTPUT', global.wpi.SOFT_PWM_OUTPUT);
modeCache.put('SOFT_TONE_OUTPUT', global.wpi.SOFT_TONE_OUTPUT);



var pinCache = new COKMVC.hashmap();


var Handler = COKMVC.BaseController.extend({
	wpi: global.wpi,
	modeNumber: function(text){
		var key = text.toUpperCase();
		return modeCache.get(key);
	},
	modeText: function(number){
		var key = parseInt(number);
		return modeCache.get(key);
	},

	readPin: function(pin, callback){
		var _this = this;

		var cachedPinData;
		if(pinCache.containsKey(pin)){
			cachedPinData = pinCache.get(pin);
		}else{
			cachedPinData = {
				pin: pin,
				name: 'pin' + pin,
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