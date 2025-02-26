document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    audio.muted = false; // Unmute after page loads

    document.body.addEventListener("click", function () {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }, { once: true });
});
