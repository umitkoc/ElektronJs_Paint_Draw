var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var pen = document.getElementById("pen");
var pencil = document.getElementById("pencil");
var square = document.getElementById("square");
var triangle = document.getElementById("triangle");
var erasier = document.getElementById("eraiser");
var star = document.getElementById("star");
var circle = document.getElementById("circle");
var slash = document.getElementById("slash");
var back = document.getElementById("back");
var fill = document.getElementById("fill");
var text = document.getElementById("text");
var lastevent;
var isMouseDown = false;
var btncolor=document.getElementById("orange");
var create=document.getElementById("color");
var color=window.getComputedStyle(document.querySelector(".selected")).backgroundColor;

canvas.addEventListener("mousedown", function (e) {
    lastevent = e;
    isMouseDown = true;
    ChangeColor();
});


canvas.addEventListener("mousemove", function (e) {
    if (isMouseDown) {
        context.beginPath();
        context.moveTo(lastevent.offsetX, lastevent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.fillStyle=color;
        context.stroke();
        lastevent = e;
    }
});

canvas.addEventListener("mouseup", function () {
    isMouseDown = false;
});


function ChangeColor() {
    btncolor.style.backgroundColor=create.value;
     color=window.getComputedStyle(document.querySelector(".selected")).backgroundColor;
}



///çizim temizleme
document.getElementById("trash").addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
});


//resim kaydetme
document.getElementById("SaveBtn").addEventListener("click", function () {
    var downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "canvasas.png";
    downloadLink.target = "_blank";
    downloadLink.click();
});




