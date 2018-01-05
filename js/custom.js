$(window).on('load', function(){

	"use strict";


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */

	$('.subscribe__container .subscribe__form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.subscribe__success').show();
					});
				});
				e.preventDefault();
			}
		});
	});


	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'subject':$('input[name="contact_subject"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

});

/* ========================================================== */
/*   OnePage Navigation                                       */
/* ========================================================== */

$(document).ready(function() {
	$('#nav').onePageNav();
});

/* ========================================================== */
/*   Navigation Background Color                              */
/* ========================================================== */

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass('nav-fixed-bg');
		} else {
			$('.navbar-fixed-top').removeClass('nav-fixed-bg');
		}
	});

	/* ========================================================== */
	/*   WoW Animations When Scroll                               */
	/* ========================================================== */

	wow = new WOW(
		{
		animateClass: 'animated',
		offset:       100,
		mobile:       false,       // trigger animations on mobile devices (default is true)

		}
	);
	wow.init();

/* ========================================================== */
/*   Owl Carousel For Gallery                                 */
/* ========================================================== */

	$("#gallery__slider").owlCarousel({
		loop: true,
		autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
		margin: 10,
		center: true,
		nav: false,
		pagination: false,
		dots: true,
		responsiveClass: true,
		responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
	});

/* ========================================================== */
/*   Owl Carousel For Team Members                            */
/* ========================================================== */

$("#team__slider").owlCarousel({
	autoplay: true,
	autoplayTimeout: 5000,
	loop: true,
	margin: 10,
	nav: false,
	pagination: false,
	dots: true,
	responsiveClass: true,
	responsive: {
			0: {
					items: 1,
			},
			600: {
					items: 3,
			},
			1000: {
					items: 4,
			}
	}
});

/* ========================================================== */
/*   Owl Carousel For Testimonial                             */
/* ========================================================== */

$("#testimon__slider").owlCarousel({
	autoplay: true,
	autoplayTimeout: 5000,
	loop: true,
	margin: 10,
	nav: false,
	pagination: false,
	dots: true,
	responsiveClass: true,
	responsive: {
			0: {
					items: 1,
			},
			600: {
					items: 1,
			},
			1000: {
					items: 1,
			}
	}
});

/* ========================================================== */
/*   SmoothScroll                                             */
/* ========================================================== */

$('.nav li a').bind('click', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});

/* ========================================================== */
/*   Preloader                                                */
/* ========================================================== */

$(window).load(function()
{
	$(".preloader sk-folding-cube").fadeOut(500);
	$(".preloader").fadeOut(500);
});
