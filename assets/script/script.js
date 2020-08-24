$(document).ready(function () {
    var currentDate = moment();
  
    $(".saveBtn").on("click", function () {
        var event = $(this).siblings(".description").val();
        var key = $(this).parent().attr('id');
        localStorage.setItem(`${key}`, `${event}`);
        loadEvent(key);
        console.log(key);
        setColor();
    });
    
    function setColor() {
            var currentHour = currentDate.format("H");
            for (var i = 9; i <= 17; i++) {
                if (i < currentHour) {
                    $(`#${i}`).children(".description").addClass("past");
                }
                else if (i > currentHour) {
                    $(`#${i}`).children(".description").addClass("future");
                }
                else {
                    $(`#${i}`).children(".description").addClass("present");
                }
            
            }
       
       
    }
    function loadEvent(timeBlock) {
        var formatedDate = currentDate.format("dddd, MMMM Do YYYY");
        $("#currentDay").html(formatedDate);
        if (typeof (Storage) !== "undefined") {
            var timeEvent = localStorage.getItem(`${timeBlock}`);
            if (timeEvent === null) {
                $(`#${timeBlock}`).children(".description").val("");
            }
            else {
                $(`#${timeBlock}`).children(".description").val(timeEvent);
              }
        }
        else {//notify user
            alert("Sorry, your browser does not support Web Storage. Try using a more uptodate browser...");
        }
    }
    
    setColor();
    loadEvent(9);
    loadEvent(10);
    loadEvent(11);
    loadEvent(12);
    loadEvent(13);
    loadEvent(14);
    loadEvent(15);
    loadEvent(16);
    loadEvent(17);

});