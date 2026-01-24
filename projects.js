const projectsSection = document.getElementById("projects-section");

const projects = [
  {
    name: "Code Kenya",
    jobDescription: {
      company: "Code Kenya",
      role: "Frontend Developer Intern",
      year: "2024-2025",
    },
    description: {
      featured:
        "Developed responsive web applications using modern frontend technologies while collaborating with a team on real-world projects.",
      detailed:
        "During my internship at Code Kenya, I contributed to building responsive web applications using HTML5, CSS3, JavaScript, and React. I worked on implementing user interfaces from Figma designs, ensuring cross-browser compatibility and mobile responsiveness. Collaborated with backend developers to integrate APIs and participated in agile development processes including daily stand-ups and code reviews.",
    },
    languages: {
      featured: ["HTML", "CSS", "JavaScript", "React"],
      detailed: ["HTML5", "CSS3", "JavaScript", "React", "Git", "REST APIs", "Bootstrap"],
    },
    thumbnail: {
      featured: "codekenya.png",
      detailed: "codekenya.png",
    },
    liveUrl: "https://www.codekenya.org/about-us",
    sourceCode: "https://github.com/Cathy-matu/CodeKenya-Portfolio",
  },
  {
    name: "USA Prospects Agent",
    jobDescription: {
      company: "USAPP",
      role: "Full Stack Developer",
      year: "2025",
    },
    description: {
      featured:
        "Integrated AI workflows to automate college application processes including essay reviews and application guidance.",
      detailed:
        "Developed an AI-powered platform that automates college application assistance. Implemented features for automated essay review, application process guidance, and personalized recommendations. Built the frontend with React and styled components, while the backend utilized Node.js with Express. Integrated third-party AI APIs and implemented secure user authentication with JWT. The platform significantly reduced manual review time and improved application success rates for users.",
    },
    languages: {
      featured: ["React", "Node.js", "Express", "MongoDB"],
      detailed: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "AI Integration", "Tailwind CSS"],
    },
    thumbnail: {
      featured: "usapp.png",
      detailed: "usapp.png",
    },
    liveUrl: "https://www.usaprospectsagent.com/",
    sourceCode: "https://github.com/Cathy-matu/usa-prospects-agent",
  },
  {
    name: "Task Management App",
    jobDescription: {
      company: "Personal Project",
      role: "Full Stack Developer",
      year: "2024",
    },
    description: {
      featured:
        "A full-featured task management application with real-time updates and team collaboration features.",
      detailed:
        "Built a comprehensive task management application from scratch using the MERN stack (MongoDB, Express, React, Node.js). Implemented real-time updates using Socket.io, drag-and-drop functionality for task organization, and user authentication with email verification. Added features like task assignment, progress tracking, file attachments, and team collaboration. Deployed using Docker containers with CI/CD pipeline for automated testing and deployment.",
    },
    languages: {
      featured: ["MongoDB", "Express", "React", "Node.js"],
      detailed: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT", "Docker", "AWS", "Tailwind CSS"],
    },
    thumbnail: {
      featured: "taskapp.png",
      detailed: "taskapp.png",
    },
    liveUrl: "https://taskmanager-cathy.vercel.app/",
    sourceCode: "https://github.com/Cathy-matu/task-management-app",
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const projectContainer = document.createElement("div");
  projectContainer.innerHTML = ` 
  <div class="project-snapshot ${i % 2 !== 0 ? "odd" : ""}">
    <a href="${projects[i].liveUrl}" target="_blank">
      <img src="assets/img/projects/${projects[i].thumbnail.featured}" alt="${projects[i].name}" />
    </a>
  </div>
  <div class="project-content-wrapper">
    <div class="project-content">
      <h2>${projects[i].name}</h2>
      <ul class="project-details">
        <li class="client-name">${projects[i].jobDescription.company}</li>
        <li class="role">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
          ${projects[i].jobDescription.role}
        </li>
        <li class="yearlb">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
          ${projects[i].jobDescription.year}
        </li>
      </ul>
      <p>${projects[i].description.featured}</p>
      <ul class="technologies-used">
        ${projects[i].languages.featured
          .map((language) => `<li>${language}</li>`)
          .join("")}
      </ul>
      <button type="button" class="btn" data-index="${i}">
        See Project
      </button>
    </div>
  </div>`;
  projectContainer.classList.add("project-container", "container");
  projectsSection.appendChild(projectContainer);
}

const projectButtons = document.querySelectorAll(".btn[data-index]");
const headerWrapper = document.querySelector(".header-container");

function createPopup(position) {
  const popup = document.createElement("section");
  popup.innerHTML = ` 
  <div class="popup-wrapper">
    <div class="popup-container">
      <div class="popup-header">
        <h2>${projects[position].name}</h2>
        <ul class="project-details">
          <li class="client-name">${projects[position].jobDescription.company}</li>
          <li class="role">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
            </svg>
            ${projects[position].jobDescription.role}
          </li>
          <li class="yearlb">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
            </svg>
            ${projects[position].jobDescription.year}
          </li>
        </ul>
        <button class="popup-close" aria-label="Close popup">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
              fill="#d7c6bc" />
          </svg>
        </button>
      </div>
      <div class="popup-content-wrapper">
        <div class="popup-snapshot">
          <a href="${projects[position].liveUrl}" target="_blank">
            <img src="assets/img/projects/${projects[position].thumbnail.detailed}" alt="${projects[position].name}" />
          </a>
        </div>
        <div class="popup-details-wrapper">
          <div class="popup-description">
            <p>${projects[position].description.detailed}</p>
          </div>
          <div class="popup-technologies">
            <ul class="technologies-used">
              ${projects[position].languages.detailed
                .map((language) => `<li>${language}</li>`)
                .join("")}
            </ul>
            <div class="btn-wrapper">
              <a href="${projects[position].liveUrl}" target="_blank">
                <button type="button" class="btn">
                  See Live
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                      fill="#d7c6bc" />
                  </svg>
                </button>
              </a>
              <a href="${projects[position].sourceCode}" target="_blank">
                <button type="button" class="btn">
                  See Source
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z"
                      fill="#d7c6bc" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  popup.id = "project-popup";
  document.body.appendChild(popup);
  
  // Add overlay to prevent background interaction
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  document.body.appendChild(overlay);
  
  headerWrapper.classList.add("display-none");
  document.body.classList.add("no-scroll");

  // Add event listener to close button
  const closeBtn = popup.querySelector(".popup-close");
  closeBtn.addEventListener("click", closePopup);
  
  // Close when clicking on overlay
  overlay.addEventListener("click", closePopup);
  
  // Close with Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closePopup();
    }
  });

  function closePopup() {
    if (document.getElementById("project-popup")) {
      document.body.removeChild(popup);
      document.body.removeChild(overlay);
      headerWrapper.classList.remove("display-none");
      document.body.classList.remove("no-scroll");
    }
  }
}

// Add event listeners to all project buttons
projectButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.getAttribute("data-index"));
    createPopup(index);
  });
});