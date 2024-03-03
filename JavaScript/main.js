var imageCount = 0;
var quoteAPI = document.getElementById('quote');

fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then((data) => { 
        console.log(data[0].quote);
        quoteAPI.innerHTML = data[0].quote})

.catch((e) => console.log(e));

function slideShow() {
    var imageSS = document.getElementById('slideshow');

    if (imageCount == 0) {
        imageSS.innerHTML = "<img src=\"PortfolioImages/deeronbed.jpg\"></img>"
    }
    else if (imageCount == 1) {
        imageSS.innerHTML = "<img src=\"PortfolioImages/scaredbear.gif\"></img>"
    }
    else if (imageCount == 2) {
        imageSS.innerHTML = "<img src=\"PortfolioImages/penguin-slap.gif\"></img>"
    }
    else {
        imageSS.innerHTML = "<img src=\"PortfolioImages/mypicture.jpg\"></img>"
    }

    if (imageCount < 3) {
        imageCount += 1;
    }
    else {
        imageCount = 0;
    }
}

setInterval(slideShow, 2500);