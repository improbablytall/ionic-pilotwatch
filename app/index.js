import clock from "clock";
import document from "document";

import * as util from "../common/utils";
import * as moment from "../common/moment";

// Update the clock every minute
clock.granularity = "seconds";
var zuluOffset = 1;

// Get a handle on the <text> element
let mainClock = document.getElementById("mainClock");
let zuluClock = document.getElementById("zuluClock");
let scratchPad = document.getElementById("scratchPad");
// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());
  let secs = util.zeroPad(today.getSeconds());
  
  let zuluHours = hours-zuluOffset

  mainClock.innerText = `${hours}:${mins}:${secs}`;
  zuluClock.innerText = `${zuluHours}:${mins}:${secs}`;
  
}
// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();
