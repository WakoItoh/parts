/**
 *
 */
$(function(){

	$(document).on('click', '.flex-menu-icon', function () {
		$('.flex-menu-item:not(.flex-menu-top)').slideToggle();
		/* TODO .flex-menu-iconの切り替え */
	});

});