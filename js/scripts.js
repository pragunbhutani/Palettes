function insertImage()	{

	var newHTML = "<div id='image-bg'><img src='" + document.getElementById('imageURL').value + "' /></div>";
	document.getElementById('image-container').innerHTML = newHTML;
	
};
