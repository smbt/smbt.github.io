/**
 * initializes the page "past_events"
 */
const initPastEvents = function() {
  // add click handler for year and event buttons
  $(".past_events-link-year").click(past_eventsYearClick);
  $(".past_events-link-event").click(past_eventsEventClick);
};

/**
 * callback for click on
 * @param {*} event
 */
const past_eventsYearClick = function(e) {
  $target = $(e.target);
  const year = $target.attr("year");
  const collapsed = $target.attr("collapsed");

  if (collapsed == 1) {
    TweenMax.to(".past_events-link-event." + year, 0, { display: "inline-block" });
    TweenMax.staggerTo(".past_events-link-event." + year, 1, { opacity: 1 }, 0.2);
    $target.attr("collapsed", 0);
  } else {
    TweenMax.to(".past_events-link-event." + year, 0, { display: "none" });
    TweenMax.to(".past_events-link-event." + year, 0, { opacity: 0 });
    $target.attr("collapsed", 1);
  }
};

const past_eventsEventClick = function(e) {
  $target = $(e.target);
  eventId = $target.attr("event");

  var timeline = new TimelineMax();
  timeline.timeScale(tScale);
  timeline
    .to(".gallery", 0.5, { opacity: 0 })
    .to(".gallery", 0, { display: "none" })
    .to("#gallery-" + eventId, 0, { display: "block" })
    .to("#gallery-" + eventId, 0.5, { opacity: 1, scale: 0.99 });
};
