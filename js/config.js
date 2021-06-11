(function(w){
	w.globalConfig = {
		 host : "175.27.135.69",
		 port : 8080
	}
	return w;
})(window || {});

$(function(){
	var MobileUA = (function() {
		var ua = navigator.userAgent.toLowerCase();

		var mua = {
			IOS: /ipod|iphone|ipad/.test(ua), //iOS
			IPHONE: /iphone/.test(ua), //iPhone
			IPAD: /ipad/.test(ua), //iPad
			ANDROID: /android/.test(ua), //Android Device
			WINDOWS: /windows/.test(ua), //Windows Device
			TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device
			MOBILE: /mobile/.test(ua), //Mobile Device (iPad)
			ANDROID_TABLET: false, //Android Tablet
			WINDOWS_TABLET: false, //Windows Tablet
			TABLET: false, //Tablet (iPad, Android, Windows)
			SMART_PHONE: false //Smart Phone (iPhone, Android)
		};

		mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;
		mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);
		mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;
		mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;

		return mua;
	}());

	if (!MobileUA.SMART_PHONE) {
		document.location.href='http://www.gannanzz.com';
	}
});
function closeConsultPop(){
	$("#popCard").css("display","none");
}
(function(){
	var consultLink = 'http://kf.gannanzz.com/s/54146xjap';
	var consultIcon = '\t\t<a target="_blank"\thref="'+consultLink+'" class="layui-icon'
			 + ' layui-icon-dialogue"\n'
					  + '\t\t   style="position:fixed; background-color:rgb(0,150, 136);top:35%; left:84%;\n'
					  + '\t\tfont-size: 55px; border-radius: 15px; z-index: 99;"></a>';
	$("body").append(consultIcon);

	var popHtml ='\t<div id="popCard" class="layui-row" style="position: fixed; left: 13%; top: 23%; height:'
				 + ' 221.021px;\n'
				 + '\t\twidth:70%; background-color: rgb(0, 150, 136);">\n'
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
				 + ' 65.9863%; width: 35.5284%; font-weight: bold; font-size: 16px;">现在咨询</a>\n'
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
