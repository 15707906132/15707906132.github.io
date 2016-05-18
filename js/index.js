(function(d,w){		

//音乐转动
	var audio = d.querySelector("audio");
	var play = d.querySelector("#play");
	var mu_2 = d.querySelector(".mu_2")
	if (audio.play) {
		mu_2.addEventListener("click",function(e){
			mu_2.style.display = "none";
			play.className="pause";
	        play.style.animation = "none";
	        audio.pause();
		})
	}
	if(audio.pause){
		play.addEventListener("click",function(e){
			mu_2.style.display = "block";
			play.className="play";
	        play.style.animation = "mu 1s linear infinite"; 
	        audio.play();
	    })
	}
	

})(document,window)

$(function () {
	
	
//第一页轮播	
	function fadein(e) {
		e.className = "bg fadein";
	};
	function fadeOut(e) {
		
		e.className = "bg";
	}
	var cur_img = document.getElementById("divs").children.length-1;
	console.info(cur_img)
	function turn (imgs) {
		var imgs = document.getElementById("divs").children;

		if (cur_img == 0) {
			fadeOut(imgs[cur_img]);
			cur_img = imgs.length-1;
			fadein(imgs[cur_img]);
		}else{
			fadeOut(imgs[cur_img]);
			fadein(imgs[cur_img-1]);
			cur_img --;
			
		}
	}
	
	setInterval(turn,3000);
	
	
	 
	
	
	scaleW = window.innerWidth / 320;
	scaleH = window.innerHeight / 480;
	var resizes = document.querySelectorAll('.resize');
	for (var j = 0; j < resizes.length; j++) {
		resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + 'px';
		resizes[j].style.height = parseInt(resizes[j].style.height) * scaleH + 'px';
		resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + 'px';
		resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + 'px';
	}
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		pagination: '.swiper-pagination',
		//virtualTranslate : true,
		mousewheelControl: true,
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		},
		onTransitionEnd: function(swiper) {
			swiperAnimate(swiper);
		},
		watchSlidesProgress: true,
		onProgress: function(swiper) {
			for (var i = 0; i < swiper.slides.length; i++) {
				var slide = swiper.slides[i];
				var progress = slide.progress;
				var translate = progress * swiper.height / 4;
				scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
				var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
				slide.style.opacity = opacity;
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';
			}
		},
		onSetTransition: function(swiper, speed) {
			for (var i = 0; i < swiper.slides.length; i++) {
				es = swiper.slides[i].style;
				es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
			}
		},
	})
	
	
	



})
