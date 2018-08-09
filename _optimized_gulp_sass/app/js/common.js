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

