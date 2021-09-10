$(function(){
 //tab
	$(".btn_tab").click(function(e){
		e.preventDefault();
		$("#header").addClass("active");
	});
	$(".close_menu").click(function(e){
		e.preventDefault();
		$("#header").removeClass("active");
	});
	//2depth
	$("#mobile > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#mobile > ul > li").removeClass("active");
			$(this).addClass("active");
			$("nav ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	//page1 tab open
	$("#page1 .inner .list li a").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			console.log("nohave");
			$("#page1 .inner .list li").removeClass("active");
			$(this).addClass("active");
			$(".items").slideUp(300);
			$(this).parent().find("ul").slideDown(300);
		}
		else{
			console.log("have");
			$(this).removeClass("active");
			$(this).parent().find("ul").slideUp(300);
		}
	});
	//gnb fixed
	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 55){
			$("#header").addClass("fixed");
		}
		else{
			$("#header").removeClass("fixed");
		}
	});
	//slider
	var mainSwiper=new Swiper(".main-swiper",{
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});
	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});
	var mainSwiper=new Swiper(".gallery-swiper",{
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
	});

	//사업자정보열기
	$(".btn_show").click(function(e){
		e.preventDefault();
		if($("#footer").hasClass("active") == false){
			$("#footer").addClass("active");
		}
		else{
			$("#footer").removeClass("active");
		}
	});
});
