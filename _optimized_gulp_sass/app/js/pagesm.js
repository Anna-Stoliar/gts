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
  }
  if (scrollPos >= fhome && scrollPos < fhome + fservices) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #4DA0B0, #D39D38)";
  } 
  if (scrollPos >= fhome + fservices && scrollPos < fhome + fservices + fpros) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #FCB045 0%, #FD1D1D 30%,  #AE1CE1 100%)";
  }
  if (scrollPos >= fhome + fservices + fpros && scrollPos < fhome + fservices + fpros + ffaq) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #6BE585, #E72842)";
  } 
  if (scrollPos >= fhome + fservices + fpros + ffaq && scrollPos < fhome + fservices + fpros + ffaq + fteam) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #544A7D, #FFD452)";
  } 
  if (scrollPos >= fhome + fservices + fpros + ffaq + fteam && scrollPos < fhome + fservices + fpros + ffaq + fteam + fcom) {
    document.getElementById("header-sm").style.background = "linear-gradient(to right, #FF4B2B, #FF416C)";
  } 


  scrollFunction();
}


// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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