var topArrow = document.getElementById('#top');
var widget = document.getElementById("side-nav");

$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() > 0) {
            // $("#top").css("color", "#333");
            $("#side-nav").css("background-color", "rgba(61, 61, 61, 0.6)");
            $("#top").css("color", "rgba(98, 98, 98, 1)");
        } else if ($win.scrollTop() == 0) {
          $("#top").css("color", "rgba(99, 107, 116, 0.5)");
          $("#side-nav").css("background-color", "rgba(99, 107, 116, 0.3)");
        }
    });
});


function scrollUp() { window.scroll({top: 0, left: 0, behavior: 'smooth'}); }

$(function() {
  $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });

  $("#proj-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
  });

  $("#skills-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 2000);
  });

  $("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
  });
});
