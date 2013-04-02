$(function() {

  var $html = $("html");
  var $body = $("body");

  var scrollTop = function() {
    return Math.max($body.scrollTop(), $html.scrollTop());
  };

  $(".header-sticky").each(function() {

    var $element = $(this);
    var $parent = $element.parent();
    var $placeholder = $('<div/>');

    var defaultUpdate;
    var scrollingUpdate;

    $element.before($placeholder);
    $placeholder.hide();

    defaultUpdate = function() {
      if (scrollTop()-$element.offset().top > 0) {
        $placeholder.height($element.height());
        $placeholder.show();
        $element.addClass("header-sticky-stuck");
        $(window).off("scroll resize touchmove gesturechange").on("scroll resize touchmove gesturechange", scrollingUpdate);
      }
    };

    scrollingUpdate = function() {
      if (scrollTop()-$placeholder.offset().top < 0) {
        $placeholder.hide();
        $element.removeClass("header-sticky-stuck");
        $(window).off("scroll resize touchmove gesturechange").on("scroll resize touchmove gesturechange", defaultUpdate);
      }
    };

    $(window).on("scroll resize touchmove gesturechange", defaultUpdate);

  });

  $(window).trigger("scroll");

});
