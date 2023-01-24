// Display the current day at the top of the calendar when a user opens the planner.
var currentDayEl = moment();
$("#currentDay").text(currentDayEl.format("dddd,  MMMM Do, YYYY"));

// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = {
  start: 9,
  finish: 17,
};

//var local storage

let saveEventEl = JSON.parse(localStorage.getItem("saveEventEl")) || [];

function timeblocks() {
  for (var time = businessHours.start; time <= businessHours.finish; time++) {
    var containerEl = $("<div>");

    containerEl.attr("data-hour", time);
    //added rows
    containerEl.addClass(
      "time-block row description d-flex justify-content-center"
    );

    //append containerE1 to main container thats on the htm;
    $(".container").append(containerEl);

    //add dynamically class div
    var taskBlock = $("<div>");

    // Allow a user to enter an event when they click a timeblock.
    var textEntry = $("<textarea>");
    var save = $("<div>");
    var saveButton = $(`<i class="fas fa-save" ></i>`);

    saveButton.on("click", saveEvent);

    taskBlock.text(businessHours[time]);

    //console.log(timeblocksEl);

    //added columns timeblock it is the time column, I use moment so that user see hour and if it is AM/PM
    taskBlock
      .addClass(
        "col-1 col-sm-1 col-md-1 col-xl-1 hour d-flex align-itens-center justify-content-center pt-4 "
      )
      .text(moment(time, "h").format("h A"));
    //middle column, where user will type
    textEntry.addClass("col-10 ");
    //column save button
    save.addClass(
      "col-3 col-sm-1 col-md-1 col-xl-1 pl-0 saveBtn d-flex align-itens-center justify-content-center pt-4"
    );

    containerEl.append(taskBlock);
    containerEl.append(textEntry);
    containerEl.append(save);
    save.append(saveButton);

    //save text and hour in local storage
    var localsEl = JSON.parse(localStorage.getItem("saveEventEl")) || [];

    for (var i = 0; i < localsEl.length; i++) {
      if (time == localsEl[i].hour) {
        textEntry.text(localsEl[i].task);
      } else {
        textEntry.innerHTML = "";
      }
    }
  }
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function taskTimeTask() {
  //using moment API to track hours
  var currentHour = moment().hours();

  $(`.time-block`).each(function () {
    var timeBlockHour = parseInt($(this).attr("data-hour"), 10);
    //I had to remove class and add again
    $(this).removeClass("past present future");
    // if the hour attribute is less the current hour
    if (timeBlockHour < currentHour) {
      //if past hour will be grey
      $(this).addClass("past");
      //else if it is present it will be red
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
      //else it will be green
    } else {
      $(this).addClass("future");
    }
  });
}
// Save the event in local storage when the save button is clicked in that timeblock.
function saveEvent(event) {
  //this function I will get the textEntery attributte so with that user can save is daily tasks
  var taskEl = $(event.target).parent().parent().children().eq(1).val();
  // in this one I will get the time
  var hourEl = $(event.target).parent().parent().attr("data-hour");

  //object of task and hour
  var e = {
    task: taskEl,
    hour: hourEl,
  };

  //push my object
  saveEventEl.push(e);

  //after i can add in the local storage

  localStorage.setItem("saveEventEl", JSON.stringify(saveEventEl));
}

timeblocks();
taskTimeTask();
