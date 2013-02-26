$(document).ready(function(event){
	$('body').css({
		'min-height' : $(window).height()
	});

	$(window).resize(function(event){
		$('body').css({
			'min-height' : $(window).height()
		});
	});
});