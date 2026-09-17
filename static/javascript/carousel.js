function scrollToCard(direction) {

    const cards = document.querySelectorAll(".certificate-card");

    let centerIndex = 0;

    cards.forEach((card, index) => {

        const rect = card.getBoundingClientRect();
        const center = window.innerWidth / 2;

        if (
            rect.left < center &&
            rect.right > center
        ) {
            centerIndex = index;
        }
    });

    let newIndex = centerIndex + direction;

    if (newIndex < 0) {
        newIndex = cards.length - 1;
    }

    if (newIndex >= cards.length) {
        newIndex = 0;
    }

    cards[newIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    });
}

nextBtn.addEventListener("click", () => {
    scrollToCard(1);
});

prevBtn.addEventListener("click", () => {
    scrollToCard(-1);
});