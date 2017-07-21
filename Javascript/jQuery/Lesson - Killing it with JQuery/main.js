$(document).ready(function() {
	// After document is loaded and the DOM tree is ready, run these commands

	// BASIC SELECTORS
	//$('*').css('border', '4px solid red'); // Add a CSS style to ALL elements in the DOM tree
	//$('#lesson-1').css('border', '4px solid red'); // Add a CSS style to lesson 1

	// BASIC ANIMATIONS
	$('.box:first').hide(500).delay(300).show(800); // Shrinks the box and hides it in 500 milliseconds, then shows it again
	$('.box:last').slideUp(500).slideDown(800); // Use some other basic jQuery animations
	$('.box:first').animate({height: '200px'}, 300) // Animate the height to 200px in 300 milleseconds

	// INDEX FILTERS
	$('p:last').css('border', '4px solid red'); // Select the first child paragraph and add a CSS property
	$('p:lt(2)').css('border', '4px solid green'); // Select all paragraphs less tha 2, and add a CSS property
	$('p:eq(4)').css('border', '4px solid blue'); // Select paragraph equal to 4, and add a CSS property

	// RELATIONSHIP FILTERS
	$('h2:has(span)').css('border', '4px solid pink'); // Select the h2 with a span inside (so intuitive)
	$('.box:parent').css('border', '4px solid magenta'); // Select any box that has children in them
	$('.box:empty').css('border', '4px solid orange'); // Select any box that has no children, or is empty

	// ATTRIBUTE FILTERS
	$('p[class="lead"]').css('color', 'red'); // Select paragraph with class lead, and give it a red color
	$('p[name^="sho"]').css('color', 'blue'); // Select any paragraph with a name that matches with the first three letters 'sho'. Will select "shorty"
	$('a[href$=".co.uk"]').css('border', '4px solid red'); // Select the link with .co.uk at the end of the string

	console.log($('input').prop("checked")); // Lets say the input element was a checkbox, output the status of the element (checked/unchecked)

	// ATTRIBUTE METHODS
	//alert($('p:first').attr('class')); // Should output the classname to the first child of <p> which is "lead"
	$('p:first').attr('class', 'not-lead') // Set class to "not-lead" for the first paragraph child

	// IMAGE SWAP
	$('img').delay(400).fadeOut(500, function() {
		$(this).attr('src', 'img2.jpg').fadeIn(500);
	});

	// CLASS METHODS
	//alert($('p:last').hasClass('lead')); // Should output a boolean of whether or not the last paragraph child has the class lead
	$('p:first').addClass('blue').removeClass('lead'); // Remove the "lead" class and add "blue" class to the first paragraph child
	$('p').toggleClass('blue'); // If has class blue, turn it off, if not add class blue to all paragraph elements. Great for toggle menus

	// CONTENT METHODS
	$('p:first').text('Hey you guuuuys!');
	var variable = $('p:first').text(); // Store text content of the first paragraph into a variable
	$('p:first').html('<a href="google.com">link</a>'); // Add html content to the first child paragraph element
	//alert($('input').val()); // Display the value inside the input form!
	$('input').val('yo dude!'); // Set the value of the input to "yo dude!"

	// DOM TRAVERSAL
	//$('h2').children().css('border', '4px solid red'); // Give a border to any child elements in the h2 tag
	//$('h2').parents().css('border', '4px solid red'); // Give a border to all parents of h2, including literally every parent of each element all the way up to the body tag
	//$('h2').parents('section').css('border', '4px solid red'); // Give a border to all parents of h2 up to the section wrapping it
	//$('h2').siblings('p').last().css('border', '4px solid red'); // Select the last sibling of h2 which are p tags, and give it a red border


	// EVENT BINDING

	/* Quick note, at some point bind is going to be deprecated, so use .on and .off for event delegation */
	$('h2').on('click', function() {
		$(this).toggleClass('blue'); // On click on h2 element, toggle "blue class"
	});

	$('html').on('keypress', function() {
				$(this).toggleClass('blue'); // On any key press, toggle "blue class"

	});
	$('body').on('click', '.classname', function() {

	});

	$('h2').hover(function() {
		$(this).toggleClass('blue');
	})
});