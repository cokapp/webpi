/*
读取IO口
 */
var Handler = COKMVC.BaseController.extend({
	HandlerRegExp: /^\/gpio\/(\d+)\/read/i,
	doGet : function() {
		var pin = this.para.urlPara[1];

		this.contentType = 'json';
		this.model = {
			success: true,
			pin: pin,
			value: 1
		};
	}

});

module.exports = Handler;