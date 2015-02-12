/*
单个管理IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpios\/(\d+)/i,
	doGet: function(cb) {
		var _this = this;
		var pin = parseInt(_this.para.urlPara[1]);

		_this.contentType = 'json';
		_this.model = GPIO.readPin(pin);
		cb();
	},
	doPost: function(cb) {
		var _this = this;

		var pin = parseInt(this.para.urlPara[1]);
		var data = {
			mode: _this.para.body.mode,
			value: _this.para.body.value
		};

		_this.contentType = 'json';
		_this.model = GPIO.writePin(pin, data);
		cb();
	}

});

module.exports = Handler;