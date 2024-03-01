
document.getElementById("informationBtn").addEventListener("click", function() {
    // Hämta storlek och antal från användaren eller din webbplatslogik
    var storlek = "Small"; // Exempel: Hämta storlek från din webbplats
    var antal = 1; // Exempel: Hämta antal från din webbplats

    // Skapa en länk till Instagram-chatten med informationen
    var instagramURL = "https://www.instagram.com/direct/t/17844606371720292" + storlek + "&antal=" + antal;

    // Öppna Instagram-chatten i en ny flik eller ett nytt fönster
    window.open(instagramURL, "_blank");
});


document.addEventListener("DOMContentLoaded", function () {
    var animationContainer = document.getElementById("animation-container");
    animationContainer.style.animation = "none"; // Ta bort animationsegenskaper för att förhindra att de spelas direkt vid sidans laddning
    animationContainer.offsetHeight; // En "force reflow" för att återställa elementets ursprungliga tillstånd
    animationContainer.style.animation = null; // Återställ animationsegenskaperna

    setTimeout(function () {
        animationContainer.style.animationPlayState = "running"; // Starta animationen efter en fördröjning
    }, 100);
});


const imagePairs = document.querySelectorAll('.image-container');

// Loopa igenom varje bildpar
imagePairs.forEach(pair => {
    const normalImage = pair.querySelector('.normal-image');
    const hoveredImage = pair.querySelector('.hovered-image');

    // Lägg till händelselyssnare för att byta bilder vid mouseover
    pair.addEventListener('mouseover', () => {
        normalImage.style.display = 'none';
        hoveredImage.style.display = 'block';
    });

    // Lägg till händelselyssnare för att byta tillbaka till normal bilden vid mouseout
    pair.addEventListener('mouseout', () => {
        normalImage.style.display = 'block';
        hoveredImage.style.display = 'none';
    });
});






