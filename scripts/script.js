// var aboutmeDiv = document.getElementById("aboutme-display");
// var portfolioDiv = document.getElementById("portfolio-display");
// var contactDiv = document.getElementById("contact-display");
// var displayClass = "display-hidden";
// var aboutmeLink = document.getElementById("aboutme-link");
// var portfolioLink = document.getElementById("portfolio-link");
// var contactLink = document.getElementById("contact-link");

// function hideAll() {
//   aboutmeDiv.classList.add(displayClass);
//   portfolioDiv.classList.add(displayClass);
//   contactDiv.classList.add(displayClass);
// }

// function removeHide(option) {
//   if (option === "aboutme") {
//     aboutmeDiv.classList.remove(displayClass);
//   } else if (option === "portfolio") {
//     portfolioDiv.classList.remove(displayClass);
//   } else if (option === "contact") {
//     contactDiv.classList.remove(displayClass);
//   }
// }

// var selectedOption;
// function showOne(option) {
//   if (option !== selectedOption) {
//     selectedOption = option;
//     hideAll();
//     removeHide(option);
//   }
// }

// aboutmeLink.onclick = function () {
//   showOne("aboutme");
// };
// portfolioLink.onclick = function () {
//   showOne("portfolio");
// };
// contactLink.onclick = function () {
//   showOne("contact");
// };

//MENU toggle with menu-toggle-button for mobile

var menuToggleList = document.querySelector(".menu-sections");
function menuToggle(){
    // alert('click event occured');
    menuToggleList.classList.toggle("menu-sections-open");
    console.log(menuToggleList);
}


//MENU text appears when holding icon: on hover display menu icon none and display menu text

var menuIcon = document.querySelectorAll(".menu-icon");

function iconTextChange() {
  for (i = 0; i < menuIcon.length; i++) {
    function mouseOn() {
      this.classList.add("hidden");
    }
    function mouseOut() {
      this.classList.remove("hidden");
    }
    menuIcon[i].addEventListener("mouseenter", mouseOn, false);
    menuIcon[i].addEventListener("mouseleave", mouseOut, false);
  }
}
iconTextChange();

//background with p5.js
// let viewportWidth = window.innerWidth;
// let viewportHeight = window.innerHeight;

// function setup() {
//   let cnv = createCanvas(viewportWidth, viewportHeight);
//   cnv.id("mycanvas")
//   noStroke();
//   background(245);
// }

// function draw() {
  
//   //pattern properties
//   background(245, 245, 245, 9);
//   fill(11, 179, 164);
//   var circleDiameter = 2;
//   var circleSpacing = circleDiameter + 45;
//   var containerWidth = width/circleSpacing;
//   var containerHeight = height/circleSpacing;
  
//   for(var i = 0; i < containerWidth; i++){
//     for(var j = 0; j < containerHeight; j++){
//       circle(i*circleSpacing + circleDiameter/2, j*circleSpacing + circleDiameter/2, circleDiameter);
//     }
//   }
  
//   //mouse circle properties
//   fill(255, 155,113, 7);
//   var mouseCircleDiameter = 50;
//   var positionX = mouseX;
//   var positionY = mouseY;  
//   circle(positionX, positionY, mouseCircleDiameter/2)
//   circle(positionX+6, positionY+3, mouseCircleDiameter)
// }