(function() {
	var lazySponsors = function(){
		if(document.getElementById('sponsors')){
			var sponsorsArray = new Array();
			sponsorsArray.push("<div style=\"text-align:center;margin:4em 0;\">");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/sem-group.net\/search-engine-optimization-blog\/2nd-annual-bad-ass-seo-guest-blogging-contest\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/Blogging-Contest-2011-lrg.png\" alt=\"2nd Annual Bad Ass SEO Guest Blogging Contest\" width=\"450\" height=\"300\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">Contest Media Partner<\/h3>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/blogengage.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/blogengage.png\" alt=\"Contest Media Partner Blogengage\" width=\"410\" height=\"86\" style=\"position:relative;left:46px;\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">$500 Sponsors<\/h3>");
			sponsorsArray.push("<p>RankPop.com <a href=\"http:\/\/rankpop.com\/\">Affordable SEO<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/rankpop.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/RankPopLogo.png\" alt=\"RankPop.com\" width=\"200\" height=\"58\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">$300 Sponsors<\/h3>");
			sponsorsArray.push("<p>Daniel McGonagle <a href=\"http:\/\/linkvanareviews.com\/\">Link Building<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/linkvanareviews.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/Link-Vana-bannerE.jpg\" alt=\"linkvana contest banner\" width=\"355\" height=\"86\" \/><\/a><\/p>");
			sponsorsArray.push("<p>SEO-Peace.com Professional link building <a href=\"http:\/\/www.seo-peace.com\/\">SEO Company<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/www.seo-peace.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/SEO-Peace-logo.png\" alt=\"SEO-Peace.com Professional link building\" width=\"255\" height=\"90\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">$150 Sponsors<\/h3>");
			sponsorsArray.push("<p>Hesham Zebida <a href=\"http:\/\/www.thesisawesome.com\/\">Thesis Skins<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/www.thesisawesome.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/thesisawesome_300_250.jpg\" alt=\"Thesis Skins\" width=\"300\" height=\"250\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">$100 Sponsors<\/h3>");
			sponsorsArray.push("<p>Scott Bradley <a href=\"http:\/\/leanstrongbody.com\/\">Simple Weight Loss Tips<\/a> For Entrepreneurs<\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/leanstrongbody.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/Logo_OnBlue-300x146.jpg\" alt=\"Simple Weight Loss Tips\" width=\"300\" height=\"146\" \/><\/a><\/p>");
			sponsorsArray.push("<p>Milan Matchev <a href=\"http:\/\/healthdoom.com\/\">Health Directory<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/healthdoom.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/health-directory-300x94.png\" alt=\"Health Directory\" width=\"300\" height=\"94\" \/><\/a><\/p>");
			sponsorsArray.push("<p>Jacob Share <a href=\"http:\/\/jobmob.co.il\/\">JobMob Job Search Tips<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/jobmob.co.il\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/small-jobmob-logo.jpg\" alt=\"JobMob Job Search Tips\" width=\"196\" height=\"69\" \/><\/a><\/p>");
			sponsorsArray.push("<p>Ileane Smith <a href=\"http:\/\/basicblogtips.com\/\">Blogging Tips<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/basicblogtips.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/bbt_logo.jpg\" alt=\"Blogging Tips\" width=\"300\" height=\"115\" \/><\/a><\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/sem-group.net\/\">Search Engine Marketing Group<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/sem-group.net\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/searchenginemarketinggrouplogo.png\" alt=\"Search Engine Marketing Group Logo\" width=\"310\" height=\"73\" \/><\/a><\/p>");
			sponsorsArray.push("<p>John Britsios <a href=\"http:\/\/www.seoworkers.com\/\">www.SEOWorkers.com<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/www.seoworkers.com\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/seoworkerslogo.png\" alt=\"SEO Workers Logo\" width=\"315\" height=\"67\" \/><\/a><\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/www.customerparadigm.com\/index\/620\/Magento-Developer.php\">Magento Developer<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/www.customerparadigm.com\/index\/620\/Magento-Developer.php\"><img src=\"http:\/\/www.customerparadigm.com\/images\/Magento\/Magento-Developer\/Magento-Developer-Customer-Paradigm.jpg\" alt=\"Magento Developer\" \/><\/a><\/p>");
			sponsorsArray.push("<p>Doc Sheldon&#8217;s Clinic <a href=\"http:\/\/docsheldon.com\/shop\/index.php?route=product\/product&#038;product_id=51\" target=\"_blank\">Critical Thinking for the Discerning SEO<\/a><\/p>");
			sponsorsArray.push("<p style=\"margin-bottom:8em;\"><a href=\"http:\/\/docsheldon.com\/shop\/index.php?route=product\/product&#038;product_id=51\" target=\"_blank\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/doc4.png\" alt=\"Critical Thinking for the Discerning SEO\" width=\"300\" height=\"66\" \/><\/a><\/p>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">$50 Sponsors<\/h3>");
			sponsorsArray.push("<div style=\"text-align:left;\">");
			sponsorsArray.push("<p>Vertical Measures &#8211; <a href=\"http:\/\/www.verticalmeasures.com\/\">Internet Marketing Services<\/a><\/p>");
			sponsorsArray.push("<p>Whitney Michael Segura &#8211; <a href=\"http:\/\/www.minigreenhousekits.com\/\">Greenhouses for Sale<\/a><\/p>");
			sponsorsArray.push("<p>Butch Segura &#8211; <a href=\"http:\/\/www.earthcaregreenhouses.com\/\">Wholesale Greenhouses by EarthCare<\/a><\/p>");
			sponsorsArray.push("<p>Whitney &#8220;WeedyP&#8221; Segura &#8211; <a href=\"http:\/\/www.whitneysegura.com\/\">Internet Marketing Blog by Whitney Segura<\/a><\/p>");
			sponsorsArray.push("<p>Ernest Segura &#8211; <a href=\"http:\/\/www.ourcrazydeals.com\/greenhouse-supplies-accessories.html\">Greenhouse Supplies @ OurCrazyDeals.com<\/a><\/p>");
			sponsorsArray.push("<p>Raxa Design &#8211; <a href=\"http:\/\/www.raxadesign.com\/\">Houston Internet marketing<\/a><\/p>");
			sponsorsArray.push("<p>Ana Hoffman &#8211; Traffic Generation Cafe <a href=\"http:\/\/www.trafficgenerationcafe.com\/\">Web Traffic<\/a><\/p>");
			sponsorsArray.push("<p>James Brown &#8211; <a href=\"http:\/\/www.jamesbrownmarketing.com\/\">James Brown<\/a><\/p>");
			sponsorsArray.push("<p>Anwar Barake &#8211; <a href=\"http:\/\/www.discountherbalincense.com\/\">Wholesale Herbal Incense<\/a><\/p>");
			sponsorsArray.push("<p>Understand Technology with <a href=\"http:\/\/www.techfume.com\/\">TechFume<\/a><\/p>");
			sponsorsArray.push("<p>The Tech Blog &#8211; <a href=\"http:\/\/www.technozeast.com\/\">TechnoZeast<\/a><\/p>");
			sponsorsArray.push("<p>Wilderness Aware Rafting &#8211; <a href=\"http:\/\/www.inaraft.com\">Colorado White Water Rafting<\/a><\/p>");
			sponsorsArray.push("<p>Sales Nexus &#8211; <a href=\"http:\/\/www.salesnexus.com\/\">Online CRM<\/a><\/p>");
			sponsorsArray.push("<\/div>");
			sponsorsArray.push("<h3 style=\"background-color:#eee;color:#777;border:1px solid #ccc;line-height:24px;margin:8em 0 4em 0;\">Prize Sponsors<\/h3>");
			sponsorsArray.push("<p><a href=\"http:\/\/www.huomah.com\/dojo\/\"><img src=\"http:\/\/sem-group.net\/wp-content\/uploads\/2011\/09\/SEO-training-dojo-300x51.jpg\" alt=\"The SEO Training Dojo\" width=\"300\" height=\"51\" \/><\/a><\/p>");
			sponsorsArray.push("<div style=\"text-align:left;\">");
			sponsorsArray.push("<p><a href=\"http:\/\/www.huomah.com\/dojo\/\">SEO Training Dojo<\/a> &#8211; 1 year membership at SEO Dojo, a value of $250.<\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/myblogguest.com\/\">My Blog Guest<\/a> lifetime membership &#8211; MyBlogGuest.com is the free guest post exchange community where users meet to exchange guest posts and  network.<\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/www.link-assistant.com\/\">SEO tools<\/a> from Link-Assistant.Com &#8211; SEO PowerSuite Enterprise (max. functionality license)<\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/www.semrush.com\/?db=us\">www.SEMrush.com<\/a> &#8211; the best tool to spy on your competitors ($210 value)<\/p>");
			sponsorsArray.push("<p><a href=\"http:\/\/raventools.com\/\">Raven Internet Marketing Tools<\/a> &#8211; 3 month Pro subscription to Raven Internet Marketing Tools ($297 value)<\/p>");
			sponsorsArray.push("<\/div>");
			sponsorsArray.push("<\/div>");
			var sponsorsCode = sponsorsArray.join('');
			document.getElementById('sponsors').innerHTML = sponsorsCode;
		}
	}

	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = lazySponsors;
	}
	else {
		window.onload = function() {
			lazySponsors();
			if (oldonload) {
				oldonload();
			}
		}
	}
})();
