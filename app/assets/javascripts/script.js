
/* Cutomize Page-Default Setting */
// $(document).ready(function pageDefault () {

//     var setEusize = document.getElementById("eusize");
//     setEusize.style.display ="none";

//     var setJpsize = document.getElementById("jpsize");
//     setJpsize.style.display = "none";

//     var setUsize = document.getElementById("usize");
//     setUsize.style.display = "block";

// });

// /* Cutomize Page-Radio Button */
// $(document).ready(function loadSize () {

//     document.getElementById("eu").onclick = function () {
//       if (document.getElementById("eu").checked) {
//         document.getElementById("usize").style.display = "none";
//         document.getElementById("jpsize").style.display = "none";
//         document.getElementById("eusize").style.display = "block";
//       } 
//     };
//     document.getElementById("jp").onclick = function () {
//       if (document.getElementById("jp").checked) {
//         document.getElementById("usize").style.display = "none";
//         document.getElementById("jpsize").style.display = "block";
//         document.getElementById("eusize").style.display = "none";
//       } 
//     };
//     document.getElementById("us").onclick = function () {
//       if (document.getElementById("us").checked) {
//         document.getElementById("usize").style.display = "block";
//         document.getElementById("jpsize").style.display = "none";
//         document.getElementById("eusize").style.display = "none";
//       } 
//     };

// });


document.onClick = function () {
	$('#loginmodal').modal();

};


/* Product Zooming */

$(document).ready(function(){
	$('#ex1').zoom();
})

