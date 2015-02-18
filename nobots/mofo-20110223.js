function lazyStyles(){
	if(document.getElementById('lazy_styles')){
		var styleArray = new Array();
		styleArray.push("<style type=\"text\/css\">");
		styleArray.push(".custom .affiliate:hover{cursor:url('\/img\/cursors\/affiliate-link.cur'), pointer;}");
		styleArray.push(".custom a:hover, .db-wrapper, span.db-wrapper{cursor:url('\/img\/cursors\/aero-middle-finger.cur'), pointer;}");
		styleArray.push("#content_box{background:'url(\/img\/mofo\/dash-ddd.gif) 61.2em 0 repeat-y';}");
		styleArray.push(".notice_mofo{color:#666; font-size:.75em; line-height:1.5em; border:1px solid #E6DB55; padding:1em; text-indent:2em; background:url(\/img\/icons\/notice.png) #FFFBCC no-repeat 1em 1em; -moz-border-radius:1em; -webkit-border-radius:1em; border-radius:1em;}");
		styleArray.push(".info_mofo{color:#666; font-size:.75em; line-height:1.5em; border:1px solid #ccc; padding:1em; text-indent:2em; background:url(\/img\/icons\/info.png) #F3F6FF no-repeat 1em 1em; -moz-border-radius:1em; -webkit-border-radius:1em; border-radius:1em;}");
		styleArray.push("<\/style>");
		var styleCode = styleArray.join('');
		document.getElementById('lazy_styles').innerHTML = styleCode;
	}
}

function lazyLoad(url, fileType){
	if(fileType=='js'){ // if file is JavaScript
		var e = document.createElement('script');
		e.setAttribute('type','text/javascript');
		e.setAttribute('src', url);
	}
	else if(fileType=='css'){ // if file is CSS
		var e = document.createElement('link');
		e.setAttribute('rel', 'stylesheet');
		e.setAttribute('type', 'text/css');
		e.setAttribute('href', url);
	}
	if(typeof e != 'undefined')
	document.getElementsByTagName('head')[0].appendChild(e);
}

function subscribeLinks(){
	if(document.getElementById('sub_box')){
		var	subBox = document.getElementById('sub_box');
		var subFrame = "<iframe src=\"http:\/\/www.seomofo.com\/nobots\/iframes\/sidebar2.html\" frameborder=\"0\" scrolling=\"no\" width=\"127\" height=\"879\"><\/iframe>";
		var subDiv = document.createElement('div');
		subDiv.innerHTML = subFrame;
		subBox.appendChild(subDiv);
	}
}

function tweetMemeWidget(){
	if(document.getElementById('tm_box')){
		var tmArray = new Array();
		tmArray.push("<iframe scrolling=\"no\" height=\"61\" frameborder=\"0\" width=\"50\" src=\"http:\/\/api.tweetmeme.com\/button.js?url=" + escape(document.URL) + "&amp;style=normal&amp;source=SEOmofo&amp;service=bit.ly\" onload=\"document.getElementById('tm_loading').style.display='none';\"><\/iframe>");
		var tmCode = tmArray.join('');
		document.getElementById('tm_box').innerHTML = tmCode;
	}
}

function newTwitterButtonWidget(){
	if(document.getElementById('tw_box')){
		var twArray = new Array();
		twArray.push("<iframe scrolling=\"no\" height=\"62\" frameborder=\"0\" width=\"55\" src=\"http:\/\/platform.twitter.com\/widgets\/tweet_button.html?count=vertical&amp;related=seomofo%3AWorld%27s%20Greatest%20SEO%20(verified)&amp;url=" + escape(document.URL) + "&amp;lang=en&amp;text=Great%20post%20by%20@SEOmofo%20%C2%BB%20" + encodeURIComponent(document.title) + "%20%C2%BB\"" + "onload=\"document.getElementById('tw_loading').style.display='none';\"><\/iframe>");
		var twCode = twArray.join('');
		document.getElementById('tw_box').innerHTML = twCode;
	}
}

function mofoWidgets(){
	if(document.getElementById('widget_holder')){
		var	myWidgets = document.getElementById('widget_holder');
		var widgetFrame = "<iframe src=\"http:\/\/www.seomofo.com\/nobots\/iframes\/share.html\" frameborder=\"0\" scrolling=\"no\" width=\"576\" height=\"128\"><\/iframe>";
		var widgetDiv = document.createElement('div');
		widgetDiv.innerHTML = widgetFrame;
		myWidgets.appendChild(widgetDiv);
	}
}


addComment={moveForm:function(d,f,i,c){var m=this,a,h=m.I(d),b=m.I(i),l=m.I("cancel-comment-reply-link"),j=m.I("comment_parent"),k=m.I("comment_post_ID");if(!h||!b||!l||!j){return}m.respondId=i;c=c||false;if(!m.I("wp-temp-form-div")){a=document.createElement("div");a.id="wp-temp-form-div";a.style.display="none";b.parentNode.insertBefore(a,b)}h.parentNode.insertBefore(b,h.nextSibling);if(k&&c){k.value=c}j.value=f;l.style.display="";l.onclick=function(){var n=addComment,e=n.I("wp-temp-form-div"),o=n.I(n.respondId);if(!e||!o){return}n.I("comment_parent").value="0";e.parentNode.insertBefore(o,e);e.parentNode.removeChild(e);this.style.display="none";this.onclick=null;return false};try{m.I("comment").focus()}catch(g){}return false},I:function(a){return document.getElementById(a)}};

// UTILITY FUNCTION FOR CHECKING IF A GIVEN ELEMENT (e) IS PART OF CLASS (c)
function hasClass(e, c) {
	if (typeof e == "string") e = document.getElementById(e);
	var classes = e.className;
	if (!classes) return false;
	if (classes == c) return true;
	return e.className.search("\\b" + c + "\\b") != -1;
};

// FUNCTION FOR PREVENTING AFFILIATE LINKS FROM PASSING PAGERANK
function affiliateLinks(){
	var theURL, theAnchorText, theTitle;
	var spans = document.getElementsByTagName('span');
	for (var i = 0; i<spans.length; i++){
		if (hasClass(spans[i], 'affiliate')){
			theAnchorText = spans[i].innerHTML;
			theTitle = spans[i].title.toLowerCase().replace(/^\s+|\s+$/g,"");
			switch (theTitle) {
				case 'thesis': theURL = 'http://www.seomofo.com/affiliate/thesis/'; break;
				case 'thesis plans': theURL = 'http://www.seomofo.com/affiliate/thesis/plans/'; break;
				case 'adobe 300x250': theURL = 'http://www.seomofo.com/affiliate/adobe/cs5/production-premium/'; break;
				case 'adobe dreamweaver 468x60': theURL = 'http://www.seomofo.com/affiliate/adobe/cs5/dreamweaver/'; break;
				case 'gate 300x250': theURL = 'http://www.seomofo.com/affiliate/gate/'; break;
				default: theURL = 'javascript: void(0)';
			}
			spans[i].innerHTML = '<a href="' + theURL + '" class="' + spans[i].className + '">' + theAnchorText + '</a>';
			spans[i].removeAttribute('title');
		}
	}
}

// FUNCTION FOR PREVENTING AFFILIATE IFRAMES FROM SLOWING PAGE LOAD
function affiliateFrames(){
	var theURL, theFrame, theWidth, theHeight, theTitle;
	var spans = document.getElementsByTagName('span');
	for (var i = 0; i<spans.length; i++){
		if (hasClass(spans[i], 'afframe')){
			theTitle = spans[i].title.toLowerCase().replace(/^\s+|\s+$/g,"");
			switch (theTitle) {
				case 'adobe 300x250':
					theURL = 'http://www.seomofo.com/nobots/iframes/adobe/cs5-production-premium.html';
					theWidth = '300';
					theHeight = '250';
					break;
				case 'cj zone 1':
					theURL = 'http://www.seomofo.com/nobots/iframes/cj/smartzone-1.html';
					theWidth = '300';
					theHeight = '266';
					break;
				case 'cj zone 2':
					theURL = 'http://www.seomofo.com/nobots/iframes/cj/smartzone-2.html';
					theWidth = '300';
					theHeight = '266';
					break;
				case 'cj zone 3':
					theURL = 'http://www.seomofo.com/nobots/iframes/cj/smartzone-3.html';
					theWidth = '300';
					theHeight = '266';
					break;
				case 'cj zone 4':
					theURL = 'http://www.seomofo.com/nobots/iframes/cj/smartzone-4.html';
					theWidth = '300';
					theHeight = '266';
					break;
				default: theURL = '';
			}
			if (theURL != ''){
				theFrame = '<iframe src="' + theURL + '" width="' + theWidth + '" height="' + theHeight + '" frameborder="0" scrolling="no"><\/iframe>';
				spans[i].innerHTML = theFrame;
				spans[i].removeAttribute('title');
			}
		}
	}
}

window.onload = function()
{
//	lazyStyles();
	subscribeLinks();
	tweetMemeWidget();
	newTwitterButtonWidget();
	mofoWidgets();
	affiliateLinks();
	affiliateFrames();
	lazyLoad('/nobots/css/lazy.css', 'css');
}