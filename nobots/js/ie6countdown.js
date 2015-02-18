(function() {
	var ie6countdown = function(){
		var myMessage1 = "<br />WARNING: THE BROWSER YOU ARE USING IS OUTDATED!"
		var myMessage2 = "For better security and performance, please upgrade immediately."
		var b = document.getElementsByTagName('body')[0];
		var e = document.createElement('div');
		e.setAttribute('id','ie6-countdown');
		e.innerHTML = '<b></b><i></i><span>' + myMessage1 + '<br /><small>' + myMessage2 + '</small></span><i></i><b></b>';
		b.insertBefore(e, b.firstChild);

		var styleCode="\
		html, html body{\
			background-image:url(about:blank);\
			background-attachment:fixed;\
		}\
		body{\
			margin:96px 0 0 0;\
		}\
		#ie6-countdown{\
			background:#f90 url(http://img37.imageshack.us/img37/6035/ie6countdownbackground.gif) repeat-x;\
			width:100%;\
			height:96px;\
			overflow-y:hidden;\
			text-align:center;\
			position:absolute;\
			left:0;\
			bottom:auto;\
			top:expression(eval(document.documentElement.scrollTop));\
			z-index:99999;\
		}\
		#ie6-countdown b{\
			height:96px;\
			width:78px;\
			display:inline-block;\
			background:url(http://img5.imageshack.us/img5/8703/flashingexclamation.gif) no-repeat center center;\
		}\
		#ie6-countdown i{\
			height:96px;\
			width:22px;\
			display:inline-block;\
		}\
		#ie6-countdown span{\
			width:760px;\
			height:96px;\
			line-height:24px;\
			font-size:24px;\
			font-weight:bold;\
			color:#000;\
			display:inline-block;\
		}\
		";

		var s = document.createElement('style');
		s.setAttribute('type', 'text/css');
		if (s.styleSheet) {
			s.styleSheet.cssText = styleCode;
		}
		else {
			var t = document.createTextNode(styleCode);
			s.appendChild(t);
		}
		document.getElementsByTagName('head')[0].appendChild(s);
	}

	var oldonload = window.onload;
	if (typeof window.onload == 'function') {
		window.onload = ie6countdown;
	}
	else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			ie6countdown();
		}
	}
})();
