
"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const projectDetails = {
  blender: {
    number: "Project 01",
    category: "3D modelling & animation",
    title: "Blender 3D Model Animation",
    sections: [
      {
        heading: "Overview",
        content: "This project involves modelling a 3D sword and building the environment in Blender for an animated scene. A third-party character model is integrated into the scene to interact with the sword; the character model was not independently created for this project."
      },
      {
        heading: "Objective",
        content: "Create a sword model and its surrounding scenery for an animation featuring an integrated character."
      },
      {
        heading: "Development process",
        content: [
          "Create and modify the sword model.",
          "Develop the environment and scenery where the animation takes place.",
          "Set up materials and lighting, compose the scene, and implement the animation."
        ]
      },
      {
        heading: "Techniques",
        content: [
          "Basic 3D modelling and object development.",
          "Environment creation, material and lighting setup, scene composition, and animation."
        ]
      },
      {
        heading: "Final outcome",
        content: "The screenshots present the sword and environment development alongside the final animation."
      }
    ],
    technologies: "Blender",
    images: [
      {
        src: "assets/images/projects/blender1.png",
        filename: "blender1.png",
        width: 1677,
        height: 941,
        label: "Development and modelling process",
        alt: "Blender 3D model during development"
      },
      {
        src: "assets/images/projects/blender2.png",
        filename: "blender2.png",
        width: 760,
        height: 920,
        label: "Final animation",
        alt: "Final animation output from the Blender project"
      }
    ]
  },
  auction: {
    number: "Project 02",
    category: "Database",
    title: "Sarawak Heritage Online Auction Database",
    sections: [
      {
        heading: "Overview",
        content: "An online auction system centred on Sarawak heritage, with a PHP web application providing the interface to information stored in a locally managed database."
      },
      {
        heading: "Objective",
        content: "Provide a web interface for viewing and interacting with auction-related information in the database."
      },
      {
        heading: "System architecture",
        content: [
          "XAMPP provides the local development environment.",
          "phpMyAdmin is used to administer and interact with the database; it is not the database engine.",
          "The database stores auction information.",
          "The PHP web application presents the information and lets users interact with and manipulate stored data through its functionality."
        ]
      },
      {
        heading: "Key functionality",
        content: "The supplied buyer-panel screenshot shows auction listings, starting prices, current top bids, and bid-entry controls."
      },
      {
        heading: "Final outcome",
        content: "The PHP interface connects users to auction information in the locally managed database."
      }
    ],
    technologies: "PHP, XAMPP, phpMyAdmin",
    images: [
      {
        src: "assets/images/projects/auction.png",
        filename: "auction.png",
        width: 1917,
        height: 970,
        label: "Auction database",
        alt: "Sarawak Heritage Online Auction Database project screenshot"
      }
    ]
  },
  edu: {
    number: "Project 03",
    category: "Java development",
    title: "Edu Reform Hub",
    subtitle: "Java Quiz Platform",
    sections: [
      {
        heading: "Overview",
        content: "Edu Reform Hub is a Java question-and-answer application that combines educational learning materials with multiple-choice quiz assessment."
      },
      {
        heading: "Objective",
        content: "Create an interactive learning environment that combines reading material, assessment, and gamification."
      },
      {
        heading: "Key features",
        content: [
          "A textbook-style learning module for reading before attempting the quiz.",
          "A multiple-choice question-and-answer quiz.",
          "A timer that tracks quiz completion time.",
          "High-score information and a leaderboard.",
          "Achievements designed to encourage quiz completion and improvement."
        ]
      },
      {
        heading: "Final outcome",
        content: "The application brings learning content and interactive quiz assessment together with leaderboard and achievement features."
      }
    ],
    technologies: "Java",
    images: [
      {
        src: "assets/images/projects/edu.png",
        filename: "edu.png",
        width: 430,
        height: 385,
        label: "Quiz platform",
        alt: "Edu Reform Hub Java quiz platform screenshot"
      }
    ]
  },
  "urban-safety": {
    number: "Project 04",
    category: "Game development",
    title: "Urban Safety Defender",
    subtitle: "C++ Computer Graphics Game",
    sections: [
      {
        heading: "Overview",
        content: "Urban Safety Defender is a C++ computer graphics game inspired by the Space Invaders gameplay concept. The player controls a tank that shoots incoming enemies."
      },
      {
        heading: "Objective",
        content: "Control the tank and shoot at incoming enemies."
      },
      {
        heading: "Gameplay",
        content: [
          "Use the arrow keys to move and Space to shoot.",
          "Press P to pause or Esc to quit."
        ]
      },
      {
        heading: "Computer graphics techniques",
        content: [
          "Graphics and shapes.",
          "Transformation.",
          "Viewing and projection.",
          "Rasterisation.",
          "Clipping.",
          "Colour, lighting, shading, and illumination."
        ]
      },
      {
        heading: "Final outcome",
        content: "The game applies computer graphics concepts to an interactive tank-and-enemy environment."
      }
    ],
    technologies: "C++",
    images: [
      {
        src: "assets/images/projects/game.jpeg",
        filename: "game.jpeg",
        width: 797,
        height: 598,
        label: "Game screenshot",
        alt: "Urban Safety Defender computer graphics game screenshot"
      }
    ]
  },
  "team-collab": {
    number: "Project 05",
    category: "Python development",
    title: "Team Collab Management System",
    sections: [
      {
        heading: "Overview",
        content: "A Python application for communication, task submission, and collaboration between team leaders, students, and lecturers."
      },
      {
        heading: "Objective",
        content: "Provide a centralised workflow for group activities, announcements, submissions, and academic feedback."
      },
      {
        heading: "User roles and features",
        content: [
          "Team leaders can register, create groups, manage group activities, send announcements, request submissions, and track team work.",
          "Students can register, access their team dashboard, upload work, view announcements, receive feedback, and submit final work for assessment.",
          "Lecturers can register, review submitted work, provide marks, and give feedback."
        ]
      },
      {
        heading: "Final outcome",
        content: "The application provides role-specific workflows for managing team collaboration and academic submissions."
      }
    ],
    technologies: "Python",
    images: [
      {
        src: "assets/images/projects/teamcollab1-sanitized.png",
        filename: "teamcollab1-sanitized.png",
        width: 676,
        height: 440,
        label: "Main menu",
        alt: "Team Collab Management System main menu with registration details redacted"
      },
      {
        src: "assets/images/projects/teamcollab2-sanitized.png",
        filename: "teamcollab2-sanitized.png",
        width: 966,
        height: 810,
        label: "Dashboard",
        alt: "Team Collab Management System team leader menu with a personal name redacted"
      }
    ]
  }
};

let lastFocusedElement = null;
let galleryFocusElement = null;
let previousBodyOverflow = "";
let previousDocumentOverflow = "";
let previousBodyPosition = "";
let previousBodyTop = "";
let previousBodyLeft = "";
let previousBodyRight = "";
let previousBodyWidth = "";
let lockedScrollY = 0;
const modal = $("#projectModal");
const modalCard = $(".modal-card", modal);
const imageViewer = $("#imageViewer");
const imageViewerClose = $("#imageViewerClose");
const imageViewerImage = $("#imageViewerImage");

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timeout);

  showToast.timeout = window.setTimeout(
    () => toast.classList.remove("show"),
    2400
  );
}

function openProject(key) {
  const project = projectDetails[key];

  if (!project) {
    showToast("Project details are unavailable.");
    return;
  }

  lastFocusedElement = document.activeElement;
  previousBodyOverflow = document.body.style.overflow;
  previousDocumentOverflow = document.documentElement.style.overflow;
  previousBodyPosition = document.body.style.position;
  previousBodyTop = document.body.style.top;
  previousBodyLeft = document.body.style.left;
  previousBodyRight = document.body.style.right;
  previousBodyWidth = document.body.style.width;
  lockedScrollY = window.scrollY;

  $("#modalEyebrow").textContent = `${project.number} / ${project.category}`;
  $("#modalTitle").textContent = project.title;
  const modalBody = $("#modalBody");
  modalBody.replaceChildren();

  if (project.subtitle) {
    const subtitle = document.createElement("p");
    subtitle.className = "project-modal-subtitle";
    subtitle.textContent = project.subtitle;
    modalBody.appendChild(subtitle);
  }

  let technologiesAdded = false;
  project.sections.forEach(section => {
    if (section.heading === "Final outcome" && project.technologies) {
      appendProjectSection(modalBody, "Technologies", project.technologies);
      technologiesAdded = true;
    }

    appendProjectSection(modalBody, section.heading, section.content);
  });
  if (project.technologies && !technologiesAdded) {
    appendProjectSection(modalBody, "Technologies", project.technologies);
  }
  modalBody.appendChild(createProjectGallery(project));

  imageViewer.hidden = true;
  imageViewer.setAttribute("aria-hidden", "true");
  modalCard.inert = false;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.documentElement.style.overflow = "hidden";

  $("#modalClose").focus();
}

function closeProject() {
  if (!modal.classList.contains("open")) return;

  closeImageViewer(false);

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = previousBodyOverflow;
  document.body.style.position = previousBodyPosition;
  document.body.style.top = previousBodyTop;
  document.body.style.left = previousBodyLeft;
  document.body.style.right = previousBodyRight;
  document.body.style.width = previousBodyWidth;
  document.documentElement.style.overflow = previousDocumentOverflow;

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
  const scrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, lockedScrollY);
  document.documentElement.style.scrollBehavior = scrollBehavior;
}

function openImageViewer(image, trigger) {
  galleryFocusElement = trigger;
  imageViewerImage.src = image.src;
  imageViewerImage.alt = image.alt;
  imageViewer.hidden = false;
  imageViewer.setAttribute("aria-hidden", "false");
  modalCard.inert = true;
  imageViewerClose.focus();
}

function closeImageViewer(restoreFocus = true) {
  if (imageViewer.hidden) return;

  imageViewer.hidden = true;
  imageViewer.setAttribute("aria-hidden", "true");
  imageViewerImage.removeAttribute("src");
  modalCard.inert = false;

  if (restoreFocus && galleryFocusElement) {
    galleryFocusElement.focus();
  }
}

function appendProjectSection(parent, headingText, content) {
  const section = document.createElement("section");
  section.className = "project-detail-section";

  const heading = document.createElement("h3");
  heading.textContent = headingText;
  section.appendChild(heading);

  if (Array.isArray(content)) {
    const list = document.createElement("ul");
    content.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });
    section.appendChild(list);
  } else {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    section.appendChild(paragraph);
  }

  parent.appendChild(section);
}

function showImageFallback(image, filename) {
  image.hidden = true;
  const fallback = image.parentElement.querySelector(".screenshot-missing");
  if (fallback) fallback.hidden = false;

  const imageButton = image.closest(".gallery-image-button");
  if (imageButton) {
    imageButton.disabled = true;
    imageButton.setAttribute("aria-label", `Screenshot unavailable: ${filename}`);
  }
}

function createProjectGallery(project) {
  const gallery = document.createElement("section");
  gallery.className = "project-gallery";
  gallery.setAttribute("aria-label", `${project.title} screenshots`);

  const galleryHeader = document.createElement("div");
  galleryHeader.className = "gallery-header";

  const imageLabel = document.createElement("p");
  imageLabel.className = "gallery-label";
  imageLabel.setAttribute("aria-live", "polite");
  galleryHeader.appendChild(imageLabel);

  const controls = document.createElement("div");
  controls.className = "gallery-controls";

  const imageButton = document.createElement("button");
  imageButton.type = "button";
  imageButton.className = "gallery-image-button";
  imageButton.setAttribute("aria-controls", "imageViewer");

  const image = document.createElement("img");
  image.loading = "eager";
  imageButton.appendChild(image);

  const fallback = document.createElement("span");
  fallback.className = "screenshot-missing";
  fallback.hidden = true;
  imageButton.appendChild(fallback);

  const indicators = document.createElement("div");
  indicators.className = "gallery-indicators";
  indicators.setAttribute("role", "group");
  indicators.setAttribute("aria-label", "Choose a project screenshot");

  let activeImageIndex = 0;
  const indicatorButtons = project.images.map((item, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.className = "gallery-indicator";
    indicator.setAttribute("aria-label", `Show screenshot ${index + 1}: ${item.label}`);
    indicator.addEventListener("click", () => setActiveImage(index));
    indicators.appendChild(indicator);
    return indicator;
  });

  function setActiveImage(index) {
    activeImageIndex = (index + project.images.length) % project.images.length;
    const currentImage = project.images[activeImageIndex];

    image.hidden = false;
    fallback.hidden = true;
    imageButton.disabled = false;
    image.width = currentImage.width;
    image.height = currentImage.height;
    image.src = currentImage.src;
    image.alt = currentImage.alt;
    imageLabel.textContent =
      `Screenshot ${activeImageIndex + 1} of ${project.images.length} · ${currentImage.label}`;
    fallback.replaceChildren(
      document.createTextNode("Screenshot not supplied"),
      document.createElement("br")
    );
    const filename = document.createElement("small");
    filename.textContent = currentImage.filename;
    fallback.appendChild(filename);
    imageButton.setAttribute("aria-label", `Open enlarged screenshot: ${currentImage.label}`);

    indicatorButtons.forEach((indicator, indicatorIndex) => {
      indicator.setAttribute("aria-pressed", String(indicatorIndex === activeImageIndex));
    });

    if (image.complete && image.naturalWidth === 0) {
      showImageFallback(image, currentImage.filename);
    }
  }

  image.addEventListener("error", () => {
    showImageFallback(image, project.images[activeImageIndex].filename);
  });

  imageButton.addEventListener("click", () => {
    openImageViewer(image, imageButton);
  });

  if (project.images.length > 1) {
    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.className = "gallery-nav";
    previousButton.textContent = "←";
    previousButton.setAttribute("aria-label", "Previous screenshot");
    previousButton.addEventListener("click", () => {
      setActiveImage(activeImageIndex - 1);
    });

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "gallery-nav";
    nextButton.textContent = "→";
    nextButton.setAttribute("aria-label", "Next screenshot");
    nextButton.addEventListener("click", () => {
      setActiveImage(activeImageIndex + 1);
    });

    controls.append(previousButton, nextButton);
  }

  galleryHeader.appendChild(controls);
  gallery.append(galleryHeader, imageButton, indicators);
  setActiveImage(0);
  return gallery;
}

$$("[data-project]").forEach(button => {
  button.addEventListener("click", () => {
    openProject(button.dataset.project);
  });
});

$("#modalClose").addEventListener("click", closeProject);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeProject();
  }

  if (event.target === imageViewer) {
    closeImageViewer();
  }
});

imageViewerClose.addEventListener("click", () => closeImageViewer());

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    if (!imageViewer.hidden) {
      closeImageViewer();
    } else {
      closeProject();
    }
  }

  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = $$(
      "button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])",
      modal
    ).filter(el => !el.disabled && !el.closest("[inert]") && el.getClientRects().length);

    if (!focusable.length) return;

    if (event.shiftKey && document.activeElement === focusable[0]) {
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === focusable[focusable.length - 1]
    ) {
      event.preventDefault();
      focusable[0].focus();
    }
  }
});

// Project filters
$$(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    $$(".filter-btn").forEach(item => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    $$(".project-card").forEach(card => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.hidden = !isVisible;
      card.classList.remove("filter-enter");

      if (isVisible) {
        window.requestAnimationFrame(() => card.classList.add("filter-enter"));
      }
    });
  });
});

$$(".project-media img").forEach(image => {
  image.addEventListener("error", () => {
    showImageFallback(image, image.currentSrc.split("/").pop());
  });

  if (image.complete && image.naturalWidth === 0) {
    showImageFallback(image, image.src.split("/").pop());
  }
});

// Mobile navigation
const navToggle = $("#menuToggle");
const navlinks = $("#navlinks");

navToggle.addEventListener("click", () => {
  const isOpen = navlinks.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", String(isOpen));

  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  navToggle.textContent = isOpen ? "✕" : "☰";
});

$$(".navlinks a").forEach(link => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("open");

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    navToggle.textContent = "☰";
  });
});

// Theme toggle
const themeToggle = $("#themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );

  showToast(
    isLight ? "Light theme enabled." : "Dark theme enabled."
  );
});

// Copy email address
$("#copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("raymeryan98@gmail.com");

    showToast("Email address copied.");
  } catch (error) {
    const temporary = document.createElement("textarea");

    temporary.value = "raymeryan98@gmail.com";
    temporary.setAttribute("readonly", "");

    temporary.style.position = "absolute";
    temporary.style.left = "-9999px";

    document.body.appendChild(temporary);

    temporary.select();

    const copied = document.execCommand("copy");

    temporary.remove();

    showToast(
      copied
        ? "Email address copied."
        : "Copy failed — please copy the address manually."
    );
  }
});

// Contact Form - Prototype Submission
const contactForm = $("#contactForm");
const formNote = $("#formNote");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    // Prevent actual form submission or external application opening
    event.preventDefault();

    // Validate required fields
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const name = $("#senderName").value.trim();
    const email = $("#senderEmail").value.trim();
    const message = $("#senderMessage").value.trim();

    if (!name || !email || !message) {
      formNote.textContent = "Please complete all fields.";
      return;
    }

    // Simulate successful submission for prototype demonstration
    formNote.textContent =
      "Message submitted successfully! (Prototype demonstration only — no email was sent.)";

    // Clear the form after simulated submission
    contactForm.reset();

    // Display confirmation toast
    showToast("Message submitted successfully!");
  });
}

// Rotating role text
const roleText = [
  "Quality Assurance",
  "Web Development",
  "Usability & Testing",
  "Always Learning"
];

let roleIndex = 0;

const roleElement = $("#typedRole");

window.setInterval(() => {
  roleIndex = (roleIndex + 1) % roleText.length;

  roleElement.textContent = roleText[roleIndex];
}, 2600);

// Scroll progress indicator
const progress = $("#scrollProgress");

function updateProgress() {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  progress.style.width =
    `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}

window.addEventListener("scroll", updateProgress, {
  passive: true
});

window.addEventListener("resize", updateProgress);

updateProgress();

// Scroll reveal animations
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

$$(".reveal").forEach(element => {
  if (revealObserver) {
    revealObserver.observe(element);
  } else {
    element.classList.add("visible");
  }
});

// Active navigation section tracking
const sectionObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        $$(".navlinks a").forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, { rootMargin: "-30% 0px -60% 0px" })
  : null;

$$("main section[id]").forEach(section => {
  if (sectionObserver) {
    sectionObserver.observe(section);
  }
});

// Automatically update footer year
$("#year").textContent = new Date().getFullYear();
