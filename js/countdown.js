	function updateTimer(deadline) {
  var time = deadline - new Date();
  return {
    days: Math.floor(time / (1000 * 60 * 60 * 24)),
    hours: Math.floor((time / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60),
    total: time
  };
}

function animateClock(span) {
  span.className = "animate__flipOutY";
  setTimeout(function () {
    span.className = "";
  }, 1000);
}

function startTimer(id, deadline) {
  var timerInterval = setInterval(function () {
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML =
      "<span>" +
      timer.days +
      "</span>" +
      "<span>" +
      timer.hours +
      "</span>" +
      "<span>" +
      timer.minutes +
      "</span>" +
      "<span>" +
      timer.seconds +
      "</span>";

    //animation
    var spans = clock.getElementsByTagName("span");
    animateClock(spans[3]);
    if (timer.seconds == 59) animateClock(spans[2]);
    if (timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    if (timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59)
      animateClock(spans[0]);

    //check for end of time

    if (timer.total < 1) {
      clearInterval(timerInterval);
      clock.innerHTML =
        "<span>0</span><span>0</span><span>0</span><span>0</span>";
    }
  }, 1000);
}

window.onload = function () {
  var deadline = new Date("February 06, 2021 12:00:00");
  startTimer("clock", deadline);
};
