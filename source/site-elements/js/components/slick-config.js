$('.-slider-image').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	variableWidth: true,
	asNavFor: '.-slider-content',
	centerMode: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			}
		}
	]
});
$('.-slider-content').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	fade: true,
	asNavFor: '.-slider-image',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
	]
});

$('.news .-carousel').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		}
	]
});
