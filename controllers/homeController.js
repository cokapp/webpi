var Handler = COKMVC.BaseController.extend({
	doAll : function() {
		this.contentType = 'json';
		this.model = '<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b><a href="https://git.oschina.net/cokapp/NodeMVC" title="a quick mvc based on express!">NodeMVC</a></b>！</p>';
	}
});

module.exports = Handler;