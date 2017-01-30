/* ===================

bronnen:
Siebe Domeijer
//http://www.w3schools.com/howto/howto_js_dropdown.asp

=================== */

/* =================
Opties en categorieën
================  */

//meer opties voor mobiel
document.querySelector('body > section > button:first-of-type').addEventListener("click", function () {
    document.querySelector('body > section > form').classList.toggle("visible-height");
    document.querySelector('body > section > section').classList.remove("visible-height");
});

//categorieen voor mobiel
document.querySelector('body > section > button:last-of-type').addEventListener("click", function () {
    document.querySelector('body > section > section').classList.toggle("visible-height");
    document.querySelector('body > section > form').classList.remove("visible-height");
});


//Meer opties voor desktop en tablet
document.querySelector('body > section > button:nth-of-type(2)').addEventListener("click", function () {
    document.querySelector('body > section > button:nth-of-type(2)').classList.toggle("shift-right");
    document.querySelector('body > section > form').classList.toggle("shift-right");
});

//als er buiten een button wordt geklikt, worden alle style waarden gereset
window.onclick = function(event) {
  if (!event.target.matches('body > section > button') &&
      !event.target.matches('body > section > form  *'))
  {
    resetClasses()
  }
}

//als window veranderd van grootte worden alle style waarden gereset (voor het testen)
window.onresize = function () {
    resetClasses()
}

function resetClasses() {
    document.querySelector('body > section > form').classList.remove("visible-height");
    document.querySelector('body > section > section').classList.remove("visible-height");
    document.querySelector('body > section > button:nth-of-type(2)').classList.remove("shift-right");
    document.querySelector('body > section > form').classList.remove("shift-right");
}


/* =================
Scroll functie en button
================  */


//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
//verberg de terug-naar-boven knop bij de eerster 400 pixels (dit moet in pixels)
window.onscroll = function() {
    var terugNaarBovenAnchor = document.querySelector('footer > button');
    if (window.pageYOffset > 400) {
        // > 100px from top - show div
        terugNaarBovenAnchor.classList.add("shift-up");
    }
    else {
        terugNaarBovenAnchor.classList.remove("shift-up");
    }
}

//click op de terug-naar boven knop, start de ScrollTo functie, 250 is ms
document.querySelector('footer > button').addEventListener("click", function () {
    scrollTo(
        document.body,
        document.querySelector('header'),
        250
    )
});

//http://stackoverflow.com/a/31987330
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}


/* =================
Content selectie
================  */

function setWebSiteContent(categorie) {

        document.querySelector('main > section:first-of-type > article > h1').innerHTML = website_content[categorie]['boven']['titel'];
        document.querySelector('main > section:first-of-type > article > footer').innerHTML = website_content[categorie]['boven']['footer'];
        document.querySelector('main > section:first-of-type > article > p').innerHTML = website_content[categorie]['boven']['text'];

        document.querySelector('main > section:last-of-type > article:first-of-type > h2').innerHTML = website_content[categorie]['onder1']['titel'];
        document.querySelector('main > section:last-of-type > article:first-of-type > footer').innerHTML = website_content[categorie]['onder1']['footer'];
        document.querySelector('main > section:last-of-type > article:first-of-type > p').innerHTML = website_content[categorie]['onder1']['text'];
        document.querySelector('main > section:last-of-type > article:first-of-type > img').src = website_content[categorie]['onder1']['icon'];

        document.querySelector('main > section:last-of-type > article:nth-of-type(2) > h2').innerHTML = website_content[categorie]['onder2']['titel'];
        document.querySelector('main > section:last-of-type > article:nth-of-type(2) > footer').innerHTML = website_content[categorie]['onder2']['footer'];
        document.querySelector('main > section:last-of-type > article:nth-of-type(2) > p').innerHTML = website_content[categorie]['onder2']['text'];
        document.querySelector('main > section:last-of-type > article:nth-of-type(2) > img').src = website_content[categorie]['onder2']['icon'];
}

document.querySelector('body > section > section > ul > li:nth-of-type(1)').addEventListener("click", function () {
    setWebSiteContent('alles');
});

document.querySelector('body > section > section > ul > li:nth-of-type(2)').addEventListener("click", function () {
    setWebSiteContent('drama');
});

document.querySelector('body > section > section > ul > li:nth-of-type(3)').addEventListener("click", function () {
    setWebSiteContent('kritisch');
});

document.querySelector('body > section > section > ul > li:nth-of-type(4)').addEventListener("click", function () {
    setWebSiteContent('poezie');
});

document.querySelector('body > section > section > ul > li:nth-of-type(5)').addEventListener("click", function () {
    setWebSiteContent('romantiek');
});

document.querySelector('body > section > section > ul > li:nth-of-type(6)').addEventListener("click", function () {
    setWebSiteContent('sport');
});

