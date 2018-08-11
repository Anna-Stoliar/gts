$(function() {

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//for opening modals on home page
	$("#tabs").click(function() {
		$(".page-2").toggle();
	});

	$("#burger").click(function() {
		$(".page-3").toggle();
	});
	$("#dots").click(function() {
		$(".page-4").toggle();
	});
	$("#phone").click(function() {
		$(".page-5").toggle();
	});


	$("a[href=#callback]").click(function() {
		$("#callback .formname").val($(this).data("form"));
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


});


//for tabs in modal 3(left bottom one)
function openTabHome(cityName,elmnt) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("p4-active");
    }

    elmnt.classList.add("p4-active");
}
//open one tab by default
document.getElementById("open-link").click();
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-2");
		var tabs = $("#tabs");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !tabs.is(e.target) && tabs.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-3");
		var burger = $("#burger");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !burger.is(e.target) && burger.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-4");
		var dots = $("#dots");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !dots.is(e.target) && dots.has(e.target).length === 0) {
			div.hide();
		}
	});
});
jQuery(function($){
	$(document).mouseup(function (e){
		var div = $(".page-5");
		var phone = $("#phone");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0 && !phone.is(e.target) && phone.has(e.target).length === 0) {
			div.hide();
		}
	});
});

// ////////////////////////////////////////////////////////////////////////////////
// var showPage = (function () {
//   var  _useHash, _scrollX, _scrollY, _nodeX, _nodeY, _itFrame, _scrollId = -1, _Page,
//        /*
//        * nDuration: the duration in milliseconds of each frame
//        * nFrames: number of frames for each scroll
//        */
//        nDuration = 500, nFrames = 1;

//   function _next () {
//     if (_itFrame > nFrames) { clearInterval(_scrollId); _scrollId = -1; return; }
//     _isBot = true;
//     document.documentElement.scrollTop = Math.round(_scrollY + (_nodeY - _scrollY) * _itFrame / nFrames);
//     document.documentElement.scrollLeft = Math.round(_scrollX + (_nodeX - _scrollX) * _itFrame / nFrames);
//     if (_useHash && _itFrame === nFrames) { location.hash = _Page; }
//     _itFrame++;
//   }

//   function _chkOwner () {
//   	_isBot = true;
//     if (_isBot) { _isBot = false; return; }
//     if (_scrollId > -1) { clearInterval(_scrollId); _scrollId = -1; }
//   }

//   if (window.addEventListener) { window.addEventListener("scroll", _chkOwner, false); }
//   else if (window.attachEvent) { window.attachEvent("onscroll", _chkOwner); }

//   return function (sPage, bUseHash) {
//     _scrollY = document.documentElement.scrollTop;
//     _scrollX = document.documentElement.scrollLeft;
//     _Page = sPage;
//     _useHash = arguments.length === 1 || bUseHash;
//     for (
//       var nLeft = 0, nTop = 0, oNode = document.querySelector(sPage);
//       oNode;
//       nLeft += oNode.offsetLeft, nTop += oNode.offsetTop, oNode = oNode.offsetParent
//     );
//     _nodeX = nLeft, _nodeY = nTop, _itFrame = 1;
//     if (_scrollId === -1) { _scrollId = setInterval(_next, Math.round(nDuration / nFrames)); }
//   };
// })();
// ////////////////////////////////////////////////////////////////////////////////
// var position = $(window).scrollTop(); 
// $(window).scroll(function() {

// 	if($(".home:hover").length != 0){
// 		var scroll = $(window).scrollTop();
// 	    if(scroll > position) {
// 	        console.log('scrollDown');
// 	    } else {
// 	         console.log('scrollUp');
// 	         showPage("services");
// 	    }
// 	    position = scroll;
// 	}

// 	if($(".services:hover").length != 0){
// 		var scroll = $(window).scrollTop();
// 	    if(scroll > position) {
// 	        console.log('scrollDown');
// 	        showPage("home");
// 	    } else {
// 	         console.log('scrollUp');
// 	         showPage("pros");
// 	    }
// 	    position = scroll;
// 		}

// 	if($(".pros:hover").length != 0){
// 		var scroll = $(window).scrollTop();
// 	    if(scroll > position) {
// 	        console.log('scrollDown');
// 	        showPage("services");
// 	    } else {
// 	         console.log('scrollUp');
// 	    }
// 	    position = scroll;
// 		}
// });






// scroll
var position = $(window).scrollTop(); 
$(window).scroll(function() {

	if($(".home:hover").length != 0){
		$( ".services" ).scrollTop(function() {
			$( ".services" ).css( "margin-top", "-100vh" );
			$( ".services" ).css( "transition", "margin-top ease 3s" );
		});
	}

	if($(".services:hover").length != 0){
		var scroll = $(window).scrollTop();
	    if(scroll > position) {
	        console.log('scrollDown');
	        $( ".pros" ).scrollTop(function() {
			$( ".services .content" ).css( "position", "fixed" );
			$( ".pros" ).css( "margin-top", "-100vh" );
			$( ".pros" ).css( "transition", "margin-top ease 3s" );
		});

	    } else {
	         console.log('scrollUp');
	         $( ".services" ).scrollTop(function() {
			$( ".services .content" ).css( "position", "fixed" );
			$( ".services" ).css( "margin-top", "0vh" );
			$( ".services" ).css( "transition", "margin-top ease 3s" );
			$( ".pros" ).css( "margin-top", "0vh" );
		});

	    }
	    position = scroll;
		}
	if($(".pros:hover").length != 0){
		var scroll = $(window).scrollTop();
	    if(scroll > position) {
	        console.log('scrollDown');
	        // add code for next element
	    } else {
	         console.log('scrollUp');
	         $( ".pros" ).scrollTop(function() {
			$( ".pros .content" ).css( "position", "fixed" );
			$( ".pros" ).css( "margin-top", "0vh" );
			$( ".pros" ).css( "transition", "margin-top ease 3s" );
			$( ".services" ).css( "margin-top", "-100vh" );
		});

	    }
	    position = scroll;
		}

});




// should start at 0

