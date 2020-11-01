const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(params) {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `image/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom(params) {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
//math.ceil(숫자) 올림, math.floor(숫자) 내림

function init(params) {
    const randomnumber = genRandom();
    paintImage(randomnumber);
}
init();