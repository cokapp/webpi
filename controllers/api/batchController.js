/*
批量管理IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpios(?:\/((?:\d+-)+\d+))?$/i,
	doGet: function(cb) {
		var _this = this;

		var ids = undefined;
		if(_this.para.urlPara[1]){
			ids = [];
			var pinArray = _this.para.urlPara[1].split('-');
			for(var i in pinArray){
				var pin = pinArray[i];
				ids.push(parseInt(pin));
			}
		}

		var pinDataMap = GPIO.readPins(ids);

		_this.contentType = 'json';
		_this.model = pinDataMap;

		cb();
	},
	doPost: function(cb) {
		var _this = this;

		var pinDatas = _this.para.body.gpio;
		var pinDataMap = GPIO.writePins(pinDatas);

		_this.contentType = 'json';
		_this.model = pinDataMap;

		cb();
	}

});

module.exports = Handler;