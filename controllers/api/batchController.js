/*
批量管理IO口
 */
 var baseHandler = require('../baseHandler');

var Handler = baseHandler.extend({
	HandlerRegExp: /^\/gpios(?:\/((?:\d+-)+\d+))?$/i,
	doGet: function(cb) {
		var _this = this;

		var pins = [];
		if(_this.para.urlPara[1]){
			var pinArray = _this.para.urlPara[1].split('-');
			for(var i in pinArray){
				var pin = pinArray[i];
				pins.push(parseInt(pin));
			}
		}else{
			for(var pin = 1; pin <= _this.device.pinNum; pin++){
				pins.push(pin);
			}
		}

		var pinMap = {};
		for(var i in pins){
			var pin = pins[i];
			pinMap[pin] = _this.readPin(pin);
		}

		_this.contentType = 'json';
		_this.model = pinMap;

		cb();
	},
	doPost: function(cb) {
		var _this = this;

		var pins = _this.para.body.gpio;

		var pinMap = {};

		for(var i in pins){
			var pinData = pins[i];
			pinData.pin = parseInt(pinData.pin);
			var pinData = _this.writePin(pinData.pin, pinData);	

			pinMap[pinData.pin] = pinData;
		}

		_this.contentType = 'json';
		_this.model = pinMap;

		cb();
	}

});

module.exports = Handler;