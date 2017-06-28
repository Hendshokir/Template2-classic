$(function(){
	'use strict';
	
	//Adjust Header Height
	var myHeader = $('.header');
	var mySlider = $('.bxslider');
	
	myHeader.height($(window).height());
	
	$(window).resize(function(){
		myHeader.height($(window).height());
		
		//Adjust BxSlider List Item Center
		/*mySlider.each(function () {
			$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height() ) /2 );
		});*/
		
	});
	
	// Links and Active Class
	$('.links li a').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	
	//Adjust BxSlider List Item Center
	/*mySlider.each(function () {
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height() ) /2 );
	});*/
	
	
	//BxSlider
	mySlider.bxSlider({
		pager:false,
		controls:true
	});
	
	//smooth scroll to Div
	$('.links li a').click(function(){
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top
		},1000);
	});
	
	// Our Outo Slider Code
	(function autoSlider(){
		$('.slider .active').each(function(){
			if (!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000,function(){
					
					$(this).removeClass('active').next().addClass('active').fadeIn();
				});
			}else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    autoSlider();
                    
                });
                
            }
		});
		
	}());
	
	// Trigger MixItUp
	$('#container').mixItUp();
   
 	//Adjust Shuffle links
	$('.shuffle li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	//Trigger Nice Scroll
	 $("html").niceScroll({
		 cursorcolor:'#1ABC9C',
		 cursorborder:'1px solid #1ABC9C',
		 cursorwidth:'10px',
		 
	 });
});



