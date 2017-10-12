// Add zero in front of numbers < 10
export function zeroPad(i) {
  return i <= 9 ? "0"+i : i;
}
