/*
 **   RelivePast Content.js
 **   Grabs the content from the json and returns data based on the current month.
 **   Special suprise for XMas too :)
 */

import content from "./content.json" assert { type: "json" };

export function getContent() {
  let day = new Date().getDate();

  let currentMonth = new Date()
    .toLocaleString("en-US", { month: "long" })
    .toLowerCase();

  let contentMonth = Object.keys(content);

  if (day === 25 && currentMonth === "december") {
    let month = content["christmas"];

    return month;
  } else {
    return content[currentMonth];
  }
}
