import clock from "clock";
import document from "document";

import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
let mainClock = document.getElementById("mainClock");
let zuluClock = document.getElementById("zuluClock");
let scratchPad = document.getElementById("scratchPad");

var zuluOffset = 1; //offset from Zulu to Local

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());
  let secs = util.zeroPad(today.getSeconds());
  
  let zuluHours = hours - zuluOffset;

  mainClock.innerText = `${hours}:${mins}:${secs}`;
  zuluClock.innerText = `${zuluHours}:${mins}:${secs}z`;
  
}

// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();
