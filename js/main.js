$(".menu-icon-threelines").click(function() {
  $(".bar-menu").addClass("bar-menu-open");
});

$(".menu-links a").click(function() {
  $(".bar-menu").removeClass("bar-menu-open");
});
