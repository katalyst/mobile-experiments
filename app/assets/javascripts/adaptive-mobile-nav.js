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

$(function() {
  $(".layout--switch").on("click", function() {
    $(this).closest(".layout").toggleClass("layout-open");
    return false;
  });
});

$(function() {
  $(".nav-mobile").each(function() {
    var $root = $(this);
    $root.find("> li > ul").hide();
    $(this).find("> li > a").on("click", function() {
      $root.find("> li > ul").slideUp();
      $(this).next("ul").slideToggle();
      return false;
    });
  });
});
