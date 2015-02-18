function lazyStyles(){
	if(document.getElementById('lazy_styles')){
		var styleArray = new Array();
		styleArray.push("<style type=\"text\/css\">");
		styleArray.push(".custom .affiliate:hover{cursor:url('\/img\/cursors\/affiliate-link.cur'), pointer;}");
		styleArray.push(".custom a:hover, .db-wrapper, span.db-wrapper{cursor:url('\/img\/cursors\/aero-middle-finger.cur'), pointer;}");
		styleArray.push("#content_box{background:'url(\/img\/mofo\/dash-ddd.gif) 61.2em 0 repeat-y';}");
		styleArray.push(".notice_mofo{color:#666; font-size:.75em; line-height:1.5em; border:1px solid #E6DB55; padding:1em; text-indent:2em; background:url(\/img\/icons\/notice.png) #FFFBCC no-repeat 1em 1em; -moz-border-radius:1em; -webkit-border-radius:1em;}");
		styleArray.push(".info_mofo{color:#666; font-size:.75em; line-height:1.5em; border:1px solid #ccc; padding:1em; text-indent:2em; background:url(\/img\/icons\/info.png) #F3F6FF no-repeat 1em 1em; -moz-border-radius:1em; -webkit-border-radius:1em;}");
		styleArray.push("<\/style>");
		var styleCode = styleArray.join('');
		document.getElementById('lazy_styles').innerHTML = styleCode;
	}
}

function subscribeLinks(){
	if(document.getElementById('sub_box')){
		var subArray = new Array();
		subArray.push("<div id=\"mofo_subs\">");
		subArray.push("	<div id=\"sub_rss\">");
		subArray.push("		<a target=\"_blank\" href=\"http:\/\/feeds.seomofo.com\/seomofo\" title=\"Subscribe to the World's Greatest SEO Blog!\"><span>RSS Feed<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_feedburner\">");
		subArray.push("		<a target=\"_blank\" href=\"http:\/\/feeds.seomofo.com\/seomofo\" title=\"Subscribe to the World's Greatest SEO Blog!\"><img src=\"http:\/\/feeds.feedburner.com\/~fc\/seomofo?bg=FF6600&amp;fg=000000&amp;anim=0\" height=\"26\" width=\"88\" alt=\"FeedBurner readers\" \/><img src=\"http:\/\/www.seomofo.com\/img\/icons\/feedburner-mofos.gif\" height=\"26\" width=\"88\" alt=\"FeedBurner mofos\" \/><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_email\">");
		subArray.push("		<a target=\"_blank\" href=\"http:\/\/feedburner.google.com\/fb\/a\/mailverify?uri=seomofo&amp;loc=en_US\" title=\"Click here to receive updates via email!\"><span>Email<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_twitter\">");
		subArray.push("		<a target=\"_blank\" href=\"http:\/\/twitter.com\/SEOmofo\" title=\"Follow me on Twitter!\"><span>Twitter<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_seo_dojo\">");
		subArray.push("		<a target=\"_blank\" href=\"http:\/\/huomah.com\/dojo\/\" title=\"Seriously Obsessed Search Geek - SEO Dojo\"><span>SEO Dojo<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_thesis\">");
		subArray.push("		<a target=\"_blank\" class=\"affiliate\" href=\"http:\/\/www.seomofo.com\/affiliate\/thesis\/\" onclick=\"_gaq.push(['_trackEvent', 'Affiliates', 'Thesis', 'Sidebar - Custom 125x125']);\"><span>Thesis<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_scribe\">");
		subArray.push("		<a target=\"_blank\" class=\"affiliate\" href=\"http:\/\/www.seomofo.com\/affiliate\/scribe\/\" onclick=\"_gaq.push(['_trackEvent', 'Affiliates', 'Scribe', 'Sidebar - Custom 125x125']);\"><span>Scribe<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("	<div id=\"sub_blue\">");
		subArray.push("		<a target=\"_blank\" class=\"affiliate\" href=\"http:\/\/www.seomofo.com\/affiliate\/blue-host\/\" onclick=\"_gaq.push(['_trackEvent', 'Affiliates', 'Blue Host', 'Sidebar - 125x125']);\"><span>Blue Host<\/span><\/a>");
		subArray.push("	<\/div>");
		subArray.push("<\/div>");
		var subCode = subArray.join('');
		document.getElementById('sub_box').innerHTML = subCode;
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

function mofoWidgets(){
	if(document.getElementById('widget_holder')){
		var	myWidgets = document.getElementById('widget_holder');
		var widgetFrame = "<iframe src=\"http:\/\/www.seomofo.com\/nobots\/iframes\/social.html\" frameborder=\"0\" scrolling=\"no\" width=\"576\" height=\"112\"><\/iframe>";
		var widgetDiv = document.createElement('div');
		widgetDiv.innerHTML = widgetFrame;
		myWidgets.appendChild(widgetDiv);
	}
}

function mofoCopyright(){
	if(document.getElementById('footer')){
		var myCopy = "";
		var d = new Date();
		var mofoYear = d.getFullYear();
		myCopy += "&copy;&nbsp;Copyright&nbsp;&nbsp;2007-" + mofoYear + "&nbsp;&nbsp;Darren Slatten";
		document.getElementById('footer').innerHTML = myCopy;
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
	lazyStyles();
	subscribeLinks();
	tweetMemeWidget();
	mofoWidgets();
	mofoCopyright();
	affiliateLinks();
	affiliateFrames();
}