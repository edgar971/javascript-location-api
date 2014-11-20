//this object is for all my hacks
var hack = {};
// add this to the window object or any custom object. 
hack.fixedHeader = function() {
	//this is used to fix the gap left when a header/nav bar is made fixed.
	//it pushes the next element down. 
	
	if($('[data-fixed-header]').length) {
		//get the height of the fixed header...
		var navBarHeight = $('[data-fixed-header]').height(),
			//get the next sibling... 
			nextElement = $('[data-fixed-header]')[0].nextElementSibling;
		//push the next element down to whatever the height of the fixed header is...
		$(nextElement).css('padding-top',  navBarHeight + 'px');
		//do the same when the window resizes...
		$(window).resize(function(e){
			navBarHeight = $('#nav-main').height();
			$(nextElement).css('padding-top',  navBarHeight + 'px');
	
		});
	} else {
		console.log('Please add the data attribute "[data-fixed-header]" to the fixed header');
	}
}
