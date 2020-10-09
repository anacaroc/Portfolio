var homeDiv = document.querySelector('#home');
var aboutDiv = document.querySelector('#about');
var portfolioDiv = document.querySelector('#portfolio');
var homeLink = document.querySelector('#home-link');
var aboutLink = document.querySelector('#about-link');
var portfolioLink = document.querySelector('#portfolio-link');

function hideAll() {
  homeDiv.classList.add('display-hidden');
  aboutDiv.classList.add('display-hidden');
  portfolioDiv.classList.add('display-hidden');
}

function removeHide(option) {
  if (option === "about") {
    aboutDiv.classList.remove('display-hidden');
  } else if (option === "portfolio") {
    portfolioDiv.classList.remove('display-hidden');
  } else if ( option === "home") {
    homeDiv.classList.remove('display-hidden')
  }
}

var selectedOption;
function showOne(option) {
  if (option !== selectedOption) {
    selectedOption = option;
    hideAll();
    removeHide(option);
  }
}

aboutLink.onclick = function () {
  showOne("about");
};
portfolioLink.onclick = function () {
  showOne("portfolio");
};

homeLink.onclick = function () {
  showOne("home");
};


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