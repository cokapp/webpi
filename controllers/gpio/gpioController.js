/*
读取IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpio\/(\d+)/i,
	doGet: function() {
		var pin = this.para.urlPara[1];

		var wpi = require('wiring-pi');
		wpi.setup('phys');

		this.contentType = 'json';
		this.model = {
			pin: pin,
			mode: wpi.pinMode(pin),
			value: wpi.digitalRead(pin)
		};
	},
	doPost: function() {

	}

});

module.exports = Handler;