'use strict';

document.addEventListener("DOMContentLoaded", function () {
 
    const text = " do not hesitate to contact me for further details: ";
    let typingIndex = 0;
    let hasTyped = false; 

  
    function typeText() {
        const typingElement = document.getElementById("typing-text-3");
        if (typingElement && typingIndex < text.length) {
            typingElement.textContent += text.charAt(typingIndex);
            typingIndex++;
            setTimeout(typeText, 70);  
        }
        else {
            typingElement.style.borderRight = "none";
            typingElement.style.animation = "none";
        }
    }

 
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                typeText();  
                hasTyped = true;  
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });  

 
    const typingElement = document.getElementById("typing-text-3");
    if (typingElement) {
        observer.observe(typingElement);
    }


    const user = "miraclemalaquias";
    const domain = "gmail.com";
    const link = document.getElementById("contact-mail");
    if (link) {
        link.href = `mailto:${user}@${domain}`;
    }

 
    document.documentElement.classList.add('js');
});
