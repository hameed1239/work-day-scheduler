$(document).ready(function () {
    var currentDate = moment();
    var formatedDate = currentDate.format("dddd, MMMM Do YYYY")
    console.log(formatedDate);
    var current = "current";
    $(`#${current}Day`).html(formatedDate);
    

    


});