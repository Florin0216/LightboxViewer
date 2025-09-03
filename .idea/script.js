let thumbImgs = document.querySelectorAll(".gallery-item");
let lightBox = document.querySelector(".lightbox");
let fullImage = document.getElementById("lightbox-image");
let closeBtn = document.getElementById("close-btn");

function loadFullImage(image) {
    fullImage.src = image.src.replace("-thumbnail", "");
    lightBox.style.display = "flex";
}

function closeFullImage() {
    lightBox.style.display = "none";
}

thumbImgs.forEach(image => {
    image.addEventListener("click", () => {
        loadFullImage(image);
    });
});

closeBtn.addEventListener("click", closeFullImage);
lightBox.addEventListener("click", closeFullImage);
