document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "images/IMG-20241214-WA0004.jpg",
        "images/IMG-20241214-WA0011.jpg",
        "images/IMG-20241214-WA0023.jpg",
        "images/IMG-20241214-WA0025.jpg",
        "images/IMG-20241214-WA0017.jpg",
        "images/IMG-20241214-WA0012.jpg"
    ];
    var currentIndex = 0;

    document.getElementById("changeImageButton").onclick = function() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("tripImage").src = images[currentIndex];
    };
});


