$(function() {


	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".footer-menu").toggleClass('footer-menu--visible');
		return false;
	});

	$('body').click(function() {
		$('.footer-menu').removeClass('footer-menu--visible');
		$(".toggle-mnu").removeClass('on');
	});

	$('.footer-menu').click(function(e) {
		e.stopPropagation();
	});

	var $searchScreen = $('.search-screen');

	$('.header-search').click(function(e) {
		$searchScreen.fadeIn();
	});

	$('.search-screen .header-search').click(function(e) {
		$searchScreen.fadeOut();
	});

	if(document.querySelector('.about-page__sect ') !== null){
		$(window).scroll(function() {
			
		});
	}

	if(document.querySelector('.about-page__sect') !== null && screen.width > 1200){
			$.scrollify({
				section:".about-page__sect",
				scrollbars:false,
				standardScrollElements: ".we-want-card",
				// touchScroll:false,
				// setHeights: false,
				after: function(index, sections){
			     	// alert(index);
			     	console.log(sections[index].context);
			     	// sections[index].context.classList.add('red');
			     	console.log(index);
				     $('.about-nav li').eq(index)
				     .addClass('active')
				     .siblings()
				     .removeClass('active');


				     if(index == 1){
				     	$(sections[index].context).find(".to-animate").removeClass("zoomOutDown")
				     	.addClass('zoomInUp');
				     	console.log('ind = 1');

				     	$(sections[index].context).find('.we-want-card')
					     	.each(function(ind, elem) {
					     		console.log(ind);
					     		if(ind % 2 == 0){

					     			$(elem).removeClass('fadeOutLeft')
					     				.addClass('fadeInLeft');
					     		}else{
					     			$(elem).removeClass('fadeOutRight')
					     			.addClass('fadeInRight');

					     		}
					     	});

				     	$(sections[index].context).find('.about-page__sect-cover')
				     		.removeClass('fadeOutLeft')
				     		.addClass('fadeInLeft');

				     }

				     if(index == 2){
				     	$(sections[index].context).find('h2')
				     		.removeClass('fadeOutDown')
				     		.addClass('fadeInUp');

				     	$(sections[index].context).find('.working-card').each(function(ind, elem) {
				     		console.log(ind);
				     		if(ind % 2 == 0){

				     			$(elem).removeClass('fadeOutUp')
				     			.addClass('fadeInDown');
				     		}else{
				     			$(elem).removeClass('fadeOutDown')
				     			.addClass('fadeInUp');

				     		}
				     	});
				     }

				     if(index == 3){
				     	$(sections[index].context).find('.team-rectangle')
				     		.removeClass('rollOut')
				     		.addClass('rollIn');

		     			$(sections[index].context).find('h2')
				     		.removeClass('flipOutX')
				     		.addClass('flipInX');

				     	$(sections[index].context).find('.team-card').each(function(ind, elem) {
			     			setTimeout(function() {
				     			$(elem).removeClass('zoomOut')
				     				.addClass('zoomIn');
			     				
			     			}, ind * 100);
	
				     	});


				     }
	   			}
	    // scrollbars:false
	  	});

	  	$('.about-arrow').click(function() {
	  		var currentIndex = + $(this).closest('section').attr('data-section-index');
	  		
	  		console.log($(this).closest('.about-page__sect'));
	  		console.log(currentIndex);
	  		
	  		$.scrollify.move(currentIndex + 1);
	  	
	  	});

	  	$('.about-nav li a').click(function() {
	  		var $th = $(this),
	  		$thParent = $th.closest('li'),
	  		$thIndex = $thParent.index(),
	  		thisSectionTop = $('[data-section-index='+$thIndex+']').offset().top;

	  		console.log(thisSectionTop);
	  		console.log('click');

	  		$.scrollify.move($thIndex);

	  		$thParent
	  		.addClass('active')
	  		.siblings()
	  		.removeClass('active');


	  		return false;
	  	});

	}else{

		$(window).scroll(function() {

			$('.about-page__sect').each(function(){
						var $this = $(this),
					

					sectionTop = $this.offset().top - 200,
					sectionBottom = sectionTop + $this.height();
					
					//console.log($this.outerHeight());
					windScroll = $(window).scrollTop();

						if(sectionTop < windScroll && sectionBottom > windScroll){
							var name = $this.attr('data-section-index');
							 $('.about-nav li a')
							 	.eq(name)
							 	.closest('li')
							 	.addClass('active')
							 	.siblings()
							 	.removeClass('active');
							
							
						}
			});
		});


		$('.about-nav li a').click(function() {
	  		var $th = $(this),
	  		$thParent = $th.closest('li'),
	  		$thIndex = $thParent.index(),
	  		thisSectionTop = $('[data-section-index='+$thIndex+']').offset().top;

	  		$thParent
	  		.addClass('active')
	  		.siblings()
	  		.removeClass('active');

	  		$('html, body').animate({scrollTop: thisSectionTop - 50}, 800);

	  		return false;
	  	});
	}


	if(document.querySelector('.portfolio-item') !== null){
			var portfolioSectCount = $('.portfolio-item').length;

			$('.range-counter__to').text(portfolioSectCount);

			console.log(portfolioSectCount);

			var range = document.getElementById('range');
			var dragger = noUiSlider.create(range, {
				start: 1,
				step: 1,
				behaviour: "none",
				range: {
					min: 1,
					max: portfolioSectCount
				}
			});

			dragger.on('update', function(){
					var handle = document.querySelector('.range .noUi-handle'),
			   			handlePosition = handle.getAttribute('aria-valuenow'),
			   			noUiOrigin = document.querySelector('.noUi-origin');

		   			if(handlePosition == '0.0'){
		   				handle.setAttribute('style', 'left: 0');
		   			}

				});

			  	dragger.on('set', function(){

		   		var handle = document.querySelector('.range .noUi-handle'),
			   			handlePosition = handle.getAttribute('aria-valuenow'),
			   			noUiOrigin = document.querySelector('.noUi-origin'),
			   			handleWidth = handle.offsetWidth;

		   			if(handlePosition == '0.0'){
		   				handle.setAttribute('style', 'left: 0');
		   			}
		   			if(handlePosition == '100.0'){
		   				handle.setAttribute('style', 'right:' + handleWidth + 'px;' + 'left: auto;');
		   			}

				});

			var pageScroll = $(".main").onepage_scroll({
				direction: 'horizontal',
				sectionContainer: "section",
				loop: false,
				animationTime: 1300,
				// responsiveFallback: 768,
				pagination: false,
				// easing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",
				afterMove: function(index) {
						range.noUiSlider.set(index);
						$('.range-counter__current').text(index);
						
					}
			});

			$(".main").moveTo(1);

			$('#range-forward').click(function() {
				$(".main").moveDown();
			});

			$('#range-backward').click(function() {
				$(".main").moveUp();
			});

	}

	if(document.querySelector(".ffd-form__select select") !== null){
		$( ".ffd-form__select select" ).selectmenu();	
		
	}
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
