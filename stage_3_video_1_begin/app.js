
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
    element.style.backgroundColor = "green";
}

function makeWhite(element) {
    element.style.backgroundColor = "white";
}

function addStyleToElement(element, callback) {
    callback(element);
}

//addStyleToElement(div1, makeRed);
addStyleToElement(div2, makeBlue);
addStyleToElement(div3, makeGreen);

function switchColors(element) {
    setInterval(function () {
        if (element.style.backgroundColor === "red")
            makeWhite(element);
        else if (element.style.backgroundColor === "white")
            makeBlue(element);
        else
            makeRed(element);
    }, 1000);
}

switchColors(div1);
