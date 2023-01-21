// Display the current day at the top of the calendar when a user opens the planner.
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd,  MMMM Do, YYYY"));

// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = {
  start: 9,
  finish: 17,
};
function timeblocks() {
  for (var i = businessHours.start; i <= businessHours.finish; i++) {
    var containerEl = $("<div>");

    //added rows
    containerEl.addClass("row d-flex justify-content-center");

    //append containerE1 to main container thats on the htm;
    $(".container").append(containerEl);

    //add dynamically class div
    var timeblocksEl = $("<div>");
    var textEntry = $("<div>");
    var save = $("<div>");
    var saveButton = $(`<i class="fas fa-save" ></i>`);

    timeblocksEl.text(businessHours[i]);
    //console.log(timeblocksEl);

    //added columns timeblock it is the time column, I use moment so that user see hour and if it is AM/PM
    timeblocksEl
      .addClass(
        "col-1  time-block  description d-flex align-itens-center justify-content-center pt-4 border border-secondary btn-save "
      )
      .text(moment(i, "h").format("h A"));
    //middle column, where user will type
    textEntry.addClass("col-8 bg-primary ");
    //column save button
    save.addClass(
      "col-3 col-sm-1 col-md-1 col-xl-1 pl-0 saveBtn d-flex align-itens-center justify-content-center pt-4"
    );

    containerEl.append(timeblocksEl);
    containerEl.append(textEntry);
    containerEl.append(save);
    save.append(saveButton);
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
