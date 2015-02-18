<?php

/**
 * add_action ( 'hook_name', 'your_function_name', [priority], [accepted_args] );
 * 
 * hook_name 
 *   The name of an action hook provided by WordPress,
 *   that tells what event your function should be associated with. 
 * 
 * your_function_name 
 *   The name of the function that you want to be executed
 *   following the event specified by hook_name. This can be
 *   a standard php function, a function present in the WordPress core,
 *   or a function defined by you in the plugin file. 
 * 
 * priority 
 *   An optional integer argument that can be used to specify the order in which
 *   the functions associated with a particular action are executed (default: 10).
 *   Lower numbers correspond with earlier execution, and functions with the same priority
 *   are executed in the order in which they were added to the action. 
 * 
 * accepted_args 
 *   An optional integer argument defining how many arguments your function can accept (default 1),
 *   useful because some hooks can pass more than one argument to your function.
 */

// Note that $type_of_url can be one of following:
// single, single_trackback, single_feed, single_paged, feed, category, page, year, month, day, paged



// Remove bullshit from <head> section
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'shortlink_wp_head');
//remove_action('wp_head', 'wp_print_head_scripts', 9);
//add_action( 'wp_head',             'wp_print_head_scripts',         9     );

// Remove bullshit from http headers
remove_action('wp', 'shortlink_header');

// Remove bullshit from page content
remove_action('thesis_hook_after_post', 'thesis_trackback_rdf', 1);
//remove_action('thesis_hook_after_html', 'thesis_ie_clear');

// Stop turning URLs (in comments) into links
remove_filter('comment_text', 'make_clickable', 9);
remove_filter('thesis_comment_text', 'make_clickable', 9);


// Define my own header
if (!function_exists('mofo_header')) {
	function mofo_header() {
?>
		<div id="logo_mofo">
			<div id="domain_mofo"><a href="/">SEO<span></span></a><b>mofo</b></div>
			<div id="slogan_mofo">world's greatest seo</div>
		</div>
<?php	
}
}

// Remove the Thesis header
remove_action('thesis_hook_header', 'thesis_default_header');

// Add my header
add_action('thesis_hook_header', 'mofo_header');


// Remove the Thesis nav menu
remove_action('thesis_hook_before_header', 'thesis_nav_menu');

// Add the Thesis nav menu to header
add_action('thesis_hook_header', 'thesis_nav_menu');




// Define my widgets after post
if (!function_exists('widgets_after_post')) {
	function widgets_after_post() {
		if (comments_open()) {
?>
	<div id="widget_holder">
	</div>
<?php }
	}
}

// Add my widgets after post
add_action('thesis_hook_after_post', 'widgets_after_post');



//// Define my custom default gravatar
//if (!function_exists('my_custom_gravatar')) {
//	function my_custom_gravatar($avatar_defaults) {
//		$myavatar = get_bloginfo('template_directory') . '/custom/images/gravatars/c01.png';
//		$avatar_defaults[$myavatar] = 'Calvin 1';
//
//		return $avatar_defaults;
//	}
//}
//
//// Add my custom default gravatar
//add_filter('avatar_defaults', 'my_custom_gravatar');


// Define my bread crumbs
if (!function_exists('mofo_bread_crumbs')) {
	function mofo_bread_crumbs() {
		if (function_exists('yoast_breadcrumb') && !is_home()) {
			yoast_breadcrumb('<p id="breadcrumbs">','</p>');


		}
	}
}

// Add my bread crumbs
add_action('thesis_hook_header', 'mofo_bread_crumbs');



function mofo_date_killa($content) {
	if ( is_single( 'dxbseo-dubai-seo-scam' ) ) {
		$content = preg_replace('/on <span class="published">(.)*<\/span>/i', '', $content);
	}
	return $content;
}

// Assign my custom function to the 'thesis_filter_head_content' hook
add_filter('thesis_filter_byline','mofo_date_killa');



// Define my archive title function
if (!function_exists('mofo_archive_intro')) {
	function mofo_archive_intro() {
		if (is_category('google-sucks')) {
?>
			<div id="archive_intro_mofo">
				<h1><?php single_cat_title(); ?></h1>
				<span id="archive_intro_bg" onmouseover="this.style.background='url(/img/google-sucks-buttons.png) no-repeat top center';" onmouseout="this.style.background='url(/img/google-sucks.png) no-repeat top center';">
					<span class="g-img"><a href="/downloads/google-sucks.png"><b>Google Sucks</b></a></span>
					<span class="g-img"><a href="/downloads/spam.png"><b>Spam</b></a></span>
					<span class="g-img"><a href="/downloads/i-hate-google.png"><b>I hate Google</b></a></span>
					<span class="g-img"><a href="/downloads/garbage.png"><b>Garbage</b></a></span>
					<span class="g-img"><a href="/downloads/greed.png"><b>Greed</b></a></span>
					<span class="g-img"><a href="/downloads/fuck-google.png"><b>Fuck Google</b></a></span>
					<span class="g-img"><a href="/downloads/garble.png"><b>Garble</b></a></span>
					<span class="g-img"><a href="/downloads/fail.png"><b>FAIL</b></a></span>
				</span>
				<span class="clear"></span>
			</div>
<?php
		}
		else if (is_category('thesis')) {
?>
			<div id="archive_intro_mofo">
				<h1><?php single_cat_title(); ?></h1>
				<span id="archive_intro_bg"><img src="/img/thesis-wp-theme.png" alt="Thesis WordPress Theme" width="612" height="386" /></span>
			</div>
<?php
		}
		else {
?>
			<div id="archive_intro_mofo">
				<h1><?php single_cat_title(); ?></h1>
				<span id="archive_intro_bg"></span>
			</div>
<?php
		}
	}
}

// Add my archive title function
add_action('thesis_archive_intro', 'mofo_archive_intro');



// Define my TweetMeme function
if (!function_exists('mofo_tweetmeme_box')) {
	function mofo_tweetmeme_box() {
		if ( (is_single() && !is_preview()) || (is_page() && comments_open())) {
?>
		<div id="tm_box"></div>
		<div id="tm_loading"></div>
<?php }
	}
}

// Add my TweetMeme function
add_action('thesis_hook_before_headline', 'mofo_tweetmeme_box');



// Define my Twitter button function
if (!function_exists('mofo_twitter_box')) {
	function mofo_twitter_box() {
		if ( (is_single() && !is_preview()) || (is_page() && comments_open())) {
?>
		<div id="tw_box"></div>
		<div id="tw_loading"></div>
<?php }
	}
}

// Add my Twitter button function
add_action('thesis_hook_before_headline', 'mofo_twitter_box');




// Define my page load stats function
if (!function_exists('mofo_page_stats')) {
	function mofo_page_stats() {
?>
<script type="text/javascript">
	//<![CDATA[
	mofoImgs = document.getElementsByTagName("img");
	if (mofoImgs.length > 0) {
		mofoLazyPics = new Array();
		for (var i = 0; i < mofoImgs.length; i++) {
			mofoLazyPics[i] = mofoImgs[i].src;
			mofoImgs[i].style.backgroundImage = "url(/img/throbber.gif)";
			mofoImgs[i].style.backgroundRepeat = "no-repeat";
			mofoImgs[i].style.backgroundPosition = "center center";
			mofoImgs[i].setAttribute("src", "data:image/gif,GIF89a%01%00%01%00%80%00%00%00%00%00%00%00%00!%F9%04%01%00%00%00%00%2C%00%00%00%00%01%00%01%00%00%02%02D%01%00%3B");
		}
	}
	//]]>
</script><?php
if ( !is_page_template( 'only_sidebars.php' ) ) {
?>
<script type="text/javascript">
//<![CDATA[
	var _gaq=[['_setAccount','UA-4827976-1'],['_setDomainName','.seomofo.com'],['_trackPageview'],['_trackPageLoadTime']];
	(function(d,t){
		var g=d.createElement(t);var s=d.getElementsByTagName(t)[0];
		g.async=1;g.src='http://www.google-analytics.com/ga.js';
		s.parentNode.insertBefore(g,s);
	})(document,'script');
//]]>
</script><?php
}
?>
<!-- <?php echo get_num_queries(); ?> queries in <?php timer_stop(1); ?> seconds. -->
<?php
	}
}

// Add my page load stats function
add_action('thesis_hook_after_html', 'mofo_page_stats');




// Remove date from Dubai SEO post comments
if (!function_exists('remove_date_from_dubai')) {
	function remove_date_from_dubai($text) {
		if (is_single('dxbseo-dubai-seo-scam')) {
			$text = "";
		}
		return $text;
	}
}
add_filter('thesis_comment_date','remove_date_from_dubai');







/**
 * Filters the <head> content and removes the media attributes from the stylesheet link tags
 * 
 * This is another example of a filter function. This one uses a filter 
 * hook called 'thesis_filter_head_content' (../lib/classes/head.php), 
 * which was introduced in Free Thesis 1.8. This hook gives you the 
 * ability to filter out any of the content that's inserted into your 
 * <head> section. 

 * The filter function defined below removes the media type attributes 
 * from the stylesheet link tags. With the Thesis default values 
 * (media="screen, projection"), visitors are unable to print out 
 * formatted copies of your content. By removing these attributes, we 
 * are basically allowing all media types to access our stylesheet, and 
 * therefore our content can be printed just how it's rendered in the 
 * browser.

 * In most cases, however, you'll probably want to add some custom 
 * styles that only get applied when your content is printed. This is 
 * easily accomplished by using the '@media print' rule in your 
 * custom.css file. If you're not familiar with the @media rule syntax, 
 * don't worry--your custom.css file should already contain a working 
 * example for you to look at.
 * 
 * @param string $content The <head> section HTML code from head.php
 * @return string $content The <head> section HTML code--without media attributes
 * @author Darren Slatten
 */

function darrens_head_content_filter($content) {
	$content = preg_replace('/ media="screen, projection"/i', '', $content);
	$content = str_replace("\n", "\n\t", $content);
	$content = "\t" . $content;
	$content = preg_replace('/\t*<link rel="EditURI" (.)* \/>\n*/i', '', $content);
	$content = preg_replace('/\t*<script (.)*\/wp-includes\/js\/l10n\.js(.)*<\/script>\n*\t*/i', '', $content);
	return $content;
}



// Assign my custom function to the 'thesis_filter_head_content' hook
add_filter('thesis_filter_head_content','darrens_head_content_filter');



// Define my custom function for post #2737
if (!function_exists('mofo_custom_head_content_for_posts')) {
	function mofo_custom_head_content_for_posts() {
		if (is_single('when-screen-captured')) {
			date_default_timezone_set('UTC');
?>
	<script type="text/javascript">
	//<![CDATA[

	function addLoadEvent(func) {
		window.onload = function(){console.log('The initial window.onload has executed.')};
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				func();
				if (oldonload) {
					oldonload();
				}
			}
		}
	}

	addLoadEvent(function() {
		beginning = new Date();
		showDate();
		showClientInfo();
		tickTock();
		showImage(4);
	});

	function tickTock(){
		now = new Date();
		timeElapsed = now.getTime() - beginning.getTime();
		delete now;
		secsElapsed = 0; hunsElapsed = 0; out = "";
		secsElapsed = Math.floor(timeElapsed/1000);
		timeElapsed = timeElapsed%1000;
		hunsElapsed = Math.floor(timeElapsed/10);
		timeElapsed = timeElapsed%10;
		out += ((secsElapsed < 10) ? "0" : "") + secsElapsed + "<span class=\"dot\">.</span>";
		out += ((hunsElapsed < 10) ? "0" : "") + hunsElapsed;
		document.getElementById('numbox').innerHTML = out;
		stopID = setTimeout("tickTock()", 10);
	}

	function showDate() {
		var d = new Date();
		var gmt = -d.getTimezoneOffset()/60;
		var month = new Array(12);
		month[0] = "Jan";
		month[1] = "Feb";
		month[2] = "Mar";
		month[3] = "Apr";
		month[4] = "May";
		month[5] = "Jun";
		month[6] = "Jul";
		month[7] = "Aug";
		month[8] = "Sep";
		month[9] = "Oct";
		month[10] = "Nov";
		month[11] = "Dec";
		var todaysDate = month[d.getUTCMonth()] + ' '  + d.getUTCDate() + '<span class="comma">,</span> ' + d.getUTCFullYear() + '<br />' + ((d.getUTCHours() < 10) ? "0" : "") + d.getUTCHours() + '<span class="colon">:</span>' + ((d.getUTCMinutes() < 10) ? "0" : "") + d.getUTCMinutes() + '  GMT' + '<br />' + ((d.getHours() < 10) ? "0" : "") + d.getHours() + '<span class="colon">:</span>' + ((d.getMinutes() < 10) ? "0" : "") + d.getMinutes() + '  local<br />' + 'GMT  ' + gmt;
		document.getElementById('datebox').innerHTML = todaysDate;
	}

	function showClientInfo() {
		var clientInfo = "";
		clientInfo += "<?php echo date("M j, Y\<\b\\r \/\> H:i"); ?> GMT<br />";
		clientInfo += "<span id=\"ip-address\"><?php 
		if (filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
			echo $_SERVER['REMOTE_ADDR'];
		}
?></span><br />";
		clientInfo += "<span id=\"user-agent\"><?php 
		if (filter_var($_SERVER['HTTP_USER_AGENT'], FILTER_SANITIZE_SPECIAL_CHARS, FILTER_FLAG_STRIP_HIGH)) {
			echo $_SERVER['HTTP_USER_AGENT'];
		}
?></span><br />";
		document.getElementById('spybox').innerHTML = clientInfo;
	}

	function showImage(int) {
		int = ((int < 10) ? "0" + int : int);
		var parentID = "update" + int;
		var updatePs = document.getElementById("updates").getElementsByTagName("p");
		var image = document.createElement('img');
		var imgID = "image" + int;
		var imgURI = "/img/google-instant-preview-" + int + ".png";
		var imgALT = "Google Instant Preview #" + int;

		for (var i = 0; i < updatePs.length; i++) {
			var imgObj = updatePs[i].getElementsByTagName("img");
			if (imgObj[0]!=null){
				imgObj[0].parentNode.removeChild(imgObj[0]);
			}
		}

		image.setAttribute("id", imgID);
		image.setAttribute("class", "preview-image");
		image.setAttribute("src", imgURI);
		image.setAttribute("width", "302");
		image.setAttribute("height", "585");
		document.getElementById(parentID).appendChild(image);
	}

	//]]>
</script>
<style type="text/css">
	#test-area{
		margin:0 0 64px 0;
		padding:0;
		background-color:#F2FCFF;
		border:2px solid #0CF;
		text-align:center;
	}
	#test-heading{
		font-size:64px;
		line-height:64px;
		font-family:Georgia, "Times New Roman", Times, serif;
		color:#F60;
		font-weight:bold;
		text-shadow:0 0 1px #AAA;
		margin:32px 0;
	}
	#numbox{
		font-size:96px;
		color:#0CF;
		margin:32px 0;
	}
	#datebox,
	#spybox{
		text-align:center;
		font-weight:bold;
		font-size:72px;
		color:#000;
		line-height:96px;
		margin:32px 0;
	}
	#spybox{
		line-height:72px;
		margin:0 0 128px 0;
	}
	#ip-address{
		font-size:96px;
		line-height:196px;
		color:#069;
	}
	#user-agent{
		font-size:48px;
		line-height:60px;
	}
	#stopbox{
		text-align:center;
		font-size:16px;
		margin-top:64px;
	}
	#stopbox button{
		margin:16px;
		padding:2px 8px;
	}
	.dot {
		font-family:Georgia,"Times New Roman",Times,serif;
		margin:0 4px;
	}
	.comma {
		margin:0 4px;
	}
	.colon {
		font-family:Georgia,"Times New Roman",Times,serif;
		margin:0 4px;
		vertical-align:8px;
	}
	#g-box{
		width:551px;
		height:33px;
		position:relative;
		margin:8px auto 128px auto;
	}
	#g-box a{
		width:551px;
		height:33px;
		display:block;
		position:absolute;
		top:0;
		left:0;
	}
	#g-box a span{
		width:551px;
		height:33px;
		display:block;
		position:absolute;
		top:0;
		left:0;
		background:url("/img/google-site-search-when-screen-captured.png") no-repeat;
	}
	.update{
		position:relative;
	}
	.preview-image{
		position:absolute;
		top:0;
		left:610px;
	}
	#updates{
		padding-top:32px;
	}
</style>
<?php
		}
	}
}

// Add my custom function for post #2737
add_action('wp_head', 'mofo_custom_head_content_for_posts');





// Define another custom function for post #2737
if (!function_exists('mofo_custom_body_content_for_posts')) {
	function mofo_custom_body_content_for_posts() {
		if (is_single('when-screen-captured')) {
?>

<!-- BEGIN TEST AREA -->
<div id="experimental">
	<p id="stopbox">
		<button type="button" value="Stop" onclick="clearTimeout(stopID);testArea=document.getElementById('experimental');testArea.parentNode.removeChild(testArea);">Trying to read the article?&nbsp;&nbsp;Click here to hide the clutter.</button>
	</p>
	<p id="datebox">MMM dd, YYYY</p>
	<div id="test-area">
		<p id="test-heading">onload&nbsp;+</p>
		<p id="numbox"> &#8211;<span class="dot">.</span>&#8211; </p>
	</div>
	<p id="spybox">&#8211;</p>
</div>
<!-- END TEST AREA -->

<?php
		}
	}
}

// Add another custom function for post #2737
add_action('thesis_hook_before_content_box', 'mofo_custom_body_content_for_posts');









