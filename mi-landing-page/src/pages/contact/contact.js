'use strict';

document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect for Contact Section (Triggers on Scroll)
    const text = " do not hesitate to reach me for further details: ";
    let typingIndex = 0;
    let hasTyped = false; // Prevents re-triggering the effect

    // Function for typing effect
    function typeText() {
        const typingElement = document.getElementById("typing-text-3");
        if (typingElement && typingIndex < text.length) {
            typingElement.textContent += text.charAt(typingIndex);
            typingIndex++;
            setTimeout(typeText, 70);  // Adjust speed
        }
    }

    // Observe when the typing text becomes visible in the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                typeText();  // Start typing effect
                hasTyped = true;  // Prevents multiple triggers
                observer.unobserve(entry.target); // Stop observing once started
            }
        });
    }, { threshold: 0.5 });  // Trigger when 50% of element is in view

    // Apply observer to #typing-text-3
    const typingElement = document.getElementById("typing-text-3");
    if (typingElement) {
        observer.observe(typingElement);
    }

    // Set up email dynamically
    const user = "miraclemalaquias";
    const domain = "gmail.com";
    const link = document.getElementById("contact-mail");
    if (link) {
        link.href = `mailto:${user}@${domain}`;
    }

    // Optional: Add "js" class for styling fallback
    document.documentElement.classList.add('js');
});
