function mofoDigg(){
	if(document.getElementById('asynch_digg_holder')){
		var myDigg = new Array();
		myDigg.push("<script type=\"text\/javascript\">");
		myDigg.push("	(function(){");
		myDigg.push("	var s = document.createElement('script'), s1 = document.getElementsByTagName('script')[0];");
		myDigg.push("	s.type = 'text\/javascript';");
		myDigg.push("	s.src = 'http:\/\/widgets.digg.com\/buttons.js';");
		myDigg.push("	s1.parentNode.insertBefore(s, s1);");
		myDigg.push("	})();");
		myDigg.push("<\/script>");
		var diggCode = myDigg.join('');
		document.getElementById('widget_holder').innerHTML = diggCode;
	}
}