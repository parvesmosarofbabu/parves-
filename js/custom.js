jQuery(document).ready(function(){

	$("#owl-csel1").owlCarousel({
		items: 4,
		autoplay: true,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		autoplayTimeout: 2000,
		startPosition: 0,
		rtl: false,
		loop: true,
		margin: 24,
		dots: false,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content .custom-nav',
		responsive:{
			0: {
				items: 1,
				dots: true,
			},

			768: {
				items: 2,
				dots: true,
			},

			992: {
				items: 2,
				dots: false,
			},

			1200: {
				items: 3,
			}
		}

	});







$("#owl-csel2").owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 2000,
		startPosition: 0,
		autoplaySpeed: 1500,
		autoplayHoverPause: true,
		rtl: false,
		loop: true,
		margin: 15,
		dots: false,
		nav: true,
		navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
		navContainer: '.main-content2 .custom-nav2',
		responsive:{
			0: {
				items: 1,
				dots: true,				
			},
			767: {
				items: 2,
				dots: true,				
			},
			992: {
				items: 2,
				dots: false,	
			},
			1200: {
				items: 3,						
			}
		}

	});














});