document.addEventListener("DOMContentLoaded", function () {
  const text = `"Arguing that you don’t care about the right to privacy because you have nothing to hide is no different
  than saying you don’t care about free speech because you have nothing to say." - Edward Snowden`;

  let index = 0;
  const quoteElement = document.getElementById("quote");
  quoteElement.innerHTML = ""; 
  let hasTyped = false; 

  function typeText() {
      if (index < text.length) {
          quoteElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeText, 50); 
      } else {
      
          quoteElement.classList.add("no-cursor");
      }
  }

 
  setTimeout(() => {
      typeText();
      hasTyped = true;
  }, 1000);
});


function showDetails(section) {
  const details = {
      workExperience: `I began as a Hotel Administrative (2019–2020), managing reservations and finances.
      In 2023, I joined Mirándalex as a Legal Technician, assisting in debt recovery and legal research. Later, at Accenture (2024), I worked as a Legal Trainer and QA Tester, optimizing software and training judges.
      Most recently, I worked in Customer Support for Xiaomi (2024–2025).`,
      academicBackground: `I am currently in a Master’s degree in Data Protection at UNIR, (2025-2026), in order to become a DPO.
      Additionally, I completed a Dual Degree in Law and Philosophy at UCM, which included an Erasmus in Brussels, providing me legal and philosophical perspectives in English and French.
      I hold certificates in Fullstack Website Development and Cybersecurity.`,
      skills: "I thrive in fast-paced environments, demonstrating adaptability and resilience. As a strong communicator, I effectively convey ideas and collaborate with diverse teams. My analytical mindset and focus on problem-solving enable me to tackle challenges efficiently and deliver strategic solutions. Besides, I am literate in programming to the extent that I can write and read in HTML, CSS, JavaScript, React, and Gitbash.",
      languages: `I have a C1 level in English, officially certified by the Cambridge Institution at a B2 level. This demonstrates my strong proficiency in the language.
      I also have a B2.3 level in French, certified by the Institut Français, and I am a native Spanish speaker with a C2 proficiency level.`
  };

  document.getElementById("modalTitle").innerText = section.replace(/([A-Z])/g, ' $1').trim();
  document.getElementById("modalContent").innerText = details[section];
  document.getElementById("detailsModal").style.display = "block";
}

function closeDetails() {
  document.getElementById("detailsModal").style.display = "none";
}


window.onclick = function (event) {
  let modal = document.getElementById("detailsModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};
