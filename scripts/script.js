var aboutmeDiv = document.getElementById("aboutme-display");
var portfolioDiv = document.getElementById("portfolio-display");
var contactDiv = document.getElementById("contact-display");
var displayClass = 'display-hidden';
var aboutmeLink = document.getElementById("aboutme-link")
var portfolioLink = document.getElementById("portfolio-link")
var contactLink = document.getElementById("contact-link")

function hideAll(){
    aboutmeDiv.classList.add(displayClass);
    portfolioDiv.classList.add(displayClass);
    contactDiv.classList.add(displayClass);
}

function removeHide(option){
    if (option === "aboutme") {
        aboutmeDiv.classList.remove(displayClass);
    } else if (option === "portfolio"){
        portfolioDiv.classList.remove(displayClass);
        
    } else if (option === "contact"){
        contactDiv.classList.remove(displayClass)
    }
}

var selectedOption
function showOne(option){
    if(option !== selectedOption){
        selectedOption = option
        hideAll();
        removeHide(option);
    }
}

aboutmeLink.onclick = function(){showOne("aboutme")};
portfolioLink.onclick = function(){showOne("portfolio")}
contactLink.onclick = function(){showOne("contact")}