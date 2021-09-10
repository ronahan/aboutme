$(function(){
	/*menu*/
	$("#gnb ul li").hover(
		function(){
			$("#header .top").addClass("active");
		},
		function(){
			$("#header .top").removeClass("active");
		}
	);
	/*language btn*/
	$("#header .utils .language .lang").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#header .utils .language dl dd").slideToggle(300);
	});
	/*main slider*/
	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "horizontal",
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: ".swiper-pagination",
		},
		on: { // added
			init:function(){
				accountText(this);
			},
			slideChange:function(){
				accountText(this);
			},
		},
	});
	function accountText(obj){
		$(".main_slider .account .current").text(obj.activeIndex+1);
		$(".main_slider .account .total").text(obj.slides.length);
	}
	mainSwiper.on("slideChange", function(){
		accountText(this);
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
	/*category4 slider*/
	var dnswiper=new Swiper(".dnSwiper", {
		pagination: {
		  el: ".dn_account",
		  type: "fraction",
		},
		navigation: {
		  nextEl: ".dn_controller .next",
		  prevEl: ".dn_controller .prev",
		},
	});

	/*footer familysite*/
	var str="";
	var m;
	$("#footer .top .familysite dl dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#footer .top .familysite dl dd").slideToggle(300);
	});
	$("#footer .top .familysite dl dd li a").click(function(e){
		e.preventDefault();
			$("#footer .top .familysite dl dt a").removeClass("active");
			$("#footer .top .familysite dl dd").slideUp(300);
			m=$(this).parent().index();
			str=$(this).text();
	});
});
