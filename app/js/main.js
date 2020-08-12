$(function(){
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		arrows: false,
		dots: true,
		fade: true
	});

	$('.header-btn').on('click', function(){
		$('.menu').addClass('active');
	});
	$('.close-btn').on('click', function(){
		$('.menu').removeClass('active');
	});

	new WOW().init();
});