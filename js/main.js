var tScale = 1;
var timeline = new TimelineMax();
timeline.timeScale(tScale);

var openMenu = function() {
  $(".bar-menu").addClass("bar-menu-open");
  timeline.from(".menu-links-container", 0.2, { height: 0 });
};

var closeMenu = function() {
  timeline
    .to(".menu-links-container", 0.2, { height: 0 })
    .addCallback(function() {
      $(".bar-menu").removeClass("bar-menu-open");
    });
};

$(".menu-icon-threelines").click(openMenu);

$(".menu-links a").click(closeMenu);
