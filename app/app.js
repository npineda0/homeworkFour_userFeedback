import * as MODEL from "./model.js"

function initListeners() {
    //'=>' is the same as the anonymous function
    $("nav a").click((e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        console.log(btnID);

        MODEL.setCurrentPageContent(btnID);
    });
}
/*
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".modal").classList.add("active");
});
*/
//MODAL will show
var modal = $(".modal");

$("#login").click(function() {
    modal.show();
})
/*
$("#show-login").on("click", function(e) {
    (".modal").addClass("active");
});

//close modal
$(".modal .closeBtn").on("click", function(e) {
    (".modal").removeClass("active");
});
*/
/*
document.querySelector(".modal .closeBtn").addEventListener("click", function(){
    document.querySelector(".modal").classList.remove("active");
});
*/

$(document).ready(function () {
    MODEL.setCurrentPageContent("home");
    initListeners();
});

/*
$(window).on("load", function() {
    Swal.fire("any fool");
});
*/