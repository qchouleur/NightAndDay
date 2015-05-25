$(document).ready( function() {

	$('#orb').click(function () {
		var orb = $(this);
		var sky = $('#sky');

		if(orb.hasClass('sun')) {
			orb.addClass('moon').removeClass('sun');
		} else {
			orb.addClass('sun').removeClass('moon');
		}

		if(sky.hasClass('day')) {
			sky.addClass('night').removeClass('day');
		} else {
			sky.addClass('day').removeClass('night');
		}

		$('[id^=moonspot]').each(function (){
			if($(this).hasClass('visible')) {
				$(this).removeClass('visible');
			} else {
				$(this).addClass('visible');
			}
		});
	});

});
