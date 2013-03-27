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


$(function() {
  $(".nav-horizontal").each(function() {

    var $nav = $(this);
    var $items = $nav.find("> ul > li");
    var $links = $items.find("> a");

    var itemShow;
    var itemMouseEnter;
    var itemMouseLeave;
    var itemIntentionalMouseEnter;
    var itemIntentionalMouseLeave;
    var linkClickShow;
    var linkClickHide;
    var reset;

    itemShow = function() {
      var $item = $(this);

      reset();
      $item.addClass("nav-horizontal--selected-item");

      return false;
    };

    itemMouseEnter = function() {
      var $item = $(this);
      var timeout;

      timeout = setTimeout(function() {
        $item.trigger("intentionalmouseenter");
      }, 500);

      $item.on("mouseleave", function() {
        clearTimeout(timeout);
      });
    };

    itemMouseLeave = function() {
      var $item = $(this);
      var timeout;

      timeout = setTimeout(function() {
        $item.trigger("intentionalmouseleave");
      }, 500);

      $item.on("mouseenter", function() {
        clearTimeout(timeout);
      });
    };

    itemIntentionalMouseEnter = function() {
      var $item = $(this);
      var $link = $item.find("> a");

      $item.trigger("show").off("intentionalmouseenter").on("intentionalmouseleave", itemIntentionalMouseLeave);
    };

    itemIntentionalMouseLeave = function() {
      var $item = $(this);
      var $link = $item.find("> a");

      reset();
    };

    linkClickShow = function() {
      var $link = $(this);
      var $item = $link.parent();

      $item.trigger("show").off("intentionalmouseenter intentionalmouseleave mouseenter mouseleave");
      $link.off("click").on("click", linkClickHide);

      return false;
    };

    linkClickHide = function() {
      reset();
      return false;
    };

    reset = function() {
      $items.off("intentionalmouseenter intentionalmouseleave show mouseenter mouseleave")
      $items.on("intentionalmouseenter", itemIntentionalMouseEnter);
      $items.on("show", itemShow);
      $items.on("mouseenter", itemMouseEnter);
      $items.on("mouseleave", itemMouseLeave);
      $items.removeClass("nav-horizontal--selected-item");
      $links.off("click").on("click", linkClickShow);
    };

    // Prevent clicks on the second level a navigation from propagating up to
    // the HTML element.
    $nav.on("click", "> ul > li > ul", function(event) {
      event.stopPropagation();
    });

    // Any clicks outside the nav should close the second level.
    $("html").on("click", function() {
      reset();
    });

    // Setup event listeners.
    reset();

  });
});
