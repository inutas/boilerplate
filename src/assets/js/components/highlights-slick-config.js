$('.highlights-slider').slick({
	lazyLoad: 'progressive',
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
