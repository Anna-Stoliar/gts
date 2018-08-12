$(function() {

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

	$('#fullpage').fullpage();

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

//for tabs security page
function openTabHome(cityName,elmnt) {
    var i, tabcontentS, tablinksS;

    tabcontentS = document.getElementsByClassName("tabcontent-security");
    for (i = 0; i < tabcontentS.length; i++) {
        tabcontentS[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

    tablinksS = document.getElementsByClassName("tablink-security");
    for (i = 0; i < tablinksS.length; i++) {
        tablinksS[i].classList.remove("security-tab-active");
    }

    elmnt.classList.add("security-tab-active");
}

//open one tab by default
document.getElementById("security-open-link").click();



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






// // scroll
// var position = $(window).scrollTop(); 
// $(window).scroll(function() {

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
// 		}

// });



