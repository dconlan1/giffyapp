$(document).ready(function () {

var buttonContent = ["ferrari", "porsche", "aston martin", "lamborghini"];

for (var i=0; i <buttonContent.length; i++){

    $(".buttons").append("<button onclick=\"callapi('" + buttonContent[i] + "')\">" + buttonContent[i] + "</button>");

}
});


$("#addGiffy").click(function () {
    $(".buttons").append("<button onclick=\"callapi('" + $(".input").val() + "')\">" + $(".input").val() + "</button>");
});

function callapi(car) {
     var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+car+"&api_key=zgzUEeG2OAP1qW04NfZiNbZZv8oilize&limit=10");
    xhr.done(function(data) {
        $(".gifs").html("")
        console.log("success got data", data);
        for (var gif of data.data) {
            console.log(gif);
            $(".gifs").append("<div class=\"group\" style=\"display: block;\"><p>Rating: "+gif.rating+"</p><img class=\"moving\" src=\"" +gif.images.downsized_large.url+"\"/><img class=\"still\" style=\"display: none;\" src=\"" +gif.images['480w_still'].url+"\"/></div>");
            //  https://giphy.com/gifs/lamborghini-ey5ehGCEmFcxW?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=
        }

        $(".group").click(function (){
            if ($(this).find(".moving").is(":visible")) {
                $(this).find(".moving").hide();
                $(this).find(".still").show();
            } else {
                $(this).find(".moving").show();
                $(this).find(".still").hide();
            }
            
        })
    });

}