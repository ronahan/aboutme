$(function(){

	$(".tab").click(function(e){
		e.preventDefault();
		$("#header").addClass("active");
	});

	$("#header .topbar .right .btn_search").click(function(e){
		e.preventDefault();
		$("#search").addClass("active");
		$("#search .search_close").click(function(e){
			$("#search").removeClass("active");
		});
	});

	$("#header .topbar .menu .close").click(function(e){
		e.preventDefault();
		$("#header").removeClass("active");
	});

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	})
	var swiper = new Swiper(".mySwiper", {
	  slidesPerView: 1.2,
	  spaceBetween: 30,
	  pagination: {
	    el: ".swiper-pagination2",
	    clickable: true,
	  },
	});
	var mainSwiper=new Swiper(".mainSwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 1200,
		effect: "horizontal",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: ".controller",
		},
	});

});
