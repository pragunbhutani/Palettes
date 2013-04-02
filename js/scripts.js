function insertImage()	{

	//replacing the HTML content inside the image div and adding the image + border
	var newHTML = "<div id='image-bg'><img id='userImg' src='" + document.getElementById('imageURL').value + "' /></div>";
	document.getElementById('image-container').innerHTML = newHTML;
	
	
	// fading-in the image upon completion of load
	$('#image-bg').hide();	
	$('#userImg').hide();
	$(".swatch-box").hide();

	$("#image-container").fadeIn("fast", function() {
		$(this).css("border", "1px solid");
	});

	$('#image-bg').fadeIn('fast');
	
	$('#userImg').bind("load", function() {
		$(this).fadeIn('slow');

		//passing image to color thief and getting palette
		var myImage = $('#userImg');
		var paletteArray = new Array();

		console.log(myImage);

		paletteArray = createPalette(myImage, 5);

		$('#palette-container').fadeIn("fast", function() {
			$(this).css("border", "1px solid");
		});
		
		$('.swatch-box').each(function(count) {
			var colorValue = "rgb(" + paletteArray[count][0] + ", " + paletteArray[count][1] + ", " + paletteArray[count][2] + ")";
			console.log(colorValue);
			$(this).css("background-color", colorValue);
			$(this).fadeIn("slow");
		});

	});
	
};

$(document).ready(function() {

	$('.swatch-box').mouseenter(function() {
		$('.swatch-box').not(this).animate({
			opacity:'0.5'
		});
	});

	$('.swatch-box').mouseleave(function() {
		$('.swatch-box').animate({
			opacity:'1'
		});
	});

});