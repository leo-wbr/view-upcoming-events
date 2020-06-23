// Enable Tool Tips Globally 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// On Scroll Effectts 
$(function($) {
    $(window).scroll(function() {
        var navigation = $("body.front nav.navbar");
        var eventDynamicInfo = $("body.front  #eco-header-info");
        
		if ($(this).scrollTop() >= 180) {navigation.addClass('navbar-light bg-light');}
		else navigation.removeClass('navbar-light bg-light');
        
		if ($(this).scrollTop() >= 180) {eventDynamicInfo.addClass('on-scroll');} 
		else eventDynamicInfo.removeClass('on-scroll');
    });

});

$(document).ready(function(){
    $('#slider1').slick({
		slidesToShow: 8,
		slidesToScroll: 8,
		autoplay: true,
		autoplaySpeed: 2500,
		speed: 1300,
		arrows: false,
		dots: false,
		pauseOnHover: true,
		responsive: [{
		    breakpoint: 768,
		    settings: {
		        slidesToShow: 4
		    }
		}, {
		    breakpoint: 520,
		    settings: {
		        slidesToShow: 3
		    }
		}]
	});
});		
$(document).ready(function(){
    $('#slider2').slick({
		slidesToShow: 8,
		slidesToScroll: -8,
		autoplay: true,
		autoplaySpeed: 2500,
		speed: 1300,
		arrows: false,
		dots: false,
		pauseOnHover: true,
		responsive: [{
		    breakpoint: 768,
		    settings: {
		        slidesToShow: 4
		    }
		}, {
		    breakpoint: 520,
		    settings: {
		        slidesToShow: 3
		    }
		}]
	});
});		

  