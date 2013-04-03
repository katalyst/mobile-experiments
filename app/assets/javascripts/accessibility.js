// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

// Force internal links to focus on their target when clicked.
$(function() {
  $("body").on("click", "a[href^='#']:not(a[href='#'])", function() {
    $($(this).attr("href")).focus();
  });
});

// Build clickable nav.
$(function() {
  $(".nav-primary li > * + ul").prev().each(function() {
    var $link = $(this);
    var $button = $("<button/>");

    $button.append($link.contents());
    $link.after($button);
    $link.remove();

    $button.next("ul").hide();

    $button.on("click", function() {
      $button.next("ul").toggle().find("a:visible").first().focus();
    });
  });
});
