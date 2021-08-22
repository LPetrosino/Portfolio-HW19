function navbuttonhover() {
    var navButton = $('#navButton')
    
    navButton.css({"color": "white"})
    console.log(navButton)
}
function navbutton() {
    var navButton = $('#navButton')
    navButton.css({"color": "white"})
    console.log(navButton)
}
$( document ).ready(function() {
    $("#projectscta").on("click", projectsScroll);
    console.log( "ready!" );
});
function projectsScroll() {
    $("#projectSection")[0].scrollIntoView();
    // $('#projectSection').scrollIntoView();
    console.log($("#projectSection"))
}