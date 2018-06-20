/*
Comming Soon Moolalah.com
*/

$(window).on("load", function () {
    $("#countdown").countdown($("#countdown").attr("data-time"), function (e) {
        $(this).html(e.strftime("<div>%D<span>Days</span></div> <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>"))
    });
});