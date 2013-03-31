function insertImage()	{

	var newHTML = "<div id='image-bg'><img id='userImg' src='" + document.getElementById('imageURL').value + "' /></div>";
	document.getElementById('image-container').innerHTML = newHTML;
	
	$('#image-bg').hide();	
	$('#userImg').hide();

	$('#image-bg').fadeIn('fast');
	
	$('#userImg').bind("load", function() {
		$(this).fadeIn('slow');
	});

};
