document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.getElementById("certificateCarousel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (!carousel ) {
        console.error("Carousel elements not found.");
        return;
    }
    if(!prevBtn){
        console.error("Previous button not found.");
        return;
    }
    if(!nextBtn){
        console.error("Next Button not found");
        return;
    }
    function updateButtons(){
        const maxScroll =  carousel.scrollWidth - carousel.parentElement.offsetWidth;

        prevBtn.disabled = currentPosition >= 0;
        nextBtn.disabled = Math.abs(currentPosition) >= maxScroll;
    }

    let currentPosition = 0;

    nextBtn.addEventListener("click", function() {

        carousel.style.animationPlayState = "paused";
        const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;
        if (Math.abs(currentPosition) < maxScroll){
            currentPosition -= 300;

             carousel.style.transform =
            "translateX("  + currentPosition + "px)";
        }

        updateButtons();
    });

    prevBtn.addEventListener("click", function() {

        
        carousel.style.animationPlayState = "paused";
        if (currentPosition < 0 ){
            currentPosition += 300;

            carousel.style.transform =
            "translateX(" + currentPosition + "px)";

        }

       updateButtons();

    });

});