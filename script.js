function navbuttonhover() {
    var navButton = $('#navButton')
    
    navButton.css({"background": "#2F3453"})
    console.log(navButton)
}
function navbutton() {
    var navButton = $('#navButton')
    navButton.css({"background": "rgba(47, 52, 83, 0.3)"})
    console.log(navButton)
}
function bodybutton1hover() {
    var bodyButton1 = $('#bodyButton1')
    
    bodyButton1.css({"color": "#40507C"})
    bodyButton1.css({"background": "white"})
    bodyButton1.css({"border": "2px solid #485F86"})
}
function bodybutton1() {
    var bodyButton1 = $('#bodyButton1')

    bodyButton1.css({"color": "white"})
    bodyButton1.css({"background": "#40507C"})
    bodyButton1.css({"border": "2px solid white"});
}
function bodybutton2hover() {
    var bodyButton2 = $('#bodyButton2')
    
    bodyButton2.css({"color": "#40507C"})
    bodyButton2.css({"background": "white"})
    bodyButton2.css({"border": "2px solid #485F86"})
    console.log(navButton)
}
function bodybutton2() {
    var bodyButton2 = $('#bodyButton2')
    
    bodyButton2.css({"color": "white"})
    bodyButton2.css({"background": "#40507C"})
    bodyButton2.css({"border": "2px solid white"});
}
function footerbutton1hover() {
    var footerButton1 = $('#fbutton1')
    
    footerButton1.css({"background": "#FA8942"})
}
function footerbutton1() {
    var footerButton1 = $('#fbutton1')
    footerButton1.css({"color": "white"})
    footerButton1.css({"background": "none"})
}
function footerbutton2hover() {
    var footerButton2 = $('#fbutton2')
    
    footerButton2.css({"background": "#FA8942"})
}
function footerbutton2() {
    var footerButton2 = $('#fbutton2')
    footerButton2.css({"color": "white"})
    footerButton2.css({"background": "none"})
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
$( document ).ready(function() {
    $("#aboutcta").on("click", aboutScroll);
    console.log( "ready!" );
});
function aboutScroll() {
    $("#projectSection")[0].scrollIntoView();
    // $('#projectSection').scrollIntoView();
    console.log($("#projectSection"))
}
