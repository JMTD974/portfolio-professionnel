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
projectsList.innerHTML = projects
  .map(
    (project) => `
      <article>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </article>
    `
  )
  .join("");