(function ($) {
	"use strict";

	$(".signin").on("click", function () {
		$('#myModal1').modal('hide');
	});
	//trigger next modal
	$(".signin").on("click", function () {
		$('#myModal2').modal('show');
	});

	$('.b-question').on('click', function (e) {
		e.preventDefault();
		var targ = $(this).attr('data-target');
		if ($(this).hasClass('active')) {
			$(this).parent().parent().find('.b-answer').slideUp(300);
			$(this).removeClass('active');
		} else {
			$(this).parent().parent().find('.b-question').removeClass('active');
			$(this).parent().parent().find('.b-answer').slideUp(300);
			$(targ).slideDown(300);
			$(this).addClass('active');
		}
	});


	$(document).ready(function () {
		$(".title").lettering();
		$(".button").lettering();
	});



	$(document).ready(function () {
		animation();
	}, 1000);

	$('.button').click(function () {
		animation();
	});


	function animation() {
		var title1 = new TimelineMax();
		title1.to(".button", 0, {
			visibility: 'hidden',
			opacity: 0
		})
		title1.staggerFromTo(".title span", 0.5, {
			ease: Back.easeOut.config(1.7),
			opacity: 0,
			bottom: -80
		}, {
			ease: Back.easeOut.config(1.7),
			opacity: 1,
			bottom: 0
		}, 0.05);
		title1.to(".button", 0.2, {
			visibility: 'visible',
			opacity: 1
		})
	}


	$(".scrollTo").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: ($(target).offset().top)
    }, 1500);
	});

	$(function () {
		var header = $(".start-style");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});

	//Animation
	$(document).ready(function () {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
	$('body').on('mouseenter mouseleave', '.nav-item', function (e) {
		if ($(window).width() > 992) {
			var _d = $(e.target).closest('.nav-item');
			_d.addClass('show');
			setTimeout(function () {
				_d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
			}, 1);
		}
	});

})(jQuery);

// Init AOS
AOS.init();