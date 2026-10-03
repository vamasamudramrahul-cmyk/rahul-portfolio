/* =========================================================
   Rahul Portfolio — Interaction script
   Responsibilities: theme, expanding menu panel, active
   section, work-item reveal, keyboard support.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Theme ---------- */
  var root = document.documentElement;
  var themeToggles = document.querySelectorAll("[data-theme-toggle]");
  var THEME_KEY = "rahul-portfolio-theme";

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function storeTheme(value) {
    try { localStorage.setItem(THEME_KEY, value); } catch (e) { /* storage unavailable */ }
  }
  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    themeToggles.forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.textContent = theme === "dark" ? "Light" : "Dark";
    });
  }

  var storedTheme = getStoredTheme();
  var initialTheme = storedTheme || "dark";
  applyTheme(initialTheme);

  themeToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
    });
  });

  /* ---------- Menu panel (expanding button) ---------- */
  var menuToggle = document.getElementById("menu-toggle");
  var menuClose = document.getElementById("menu-close");
  var menuPanel = document.getElementById("menu-panel");
  var inertTargets = document.querySelectorAll("main, footer");

  function openMenu() {
    if (!menuPanel) return;
    menuPanel.classList.add("is-open");
    menuPanel.setAttribute("aria-hidden", "false");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-is-open");
    inertTargets.forEach(function (el) { el.setAttribute("inert", ""); });
    var firstLink = menuPanel.querySelector(".menu-nav a");
    if (firstLink) firstLink.focus();
  }
  function closeMenu(returnFocus) {
    if (!menuPanel) return;
    menuPanel.classList.remove("is-open");
    menuPanel.setAttribute("aria-hidden", "true");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-is-open");
    inertTargets.forEach(function (el) { el.removeAttribute("inert"); });
    if (returnFocus && menuToggle) menuToggle.focus();
  }

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener("click", openMenu);
    if (menuClose) menuClose.addEventListener("click", function () { closeMenu(true); });

    menuPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { closeMenu(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menuPanel.classList.contains("is-open")) closeMenu(true);
    });

    document.addEventListener("click", function (e) {
      if (!menuPanel.classList.contains("is-open")) return;
      var clickedInsidePanel = menuPanel.contains(e.target);
      var clickedToggle = menuToggle.contains(e.target);
      if (!clickedInsidePanel && !clickedToggle) closeMenu(false);
    });
  }

  /* ---------- Active section detection ---------- */
  var sections = document.querySelectorAll("main .section[id]");
  var navLinks = document.querySelectorAll(".menu-nav a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              var isMatch = link.getAttribute("href") === "#" + id;
              link.classList.toggle("is-active", isMatch);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Work section: editorial reveal ---------- */
  var workItems = document.querySelectorAll(".work-item");

  workItems.forEach(function (item) {
    var trigger = item.querySelector(".work-item-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // Close any other open item for a focused, single-open interaction.
      workItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          var otherTrigger = other.querySelector(".work-item-trigger");
          if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });
  });
})();
