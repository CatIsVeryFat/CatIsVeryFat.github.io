var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");
thumb.classList.add("thumb");
imageThumbs.appendChild(thumb);
for (var i=1; i<=11; i++){
    var thumb = document.createElement("img");
    thumb.src = "/Gallery/image"+i+".jpeg";
    thumb.alt = "Image "+i;
    thumb.addEventListener(
        "click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        }
    );
}
