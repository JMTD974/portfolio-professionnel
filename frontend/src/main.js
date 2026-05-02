const title = document.querySelector("#hero-title");
title.textContent = "Portfolio de David";
const heroText = document.querySelector(".hero-text");
heroText.textContent = "Je développe des interfaces web modernes, propres et adaptées aux besoins réels.";
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "PHP", "MySQL", "Docker"];
const skillsList = document.querySelector("#skills-list");
skillsList.innerHTML = skills.map((skill) => `<li>${skill}</li>`).join("");
const projects = [
  {
    title: "Portfolio Professionnel",
    description: "Un portfolio moderne et responsive pour présenter mes compétences et mes projets."
  },
  {
    title: "Projet à venir",
    description: "Un futur projet web qui me permettra de renforcer ma pratique du front-end et du back-end."
  }
];
const projectsContainer = document.querySelector("#projects-list");
projectsContainer.innerHTML = projects
  .map(
    (project) => `
      <article>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </article>
    `
  )
  .join("");
  const contactEmail = document.querySelector("#contact-email");
contactEmail.textContent = "Me joindre par email";
contactEmail.href = "mailto:techerdavid.jm@gmail.com";
const contactGithub = document.querySelector("#contact-github");
contactGithub.textContent = "Voir mon GitHub";
contactGithub.href = "https://github.com/JMTD974";
const eyebrow = document.querySelector(".eyebrow");
eyebrow.textContent = "Développeur web full-stack";