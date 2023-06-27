const overlay = document.getElementById("overlay");
const openOverlay = document.getElementById("overlayOpen");
const closeOverlay = document.getElementById("overlayClose");

openOverlay.addEventListener("click", function(){
    overlay.style.height = "100vh";
});

closeOverlay.addEventListener("click", function(){
    overlay.style.height = "0";
});