var Browser = require("zombie");
var assert = require("assert");

// Load the page from localhost
browser = new Browser();
browser.waitFor = 15;
browser.visit("http://localhost:8000/test.html");

function mapLoaded(window) {
  return window.document.querySelector("#passes");
}
browser.wait(mapLoaded, function() {
  // Page has a #map element now
    console.log("hello");
    console.log(browser.html("#passes em"));

});