$(function(){
	var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
	    var stickyHeight = sticky.outerHeight();
	    var stickyTop = stickyWrapper.offset().top;
	    if (scrollElement.scrollTop() >= stickyTop){
	      stickyWrapper.height(stickyHeight);
	      sticky.addClass("is-sticky");
	    }
	    else{
	      sticky.removeClass("is-sticky");
	      stickyWrapper.height('auto');
	    }
  	};
  
	// Find all data-toggle="sticky-onscroll" elements
  	$('[data-toggle="sticky-onscroll"]').each(function() {
	    var sticky = $(this);
	    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
	    sticky.before(stickyWrapper);
	    sticky.addClass('sticky');
	    
	    // Scroll & resize events
	    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
	      stickyToggle(sticky, stickyWrapper, $(this));
	    });
	    
	    // On page load
	    stickyToggle(sticky, stickyWrapper, $(window));
	});
});

$(function() {
	$('ul li a').click(function(){ $('li a').removeClass("active"); $(this).addClass("active"); });
});

$(function() {  
	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1500);
    return false;
  });  
});

$(function() {  
  AOS.init({
    duration: 2500,
  });
});