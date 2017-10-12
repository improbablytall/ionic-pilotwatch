import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
var localClock = document.getElementById("localClock");
var zuluClock = document.getElementById("zuluClock");
var homeClock = document.getElementById("homeClock");
var homeClockOffset = document.getElementById("homeClockOffset");
var date = document.getElementById("date");

//Get Offset from System time to UTC
var timeNow = new Date();
var utcOffset = timeNow.getHours()-timeNow.getUTCHours();
var homeOffsetString;
if (utcOffset > 0) {
  homeOffsetString = `(UTC+${utcOffset})`;
}else if (utcOffset < 0) {
  homeOffsetString = `(UTC${utcOffset})`;
}
homeClockOffset.innerText = homeOffsetString;
// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  //device time
  let hours = util.zeroPad(today.getHours());
  let mins = util.zeroPad(today.getMinutes());
  //let secs = util.zeroPad(today.getSeconds());
  //utc time
  let utc_h = util.zeroPad(today.getUTCHours());
  let utc_m = util.zeroPad(today.getUTCMinutes());
  let utc_s = util.zeroPad(today.getUTCSeconds());
  let utc_day = util.zeroPad(today.getUTCDay());
  let utc_month = util.zeroPad(today.getUTCMonth());
  let utc_year = today.getUTCFullYear();
  //home tz time
  

  localClock.innerText = `${hours}:${mins}`;
  homeClock.innerText = `${hours}:${mins}`;
  zuluClock.innerText = `${utc_h}:${utc_m}:${utc_s} Z`;
  date.innerText = `${utc_day}/${utc_month}/${utc_year}`;
  
}

// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();
