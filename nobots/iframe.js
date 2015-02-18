function targetParent(){
	var mofoa = document.getElementsByTagName('a');
	for (var i = 0; i<mofoa.length; i++){
		mofoa[i].setAttribute("target", "_parent"); 
	}
}


window.onload = function()
{
	nofollowLinks();
}