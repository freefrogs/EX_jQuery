$(function() {
	console.log('DOM loaded');
	// carousel
	var carouselList = $('#carousel ul'),
		currentDot = 1,
		dotLength = $('.dots').children().length,
		dotCount = '.dot-'+currentDot;

	function dots() {
		dotCount = '.dot-'+currentDot;
		$('[class*="dot-"').css('color', '#fff');
		$(dotCount).css('color', '#a6a7a8');	
	};
	dots();

	function changeSlide() {
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	};

	setInterval(changeSlide, 4000);

	function moveFirstSlide() {
		var firstItme = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
		currentDot++;
		if (currentDot == dotLength + 1) {
			currentDot = 1;
		}
		dots();
		if (lastItem) {
			lastItem.after(firstItme);
			carouselList.css({marginLeft:0});
		} 
	};
	// changing slides by clicking on a side arrows (prev and next)
	function nextSlide() {
		carouselList.animate({'marginLeft':-600}, 0, moveFirstSlide);
	};

	$('.next').on('click', nextSlide);

	function previousSlide() {
		carouselList.animate({'marginLeft':600}, 0, moveLastSlide);
		if (currentDot == 1) {
			currentDot = dotLength+1;
		}
		currentDot--;
		dots();
	};

	function moveLastSlide() {
		var firstItme = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');

		if (lastItem) {
			firstItme.before(lastItem);
			carouselList.css({marginLeft:0});
		} 
	};	

	$('.prev').on('click', previousSlide);
});

