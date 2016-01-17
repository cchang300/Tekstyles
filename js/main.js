jQuery(function($) {
	"use strict";
	// Author Code Here

	// Pricing Box Click Event
	$('.new .box-main').click(function() {
		$('.new .box-main').removeClass('active');
		$('.new .box-second').removeClass('active');
		$(this).addClass('active');
		$(this).next($('.box-second')).addClass('active');
		$('#new').css("background-image", "url(" + $(this).data('img') + ")");
		$('#new').css("background-size", "cover");
	});

});
