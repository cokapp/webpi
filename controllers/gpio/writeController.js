/*
写入IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpio\/(\d+)\/write\/(0|1)/i,
	doGet : function() {
		var pin = this.para.urlPara[1],
			val = this.para.urlPara[2];

		this.contentType = 'json';
		this.model = {
			success: true,
			pin: pin,
			value: val
		};
	}

});

module.exports = Handler;