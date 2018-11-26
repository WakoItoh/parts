/**
 *
 */
$(function(){

	var start, end;

	$(document).on('mousedown', '#timetable-drawer .time-option', function () {
		$(this).clearTimeTable();
		$(this).addClass('time-selected-start');
	});

	$(document).on('mouseup', '#timetable-drawer .time-option', function () {
		$('.time-selected-end').removeClass('time-selected-end');
		$(this).addClass('time-selected-end');
		if ($('.time-selected-start').length != 0) {
			if ($('.time-selected-start .time-option-start').html()
					<= $('.time-selected-end .time-option-start').html()) {
				start = $('.time-selected-start .time-option-start').html();
				end = $('.time-selected-end .time-option-end').html();
			} else {
				start = $('.time-selected-end .time-option-start').html();
				end = $('.time-selected-start .time-option-end').html();
			}
			$(this).copyTimeTable(start, end);
		}
	});

});