/**
 *
 */
$(function(){

	var id;
	var checkedItems;

	$(document).on('click', '.show-modal', function () {
		id = $(this).attr('id');
		$('#' + id + '-checker').showModal();
	});

	$(document).on('click', '.modal-background', function () {
		var checkedItem;
		checkedItems = new Array();
		$('#' + id + '-checker input').each(function(i, e) {
			if ($(e).prop('checked')) {
				checkedItem = $('#' + id + '-checker label[for="' + $(e).attr('id') + '"]').clone();
				checkedItems.push(checkedItem);
			}
		});
		var checkedDisplay = $('#' + id + '-checked');
		checkedDisplay.empty();
		$(checkedItems).each(function(i, e) {
			$(checkedDisplay).append(e);
		});
		$('#' + id + '-checker').hideModal();
	});

});