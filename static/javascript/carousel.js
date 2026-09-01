function scrollCertificates(direction){
        const carousel =
        document.getElementById("certificateCarousel");

        const scrollAmount = carousel.scrollWidth / 2;

        carousel.srollTo({
            left: index *scrollAmount,
            behavior: "smooth"
        });

        document.querySelectorAll(".dot")
            .forEach(dot => dot.classList.remove("active"));
        document.querySelectorAll(".dot")[index]
            .classList.add("active");
    };