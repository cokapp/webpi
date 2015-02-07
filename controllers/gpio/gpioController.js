/*
读取IO口
 */
 var baseHandler = require('../baseHandler');

var Handler = baseHandler.extend({
	HandlerRegExp: /^\/gpio\/(\d+)/i,
	doGet: function(cb) {
		var _this = this;

		var pin = parseInt(_this.para.urlPara[1]);
		_this.readPin(pin, function(pinData){
			_this.contentType = 'json';
			_this.model = pinData
			cb();
		});
	},
	doPost: function(cb) {
		var _this = this;

		var pin = parseInt(this.para.urlPara[1]);
		var data = {
			mode: this.para.body.mode,
			value: this.para.body.value
		};

		_this.writePin(pin, data, function(pinData){
			_this.contentType = 'json';
			_this.model = pinData
			cb();
		});
	}

});

module.exports = Handler;