// If I write with plain JS -- using elem.addEventListener()
var onClick = (function() {
    var x = document.getElementById("my-elem");
    x.addEventListener("click", myFunction);

    function myFunction() {
        alert ("Hello, Kitty!");
    }
})();

//If using jQuery -- using jQuery.click()
// $('#my-elem').click(function(e) {
//     //when elements clicked, do stuff here
// });
console.log("hello!");