// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    console.log(window.orientation);
    // 0 means portrait, 90 means landscape rotated to the left, -90 means landscape rotated to the right
}, false);
