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
