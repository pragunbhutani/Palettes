function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

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

		try	{
			paletteArray = createPalette(myImage, 5);
		}
		catch ()	{
			console.log("Error caught");
		}


		$('#palette-container').fadeIn("fast", function() {
			$(this).css("border", "1px solid");
		});
		
		$('.swatch-box').each(function(count) {
			var colorValue = "rgb(" + paletteArray[count][0] + ", " + paletteArray[count][1] + ", " + paletteArray[count][2] + ")";
		
			$(this).css("background-color", colorValue);
			$(this).fadeIn("slow");

			var hexColor = rgbToHex(paletteArray[count][0], paletteArray[count][1], paletteArray[count][2]);
			var hexArea = "<div class='hex-code'><span style='color:" + hexColor + ";'>" + hexColor + "</span></div>";

			$(this).html(hexArea);
		});

	});
	
};

// $(document).ready(function() {

// 	$('#palette-container').mouseenter(function() {
		
// 		$('.swatch-box').animate({
// 			opacity:'0.5'
// 		}, 200);

// 	});

// 	$('#palette-container').mouseleave(function() {
// 		$('.swatch-box').animate({
// 			opacity:'1'
// 		}, 200);
// 	});

// 	$('.swatch-box').mouseenter(function() {
// 		$(this).animate({
// 			opacity:'1'
// 		}, 100);
// 	});

// 	$('.swatch-box').mouseleave(function() {
// 		$(this).animate({
// 			opacity:'0.5'
// 		}, 100);
// 	});

// });