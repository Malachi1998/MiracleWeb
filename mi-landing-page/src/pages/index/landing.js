document.addEventListener("DOMContentLoaded", function () {
    const text = " the service you need and contact me. Let's see what we can do.";
    let typingIndex = 0;
    let hasTyped = false;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (typingElement && typingIndex < text.length) {
            typingElement.textContent += text.charAt(typingIndex);    typingIndex++;
            setTimeout(typeText, 70);
        } else {
            typingElement.classList.add("no-cursor");
        }
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                typeText();
                hasTyped = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5, rootMargin: "0px 0px -50% 0px" });

    if (typingElement) {
        observer.observe(typingElement);
    }

    let secondAnimation = document.getElementById("quote");
    let position2 = 300;
    let animationFrameId;

    function moveText() {
        if (window.innerWidth > 1024) {
            if (position2 > 0) {
                position2--;
                secondAnimation.style.transform = `translateX(${position2}px)`;
                animationFrameId = requestAnimationFrame(moveText);
            }
        } else {
            secondAnimation.style.transform = "translateX(0)";
            cancelAnimationFrame(animationFrameId);
        }
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1024) {
            secondAnimation.style.transform = "translateX(0)";
        }
    });

    moveText();

    const laborProfile = document.getElementById("laborProfile");
    const colors = ["#7EBDC2", "#D4AF37", "#E63946", "#FFCC00"];
    let colorIndex = 0;

    let intervalId;
    function startGlowEffect() {
        intervalId = setInterval(() => {
            laborProfile.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 1000);
    }

    startGlowEffect();

    function handleScroll() {
        let elements = document.querySelectorAll(".scroll-effect");
        let windowHeight = window.innerHeight;

        elements.forEach((element) => {
            let position = element.getBoundingClientRect().top;
            if (position < windowHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
