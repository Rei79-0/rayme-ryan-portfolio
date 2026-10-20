"use strict";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const projectDetails = {
  website: {
    eyebrow: "Mission 01 / Web experience",
    title: "Responsive Website Revamp",
    body: `<p><strong>Objective:</strong> Improve the usability of an existing website across different screen sizes.</p><ul><li>Revamped the existing website with a mobile-responsive design.</li><li>Worked toward a more modern interface for desktop, tablet, and mobile users.</li></ul><p><strong>Focus areas:</strong> responsive layout, interface usability, and cross-device presentation.</p>`
  },
  testing: {
    eyebrow: "Mission 02 / Quality assurance",
    title: "Functional & Regression Testing",
    body: `<p><strong>Objective:</strong> Check that application behaviour matches expected outcomes and that changes do not break existing functionality.</p><ul><li>Performed manual functional, regression, smoke, negative, and user acceptance testing.</li><li>Created and maintained test cases, bug reports, and QA documentation.</li><li>Reproduced reported issues and retested fixes.</li></ul><p><strong>Focus areas:</strong> reproducible findings, test coverage, and clear reporting.</p>`
  },
  security: {
    eyebrow: "Mission 03 / Security checks",
    title: "Authentication & Session Review",
    body: `<p><strong>Objective:</strong> Conduct basic security checks around authentication and session handling.</p><ul><li>Tested Google OAuth authentication and session management workflows.</li><li>Reviewed JWT handling and browser storage behaviour.</li><li>Used Chrome Developer Tools to inspect Network, Local Storage, Session Storage, and Cookies.</li></ul><p>This describes basic QA checks, not a claim of a formal penetration test or security certification.</p>`
  },
  reports: {
    eyebrow: "Mission 04 / Reporting",
    title: "Client Forms & Reports",
    body: `<p><strong>Objective:</strong> Support business workflows with generated client-facing documents.</p><ul><li>Created client forms, reports, and contractual documents using iReport (JasperReports).</li></ul><p><strong>Focus areas:</strong> document generation, report structure, and practical technical support.</p>`
  },
  pertekma: {
    eyebrow: "Mission 05 / Student community",
    title: "PERTEKMA Student Communication",
    body: `<p><strong>Role:</strong> Exco Programme, Persatuan Teknologi Maklumat (PERTEKMA).</p><ul><li>Disseminated official university and faculty announcements to Multimedia Computing students.</li><li>Assisted with academic and administrative inquiries.</li><li>Supported communication between students and faculty.</li></ul><p><strong>Focus areas:</strong> communication, coordination, student support, and responsibility.</p>`
  },
  documentation: {
    eyebrow: "Mission 06 / QA process",
    title: "QA Documentation & Retesting",
    body: `<p><strong>Objective:</strong> Make reported issues easier to understand, reproduce, and verify.</p><ul><li>Created and maintained QA documentation and bug reports.</li><li>Investigated browser behaviour with Chrome Developer Tools.</li><li>Reproduced reported issues and performed regression testing after fixes.</li></ul><p><strong>Focus areas:</strong> clear evidence, repeatable steps, and follow-through.</p>`
  }
};

let lastFocusedElement = null;
const modal = $("#projectModal");
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
}
function openProject(key) {
  const project = projectDetails[key];
  if (!project) { showToast("Mission details are unavailable."); return; }
  lastFocusedElement = document.activeElement;
  $("#modalEyebrow").textContent = project.eyebrow;
  $("#modalTitle").textContent = project.title;
  $("#modalBody").innerHTML = project.body;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}
function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}
$$("[data-project]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
$("#modalClose").addEventListener("click", closeProject);
modal.addEventListener("click", event => { if (event.target === modal) closeProject(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeProject();
  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = $$("button, a, input, textarea", modal).filter(el => !el.disabled);
    if (!focusable.length) return;
    if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable[focusable.length - 1].focus(); }
    else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) { event.preventDefault(); focusable[0].focus(); }
  }
});

$$(".filter-btn").forEach(button => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  $$(".filter-btn").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  $$(".project-card").forEach(card => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
}));

const navToggle = $("#menuToggle");
const navlinks = $("#navlinks");
navToggle.addEventListener("click", () => {
  const isOpen = navlinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  navToggle.textContent = isOpen ? "✕" : "☰";
});
$$(".navlinks a").forEach(link => link.addEventListener("click", () => {
  navlinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation menu");
  navToggle.textContent = "☰";
}));

const themeToggle = $("#themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  showToast(isLight ? "Light theme enabled." : "Dark theme enabled.");
});

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
    showToast(copied ? "Email address copied." : "Copy failed — use the email link.");
  }
});

$("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = $("#senderName").value.trim();
  const email = $("#senderEmail").value.trim();
  const message = $("#senderMessage").value.trim();
  if (!name || !email || !message) { $("#formNote").textContent = "Please complete all fields."; return; }
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  $("#formNote").textContent = "Opening your email app with the message prepared…";
  window.location.href = `mailto:raymeryan98@gmail.com?subject=${subject}&body=${body}`;
});

const roleText = ["Quality Assurance", "Web Development", "Usability & Testing", "Always Learning"];
let roleIndex = 0;
const roleElement = $("#typedRole");
window.setInterval(() => {
  roleIndex = (roleIndex + 1) % roleText.length;
  roleElement.textContent = roleText[roleIndex];
}, 2600);

const progress = $("#scrollProgress");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
$$(".reveal").forEach(element => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("visible");
});

const sectionObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$(".navlinks a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-30% 0px -60% 0px" }) : null;
$$("main section[id]").forEach(section => { if (sectionObserver) sectionObserver.observe(section); });

$("#year").textContent = new Date().getFullYear();
