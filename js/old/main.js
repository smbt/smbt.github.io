var tScale = 1.5;
const devMode = 0;
const subPages = ["project", "crew", "past_events", "media"];

const init = function() {
  initHome(devMode, subPages[2]);
  initPastEvents();
};

/**
 * initializes home-iceberg and general functionality
 * @param {*} devMode surpasses initial iceberg
 * @param {*} subPage first page to go to when in devMode
 */
const initHome = function(devMode, subPage) {
  // set iceberg size
  $("#icebergHome").css({ height: window.innerHeight / 1.75 });
  // fade in iceberg
  TweenMax.to("#icebergHome", 2, { opacity: 1, scale: 1.015 });

  var timeline = new TimelineMax();
  timeline.timeScale(tScale);

  if (!devMode) {
    // ICEBERG CLICK HANDLER
    $("#icebergHome").click(function() {
      timeline
        .to("#icebergHome", 1, { opacity: 0 })
        .to("#icebergHome", 0, { display: "none" })
        .to(".nav-item", 1, { opacity: 1 })
        .to(".navbar-toggler", 1, { opacity: 1 }, "-=1")
        .to("#navLine", 2, { width: "100%", opacity: 1 }, "-=.5")
        .to(".content", 0, { display: "none" })
        .to("#content-project", 0, { display: "block" })
        .to("#content-project", 1, { opacity: 1, top: "0.3em" })
        .to("#nav-link-project", 1, { color: "#eee" }, "-=1")
        .to("#icebergNav", 1.5, { opacity: 1 });
    });
  } else {
    timeline
      .from("#icebergHome", 0, { opacity: 0 })
      .to("#icebergHome", 0, { display: "none" })
      .to(".nav-item", 1, { opacity: 1 })
      .to(".navbar-toggler", 1, { opacity: 1 }, "-=1")
      .to("#navLine", 2, { width: "100%", opacity: 1 }, "-=.5")
      .to(".content", 0, { display: "none" })
      .to("#content-" + subPage, 0, { display: "block" })
      .to("#content-" + subPage, 1, { opacity: 1, top: "0.3em" }) // use x and y! (faster )
      .to("#nav-link-" + subPage, 1, { color: "#eee" }, "-=1")
      .to("#icebergNav", 1.5, { opacity: 1, top: "0px" });
    // timeline
    //   .to("#icebergHome", 0, { opacity: 0 })
    //   .to("#icebergHome", 0, { display: "none" })
    //   .to(".nav-item", 1, { opacity: 1 })
    //   .to(".navbar-toggler", 1, { opacity: 1 }, "-=1")
    //   .to("#navLine", 2, { width: "100%", opacity: 1 }, "-=.5")
    //   .to(".content", 0, { display: "none" })
    //   .to("#content-" + subPage, 0, { display: "block" })
    //   .to("#content-" + subPage, 1, { opacity: 1, top: "0.3em" })
    //   .to("#nav-link-" + subPage, 1, { color: "#eee" }, "-=1")
    //   .to("#icebergNav", 1.5, { opacity: 1, top: "0px" });
  }

  // NAV LINK CLICK HANDLER
  $("a.nav-link").click(function(e) {
    e.preventDefault();
    const $target = $(e.target);
    const targetPage = $target.attr("target-page");
    $("#navbarNav").collapse("hide");

    var timeline = new TimelineMax();
    timeline.timeScale(tScale);
    timeline
      .to(".nav-link", 0.5, { color: "#888" }, "-=0.5")
      .to($target, 0.5, { color: "#eee" })
      .to(".content", 0.5, { opacity: 0 })
      .to(".content", 0, { display: "none" })
      .to("#content-" + targetPage, 0, { display: "block" })
      .to("#content-" + targetPage, 2, {
        opacity: 1
      });
  });

  // NAV ICEBERG CLICK HANDLER
  $("#icebergNav").click(function(e) {
    e.preventDefault();
    $("#navbarNav").collapse("hide");

    $("#navLine").css({ float: "none" });

    var timeline = new TimelineMax();
    timeline.timeScale(tScale);
    timeline
      .to(".nav-item", 1, { opacity: 0 })
      .to("#navLine", 1, { width: 0 }, "-=.2")
      .to(".content", 1, { opacity: 0 }, "-=.2")
      .to(".navbar-toggler", 0, { opacity: 0 }, "-=.2")
      .to("#icebergNav", 1, { opacity: 0 }, "-=.2")
      .to("#icebergHome", 0, { display: "block" })
      .to("#icebergHome", 2, { opacity: 1, scale: 1.015 })
      .addCallback(function() {
        $("#navLine").css({ float: "right", opacity: 0 });
        $("#mainNav").css({ opacity: 1 });
      });
  });
};

init();
