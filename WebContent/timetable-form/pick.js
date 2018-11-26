/**
 *
 */
$(function(){

	var start, end;

	$(document).on('click', '#timetable-picker .time-option', function () {
		$(this).addClass('time-selected');
		start = $(this).children('.time-option-start').html();
		end = $(this).children('.time-option-end').html();
		$(this).copyTimeTableOnSide(start, end);
	});

	$(document).on('click', '.time-clear', function () {
		$(this).clearTimeTable();
		$(this).clearTimeInput();
	});

});