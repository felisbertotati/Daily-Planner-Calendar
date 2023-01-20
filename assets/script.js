// Display the current day at the top of the calendar when a user opens the planner.
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd,  MMMM Do"));

// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = {
  start: 9,
  finish: 17,
};
function timeblocks() {
  for (var i = businessHours.start; i <= businessHours.finish; i++) {
    var containerEl = $("<div>");

    //added rows
    containerEl.addClass("row border border-secondary sm-4 ");

    //append containerE1 to main container thats on the htm;
    $(".container").append(containerEl);
    //add dynamically class div
    var timeblocksEl = $("<div>");
    var textEntry = $("<div>");
    var button = $("<div>");

    timeblocksEl.text(businessHours[i]);
    //console.log(timeblocksEl);

    //added columns
    timeblocksEl
      .addClass(
        "col time-block  description boder border-secondary bg-warning "
      )
      .text(moment(i, "h").format("h A"));
    textEntry.addClass("col-6 bg-primary ");
    button.addClass("col bg-danger");

    containerEl.append(timeblocksEl);
    containerEl.append(textEntry);
    containerEl.append(button);
    //append timeblocksE1 to containerE1
  }
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function taskTimeclock() {
  // Allow a user to enter an event when they click a timeblock.
}
// Save the event in local storage when the save button is clicked in that timeblock.
function saveEvent() {}
// Persist events between refreshes of a page.
function PersistEvent() {}

timeblocks();
