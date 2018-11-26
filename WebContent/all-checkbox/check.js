/**
 *
 */
$(function(){

	var id,name;
	var items;

	$(document).on('change', '.bundle-checkbox', function () {
		if ($(this).attr('name') == '' || $(this).attr('name') == undefined) {
			id = $(this).attr('id');
			name = id.match(/^(.+)\-all$/)[1];
			items = $('[name="' + name + '"]');
			if ($(this).prop('checked')) {
				items.each(function(i, e) {
					$(e).prop('checked', true);
				});
			} else {
				items.each(function(i, e) {
					$(e).prop('checked', false);
				});
			}
			/*
			items.each(function(i, e) {
				$(e).prop('checked', $(this).checked());
			});
			*/
		} else {
			name = $(this).attr('name');
			id = name + '-all';
			items = $('[name="' + name + '"]');
			if ($(this).prop('checked')) {
				if ($('[name="' + name + '"]:checked').length == items.length) {
					$('#' + id).prop('checked', true);
				}
			} else {
				if ($('[name="' + name + '"]:checked').length != items.length) {
					$('#' + id).prop('checked', false);
				}
			}
		}
	});

});