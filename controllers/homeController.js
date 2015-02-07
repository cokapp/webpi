var Handler = COKMVC.BaseController.extend({
	doAll : function(cb) {
		this.model = {
			title: '欢迎访问！'
		};
		cb();
	}
});

module.exports = Handler;