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
