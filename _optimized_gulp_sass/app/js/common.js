$(function() {

	//for opening modals on home page
	$(".tabs").click(function() {
		$(".page-2").toggle();
	});
	$(".burger").click(function() {
		$(".page-3").toggle();
	});
	$(".dots").click(function() {
		$(".page-5").toggle();
	});
	$(".op-p4").click(function() {
		$(".page-4").toggle();
	});
	// $(".phone").click(function() {
	// 	$(".page-5").toggle();
	// });

	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navElement: false,
		navText: "",
		//navContainer: ".slider-nav-container"
	});

	var owl1 = $(".slider-1");
	owl1.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navElement: false,
		navText: "",
		//navContainer: ".slider-nav-container-1"
	});

	var owl2 = $(".slider-2");
	owl2.owlCarousel({
		loop: true,
		itemClass: "slide-wrap",
		nav: true,
		navElement: false,
		navText: "",
		center: true,
		responsiveClass: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items: 3
			}
		}
		//navContainer: ".slider-nav-container-2"
	});

	$(".next").click(function(){
		owl1.trigger('next.owl.carousel')
	});
	$(".prev").click(function(){
		owl1.trigger('prev.owl.carousel')
	});

	$(".next").click(function(){
		owl.trigger('next.owl.carousel')
	});
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel')
	});

	$(".next").click(function(){
		owl2.trigger('next.owl.carousel')
	});
	$(".prev").click(function(){
		owl2.trigger('prev.owl.carousel')
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);

		});
		return false;
	});

	$('.page-2-content-item').click(function() {
		$('.page-2').hide();
	});

	$('.page-4-top').click(function() {
		$('.page-4').hide();
		$('.page-3').show();
	});

	

	//for tabs on faq page
	$(".faq-info-item").click(function() {
		$(this).find("svg:first-child").toggle();
		$(".faq-info-item svg:first-child").not($(this).find("svg:first-child")).css( "display", "block" );

		$(this).find("svg:last-child").toggle();
		$(".faq-info-item svg:last-child").not($(this).find("svg:last-child")).css( "display", "none" );

		$(this).find(".faq-a").toggle();
		$(".faq-a").not($(this).find(".faq-a")).css( "display", "none" );
	});
});



//for tabs in modal 3(left bottom one)
function openTabHome(tabName,elmnt) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("p4-active");
    }

    elmnt.classList.add("p4-active");
}
//open one tab by default
document.getElementById("open-link").click();


// //for tabs security page
// function openTabSec(cityName,elmnt) {
//     var i, tabcontentS, tablinksS;

//     tabcontentS = document.getElementsByClassName("tabcontent-security");
//     for (i = 0; i < tabcontentS.length; i++) {
//         tabcontentS[i].style.display = "none";
//     }
//     document.getElementById(cityName).style.display = "block";

//     tablinksS = document.getElementsByClassName("tablink-security");
//     for (i = 0; i < tablinksS.length; i++) {
//         tablinksS[i].classList.remove("security-tab-active");
//     }

//     elmnt.classList.add("security-tab-active");
// }

// //open one tab by default
// document.getElementById("security-open-link").click();

$(document).ready(function() {

    // Sets viewScroller with sample events
    $('.mainbag').viewScroller({
        useScrollbar: false,
        animSpeedMainView: 1500,
        loopMainViews: false,
        changeWhenAnim: false,
        beforeChange: function() {
            console.log('beforeChange fired!');

           	$('.con1').removeClass('content-1');
		    $('.con2').removeClass('content-2');
		    $('.con3').removeClass('content-3');
            
            $('.con1').addClass('content-1-b');
            $('.con2').addClass('content-2-b');
            $('.con3').addClass('content-3-b');

            return false; // It means that views change will be terminated
            

        },
        afterChange: function() {
            console.log('afterChange fired!');

            $('.con1').removeClass('content-1-b');
		    $('.con2').removeClass('content-2-b');
		    $('.con3').removeClass('content-3-b');

		    $('.con1').addClass('content-1');
            $('.con2').addClass('content-2');
            $('.con3').addClass('content-3');

        },
        beforeResize: function() {
            console.log('beforeResize fired!');
        },
        afterResize: function() {
            console.log('afterResize fired!');
        }
    });
});

//close modal
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-2");
		var tabs = $(".tabs");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !tabs.is(e.target) && tabs.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-3");
		var burger = $(".burger");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !burger.is(e.target) && burger.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-5");
		var dots = $(".dots");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !dots.is(e.target) && dots.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-4");
		var dots = $(".op-p4");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !dots.is(e.target) && dots.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-calc");
		var pageC = $(".page-calc-btn");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !pageC.is(e.target) && pageC.has(e.target).length === 0) {
			div.hide();
		}
	});
});
// jQuery(function($){
// 	$(document).mouseup(function (e){
// 		var div = $(".page-5");
// 		var phone = $(".phone");
// 		if (!div.is(e.target)
// 			&& div.has(e.target).length === 0 && !phone.is(e.target) && phone.has(e.target).length === 0) {
// 			div.hide();
// 		}
// 	});
// });
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".con-form-m");
		var pageC = $(".page-5-btn");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !pageC.is(e.target) && pageC.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".com-form-m");
		var pageC = $(".page-5-btn");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !pageC.is(e.target) && pageC.has(e.target).length === 0) {
			div.hide();
		}
	});
});





// // scroll
// 	if($(".home:hover").length != 0){
// 		$( ".services" ).scrollTop(function() {
// 			$( ".services" ).css( "margin-top", "-100vh" );
// 			$( ".services" ).css( "transition", "margin-top ease 3s" );
// 		});
// 	}

// 	if($(".services:hover").length != 0){
// 		var scroll = $(window).scrollTop();
// 	    if(scroll > position) {
// 	        console.log('scrollDown');
// 	        $( ".pros" ).scrollTop(function() {
// 			$( ".services .content" ).css( "position", "fixed" );
// 			$( ".pros" ).css( "margin-top", "-100vh" );
// 			$( ".pros" ).css( "transition", "margin-top ease 3s" );
// 		});

// 	    } else {
// 	         console.log('scrollUp');
// 	         $( ".services" ).scrollTop(function() {
// 			$( ".services .content" ).css( "position", "fixed" );
// 			$( ".services" ).css( "margin-top", "0vh" );
// 			$( ".services" ).css( "transition", "margin-top ease 3s" );
// 			$( ".pros" ).css( "margin-top", "0vh" );
// 		});

// 	    }
// 	    position = scroll;
// 		}
// 	if($(".pros:hover").length != 0){
// 		var scroll = $(window).scrollTop();
// 	    if(scroll > position) {
// 	        console.log('scrollDown');
// 	        // add code for next element
// 	    } else {
// 	         console.log('scrollUp');
// 	         $( ".pros" ).scrollTop(function() {
// 			$( ".pros .content" ).css( "position", "fixed" );
// 			$( ".pros" ).css( "margin-top", "0vh" );
// 			$( ".pros" ).css( "transition", "margin-top ease 3s" );
// 			$( ".services" ).css( "margin-top", "-100vh" );
// 		});

// 	    }
// 	    position = scroll;
// // 		}
// /
// // });


// Calculator
	function toST(elmnt) {
		if (window.innerWidth > 830) {
		    var toStageTwo = document.getElementById('stage-2');
			toStageTwo.classList.add('stage');
			toStageTwo.classList.remove('stage-2');
			toStageTwo.style.padding = '0 5px 15px 0px';
			
			var stageOne = document.getElementById('stage-1');
			var toStageT = stageOne.getElementsByClassName('container-radio-calc');
			var i;
			for (i = 0; i < toStageT.length; i++) 
				{toStageT[i].style.display = 'none';}

			elmnt.style.display = 'block';
			stageOne.style.height = '30%';
			stageOne.style.padding = '0 5px 15px 0';

			var formm = document.getElementById('stage-1-form');
			formm.style.alignItems = 'center'
			
			var calcLine = document.getElementById('calc-line');
			calcLine.classList.add('calc-line-1');

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'Размещение проекта';
		}

		if (window.innerWidth < 831) {
		    var toStageTwo = document.getElementById('stage-2');
			toStageTwo.classList.add('stage');
			toStageTwo.classList.remove('stage-2');
			toStageTwo.style.padding = '0 5px 15px 0px';
			
			var stageOne = document.getElementById('stage-1');
			stageOne.style.display = "none"

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'Размещение проекта';
		}
	}


	function toTT(elmnt) {
		if (window.innerWidth > 830) {
		    var toStageTHree = document.getElementById('stage-3');
			toStageTHree.classList.add('stage');
			toStageTHree.classList.remove('stage-3');
			toStageTHree.style.padding = '0px 5px 15px 0px';
			
			var stageTwo = document.getElementById('stage-2');
			var toStageTT = stageTwo.getElementsByClassName('container-radio-calc');
			var i;
			for (i = 0; i < toStageTT.length; i++) 
				{toStageTT[i].style.display = 'none';}

			elmnt.style.display = 'block';
			stageTwo.style.height = '30%';
			stageTwo.style.padding = '0px 5px 15px 0px';

			var calcLine = document.getElementById('calc-line');
			calcLine.classList.add('calc-line-2');

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'Желаемые сроки выполнения';
		}
		if (window.innerWidth < 831) {
		    var toStageTHree = document.getElementById('stage-3');
			toStageTHree.classList.add('stage');
			toStageTHree.classList.remove('stage-3');
			toStageTHree.style.padding = '0px 5px 15px 0px';
			toStageTHree.style.paddingLeft = '0px'
			
			var stageTwo = document.getElementById('stage-2');
			stageTwo.style.display = "none"

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'Желаемые сроки выполнения';
		}
	}

	function toET(elmnt) {	
		if (window.innerWidth > 830) {
			var stageThree = document.getElementById('stage-3');
			var toStageTT = stageThree.getElementsByClassName('container-radio-calc');
			var i;
			for (i = 0; i < toStageTT.length; i++) 
				{toStageTT[i].style.display = 'none';}

			elmnt.style.display = 'block';
			stageThree.style.height = '30%';
			stageThree.style.padding = '0px 5px 15px 0px';

			var btnEnd = document.getElementById('btn-end');
			btnEnd.classList.add('calc-middle-btn');
			btnEnd.classList.remove('calc-middle-btn-b');

			var pageCalc = document.getElementById('page-calc');
			pageCalc.style.display = 'block';

			var formm = document.getElementById('stage-3-form');
			formm.style.alignItems = 'center'

			var calcLine = document.getElementById('calc-line');
			calcLine.classList.add('calc-line-3');
			formm.style.paddingLeft = '0px'

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'All Done!';
		}
		if (window.innerWidth < 831) {
		    var stageThree = document.getElementById('stage-3');
			var toStageTT = stageThree.getElementsByClassName('container-radio-calc');
			var i;
			for (i = 0; i < toStageTT.length; i++) 
				{toStageTT[i].style.display = 'none';}

			var pageCalc = document.getElementById('page-calc');
			pageCalc.style.display = 'block';

			elmnt.style.display = 'block';
			stageThree.style.height = '30%';
			stageThree.style.padding = '0px 5px 15px 0px';

			var btnEnd = document.getElementById('btn-end');
			btnEnd.classList.add('calc-middle-btn');
			btnEnd.classList.remove('calc-middle-btn-b');

			var formm = document.getElementById('stage-3-form');
			formm.style.alignItems = 'center'
			formm.style.paddingLeft = '0px'

			var calcLine = document.getElementById('calc-line');
			calcLine.classList.add('calc-line-3');

			var lbl = document.getElementById('calc-text');
			lbl.innerHTML = 'All Done!';
		}
	}


var slickOptions = {
	vertical: true,
	centerMode: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 3,
	prevArrow:"<b class='arrow-up'>&#8593</b>",
	nextArrow:"<b class='arrow-down'>&#8595</b>"
}


$('.slick').slick(slickOptions)

$('.slick-current').addClass('slick-cur');
$('.slick-current img').addClass('bor-team');
$('.slick-current .staff-info-slogan').css('width', "400px");


$('.slick').on('init', function() {
  $('.slick-current').addClass('slick-cur');
}).on('beforeChange', function() {
  $(".itm").removeClass('slick-cur');
}).on('afterChange', function() {
  $('.slick-current').addClass('slick-cur');

   $('.slick-current img').addClass('bor-team');
}).on('beforeChange', function() {
  $(".itm img").removeClass('bor-team');
}).on('afterChange', function() {
  $('.slick-current img').addClass('bor-team');

  $('.slick-current .staff-info-slogan').css('width', "400px");
}).on('beforeChange', function() {
   $('.slick-current .staff-info-slogan').css('width', "200px");
}).on('afterChange', function() {
   $('.slick-current .staff-info-slogan').css('width', "400px");

});



function reSizez() {
	if (window.innerWidth < 480) {
		window.screen.lockOrientation("landscape-primary");
	}
}


// window.onresize = function() {
//     changeCon();
// }

// function changeCon() {
//     if (window.innerWidth < 830) {
//     }
//     else {
//     }    
// }


