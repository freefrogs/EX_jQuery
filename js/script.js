$(function(){
	console.log('DOM loaded')
})

var span = $('span').each(function(index, element) {
	if (index % 2 == 0) {
		$(element).css('color', 'red');
	}
});

var para = $('p').each(function(index, element) {
	$(element).append('<button data-tmp="'+ index +'" type="button">Click me!</button>');
});

$('button').click(function() {
	alert($(this).attr('data-tmp'));
});