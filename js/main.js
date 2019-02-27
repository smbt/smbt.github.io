var tScale = 1;
var menuOpen = 0;
var timeline = new TimelineMax();
timeline.timeScale(tScale);

var openMenu = function() {
  timeline
    .to(".hamburger-icon", 0, { backgroundImage: "url(../img/cross.png)" })
    .to(".menu-links-container", 0, { display: "block" })
    .from(".menu-links-container", 0.2, { height: 0 })
    .staggerFrom(".menu-links a", 0.2, { opacity: 0 }, 0.05, "-=0.15");
  menuOpen = 1;
};

var closeMenu = function() {
  timeline
    .to(".hamburger-icon", 0, { backgroundImage: "url(../img/threelines.png)" })
    .to(".menu-links a", 0, { opacity: 0 })
    .to(".menu-links-container", 0.2, { height: 0 })
    .to(".menu-links-container", 0, { display: "none" })
    .to(".menu-links-container", 0, { height: "auto" })
    .to(".menu-links a", 0, { opacity: 1 });
  menuOpen = 0;
};

$(".hamburger-icon").click(function() {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

$(".menu-links a").click(closeMenu);
