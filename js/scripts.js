function insertImage()	{

	//replacing the HTML content inside the image div and adding the image + border
	var newHTML = "<div id='image-bg'><img id='userImg' src='" + document.getElementById('imageURL').value + "' /></div>";
	document.getElementById('image-container').innerHTML = newHTML;
	
	
	// fading-in the image upon completion of load
	$('#image-bg').hide();	
	$('#userImg').hide();

	$('#image-bg').fadeIn('fast');
	
	$('#userImg').bind("load", function() {
		$(this).fadeIn('slow');

		//passing image to color thief and getting palette
		var myImage = $('#userImg');
		var paletteArray = new Array();

		console.log(myImage);

		paletteArray = createPalette(myImage, 5);
		
		$(".swatch").hide();
		
		$('.swatch').each(function(count) {
			var colorValue = "rgb(" + paletteArray[count][0] + ", " + paletteArray[count][1] + ", " + paletteArray[count][2] + ")"
			console.log(colorValue);
			$(this).css("background-color", colorValue);
		});

		$(".swatch").fadeIn("slow");
	});
	
};