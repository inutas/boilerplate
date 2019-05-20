setTimeout(function() {
	// NOTE: FIXED CONTACT BLOCK
	$('.hero-container').waypoint(
		function() {
			$('.fixed-contact').addClass('-slide-in');
		},
		{
			offset: '100%'
		}
	);

	// NOTE: HERO ANIMATIONS
	$('.hero-container').waypoint(
		function() {
			$(
				'.info-container .title, .info-container .intro, .info-container .sub'
			).addClass('-fade-in');
			$('.info-container .title').addClass('-grow');
		},
		{
			offset: '100%'
		}
	);

	$('.hero-container').waypoint(
		function() {
			$('.featured-intro').addClass('-fade-in');
		},
		{
			offset: '100%'
		}
	);
}, 50);
