$ajax({
	url:'/xml/article1.xml',
	type:'GET',
	dataType:'xml',
	success:function(xml){
		var textarea=$(xml).find('textarea').text();
		$('h1').text(name);
	}
});