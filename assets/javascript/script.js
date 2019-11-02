$(document).ready(function () {

var buttonContent = ["ferrari", "porsche", "aston martin", "lamborghini"];

for (var i=0; i <buttonContent.length; i++){

    $(".buttons").append("<button onclick=\"callapi('" + buttonContent[i] + "')\">" + buttonContent[i] + "</button>");

}













});

$(".addGiffy").click(function () {

    $(".buttons").append("<button onclick=\"callapi('" + buttonContent[i] + "')\">" + buttonContent[i] + "</button>");

});

function callapi(car) {
    //var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+car+"&api_key=zgzUEeG2OAP1qW04NfZiNbZZv8oilize&limit=10");
   // xhr.done(function(data) { console.log("success got data", data); });

    $.ajax({
        url:"http://api.giphy.com/v1/gifs/search?q="+car+"&api_key=zgzUEeG2OAP1qW04NfZiNbZZv8oilize&limit=10",
        method: "GET"
      }).then(function(response) {
        //console.log("success got data", response);
        for (var gif of response.data) {
            console.log(gif);
            $(".buttons").append("<img src=\"" +gif.url+"\"/>");
            //  https://giphy.com/gifs/lamborghini-ey5ehGCEmFcxW?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=
        }
      }); 
}
