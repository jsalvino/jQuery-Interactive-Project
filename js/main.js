$(document).ready(function(){

		$('.carousel a').on('click', function(evnt){

				var clickImage=$(this).data('image');
				$('.main-image>a').attr('href', clickImage);
				$('.main-image img.hero').attr('src', clickImage);

				var clickName=$(this).data('name');
				$('h2').html(clickName);

				var clickFirstIntro=$(this).data('firstintro');
				$('.character-info h3:first-child').html('First introduced: '+ clickFirstIntro);
				
				// 'First introduced: '+ 
				var clickWhere=$(this).data('where');
				$('.character-info h3:nth-child(2)').html('Introduced Where: '+ clickWhere);

				var clickPowers=$(this).data('powers');
				$('.character-info h3:nth-child(3)').html('Powers: '+ clickPowers);	
				
				var clickSummary=$(this).data('summary');
				$('.character-summary p:first-of-type').html(clickSummary);

				var clickOpinion=$(this).data('opinion');
				$('.character-summary p:last-child').html(clickOpinion);

		});  // End of on click function

		$('.carousel').slick({
		    // setting-name: setting-value
		    infinite: true,
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    dots: true
		 });  //End of slick function



		// $(window).resize(function(){
		// 	if ($(window).width() <= 600){	
		// 	$('.carousel').slick({
		// 	    // setting-name: setting-value
		// 	    infinite: true,
		// 	    slidesToShow: 1,
		// 	    slidesToScroll: 1,
		// 	    dots: false
		// 	 });  
		// 	}	
		// });




			// $(document).ready(function() {
				$(".fancybox").fancybox();
			// });

	});  //End of Ready function














