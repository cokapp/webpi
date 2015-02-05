/*
读取IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpio\/(\d+)/i,
	doGet: function() {
		var pin = parseInt(this.para.urlPara[1]);

		var wpi = require('wiring-pi');
		wpi.setup('phys');

		this.contentType = 'json';
		this.model = {
			pin: pin,
			mode: wpi.pinMode(pin,  wpi.OUTPUT),
			value: wpi.digitalRead(pin)
		};
	},
	doPost: function() {
		var pin = parseInt(this.para.urlPara[1]);
		var mode = parseInt(this.para.body.mode),
		    value = parseInt(this.para.body.value);

		var wpi = require('wiring-pi');
		wpi.setup('phys');

		wpi.pinMode(pin, mode);
		wpi.digitalWrite(pin, value);

		this.contentType = 'json';
		this.model = {
			pin: pin,
			value: wpi.digitalRead(pin)
		};
	}

});

module.exports = Handler;
