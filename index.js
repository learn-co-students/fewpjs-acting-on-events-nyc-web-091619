// Your code here

// let dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = "#000000";
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left;
// dodger.style.bottom;
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//     console.log(e.key);
//   });

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
   
//       dodger.style.left = `${left - 1}px`;
//     }
//   });

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       moveDodgerLeft();
//     }
//   });

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
 
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers,10);
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })
  
  document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })