/**
 *
 */
(function($){

	$.fn.showModal = function(){
		$('<div class="modal-background"><div class="hide-modal"></div></div>').insertBefore(this);
		$('.modal-background').css('position', 'fixed');
		$('.modal-background').css('top', '0');
		$('.modal-background').css('left', '0');
		$('.modal-background').css('z-index', '1000');
		$('.modal-background').css('width', '100vw');
		$('.modal-background').css('height', '100vh');
		$('.modal-background').css('background-color', '#999999');
		$('.modal-background').css('opacity', '0.5');
		$('.hide-modal').css('position', 'fixed');
		$('.hide-modal').css('top', '15px');
		$('.hide-modal').css('right', '15px');
		$('.hide-modal').css('z-index', '999');
		$('.hide-modal').css('width', '20px');
		$('.hide-modal').css('height', '20px');
		$('.hide-modal').css('background-image', 'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%20120%22%20width%3D%22120%22%20height%3D%22120%22%3E%3Cpath%20d%3D%22M%2010%2010%20L%20110%20110%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%2210%22%20%2F%3E%3Cpath%20d%3D%22M%2010%20110%20L%20110%2010%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%2210%22%20%2F%3E%3C%2Fsvg%3E")');
		$('.hide-modal').css('background-size', 'cover');
		var ww = $(window).width();
		var wh = $(window).height();
		this.css('position', 'absolute');
		this.css('top', ((wh - this.innerHeight()) / 2) + 'px');
		this.css('left', ((ww - this.innerWidth()) / 2) + 'px');
		this.css('z-index', '1001');
		this.show();
	};

	$.fn.hideModal = function(){
		this.hide();
		$('.modal-background').remove();
	};

})(jQuery);