$(document).ready(function(){
	$(".admintabcontainer .admintabs").click(function() {
		$("div").removeClass("adminactivetab");
		$(this).addClass("adminactivetab");
		$(".expandadmintabs").css("margin-left", "0");
		adminaddcls(this, $(this).index());
		var width = $('.admintabcontainer').width();
		var parentWidth = $('.admintabcontainer').offsetParent().width();
		var percent = 100*width/parentWidth;
		$(".admintabcontainer").css("width","13%");
		$(".admintabcontainer").css("margin-left","5%");
		$(".admintabs .expandadmintabs").css("margin-top", $(".admintabs .expandadmintabs").parent().outerHeight()*-1);
		$(this).find(".expandadmintabs").css("margin-left", "20%");
		$(this).find(".expandadmintabs").css("margin-top", $(this).position().top*-1+40);
		var index= $(this).index();
		var val= $(this);
		if(percent > 20)
		setTimeout(function(){ 
		$(".adminactivecontent").css("margin-top", val.position().top*-1+40); 
		}, 1000);
	});
	var highest;
	var first = 1;
	$('.admintabs').each(function() {
		if(first == 1)
		{
			highest = $(this);
			first = 0;
		}
		else
		{
			if(highest.height() < $(this).height())
			{
				highest = $(this);
			}
		}
	});
	$(".admintabs").css("min-height", highest.height());
});
function adminaddcls(ele, indexval)
{
	var selectduplicate=document.getElementsByClassName("admintabs");
	
	for(var i=0; i<selectduplicate.length; i++)
	{
		selectduplicate[i].getElementsByClassName("expandadmintabs")[0].className="expandadmintabs";
	}
	selectduplicate[indexval].getElementsByClassName("expandadmintabs")[0].className="expandadmintabs adminactivecontent";
}