function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		});
} 
$(document).ready(function(){					
	mainmenu();
});
var myMusic=document.getElementById("music");
function play(){
	myMusic.play();
}
function stop(){
	myMusic.pause();
}