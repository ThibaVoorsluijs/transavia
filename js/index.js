/* ===================

bronnen:
Siebe Domeijer
//http://www.w3schools.com/howto/howto_js_dropdown.asp

=================== */


//voor mobiel
function optiesButtonClick() {
    var optiesForm =  document.getElementById('opties-mobiel');
    var categorieSection =  document.getElementById('categorie-section');
    if ( optiesForm.style.display == "flex" ) {
        optiesForm.style.display = "";
    } else {
        optiesForm.style.display = "flex";
        categorieSection.style.display = "";
    }
}

//voor mobiel
function categorieButtonClick() {
    var optiesForm =  document.getElementById('opties-mobiel');
    var categorieSection =  document.getElementById('categorie-section');
    if ( categorieSection.style.display == "flex" ) {
        categorieSection.style.display = "";
    } else {
        categorieSection.style.display = "flex";
        optiesForm.style.display = "";
    }
}

//voor desktop en tablet
function meerMinderOptiesButtonClick () {
    var optiesForm =  document.getElementById('opties-mobiel');
    var optiesButton =  document.getElementById('meer-minder-opties');
    if ( optiesForm.style.left == "0rem" ) {
        optiesForm.style.left = "";
        optiesButton.style.left = "";
        optiesButton.style.background = ""
        optiesButton.style.backgroundSize = "";
    } else {
        optiesForm.style.left = "0rem";
        optiesButton.style.left = "19rem";
        optiesButton.style.background = "url(images/minder_opties.png) center no-repeat"
        optiesButton.style.backgroundSize = "contain";
    }

}

//als er buiten een button wordt geklikt, worden alle style waarden gereset
window.onclick = function(event) {
  if (!event.target.matches('body > section > button') &&
      !event.target.matches('body > section > form  *')
    ) {

    var optiesForm =  document.getElementById('opties-mobiel');
    var categorieSection =  document.getElementById('categorie-section');
    var optiesButton =  document.getElementById('meer-minder-opties');

    optiesForm.style.display = "";
    optiesForm.style.left = "";
    optiesButton.style.left = "";
    optiesButton.style.background = ""
    optiesButton.style.backgroundSize = "";
    categorieSection.style.display = "";
  }
}

//als window veranderd van grootte worden alle style waarden gereset
window.onresize = function () {
    var optiesForm =  document.getElementById('opties-mobiel');
    var categorieSection =  document.getElementById('categorie-section');
    var optiesButton =  document.getElementById('meer-minder-opties');

    optiesForm.style.display = "";
    optiesForm.style.left = "";
    optiesButton.style.left = "";
    optiesButton.style.background = ""
    optiesButton.style.backgroundSize = "";
    categorieSection.style.display = "";
}


//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
//verberg de terug-naar-boven knop bij de eerster 200 pixels
window.onscroll = function() {
    var terugNaarBovenAnchor = document.getElementById('terug-naar-boven')
    if (window.pageYOffset > 400) {
        // > 100px from top - show div
        terugNaarBovenAnchor.style.display = "block"
    }
    else {
        terugNaarBovenAnchor.style.display = ""
    }
}

