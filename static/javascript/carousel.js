function scrollCertificates(index){

    const carousel =
        document.getElementById("certificateCarousel");

    const scrollAmount =
        carousel.clientWidth;

    carousel.scrollTo({
        left: index * scrollAmount,
        behavior: "smooth"
    });

    document.querySelectorAll(".dot")
        .forEach(dot => dot.classList.remove("active"));

    document.querySelectorAll(".dot")[index]
        .classList.add("active");
}