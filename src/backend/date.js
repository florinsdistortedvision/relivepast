/*
 **  RelivePast Date.js
 **  Simple function to display the current date but with 2012 as hardcoded year and formatted to fit the mock-ups.
 */

export function rpDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString("en-US", { month: "short" });
  return "Today is " + day + " " + month + " 2012";
}
