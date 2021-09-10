$(function(){
	var n=0;
	var t=0;
	var pos=0;


	setTimeout(function(){
		$("#header").addClass("active");
		$(".controller li").eq(n).addClass("on");

	},1000);
	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf){
				n=1;
		}
		else if(t < $("#page3").offset().top-winHalf){
				n=2;
		}
		else if(t < $("#page4").offset().top-winHalf){
				n=3;
		}
		else if(t < $("#page5").offset().top-winHalf){
				n=4;
		}
		else{
			n=5;
		}
			categoryControl();

		$(".controller li").removeClass("on");
		$(".controller li").eq(n).addClass("on");
		if(t > 80){
			$("#header .inner .top").addClass("fixed");
			$(".btn_top").fadeIn(300);
		}
		else{
			$("#header .inner .top").removeClass("fixed");
			$(".btn_top").fadeOut(300);
		}

	});
	function categoryControl(){

		if($("#page5").hasClass("active") == true){
			return;
		}


		if(n == 0){
			$("#header").addClass("active");
		}
		else{
			$("#page"+n).addClass("active");
		}
	}

	//resize
	var winHalf;
	$(window).resize(function(){
		winHalf=$(window).height()/2;

	});
	$(window).trigger("resize");
	//click
	$(".tab").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$("body").addClass("fixed");
			$("#mobile").addClass("active");
			$(".tab").addClass("active");
			$(".dim").addClass("active");
		}
		else{
				$("body").removeClass("fixed");
				$("#mobile").removeClass("active");
				$(".tab").removeClass("active");
				$(".dim").removeClass("active");
		}
	});
	$(".dim").click(function(){
		$("body").removeClass("fixed");
		$("#mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});
	$("nav li, .controller li").click(function(e){
			e.preventDefault();
			n=$(this).index();

			if(n === 0){
				pos=$("#header").offset().top;
			}
			else{
				pos=$("#page"+n).offset().top;
			}
			$("html").animate({scrollTop : pos},800);

				$("body").removeClass("fixed");
				$("#mobile").removeClass("active");
				$(".tab").removeClass("active");
				$(".dim").removeClass("active");
	});
	$(".btn_top").click(function(e){
		e.preventDefault();
		pos=0;
		$("html").animate({scrollTop : pos},800);
	});
});
