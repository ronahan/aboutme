$(function(){
	AOS.init({easing: "ease-in-out-sine",	once: true});

	var n=0;
	var t;
	var pos=0;
	var scrollTimer;
	var galleryGap=50;

	function init(){
		$("#gnb li").eq(n).addClass("active");
		$(".project_list > ul > li").eq(n).addClass("active");
		$(".controller li").eq(n).addClass("on");
		wheelGalleryUI("pc1"),
		wheelGalleryUI("mo1");
	}
	init();

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t < $("#page1").offset().top){
				n=0;
			}
			else if(t < $("#page2").offset().top){
				n=1;
			}
			else if(t < $("#page3").offset().top){
				n=2;
			}
			else if(t < $("#page4").offset().top){
				n=3;

				if(t == $(document).height()-$(window).height()){
					n=4;
				}
			}
			else{
				n=4;
			}

			if(n == 1 || n == 2 || n == 3){
				$("#gnb li").addClass("dark");
				$("#header .top .logo").addClass("active");
			}
			else{
				$("#gnb li").removeClass("dark");
				$("#header .top .logo").removeClass("active");
			}

			$("#gnb li").removeClass("active");
			$("#gnb li").eq(n).addClass("active");
			$(".controller li").removeClass("on");
			$(".controller li").eq(n).addClass("on");
		}, 100);
	});
	$(window).trigger("scroll");

	$("#gnb li, .controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=0;
		}
		else{
			pos=Math.ceil($("#page"+n).offset().top);
		}

		$("html").animate({scrollTop:pos}, 800);
	});

	//포트폴리오 리스트 열기
	var portN=0;

	$(".project_list .p_title").click(function(e){
		e.preventDefault();


		var parentLi=$(this).parent().parent().parent();

		if(portN == parentLi.index()) return;
		portN=parentLi.index();
		$("project_list > ul > li").removeClass("active");
		parentLi.addClass("active");
		pos=Math.round($(this).offset().top-galleryGap);

		$("html").animate({scrollTop:pos},800, function(){
			wheelGalleryUI("pc"+(portN+1));
			wheelGalleryUI("mo"+(portN+1));
		});
	});

	//비디오 실행
	var mainVideoN=0;
	var mainVideoTotal=2;
	var mainVideoResource=["reeds","note"];
	var mainVideo=document.getElementById("main_video");
	mainVideo.muted=true;
	mainVideo.play();

	mainVideo.addEventListener("loaddata",function(){
	// console.log("Loaded the video's data!!");
	$("#header .loader").addClass("active");
	});
	mainVideo.addEventListener("ended",function(){
			if(mainVideoN < (mainVideoTotal-1)){
				mainVideoN+=1;
			}
			else{
				mainVideoN=0;
			}
			var videoSrc="video/"+mainVideoResource[mainVideoN]+".mp4";
			$("#main_video").attr({src:videoSrc});
			mainVideo.currentTime=0;
			mainVideo.play();
	});

	var endVideo=document.getElementById("reverse_video");
	endVideo.muted=true;
	endVideo.play();

	endVideo.addEventListener("ended",function(){
		endVideo.currentTime=0;
		endVideo.play();
	});

	//email, github copy
	function copyToClipboard(val){
		var t=document.createElement("textarea");
		document.body.appendChild(t);
		t.value=val;
		t.select();
		document.execCommand("copy");
		document.body.removeChild(t);
	}
	$(".btnMail").click(function(){
		copyToClipboard("ronahan0v0@gmail.com");
		$(".btnMail").addClass("active");
	});
	$(".btnGit").click(function(){
		copyToClipboard("github.com/ronahan");
		$(".btnGit").addClass("active");
	});

	// hover wheel

	function wheelGalleryUI(target){
		var maskH=$("#"+target+" .outbox .photo").height();
		var img=$("#"+target+" .outbox .photo img");
		var imgH=img.height();
		var able=imgH-maskH;
		var step=Math.round(able/60);
		var scrollAmount=parseInt(img.css("top"));
		 // console.log(maskH, imgH, able, step, scrollAmount);

		$("#"+target).mousewheel(function(e, delta){
			if(e.target.className != "pc_dim") return;
				if(delta > 0){
					if(scrollAmount > 0){
						scrollAmount-=10;
					}
					else{
						scrollAmount=0;
					}
				}
				else{
					if(scrollAmount < able){
						scrollAmount+=10;
					}
					else{
						scrollAmount=able;
					}
				}
				img.css({top:-1*scrollAmount});
			});
		$("#"+target).mousewheel(function(e, delta){
			if(e.target.className != "mo_dim") return;
				if(delta > 0){
					if(scrollAmount > 0){
						scrollAmount-=10;
					}
					else{
						scrollAmount=0;
					}
				}
				else{
					if(scrollAmount < able){
						scrollAmount+=10;
					}
					else{
						scrollAmount=able;
					}
				}
				img.css({top:-1*scrollAmount});
			});
	}
		$(".open_area").mousewheel(function(e, delta){
			if(e.target.className === "pc_dim"){
				return false;
			}
			if(e.target.className === "mo_dim"){
				return false;
			}
		});


	//프로젝트 연동
	function mobileLink(){
		if(isMobile){
			$("#page3 .project_list .open_area .inner .text_area .p1").attr({href: "project1/mobile/index.html"});
			$("#page3 .project_list .open_area .inner .text_area .p2").attr({href: "project2/mobile/index.html"});
		}
		else{
			$("#page3 .project_list .open_area .inner .text_area .p1").attr({href: "project1/pc/index.html"});
			$("#page3 .project_list .open_area .inner .text_area .p2").attr({href: "project2/pc/index.html"});
		}

		$("#page3 .project_list .open_area .inner .text_area .p3").attr({href: "project3/index.html"});
	}

	mobileLink();
});
