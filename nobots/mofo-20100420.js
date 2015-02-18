function subscribeLinks()
{
if (document.getElementById('sub_box'))
	{
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

function tweetMemeWidget()
{
if (document.getElementById('widget_holder'))
	{
	var tmArray = new Array();
	tmArray.push("<iframe scrolling=\"no\" height=\"61\" frameborder=\"0\" width=\"50\" allowtransparency=\"true\" src=\"http:\/\/api.tweetmeme.com\/button.js?url=" + escape(document.URL) + "&amp;style=normal&amp;source=SEOmofo&amp;service=bit.ly\"><\/iframe>");
	var tmCode = tmArray.join('');
	document.getElementById('tm_box').innerHTML = tmCode;
	}
}

function mofoWidgets()
{
if (document.getElementById('widget_holder'))
	{
	var myWidgets = new Array();
	myWidgets.push("<div id=\"post_footer_mofo\">");
	myWidgets.push("	<div id=\"twitter_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a href=\"http:\/\/twitter.com\/home?status=" + document.title + " - " + document.URL + "\"><span>Share this on Twitter!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"digg_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a href=\"http:\/\/digg.com\/submit?url=" + document.URL + "\"><span>Digg this!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"delicious_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a onclick=\"window.open('http:\/\/delicious.com\/save?v=5&amp;noui&amp;jump=close&amp;url='+encodeURIComponent('" + document.URL + "')+'&amp;title='+encodeURIComponent('" + document.title + "'),'delicious', 'toolbar=no,width=550,height=550'); return false;\" href=\"http:\/\/delicious.com\/save\"><span>Bookmark this on Delicious!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"stumbleupon_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a href=\"http:\/\/www.stumbleupon.com\/submit?url=" + document.URL + "&amp;title=" + document.title + "\"><span>Stumble this!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"facebook_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a href=\"http:\/\/www.facebook.com\/sharer.php?u=" + document.URL + "&amp;t=" + document.title + "\"><span>Share this on Facebook!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"reddit_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<a href=\"http:\/\/www.reddit.com\/submit?url=" + document.URL + "&amp;title=" + document.title + "\"><span>Submit to Reddit!<\/span><\/a>");
	myWidgets.push("	<\/div>");
	myWidgets.push("	<div id=\"copy_link_mofo\" class=\"post_widget_mofo\">");
	myWidgets.push("		<textarea cols=\"24\" rows=\"5\" onclick=\"this.focus();this.select();\">&lt;a href=\"" + document.URL + "\"&gt;" + document.title + "&lt;\/a&gt;<\/textarea>");
	myWidgets.push("		<p style=\"margin: 0pt; height: 1.2em; color: rgb(153, 153, 153); font-size: 10px; line-height: 1.2em; text-align: center;\">Copy Link<\/p>");
	myWidgets.push("	<\/div>");
	myWidgets.push("<\/div>");
	var widgetsCode = myWidgets.join('');
	document.getElementById('widget_holder').innerHTML = widgetsCode;
	}
}

function mofoCopyright()
{
if (document.getElementById('footer'))
	{
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
	subscribeLinks();
	tweetMemeWidget();
	mofoCopyright();
	mofoWidgets();
}