(function(w){
	w.globalConfig = {
		 host : "175.27.135.69",
		 port : 8080
	}
	return w;
})(window || {});

var browser = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: (!!u.match(/AppleWebKit.*Mobile/) || !!u.match(/Windows Phone/) || !!u.match(/Android/) || !!u.match(/MQQBrowser/)) && !u.match(/iPad/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1 || u.indexOf('UCBrowser') > -1, //iPhone终端
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
//判断是否移动端
if(browser.versions.mobile || browser.versions.iPhone || browser.versions.android || browser.versions.weixin || browser.versions.qq) {
}else{
	document.location.href ='http://www.gannanzz.com';
}

function closeConsultPop(){
	$("#popCard").css("display","none");
}
(function(){
	var consultLink = 'http://kf.gannanzz.com/s/54146xjap';
	var consultIcon = '\t\t<a target="_blank"\thref="'+consultLink+'" class="layui-icon'
			 + ' layui-icon-dialogue"\n'
					  + '\t\t   style="position:fixed; background-color:#ff5722;top:35%; left:84%;\n'
					  + '\t\tfont-size: 55px; border-radius: 15px; z-index: 99; color: white"></a>';
	$("body").append(consultIcon);

	var popHtml ='\t<div id="popCard" class="layui-row" style="position: fixed; left: 13%; top: 23%; height:'
				 + ' 221.021px;\n'
				 + '\t\twidth:70%; background-color: #ff5722;">\n'
				 + '\t\t\t<div class="layui-col-md6 mc-ui-absolute-pane" style="height: 249px;">\n'
				 + '\t\t\t\t<span onclick="closeConsultPop()" class="mc-ui-geometry-char" style="height: 20px; width:'
				 + ' 10.0208px;'
				 + ' position:'
				 + ' absolute; left: 93.7657%; top: 4.47692%; color: rgb(255, 255, 255);">X</span>\n'
				 + '\t\t\t\t<span class="mc-ui-geometry-char" style="height: 29.0208px; width: 229.021px; position: absolute; left: 2.90909%; top: 12.5%; font-size: 20px; font-weight: bold; color: rgb(255, 255, 255);">1.考不上高中怎么办</span>\n'
				 + '\t\t\t\t<span id="uuidc37a4d90-02f3-4455-b7a1-1f63c9f6494a" class="mc-ui-geometry-char" style="height: 29.0208px; width: 229.021px; position: absolute; left: 2.56391%; top: 24.6943%; font-size: 20px; font-weight: bold; color: rgb(255, 255, 255);">2.该如何选择好专业</span>\n'
				 + '\t\t\t\t<span id="uuid85a70304-25fe-4c7d-a1a7-43eea76966df" class="mc-ui-geometry-char" style="height: 29.0208px; width: 251.021px; position: absolute; left: 2.56391%; top: 36.4342%; font-size: 20px; font-weight: bold; color: rgb(255, 255, 255);">3.没参加高考可以读大专吗</span>\n'
				 + '\t\t\t\t<span id="uuid4f09739d-4d72-41a8-8485-0740c47133d2" class="mc-ui-geometry-char" style="height: 29.0208px; width: 251.021px; position: absolute; left: 2.56391%; top: 48%; font-size: 20px; font-weight: bold; color: rgb(255, 255, 255);">4.录取老师在线解答</span>\n'
				 + '\t\t\t\t<a href="'+consultLink+'" target="_blank" class="layui-btn layui-btn-normal"'
				 + ' style="position: absolute;'
				 + ' left:'
				 + ' 5.12781%; top:'
				 + ' 65.9863%; width: 35.5284%; font-weight: bold; font-size: 16px; background-color: rgb(0, 150,'
				 + ' 136)">现在咨询</a>\n'
				 + '\t\t\t\t<a onclick="closeConsultPop()" class="layui-btn layui-btn-primary" style="position:'
				 + ' absolute;'
				 + ' left:'
				 + ' 58.9699%; top:'
				 + ' 65.1767%; width: 35.5284%; font-weight: bold; font-size: 16px;">稍后再说</a>\n'
				 + '\t\t\t</div>\n'
				 + '\t\t</div>';
	setTimeout(function(){
		$("body").append(popHtml);
	},3000);
})();
