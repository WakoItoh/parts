/**
 *
 */
(function($){

	var startIn, endIn;

	$.fn.copyTimeTableOnSide = function(start, end){
		startIn = $('#start');
		endIn = $('#end');
		if (startIn != undefined && startIn.val() == '') {
			startIn.val(start);
		} else if (endIn != undefined && endIn.val() == '') {
			endIn.val(end);
			$(this).selectTimeTable(startIn.val(), end);
		}
	};

	$.fn.copyTimeTable = function(start, end){
		startIn = $('#start');
		endIn = $('#end');
		if (startIn != undefined && endIn != undefined) {
			startIn.val(start)
			endIn.val(end);
			$(this).selectTimeTable(start, end);
		}
	};

	$.fn.selectTimeTable = function(start, end){
		$('.time-option').each(function(i, e) {
			if (start <= $(e).children('.time-option-start').html() && $(e).children('.time-option-end').html() <= end) {
				$(e).addClass('time-selected');
			} else {
				$(e).removeClass('time-selected');
			}
		});
	}

	$.fn.clearTimeTable = function(){
		$('.time-selected-start').removeClass('time-selected-start');
		$('.time-selected').removeClass('time-selected');
		$('.time-selected-end').removeClass('time-selected-end');
	};

	$.fn.clearTimeInput = function(){
		startIn = $('#start');
		endIn = $('#end');
		if (startIn != undefined) {
			startIn.val('');
		}
		if (endIn != undefined) {
			endIn.val('');
		}
	};

})(jQuery);