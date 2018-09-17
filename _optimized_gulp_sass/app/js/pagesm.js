$(document).ready(function() {
	if (window.innerWidth > 560) {
		window.location.href = "index.html";
	}
});

$(window).resize(function(){
	if (window.innerWidth < 561) {
		window.location.href = "pagesm.html";
	}
	if (window.innerWidth > 560) {
		window.location.href = "index.html";
	}
});

$("#preloadsm").css( "display", "none" );


//footer

var fhome = document.getElementById("home").offsetHeight;
var fservices = document.getElementById("services").offsetHeight;
var fpros = document.getElementById("pros").offsetHeight;
var ffaq = document.getElementById("faq").offsetHeight;
var fteam = document.getElementById("team").offsetHeight;
var fcom = document.getElementById("com").offsetHeight;

window.onscroll = function() {
	var scrollPos = window.pageYOffset;
  if (scrollPos < fhome) {
    document.getElementById("header-sm").style.background = "linear-gradient(to top right, #24013A, #E11CB6)";
    $(".sm-bg-home").css( "position", "fixed");
    $(".sm-bg-services").css( "position", "absolute");
  }
  if (scrollPos >= fhome && scrollPos < fhome + fservices) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #4DA0B0, #D39D38)";
    $(".sm-bg-services").css( "position", "fixed");
    $(".sm-bg-home").css( "position", "absolute");
    $(".sm-bg-pros").css( "position", "absolute");
  } 
  if (scrollPos >= fhome + fservices && scrollPos < fhome + fservices + fpros) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #FCB045 0%, #FD1D1D 30%,  #AE1CE1 100%)";
    $(".sm-bg-services").css( "position", "absolute");
    $(".sm-bg-pros").css( "position", "fixed");
    $(".sm-bg-faq").css( "position", "absolute");
  }
  if (scrollPos >= fhome + fservices + fpros && scrollPos < fhome + fservices + fpros + ffaq) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #6BE585, #E72842)";
    $(".sm-bg-team").css( "position", "absolute");
    $(".sm-bg-pros").css( "position", "absolute");
    $(".sm-bg-faq").css( "position", "fixed");
  } 
  if (scrollPos >= fhome + fservices + fpros + ffaq && scrollPos < fhome + fservices + fpros + ffaq + fteam) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #544A7D, #FFD452)";
    $(".sm-bg-faq").css( "position", "absolute");
    $(".sm-bg-com").css( "position", "absolute");
    $(".sm-bg-team").css( "position", "fixed");
  } 
  if (scrollPos >= fhome + fservices + fpros + ffaq + fteam && scrollPos < fhome + fservices + fpros + ffaq + fteam + fcom) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #FF4B2B, #FF416C)";
    $(".sm-bg-team").css( "position", "absolute");
    $(".sm-bg-com").css( "position", "fixed");
  } 


  scrollFunction();
}

var ps1 = fhome + fservices;
var ps2 = fhome + fservices + fpros;
var ps3 = fhome + fservices + fpros + ffaq;
var ps4 = fhome + fservices + fpros + ffaq + fteam;
var ps5 = fhome + fservices + fpros + ffaq + fteam + fcom;




// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    if (document.body.scrollTop > fhome || document.documentElement.scrollTop > fhome) {
        document.getElementById("sTopBtn").style.display = "block";

    } else {
        document.getElementById("sTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function oMenu() {
  document.getElementById("menu-sm").style.height = "100%";
}

function cMenu() {
  document.getElementById("menu-sm").style.height = "0%";
}