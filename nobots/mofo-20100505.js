function lazyStyles(){
	if(document.getElementById('content_box')){
		document.getElementById('content_box').style.background='url(/img/mofo/dash-ddd.gif) 61.2em 0 repeat-y';
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
		
		var redditArray = new Array();
		redditArray.push("	<div>");
		redditArray.push("		<iframe src=\"http://www.reddit.com/static/button/button3.html?width=69&amp;url=" + escape(document.URL) + "\" height=\"52\" width=\"69\" scrolling='no' frameborder='0'></iframe>");
		redditArray.push("	<\/div>");
		var redditCode = redditArray.join('');
		var redditDiv = document.createElement('div');
		redditDiv.setAttribute('id', 'reddit_mofo');
		redditDiv.setAttribute('class', 'post_widget_mofo');
		redditDiv.innerHTML = redditCode;
		myWidgets.appendChild(redditDiv);

		var facebookArray = new Array();
		facebookArray.push("	<div>");
		facebookArray.push("		<a href=\"http:\/\/www.facebook.com\/sharer.php?u=" + encodeURIComponent(document.URL) + "&amp;t=" + encodeURIComponent(document.title) + "\"><\/a>");
		facebookArray.push("	<\/div>");
		var facebookCode = facebookArray.join('');
		var facebookDiv = document.createElement('div');
		facebookDiv.setAttribute('id', 'facebook_mofo');
		facebookDiv.setAttribute('class', 'post_widget_mofo');
		facebookDiv.innerHTML = facebookCode;
		myWidgets.appendChild(facebookDiv);

		var deliciousArray = new Array();
		deliciousArray.push("	<div>");
		deliciousArray.push("		<a onclick=\"window.open('http:\/\/delicious.com\/save?v=5&amp;noui&amp;jump=close&amp;url='+encodeURIComponent('" + encodeURIComponent(document.URL) + "')+'&amp;title='+encodeURIComponent('" + encodeURIComponent(document.title) + "'),'delicious', 'toolbar=no,width=550,height=550'); return false;\" href=\"http:\/\/delicious.com\/save\"><\/a>");
		deliciousArray.push("	<\/div>");
		var deliciousCode = deliciousArray.join('');
		var deliciousDiv = document.createElement('div');
		deliciousDiv.setAttribute('id', 'delicious_mofo');
		deliciousDiv.setAttribute('class', 'post_widget_mofo');
		deliciousDiv.innerHTML = deliciousCode;
		myWidgets.appendChild(deliciousDiv);

		var twitterArray = new Array();
		twitterArray.push("	<div>");
		twitterArray.push("		<a href=\"http:\/\/twitter.com\/home?status=" + encodeURIComponent(document.title) + " - " + encodeURIComponent(document.URL) + "\"><\/a>");
		twitterArray.push("	<\/div>");
		var twitterCode = twitterArray.join('');
		var twitterDiv = document.createElement('div');
		twitterDiv.setAttribute('id', 'twitter_mofo');
		twitterDiv.setAttribute('class', 'post_widget_mofo');
		twitterDiv.innerHTML = twitterCode;
		myWidgets.appendChild(twitterDiv);

		var link2mofoArray = new Array();
		link2mofoArray.push("		<textarea cols=\"24\" rows=\"5\" onclick=\"this.focus();this.select();\">&lt;a href=\"" + document.URL + "\"&gt;" + document.title + "&lt;\/a&gt;<\/textarea>");
		link2mofoArray.push("		<p style=\"margin: 0pt; height: 1.2em; color: rgb(153, 153, 153); font-size: 10px; line-height: 1.2em; text-align: center;\">Copy Link<\/p>");
		var link2mofoCode = link2mofoArray.join('');
		var link2mofoDiv = document.createElement('div');
		link2mofoDiv.setAttribute('id', 'link2mofo_mofo');
		link2mofoDiv.setAttribute('class', 'post_widget_mofo');
		link2mofoDiv.innerHTML = link2mofoCode;
		myWidgets.appendChild(link2mofoDiv);

		for (i=0;i<myWidgets.length;i++)
		{
			myWidgets.childNodes[i].style.float = 'left';
		}
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

window.onload = function()
{
	lazyStyles();
	subscribeLinks();
	tweetMemeWidget();
	mofoWidgets();
	mofoCopyright();
}